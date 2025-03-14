const repeatString = function(string, num) {

  if (num < 0) {
    return "ERROR"; }

  let word = string.repeat;

  for (i = 0; i < num; i++) {
    word += string.repeat; }

  return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
