const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((t, curr) => (t + curr), 0);
};

const multiply = function(arr) {
	return arr.reduce((t, curr) => (t * curr), 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  out = 1;
	for (i = 1; i <= n; i++){
    out = out * i; 
  }
  return out;
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
