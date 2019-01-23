var PouchDB = require('pouchdb-node');

let db = new PouchDB('test.db');

function create(params) {
    let result = db.post(params);
    console.log("Result type is ", result.constructor);
    return result;
}

// async function create(toBeCreated) {
//     let result = await db.post(toBeCreated);
//     return result.id;
// }
//
// async function show(id) {
//     let doc = await db.get(id);
//     return doc;
// }

let id = create({title: "hello", content: "world"});

console.log("Create doc success and get ", id);


