const convertToCelsius = function(fahrenheitTemp) {
  let celcius = (fahrenheitTemp - 32)* (5/9)
  if (celcius%10!=0){
    return Number(celcius.toFixed(1));
  }
  return Number(celcius)
};

const convertToFahrenheit = function(celciusTemp) {
  let fahrenheit = (celciusTemp*(9/5)) + 32
  if (fahrenheit%10!=0){
    return Number(fahrenheit.toFixed(1));
  }
  return Number(fahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
