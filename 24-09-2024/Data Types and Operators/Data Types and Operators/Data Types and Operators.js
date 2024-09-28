//Cash flow ratio
let cash = 1000;
let liabilities = 500;
console.log(cash / liabilities, "Cash flow ratio");

//Net income
let revenues = 1000;
let expenses = 500;
console.log(cash - liabilities, "Net income");

//Total assets
let liabilities_1 = 1000;
let equity = 500;
console.log(liabilities_1 + equity, "Total assets");

//Total assets
let profit = 1000;
let sales = 500;
console.log(profit * sales, "Total assets");

//Average
let avg = [7, 9, 2];
let sum = 0;
for (let i = 0; i < avg.length; i++) {
  sum += avg[i];
}
console.log(sum / avg.length, "average");
//Discount
let price = 150;
let discount = 30;

let result_discount = price * ((100 - discount) / 100);
console.log(result_discount, "discount");

//age
let age = 20;
if (age > 18 && age < 30) {
  console.log(true, "age");
}

//Exponential
console.log(1 ** 2, "Exponential");
console.log(2 ** 3, "Exponential");

//Remainder

console.log(1 % 10, "Remainder");
console.log(2 % 4, "Remainder");
