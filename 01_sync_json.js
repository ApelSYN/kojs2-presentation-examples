const fs = require('fs');
function readJSONSync(filename) {
    return JSON.parse(fs.readFileSync(filename,'utf8'))
}
//...
try {
    console.log(readJSONSync('my.json'));
} catch (e) {
    console.log(e);
}