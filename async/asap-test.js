let asap = require('asap');

asap(function() {
    console.log("Hello World!");
});

let i = 0;

function next() {
    console.log("next...");
    i++;
    if (i < 1000000) {
        asap(next);
    }
}

next();


console.log('hahaha...');