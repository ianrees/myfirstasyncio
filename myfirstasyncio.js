var fs = require ('fs');

var filetoread = process.argv[2];

myfirstasync = function (err, data) {

    console.log(data.toString().split("\n").length-1);
}

fs.readFile(filetoread, myfirstasync);