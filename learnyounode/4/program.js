var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function callback(err, contexts) {
  console.log(contexts.split('\n').length-1);
})
