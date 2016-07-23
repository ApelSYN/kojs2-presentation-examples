const fs = require('fs'),
      co = require('co');

function readJSON(filename) {
    return function(fn) {
	fs.readFile(filename,'utf8', function (err, res) {
	    if (err) fn(err);
	    try {
		res = JSON.parse(res);
		fn(null,res);
	    } catch (e) {
		fn(e);
	    }
        })
    }
}

//...
co(function *(){
  console.log(yield readJSON('my.json'));
}).catch(function(err) {
   console.log(err);
});


