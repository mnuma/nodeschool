var fs = require('fs')

var linenum = fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1

console.log(linenum);
