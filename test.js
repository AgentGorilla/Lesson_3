// let genericSymbol = Symbol()
// let otherGenericSymbol = Symbol();

// let fooSymbol = Symbol('foo');
// let otherFooSymbol = Symbol('foo');

// console.log(genericSymbol == otherFooSymbol)
// console.log(fooSymbol == otherFooSymbol)

// let age = 29;
// let anotherAge = --age + 2

// console.log(age)
// console.log(anotherAge)

// let count = 10
// for (let i = 0; i < count; i++) {
//   console.log(i)
// }

// let person = new Object();
// person.Name = "Nicholas"
// person.Age = 27
// person.Hobby = "Video Games"

// console.log(person)


// function addTen (num) {
//   num += 10
//   return num
// }

// let count = 20
// let result = addTen(count)

// console.log(count)
// console.log(result)


// function setName (obj) {
//   obj.name = "Nicholas";
// }

// let person = new Object();
// setName(person)
// console.log(person.name)

// function setName(obj) {
//   obj.name = "Nick";
//   obj = new Object();
//   obj.name = "Greg";
// }

// let person = new Object()
// setName(person)
// console.log(person.name)

// let now = new Date();

// console.log(now)

// let someDate = new Date(Date.parse("May 23, 2019"))

// console.log(someDate)

// let numberObject = new Number(10)

// console.log(typeof numberObject)

// let falseObject = new Boolean(false);
// let result = falseObject && true
// console.log(result)

// let falseValue = false;
// result = falseValue && true

// console.log(result)





// let num = 10
// console.log(num.toFixed(2))

// console.log(num.toString())

// let num2 = 10.304
// console.log(num2.toFixed(4))

// let numberObject = new Number(10);
// let numberofValue = 10

// console.log(typeof numberObject)
// console.log(typeof numberofValue)
// console.log(numberObject instanceof Number)
// console.log(numberofValue instanceof Number)

// console.log(Number.isInteger(1))
// console.log(Number.isInteger(1.00))
// console.log(Number.isInteger(1.01))

// let stringObject = new String("hello world")

// let stringValue = "hello world"
// console.log(stringValue.length)

// let message = "Hi, this is Gurpreet"
// console.log(message.length)

// console.log(message.charAt(12) + message.substring(13))

// let name = "Ankita"

// console.log(name.charCodeAt(5))

// console.log(String.fromCharCode(97))


// let name1 = "Gurpreet"

// if(name1 === "Gurpreet") {
//   console.log(name1.charCodeAt(8))
// }

// console.log(String.fromCharCode(55357))

// let stringValue = "hello"
// let result = stringValue.concat(" " + "world")

// console.log(result)



// let person = "Gurpreet"

// let resultSlice = person.slice(1, 7)
// let resultSubstring = person.substring(3)
// let resultSubStr = person.substr(-1)  

// console.log(resultSlice)
// console.log(resultSubstring)
// console.log(resultSubStr)

// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());


// let object = { first: [1] }
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray);

// console.log(object)


// let object = { first: [1]};
// let numArray = object["first"]
// numArray.push(2)

// console.log(object)

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three)

// console.log(`one is: ${one}`)

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);