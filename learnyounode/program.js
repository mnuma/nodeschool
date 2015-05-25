limit = process.argv.length
sum = 0

for (i=2; i < limit; i++) {
  console.log(Number(process.argv[i])
  sum = sum + Number(process.argv[i])
}


console.log(sum);
