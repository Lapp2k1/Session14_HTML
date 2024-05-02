// Bài 1
myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
console.log(myColor.join());
// Bài 2
// Prompt the user for input and store it in the 'num' variable
var num = window.prompt();

// Convert the number to a string and store it in the 'str' variable
var str = num.toString();

// Initialize an array 'result' with the first character of the string
var result = [str[0]];

// Iterate through the characters of the string starting from index 1
for (var x = 1; x < str.length; x++) {
  // Check if the previous and current characters are both even digits
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    // If both are even, push a '-' and the current character to the 'result' array
    result.push("-", str[x]);
  } else {
    // If not both even, push the current character to the 'result' array
    result.push(str[x]);
  }
}

// Output the joined 'result' array as a string
console.log(result.join(""));
// Bài 3
function swapCase(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
   console.log(result);
}
const userInput = 'Keep Calm And Code On';
const swappedString = swapCase(userInput);
console.log(swappedString); // kEEP cALM aND cODE oN

console.log(result);
