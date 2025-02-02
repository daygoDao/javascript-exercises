const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total,curr) => total += curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total *= curr, 1);
};

const power = function(base, expo) {
	return base ** expo;
};

const factorial = function(num) {
  if(num === 0) return 1; 
	return num > 0 ? factorial(num - 1) * num : num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
