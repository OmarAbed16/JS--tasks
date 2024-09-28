//1.Use a for loop to find the factorial of a number.
let number = 3;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(factorial);

//2.Use a for loop to print the Fibonacci sequence up to a given number.

let num = 10;
let Fibonacci = [0, 1];
for (let i = 2; i <= num; i++) {
  Fibonacci[i] = Fibonacci[i - 2] + Fibonacci[i - 1];
}

console.log(Fibonacci);

//3.Use a for loop to print the prime numbers up to a given number.

let num2 = 20;
let prime = [1];
for (let i = 2; i <= num2; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag++;
    }
  }
  if (flag == 0) {
    prime.push(i);
  }
}

console.log(prime);

//4.Use a for loop to print the elements of a 2D array .

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    console.log(arr1[i][j], "2d array");
  }
}

//5.Use a for loop to print the elements of an array in reverse order. Without using built in function

let arr2 = [1, 2, 3, 4, 5];

let new_arr = [];
for (let i = arr2.length; i > 0; i--) {
  new_arr.push(arr2[i - 1]);
}

console.log(arr2, "old array");
console.log(new_arr, "new array");

//JavaScript Arrays
//1.Use the concat() method to combine two arrays into a single array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1.concat(array2), "array concat");

//2.Use the slice() method to extract a portion of an array.
let array3 = [[1, 2, 3, 4, 5, 6], 2, 4];
console.log(array3.slice(0, 1), "slice");

//3.Use the splice() method to add and remove elements from an array.
let array4 = [[1, 2, 3, 4, 5], 3];
array4.splice(1, 1);
let new_array4 = array4[0];
new_array4.splice(0, 1);
new_array4.splice(1, 3);
console.log(new_array4, "splice");
//4. Use the for...of loop to iterate through an array.

let array6 = [1, 2, 3, 4, 5];
for (let i = 0; i < array6.length; i++) {
  console.log(array6[i]);
}
//5.Create an array of numbers and use the forEach() method to print each element to the console.

const array5 = [1, 2, 3, 4, 5];

array5.forEach(function (element) {
  console.log(element);
});

//JavaScript IF statement ------------------------------

//1.Check if a variable named "password" is at least 8 characters long and display a message "Your password is strong" if it is.

let password = "mypassword123";

if (password.length >= 8) {
  console.log("Your password is strong");
}

//2. Check if a variable named "color" is either "red", "green", or "blue" and display a message "color is a primary color" if it is.
let color = "red";

if (color == "red" || color == "green" || color == "blue") {
  console.log("color is a primary color");
}

//3. Check if a variable named "y" is a negative number and display a message "y is a negative number" if it is.let color = "red";
let y = -5;
if (y < 0) {
  console.log("y is a negative number");
}

//4. Check if a variable named "list" is an array and display a message "It's an array" if it is.
let list = [1, 2, 3];

if (list instanceof Array) {
  console.log("It's an array");
}

//JavaScript Objects -----------------------------------------------

//1.Create an object and add a new property to it using bracket notation.

let object = { name: "Adam", age: 25, gender: "male" };
console.log(object);

//2. Use the Object.values() method to get an array of an object's values.
console.log(Object.values(object));

//3.Use the Object.entries() method to get an array of key-value pairs for an object.
console.log(Object.entries(object));

//4. Use the Object.assign() method to merge two objects.
let obj1 = { name: "Adam", age: 25 };
let obj2 = { gender: "male" };
console.log(Object.assign(obj1, obj2));

//5. Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values.
Object.seal(object);
delete object.name;
console.log(object, "h");

//JavaScript Functions

//1.Create a function that will display the smallest value in the array.

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]), "smallest");

//2.Function that will return your string in Alphabetical order
function AlphabeticalOrder(str) {
  return str.split("").sort().join("");
}
console.log(AlphabeticalOrder("hello"));
//3. Return how many words was given
function countWords(words) {
  let num = words.split(" ");
  return num.length;
}
console.log(countWords("hello from CodingAcademy!"));

//4.Create function to Multiply all elements in an array by it's length
function MultiplyByLength(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] * arr.length);
  }
  return new_arr;
}
console.log(MultiplyByLength([4, 2, 5]));

//5. Create a function that will repeat each string character two times
function doubleChar(word) {
  let new_word = "";
  for (let i = 0; i < word.length; i++) {
    new_word += word[i] + word[i];
  }
  return new_word;
}
console.log(doubleChar("Coding"));
