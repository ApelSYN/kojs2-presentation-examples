const fs = require('fs');

function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', function (err, res) {
        if (err) return callback(err);
        try {
            res = JSON.parse(res);
            callback(null, res);
        } catch (ex) {
            callback(ex);
        }
    })
}

//...
readJSON('my.json', function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
})
