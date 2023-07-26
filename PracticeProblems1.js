// //Question 1

// let numbers = [1, 2, 3];
// numbers [6] = 5
// numbers[4]; // undefined 
// //expected output
// //[1, 2, 3, <3 empty>, 5]

// //Question 2:
// let str1 = "Come over here!";
// let str2 = "What's up doc?"

// console.log(str1.endsWith("!")) //true
// console.log(str2.endsWith("!")) //false

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 402,
//   Eddie: 10
// };

// console.log(ages.hasOwnProperty("Spot"))

// let munsterDescription = "the Munsters are Creepy and Spooky.";

// // console.log(munsterDescription.charAt(0).toUpperCase() + munsterDescription.substring(1).toLowerCase())

// console.log(munsterDescription.repeat(2))

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy")


// console.log(flintstones)

// let advice = "Few things in life are as important as house training your pet."

// console.log(advice.replace("important", "urgent"))



// let numbers = [1, 2, 3];
// numbers[6] = 5

// console.log(numbers)

// let word = "the Munsters are CREEPY and Spooky."

// console.log(false == '0')
// console.log(false === '0')

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10
// };

// let additionalAges = {
//   Marilyn: 22,
//   Spot: 237
// }

// console.log(Object.assign(ages, additionalAges))

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// console.log(advice.slice(0, advice.indexOf('house')))

// console.log(advice.slice(0))

// console.log(advice.indexOf('house'))

// console.log(advice.slice(0, advice.indexOf('house')))

// function funcA() {
//   let a = 'hello';
//   console.log(a)
// }

// function funcB() {
//   let a = 'bye';
//   console.log(a)
// }

// funcA();
// funcB();



// let a = 1; //first level  

// function foo() {    //second level
//   let b = 2;

//   function bar() {  //third level
//     let c = 3;
//     console.log(a)
//     console.log(b)
//     console.log(c)
//   }

//   bar();

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// foo()

// let number = 10

// [1, 2, 3].forEach(number => {
//   console.log(number)
// })


// let word = 'hello';
// let newWord = word.replace('h', 'j');

// console.log(newWord) //replaces ==> new string | not mutates


// let a = [1, 'Hello', true]

// a[0] = 2
// a[1] = 'Good Bye'
// a[2] = false

// console.log(a);


// let numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = numbers.slice().reverse();
// console.log(reversedNumbers);
// console.log(numbers);

// numbers = [1, 2, 3, 4, 5]
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1)
// console.log(sortedArray);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray)
// console.log(numbers)

// const array = [1, 'two', 'three', 4, 5]
// const obj = { ...array};

// console.log(obj);

// const slice =
// Function.prototype.call.bind(Array.prototype.slice)

// function list() {
//   return slice(arguments)
// }

// const list1 = list(1, 2, 3)

// console.log(list1)


// const myAgents = ["Brimstone", "clown", "mandarin", "sturgeon"];

// const popped = myAgents.pop()

// console.log(popped)
// console.log(myAgents)

// let famousWords = "seven years ago...";

// console.log("Four score and " + famousWords)
// console.log("Four score and ".concat(famousWords))


// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1))
// console.log(numbers.includes(number2))

// let array = [1, 2, 3, 4, 5]


// array.splice(2, 1)
// console.log(array)


// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["BamBam", "Pebbles"])

// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element)
// })

// console.log(newFlintstones)

// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']
// const array4 = [1, 2, 3, 4]

// const array3 = array1.concat(array2)

// console.log(array3)

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift())


// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Bambam").shift())

// let numbers = [1, 2, 3, 4];

// let table = {
//   field1: 1,
//   field2: 2,
//   field3: 3,
//   field4: 4
// }

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstones Family Members";
// let padding = Math.floor((40 - title.length) / 2)
// console.log(title.padStart(padding + title.length))

let statement1 = "The Flintstones Rock try try again troop!";
let statement2 = "Easy come, easy go."

console.log(statement1.split('').filter(char => char === 't'))
console.log(statement1.split('').filter(function(char) {
  return char === 't'
}))

console.log(statement2.split('').filter(char => char === 't').length)