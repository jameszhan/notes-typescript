// var promise = new Promise(function(resolve, reject) {
//     if (/* 异步操作成功 */){
//       resolve(value);
//     } else {
//       reject(error);
//     }
// });

function timeout(ms, args, isRejected) {
    return new Promise((resolve, reject) => {
        if (isRejected) {
            setTimeout(() => reject.apply(this, args), ms);
        } else {
            setTimeout(() => {
                console.log("Start to resolve ", args);
                resolve.apply(this, args);
                console.log("End to resolve ", args);
            }, ms);
        }
    });
}

timeout(100, ['success'], false).then((r) => console.log(r));
timeout(100, ['failure'], true).then((s) => console.log(s), (f) => console.log(f));

async function add(v) {
    let total = v;
    console.log("Begin async to get toBeAdded.");
    let toBeAdded = await timeout(100, [10], false);
    console.log("Async get toBeAdded ", toBeAdded);
    total += toBeAdded;
    return total;
}

console.log("Start to add(10)");
p = add(10);
console.log("Register resolve to add(10)");
p.then((v) => console.log("total is ", v));
console.log("End to add(10)");

async function thrice() {
    let v = 0;
    for (let i = 0; i < 3; i++) {
        v += await timeout(100, [10], false);
    }
    return v;
}

thrice().then((v) => console.log("thrice is ", v));