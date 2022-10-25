const PI = 3.1412;

const calculator = {
  add: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  calcAroundCircle: (diameter) => diameter * PI,
};

module.exports = calculator;
