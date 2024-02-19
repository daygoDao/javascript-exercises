const palindromes = function (str) {
  const regex = /[\w\d]/gi;
  const cleanedStr = (str.match(regex)).join('').toLowerCase();
  return cleanedStr.split('').reverse().join('') === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
