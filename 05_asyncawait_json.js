import fs from 'fs'

function readJSON(filename) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filename, 'utf8', function (err, res) {
			if (err) reject(err);
			try {
				res = JSON.parse(res);
				resolve(res)
			} catch (e) {
				reject(e)
			}
		})
	})
}

//...
(async() => {
	try {
		console.log(await readJSON('my.json'))
	} catch (e) {
		console.log(e)
	}
})();

//(async() => {
//      console.log(await readJSON('my.json'))
//})().catch (function(e) {
//      console.log(e)
//});
