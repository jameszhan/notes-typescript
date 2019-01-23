var expect = require('chai').expect,
    assert = require('chai').assert;

let s1 = new Promise((resolve, reject) => {
    resolve('success')
});
let s2 = Promise.resolve('success2');
let s3 = Promise.resolve('success3');

ps = Promise.all([s2, s3, s1]).then((results) => {
    expect(results[0]).to.equal('success2');
    expect(results[1]).to.equal('success3');
    expect(results[2]).to.equal('success');
}).catch((e) => assert.fail(e));

let f1 = new Promise((resolve, reject) => {
    reject('failure')
});
let f2 = Promise.reject('failure2');
let f3 = Promise.reject('failure3');

Promise.all([s2, s3, s1, f2, f3, f1]).then((results) => {
    assert.fail("never happened!");
}).catch((e) => {
    expect(e).to.equal('failure2');
});