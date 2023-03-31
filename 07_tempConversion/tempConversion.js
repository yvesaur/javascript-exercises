const convertToCelsius = function(fahrenheit) {
  fahrenheit = ((fahrenheit-32) * 5/9).toFixed(1)
  return Number(fahrenheit)
};

const convertToFahrenheit = function(celsius) {
  celsius = ((celsius * 9/5) + 32).toFixed(1)
  return Number(celsius)
};

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(333))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
