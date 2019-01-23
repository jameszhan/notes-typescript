function timeout(ms, args, isRejected) {
    return new Promise((resolve, reject) => {
        if (isRejected) {
            setTimeout(() => reject.apply(this, args), ms);
        } else {
            setTimeout(() => resolve.apply(this, args), ms);
        }
    });
}

let gen = function*() {
    for (let i = 0; i < 5; i++) {
        yield i;
    }
};

let g = gen();
for (let value of g) {
    console.log(value);
}

let gen2 = async() => {
    let v = 0;
    for (let i = 0; i < 10; i++) {
        v += await i;
    }
    return v;
};

gen2().then(function(v) {
    console.log(v);
});