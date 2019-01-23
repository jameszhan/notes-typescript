# README

## Install PouchDB

```bash
source activate python2 

# 安装过程依赖Python 2
npm install -g pouchdb-node

source deactivate python2

npm install --global chai
npm install --save-dev chai
```

## 深入探析 async

```javascript
function timeConsumingTask() {
    // ...
}
```

```javascript
async function hello() {
    let r = await timeConsumingTask();
    console.log("Get result ", r, "from timeConsumingTask.");
    return r;
}
```

等价于

```javascript
let hello = new Promise((resolve, reject) => {
    try {
        let r = timeConsumingTask();
        console.log("Get result ", r, "from timeConsumingTask.");
        resolve(r);  
    } catch (e) {
        reject(e);
    }
});
```