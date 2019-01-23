var fs = require('fs');

const readFile = (filename, encoding) => new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
        return err ? reject(err) : resolve(data);
    });
});

readFile(__filename, 'utf-8').then(console.log).catch(console.error);

readFile(__filename, 'utf-8').then((data) => {
    console.log(data);
    throw new Error("quick failure!");
}).catch(console.error);