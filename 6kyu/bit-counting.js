// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Solutions


countBits = n => n.toString(2).split('0').join('').length;


var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };


  function countBits(n) {
    for(c=0;n;n>>=1)c+=n&1
    return c;
  }


  const countBits = n => n.toString(2)
  .split('')
  .filter(ele => ele == 1)
  .length


  var countBits = function(n) {
    var count = 0;
    while(n > 0){
      if(n%2 === 1) {
        count++;
      }
      n = Math.floor(n/2);
    }
    return count;
  };


  var countBits = function(n)
  {
    a = n.toString(2).match(/1/g);
    return a == null ? 0 : a.length;
  };


  var countBits = function(n) {
    // Program Me
    return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);
  };


  var countBits = function(n) {
    return n !== 0 ? n.toString(2).match(/1/g).length:0;
  };


  var countBits = function(n) {
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
  };


  var countBits = function(n) {
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
  };


  var countBits = function(n) {
    return (n.toString(2).match(/1/g) || []).length;
  };