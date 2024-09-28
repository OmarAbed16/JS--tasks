//let candidate = Number(prompt("write your age: "));
let candidate = 2002;
candidate = 2024 - candidate;
console.log(candidate);
if (candidate > 60) {
  console.log("You may join the seniors’ program.");
} else if (candidate > 30) {
  console.log("You are not eligible. You may join other programs.”");
} else if (candidate >= 18 && candidate <= 30) {
  console.log("You are eligible. Start your application.");
} else if (candidate < 18) {
  console.log("You may join the kids' program.");
}

switchLetter("OrAnGe");
function switchLetter(word) {
  let new_word = "";
  for (let i = 0; i < word.length; i++) {
    new_word +=
      word[i] == word[i].toUpperCase()
        ? word[i].toLowerCase()
        : word[i].toUpperCase();
  }
  console.log(new_word);
}

capitalizes("Coding Academy by Orange");
function capitalizes(word) {
  let new_word = word.split(" ");
  let result = "";
  for (let i = 0; i < new_word.length; i++) {
    result += new_word[i].charAt(0).toUpperCase() + new_word[i].slice(1);
  }
  console.log(result);
}
let arr = ["Coding", "Academy", "By", "Orange"];
removeArr(arr, "By");
function removeArr(word, del) {
  let result = word.filter((item) => item != del);
  console.log(result);
}

oddOrEven(5);
function oddOrEven(num) {
  num % 2 == 0 ? console.log("even") : console.log("odd");
}

console.log(isNumber(5));
function isNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

large2(5, 3);
function large2(num1, num2) {
  num1 > num2 ? console.log(num1) : console.log(num2);
}

function triangleType(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Not a valid triangle";
  }
  if (a === b && b === c) {
    return "Equilateral";
  }
  if (a === b || b === c || a === c) {
    return "Isosceles";
  }
  return "Scalene";
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 4, 5));
console.log(triangleType(3, 3, 4));
console.log(triangleType(0, 4, 5));

function isNumberInRange(number, min, max) {
  return number >= min && number <= max;
}

console.log(isNumberInRange(5, 1, 10));

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));
