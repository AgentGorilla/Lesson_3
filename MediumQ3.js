function factors(number) {
  let divisor = number;
  let factors = [];
while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(number / divisor)
  }
  divisor -=1
}
}

factors(100)
