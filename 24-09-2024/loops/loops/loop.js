for (let i = 0; i <= 50; i++) {
  i % 2 == 0 ? console.log(i) : null;
}
let i = 0;
while (i <= 50) {
  i % 2 == 0 ? console.log(i) : null;
  i++;
}

for (let i = 0; i <= 100; i += 2) {
  if (i <= 50) {
    console.log(i);
  } else if (i >= 50) {
    console.log(i - 50);
  }
}

for (let i = 0; i <= 50; i++) {
  i % 2 == 0 ? console.log(i, "even number") : console.log(i, "odd number");
}

let arr = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
//5
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

fizzBuzz(1);
fizzBuzz(15);

//6
function fizzBuzzRecursive(num) {
  if (num > 100) return;
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  fizzBuzzRecursive(num + 1);
}

fizzBuzzRecursive(1);

//7
function convertToBanknotes(amount, banknotes) {
  let result = [];
  for (let note of banknotes) {
    while (amount >= note) {
      result.push(note);
      amount -= note;
    }
  }
  return result;
}

console.log(convertToBanknotes(57, [25, 10, 5, 1]), "Bank notes");

//8
function countCharacter(str, char) {
  const regex = new RegExp(char, "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

console.log(countCharacter("Coding Academy by Orange", "o"));

//9

for (let i = 0; i < 20; i++) {
  console.log(i);
}

for (let i = 3; i < 29; i++) {
  i % 2 != 0 ? console.log(i, "odd") : null;
}

for (let i = 12; i >= -14; i--) {
  i % 2 == 0 ? console.log(i, "even descending") : null;
}

for (let i = 50; i >= 20; i--) {
  i % 3 == 0 ? console.log(i, "multiples descending") : null;
}

//10
let v1 = "CodingAcademy";
let v2 = [7, 500, "KH404", "black", 36];

for (let i = 0; i < v2.length; i++) {
  console.log(v2[i]);
}

for (let i = v1.length; i > 0; i--) {
  console.log(v1[i - 1]);
}

//11

let arr_gen = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let arr_even = [];
let arr_odd = [];

for (let i = 0; i < arr_gen.length; i++) {
  arr_gen[i] % 2 == 0 ? arr_even.push(arr_gen[i]) : arr_odd.push(arr_gen[i]);
}

console.log("Even numbers:", arr_even);
console.log("Odd numbers:", arr_odd);

//12

function generateMeals(numMeals) {
  const proteins = ["chicken", "noodles", "tofu", "beef", "fish", "beans"];
  const grains = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
  const vegetables = [
    "peas",
    "green beans",
    "kale",
    "edamame",
    "broccoli",
    "asparagus",
  ];
  const beverages = ["juice", "milk", "water", "soy milk", "soda", "tea"];
  const desserts = [
    "apple",
    "banana",
    "more kale",
    "ice cream",
    "chocolate",
    "kiwi",
  ];

  const meals = new Set();

  while (meals.size < numMeals) {
    const meal = [
      proteins[Math.floor(Math.random() * proteins.length)],
      grains[Math.floor(Math.random() * grains.length)],
      vegetables[Math.floor(Math.random() * vegetables.length)],
      beverages[Math.floor(Math.random() * beverages.length)],
      desserts[Math.floor(Math.random() * desserts.length)],
    ].join(" - ");

    meals.add(meal);
  }

  return Array.from(meals);
}

console.log(generateMeals(5));
