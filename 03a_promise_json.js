const fs = require('fs');

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
readJSON('my.json')
  .then(function (res) {
        console.log(res);
        return readJSON('my2.json')
}).then(function (res) {
        console.log(res);
}).catch(function (err) {
        console.log(err);
    }
)
