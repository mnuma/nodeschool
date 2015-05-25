// run example: node ./program.js "dirname" "txt"
var readdir_module = require('./readdir_module.js')

var path = process.argv[2]
var filter = "." + process.argv[3]

readdir_module(path, filter, function (err, list) {
  console.log(err);
  console.log(list);
})
