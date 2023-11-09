// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// Solutions

function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }


  function solution(a, b){
    return (a.length > b.length) ? b + a + b : a + b + a;
  }


// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);


// ternar
var solution = (a, b) => a.length > b.length ? b+a+b : a+b+a;


const solution = (a, b) => {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
  }

  const solution = (a, b) => (a.length > b.length) ? b + a + b : a + b + a;



  function solution(a, b){
    return a.length < b.length ?  `${a}${b}${a}` : `${b}${a}${b}`;
  }


  solution=(a,b)=>a.length>b.length?b+a+b:a+b+a



