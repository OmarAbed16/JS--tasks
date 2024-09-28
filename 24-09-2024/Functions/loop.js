"use strick";
//1
function splitWords(str) {
  return str.split(" ");
}

const input1 = "Orange Jordan";
const result1 = splitWords(input1);
console.log(result1);

//2

function hidePhoneNumber(number) {
  return "*******" + number.slice(-3);
}

const input2 = "0781616916";
const result2 = hidePhoneNumber(input2);
console.log(result2);

//3

function hideEmail(email) {
  const [name, domain] = email.split("@");
  return `${name}…@${domain}`;
}

const input3 = "orange_academy@orange.jo";
const result3 = hideEmail(input3);
console.log(result3);

//4
function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const input4 = "coding academy by orange";
const result4 = capitalizeFirstLetter(input4);
console.log(result4);

//5
function capitalizeAllWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const input5 = "coding academy by orange";
const result5 = capitalizeAllWords(input5);
console.log(result5);

//6
function flipNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

const input6 = 92485;
const result6 = flipNumber(input6);
console.log(result6);

//7
function swapVariables(a, b) {
  // Method 1: Using a temporary variable
  let temp = a;
  a = b;
  b = temp;

  // Method 2: Using array destructuring
  [a, b] = [b, a];

  // Method 3: Using arithmetic operations
  a = a + b;
  b = a - b;
  a = a - b;

  return { a, b };
}

let a = 3,
  b = 4;
({ a, b } = swapVariables(a, b));
console.log(`a=${a}, b=${b}`);

//8

function removeCharAtIndex(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}

const input8 = "Orange";
const index8 = 3;
const result8 = removeCharAtIndex(input8, index8);
console.log(result8);

//9
function mergeStrings(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}

const input9_1 = "lora";
const input9_2 = "inge";
const result9 = mergeStrings(input9_1, input9_2);
console.log(result9);

//10
function isCharAtEnds(char, str) {
  return str.startsWith(char) || str.endsWith(char);
}

const input10_1 = ["o", "orange"];
const result10_1 = isCharAtEnds(...input10_1);
console.log(result10_1);

const input10_2 = ["z", "orange"];
const result10_2 = isCharAtEnds(...input10_2);
console.log(result10_2);

//11
function wordsToArray(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

const input11 = "Coding Academy by Orange";
const result11 = wordsToArray(input11);
console.log(result11);
//12

function reorderString(str) {
  return str.split("").sort().join("");
}

const input12 = "Orange";
const result12 = reorderString(input12.toLowerCase());
console.log(result12);
