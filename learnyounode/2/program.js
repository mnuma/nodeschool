limit = process.argv.length
var sum = 0
for (i=2; i < limit; i++) {
  sum = sum + Number(process.argv[i])
}

console.log(sum);
