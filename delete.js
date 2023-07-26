//Example 1
// let myVar = [1]

// function myFunc() {
//   myVar = 1 + 2
// }

// myFunc()
// console.log(myVar)



//Example 3
// let myVar = [1];

// function myFunc() {
//   myVar[0] = 'hello';
// }

// myFunc();
// console.log(myVar)

//Example 4

// let myVar = 1

// function myFunc(myVar) {
//   myVar = 2;
// }

// myFunc()
// console.log(myVa)


// console.log("A new line in JavaScript is written like this \"\\n\".")

// console.log("con" + "cat" + "e" + "nate")

// console.log( 3 > 2)

// console.log(3 === 2)

// console.log( 'Z' < 'a')

// console.log('z' > 'a')


// let mood = "light";
// console.log(mood)

// mood = "dark"
// console.log(mood)


// let luigisDebt = 140;

// luigisDebt = luigisDebt - 35

// console.log(luigisDebt)

// let one = "G", two = "urp";
// console.log(one + two)

// let theNumber = Number(9)

// if(theNumber < 10) {
//   console.log("Small")
// } else if (theNumber < 100) {
//   console.log("Medium")
// } else {
//   console.log("BIG")
// }


// let number = 0;
// while (number <= 12) {
//   console.log(number)
//   number = number + 2
// }


// for (let line = '#'; line.length < 8; line += '#')
//   console.log(line)

// for (let n = 1; n <=100; n++) {
//   let output = " ";
//   if(n )
// } 

for(let num = 1; num <= 100; num++) {
  let output = "";
  if(num % 3 == 0) output += "Fizz";
  if(num % 5 == 0) output += "Buzz";
  console.log(output || num);
}

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }