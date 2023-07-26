let munstersDescription = "The Munsters are creepy and spooky.";
let revisedDescription = munstersDescription.charAt(0).toLowerCase() + munstersDescription.substring(1, 3).toUpperCase() + ' ' + munstersDescription.charAt(4).toLowerCase() + munstersDescription.substring(5, 35).toUpperCase()

console.log(revisedDescription)

//Launch School version
console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase()
  } else {
    return char.toUpperCase();
  }
}).join(""))

