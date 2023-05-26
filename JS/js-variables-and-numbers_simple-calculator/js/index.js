console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  let addResult = operand1+operand2;
  console.log(addResult)
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  let substractResult = operand1-operand2;
  console.log(substractResult);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  let multiplyResult = operand1*operand2;
  console.log(multiplyResult)
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  let divideResult = operand1/operand2;
  console.log(divideResult)
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  let exponentResult = operand1**operand2;
  console.log(exponentResult)
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  let moduloResult = operand1%operand2;
  console.log(moduloResult)
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  let increaseByOneResult = operand1+1;
  console.log(increaseByOneResult);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
  let increaseByOneResult = operand1+5;
  console.log(increaseByOneResult);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
  let operand1Let=operand1;
  // let decreaseByOneResult = operand1-1;
  // console.log(decreaseByOneResult);
  console.log(operand1Let--)
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
  let decreaseByOneResult = operand1-5;
  console.log(decreaseByOneResult);
});

multiplyByTwoButton.addEventListener("click", () => {
  let multiplyByTwoResult = operand1*2;
  console.log(multiplyByTwoResult);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
  let divideByTwoResult = operand1/2;
  console.log(divideByTwoResult);
});
