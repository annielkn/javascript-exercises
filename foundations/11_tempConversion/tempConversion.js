const convertToCelsius = function(deg) {
  return Math.round((deg-32)*50/9)/10
};

const convertToFahrenheit = function(deg) {
  return Math.round((deg*1.8+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
