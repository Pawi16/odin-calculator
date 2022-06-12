function operate(operator, a, b) {
  return operator(a, b);
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function populateFirst(e) {
  firstString += e.target.textContent;
  console.log(firstString);
  firstNumber = Number(firstString);
  console.log(firstNumber);
  console.log(secondDisplay);
  firstDisplay = firstString;
  textDisplay.textContent = firstDisplay + ' ' + operatorDisplay + ' ' + secondDisplay + ' ';

}

function populateSecond(e) {
  secondString += e.target.textContent;
  secondNumber = Number(secondString);
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  result = operate(operator, firstNumber, secondNumber);
  
  console.log(result);
  secondDisplay = secondString;
  textDisplay.textContent = firstDisplay + ' ' + operatorDisplay + ' ' + secondDisplay + ' ';
  operatorBtn.forEach(btn => {
    btn.removeEventListener('click',populateOperatorOne);
    btn.addEventListener('click',populateOperatorSecond);
  })
  
}

function populateOperatorSecond(e) {
  
  firstNumber = operate(operator,firstNumber,secondNumber);
  secondString = '';
  secondNumber = 0;
  firstDisplay = textDisplay.textContent;
  secondDisplay = '';
  operatorDisplay = '';
  console.log(firstDisplay);
  console.log(secondDisplay);
  console.log(operatorDisplay);
  operator = e.target.textContent;
  numberBtn.forEach(btn => {
    btn.removeEventListener('click', populateFirst);
  })
  numberBtn.forEach(btn => {
    btn.addEventListener('click', populateSecond);
  })
  operatorDisplay = operator;
  console.log(operator);
  textDisplay.textContent = firstDisplay + ' ' + operatorDisplay + ' ' + secondDisplay + ' ';
  
}
function populateOperatorOne(e) {

  secondString = '';
  secondNumber = 0;
  firstDisplay = textDisplay.textContent;
  secondDisplay = '';
  operatorDisplay = '';
  console.log(firstDisplay);
  console.log(secondDisplay);
  console.log(operatorDisplay);
  operator = e.target.textContent;
  numberBtn.forEach(btn => {
    btn.removeEventListener('click', populateFirst);
  })
  numberBtn.forEach(btn => {
    btn.addEventListener('click', populateSecond);
  })
  operatorDisplay = operator;
  console.log(operator);
  textDisplay.textContent = firstDisplay + ' ' + operatorDisplay + ' ' + secondDisplay + ' ';
  
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return sum(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function clear() {
  result = 0;
  firstString = '';
  firstNumber = 0;
  secondString = '';
  secondNumber = 0;
  operator = '';
  numberBtn.forEach(btn => {
    btn.removeEventListener('click', populateSecond);
    btn.addEventListener('click', populateFirst);
  })
  operatorBtn.forEach(btn => {
    btn.removeEventListener('click',populateOperatorSecond);
    btn.addEventListener('click',populateOperatorOne);
  })
  firstDisplay = '';
  secondDisplay = '';
  operatorDisplay = '';
  textDisplay.textContent = firstDisplay + ' ' + operatorDisplay + ' ' + secondDisplay + ' ';
}

let textDisplay = document.querySelector('#result');
let firstString = '';
let firstNumber;
let secondString = '';
let secondNumber;
let operator = '';
let numberBtn = document.querySelectorAll('.numberBtn');
let result = 0;
let clearBtn = document.querySelector('#clearBtn');
let equalBtn = document.querySelector('#equalBtn');
let firstDisplay = ' ';
let secondDisplay = ' ';
let operatorDisplay = ' ';

textDisplay.textContent = firstDisplay + ' ' + operatorDisplay + ' ' + secondDisplay + ' ';

clearBtn.onclick = clear;
equalBtn.onclick = function () {
  textDisplay.textContent = result;
  result = 0;
  firstString = '';
  firstNumber = 0;
  secondString = '';
  secondNumber = 0;
  operator = '';
  numberBtn.forEach(btn => {
    btn.removeEventListener('click', populateSecond);
    btn.addEventListener('click', populateFirst);
  })
  operatorBtn.forEach(btn => {
    btn.removeEventListener('click',populateOperatorSecond);
    btn.addEventListener('click',populateOperatorOne);
  })
  firstDisplay = '';
  secondDisplay = '';
  operatorDisplay = '';
};


numberBtn.forEach(btn => {
  btn.addEventListener('click', populateFirst);
})

let operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach(btn => {
  btn.addEventListener('click', populateOperatorOne)
});

