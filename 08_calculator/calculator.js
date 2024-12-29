const add = function(numberOne,numberTwo) {
  return numberOne+numberTwo
};

const subtract = function(numberOne,numberTwo) {
  return numberOne-numberTwo
};

const sum = function(array) {
  const totalSum = array.reduce((total,item)=>total+item,0)
  return totalSum
};

const multiply = function(array) {
  const totalMultiply = array.reduce((total,item)=>total*item,1)
  return totalMultiply
};

const power = function(numberOne,numberTwo) {
  return numberOne**numberTwo
	
};

const factorial = function(number) {
  if (number === 0){
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= number; i++){
    result*=i
  }
  return result
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
