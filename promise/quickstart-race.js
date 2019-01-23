var expect = require('chai').expect,
    assert = require('chai').assert;

let s1 = new Promise((resolve, reject) => {
    resolve('success')
});
let s2 = Promise.resolve('success2');
let s3 = Promise.resolve('success3');

Promise.race([s2, s3, s1]).then((result) => {
    expect(result).to.equal('success2');
}).catch((e) => assert.fail(e));

let f1 = new Promise((resolve, reject) => {
    reject('failure')
});
let f2 = Promise.reject('failure2');
let f3 = Promise.reject('failure3');

Promise.race([s2, s3, s1, f2, f3, f1]).then((result) => {
    expect(result).to.equal('success2');
}).catch((e) => {
    assert.fail(e);
});

Promise.race([f2, f3, f1, s2, s3, s1]).then((result) => {
    assert.fail("never happened!");
}).catch((e) => {
    expect(e).to.equal('failure2');
});