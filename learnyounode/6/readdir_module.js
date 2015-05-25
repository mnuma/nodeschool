var fs = require('fs')
var result = new Array();

readdirm = function (path, filter, callback) {

  fs.readdir(path, function callback(err, list) {

    if (err) {
      return callback(err)
    }


    console.log(list);

    // for (i=0; i<list.length; i++) {
    //   if (list[i].indexOf(filter) > 0) {
    //     result.push(list[i])
    //   }
    // }


    callback(null, list)
  })
}

module.exports = readdirm
