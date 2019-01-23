function listMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter((p) => typeof obj[p] === 'function');
}

function showPromiseInfo(p) {
    let typeFunc = p.constructor;
    console.log("Type is ", typeFunc.name);
    console.log("Promise static method is ", listMethods(typeFunc));
    console.log("Promise instance method is ", listMethods(typeFunc.prototype));
}

function handle(p) {
    // showPromiseInfo(p);
    return p1.then(() => console.log("then", arguments))
        .catch(() => console.log("catch: ", arguments))
        .finally(() => console.log("finally: ", arguments));
}

new Promise((resolve, reject) => {
    console.log(arguments);
    console.log("---------------------");
    console.log(resolve);
    console.log(reject);
});

// let p1 = Promise.resolve('p1 resolved');
// let p2 = Promise.reject("p2 rejected");

// handle(p1);
// handle(p2);

// async function p1() {
//     return "p1";
// }
//
// async function p2() {
//     return Promise.reject('p1 resolved');
// }

// handle(p1());

//handle(p2());



// let p1 = hello();
// showPromiseInfo(p1);
//
// let p2 = new Promise((resolve, reject) => {
//
// });
// showPromiseInfo(p2);
//
// p1.then((r) => console.log(r)).catch();



// async function find(id) {
//     return await "test";
// }
//
// let result = find(1);
// console.log("Result type is ", result.constructor);
// result.then(function(value) {
//    console.log("result is ", value);
// });