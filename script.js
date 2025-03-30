let weightInput = document.querySelector('.jsWeight');
let heightInput = document.querySelector('.jsHeight');
let calButton = document.querySelector('.jsCalculate');
let display = document.querySelector('.jsDisplay');

document.addEventListener('DOMContentLoaded', () => {
  let savedWeight = localStorage.getItem('weight');
  let savedHeight = localStorage.getItem('height');
  if (savedWeight) weightInput.value = savedWeight;
  if (savedHeight) heightInput.value = savedHeight;
})


function calculate() {
  let weight = parseFloat(weightInput.value);
  let height = parseFloat(heightInput.value) / 100;
  if (weight <= 0 || height <= 0) {
    alert('please enter valid value');
    return;
  }
  let bmi = weight / Math.pow(height, 2);
  let resultBmi = bmi.toFixed(2);
  localStorage.setItem('weight', weight);
  localStorage.setItem('height', heightInput.value);
  if (resultBmi < 18.5) {
    display.textContent = 'Your BMI is ' + resultBmi + '. You are underweight.'
  } else if (resultBmi > 18.5 && resultBmi < 24.9) {
    display.textContent = 'Your BMI is ' + resultBmi + '. You are normal weight.'
  } else if (resultBmi > 25 && resultBmi < 29.9) {
    display.textContent = 'Your BMI is ' + resultBmi + '. You are over weight.'
  } else if (resultBmi > 30) {
    display.textContent = 'Your BMI is ' + resultBmi + '. You are obese.'
  }
}

calButton.addEventListener('click', () => {
  calculate();

})