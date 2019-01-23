function timeout(duration) {
    let args = [].slice.call(arguments, 1),
        _this = this;
    return new Promise((resolve, reject) => {
        let v = args[0];
        if (v instanceof Error) {
            setTimeout(() => resolve.apply(_this, args), duration);
        } else {
            setTimeout(() => resolve.apply(_this, args), duration);
        }
    });
}

// timeout(1000).then(console.log);
// timeout(1000, "hello").then(console.log);
// timeout(1000, "a", "b", "c").then((a, b, c) => console.log(a, b, c));

let p = timeout(1000, new Error("abcdefg"));
let p2 = p.then((v) => console.log("=> ", v));
let p3 = p2.catch((v) => console.log("=> ", v));


console.log(p === p2);
console.log(p === p3);

console.log(p, p2, p3);