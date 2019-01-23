function noop() {}

function Promise(fn) {
    if (typeof this !== 'object') {
        throw new TypeError('Promises must be constructed via new');
    }
    if (typeof fn !== 'function') {
        throw new TypeError('Promise constructor\'s argument is not a function');
    }
    this._deferredState = 0;
    this._state = 0;
    this._value = null;
    this._deferreds = null;
    if (fn === noop) {
        return;
    }

    let done = false,
        last_error = ex;
    try {
        fn((value) => {
            if (done) {
                return;
            }
            done = true;
            resolve(this, value);
        }, (reason) => {
            if (done) {
                return;
            }
            done = true;
            reject(this, reason);
        });
    } catch (ex) {
        reject(this, ex);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    if (this.constructor !== Promise) {
        return safeThen(this, onFulfilled, onRejected);
    }
    var res = new Promise(noop);
    handle(this, new Handler(onFulfilled, onRejected, res));
    return res;
};

function safeThen(self, onFulfilled, onRejected) {
    return new self.constructor(function(resolve, reject) {
        var res = new Promise(noop);
        res.then(resolve, reject);
        handle(self, new Handler(onFulfilled, onRejected, res));
    });
}

function handle(self, deferred) {
    while (self._state === 3) {
        self = self._value;
    }
    if (self._state === 0) {
        if (self._deferredState === 0) {
            self._deferredState = 1;
            self._deferreds = deferred;
            return;
        }
        if (self._deferredState === 1) {
            self._deferredState = 2;
            self._deferreds = [self._deferreds, deferred];
            return;
        }
        self._deferreds.push(deferred);
        return;
    }
    handleResolved(self, deferred);
}