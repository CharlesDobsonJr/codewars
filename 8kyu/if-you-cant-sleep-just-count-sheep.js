// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Solutions

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }


  const countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
      val += `${i} sheep...`;
    }
    return val;
  }


  countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``



  const countSheep = length =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('')


  var countSheep = function (num){
    var ret = "";
    for (var i = 1; i <= num; i++) {
      ret += i + " sheep..."
    }
    
    return ret;
  }


  const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');


  