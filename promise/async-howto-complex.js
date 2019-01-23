function timeout(ms, args) {
    return new Promise((resolve) => setTimeout(() => resolve.apply(this, args), ms));
}

function timeConsumingTask() {
    return timeout(1000, [10]);
}

async function hello() {
    let r = await timeConsumingTask();
    console.log("Get result ", r, "from timeConsumingTask.");
    return r;
}

resolved = false;
hello().then((r) => console.log(r)).catch((e) => console.log(e));

let hello1 = () => new Promise((resolve, reject) => {
    try {
        timeConsumingTask().then((v) => {
            console.log("Hello1 get result ", v, "from timeConsumingTask.");
            resolve(v);
        });
    } catch (e) {
        reject(e);
    }
});

resolved = false;
hello1().then((r) => console.log(r)).catch((e) => console.log(e));