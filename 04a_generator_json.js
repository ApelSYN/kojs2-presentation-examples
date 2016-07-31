const fs = require('fs'),
    co = require('co');

function readJSON(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, res) {
            if (err) reject(err);
            try {
                res = JSON.parse(res);
                resolve(res);
            } catch (e) {
                reject(e);
            }
        })
    })
}

//...
co(function *() {
    console.log(
        yield {
            'myObj': readJSON('my.json'),
            'my2Obj': readJSON('my2.json')
        }
    );
}).catch(function (err) {
    console.log(err);
});
