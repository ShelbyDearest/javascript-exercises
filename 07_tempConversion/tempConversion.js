const convertToCelsius = function(x) {

  let Celsius = 0;
  let Fahrenheit = x;

  result = (x - 32) * 5/9;
  
  Celsius = Math.round(result * 10) / 10;

  return Celsius;
}
;

const convertToFahrenheit = function(x) {

  let Fahrenheit = 0;
  let Celsius = x;

  result = (x * 9/5 + 32);

  Fahrenheit = Math.round(result * 10) / 10;

  return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
