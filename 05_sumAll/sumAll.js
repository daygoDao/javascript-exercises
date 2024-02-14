const sumAll = function (num1, num2) {
  console.log("test1");
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  console.log("test2");

  let min = num1 < num2 ? num1 : num2;
  let max = num1 > num2 ? num1 : num2;
  let sum = 0;

  console.log("test3 ", min, max, sum);

  for (let i = min; i <= max; i++) {
    sum += i;
    console.log("test4", sum);
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
