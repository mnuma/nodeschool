var fs = require('fs')

var path = process.argv[2]
var filter = "." + process.argv[3]

fs.readdir(path, function callback(err, contexts) {
  for (i=0; i<contexts.length; i++) {
    if (contexts[i].indexOf(filter) > -1) {
      console.log(contexts[i]);
    }
  }
})
