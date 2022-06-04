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
  firstNumber = Number(firstString);
  console.log(firstNumber);

}

function populateSecond(e) {
  secondString += e.target.textContent;
  secondNumber = Number(secondString);
  console.log(secondNumber);
  result = operate(operator, firstNumber, secondNumber);
  console.log(result);
  firstNumber = operate(operator, firstNumber, secondNumber);
  console.log(firstNumber);
  secondString = '';
  secondNumber = 0;
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
  })
  numberBtn.forEach(btn => {
    btn.addEventListener('click', populateFirst);
  })
  textDisplay.textContent = '0';
}

function populateOperator(e) {
  operator = e.target.textContent;
  numberBtn.forEach(btn => {
    btn.removeEventListener('click', populateFirst);
  })
  numberBtn.forEach(btn => {
    btn.addEventListener('click', populateSecond);
  })
  console.log(operator);
}
function populateOperatorTwo(e) {
  operator += e.target.textContent;
  numberBtn.forEach(btn => {
    btn.removeEventListener('click', populateSecond);
  })
  numberBtn.forEach(btn => {
    btn.addEventListener('click', populateFirst);
  })
  console.log(operator);
}


let textDisplay = document.querySelector('#result');
let firstString = '';
let firstNumber;
let secondString = '';
let secondNumber;
let operator = '';
let numberBtn = document.querySelectorAll('#numberBtn');
let result = 0;
let clearBtn = document.querySelector('#clearBtn');
let equalBtn = document.querySelector('#equalBtn');

clearBtn.onclick = clear;
equalBtn.onclick = function(){
  textDisplay.textContent = result;
};
textDisplay.textContent = '0';

numberBtn.forEach(btn => {
  btn.addEventListener('click', populateFirst);
})

let operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach(btn => {
  btn.addEventListener('click', populateOperator)
});

