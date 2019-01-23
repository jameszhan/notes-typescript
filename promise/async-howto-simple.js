let resolved = true;

function timeConsumingTask() {
    if (resolved) {
        return 'hello';
    } else {
        throw 'world';
    }
}

async function hello() {
    let r = await timeConsumingTask();
    console.log("Get result ", r, "from timeConsumingTask.");
    return r;
}

resolved = false;
hello().then((r) => console.log(r)).catch((e) => console.log(e));
resolved = true;
hello().then((r) => console.log(r)).catch((e) => console.log(e));

let hello1 = () => new Promise((resolve, reject) => {
    try {
        let r = timeConsumingTask();
        console.log("Hello1 get result ", r, "from timeConsumingTask.");
        resolve(r);
    } catch (e) {
        reject(e);
    }
});

resolved = false;
hello1().then((r) => console.log(r)).catch((e) => console.log(e));
resolved = true;
hello1().then((r) => console.log(r)).catch((e) => console.log(e));