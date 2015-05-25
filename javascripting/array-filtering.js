numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

f = function evenNumbers (number) {
  return number % 2 === 0;
}

filtered = numbers.filter(f)

console.log(filtered);
