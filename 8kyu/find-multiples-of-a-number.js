// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// Solutions

function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }


  function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
  }


  function findMultiples(int,limit){
    let multiples = [];
    for(let i = int; i <= limit; i += int){ multiples.push(i); }
    return multiples;
  }


  function findMultiples(integer, limit) {
    return Array.from({length: parseInt(limit / integer)}, (_,index) => (index + 1) * integer)
  }


  function findMultiples(integer, limit) {
    let arr = [];
    for (let i=integer; i <=limit; i+=integer) arr.push(i)
    return arr
  }


  function findMultiples(integer, limit){
    let result = []
    
    for (let i = integer; i<=limit; i+=integer)
      result.push(i)
      
    return result
  }


  function findMultiples(integer, limit) {
    const a = [];
    let increment = 1;
    while (increment * integer <= limit) {
      a.push(increment * integer);
      increment++;
    }
    return a;
  }