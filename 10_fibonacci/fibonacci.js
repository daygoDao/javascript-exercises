const fibonacci = function(num) {
  if(num < 0) return 'OOPS'
  if(num == 0) return 0;
  if(num < 3) return 1;
  let prev = 1;
  let curr = 2;
  for(i = 3; i < num; i++){
    let temp = prev;
    prev = curr;
    curr = temp + curr;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
