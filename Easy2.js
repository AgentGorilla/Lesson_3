const words =['Brimstone', 'Astra', 'Yoru', 'Jett'];

const filterWords = words.filter(word => word.length > 5)

console.log(filterWords)


function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, '130', 44, '10'].filter(isBigEnough)

console.log(filtered)

//find prime number

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1
}

console.log(array.filter(isPrime))