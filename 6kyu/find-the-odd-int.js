// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// Solutions

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }


  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }


  function findOdd(arr) {
    var result, num = 0;
  
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        num++;
      } else {
        num++;
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }


  function findOdd(A) {
    return A.reduce(function(c,v){return c^v;},0);
  }


  function findOdd(A) {
    for(var i = 0; i < A.length; i++){  
      //Query the number of times that this 'i' element appears
      //then verify if that number of times is odd. If it is true, then return
      //that 'i' element
      if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
        return A[i];
      }
    }
    return 0;
  }


  function findOdd(A) {
    var countOccurencesOfInt = 0;
    for (let i = 0; i < A.length; i++) {
        var currentIterationInt = A[i];
        for (let j = 0; j < A.length; j++) {
            if (currentIterationInt == A[j]) {
                countOccurencesOfInt++;
            }
        }
        if (countOccurencesOfInt % 2 != 0) {
            return currentIterationInt;
        }
    }
}


function findOdd(A) {
    var trace = {};
    A.forEach(function(x) {
      if (trace[x]) delete trace[x];
      else trace[x] = true;
    });
    return parseInt(Object.keys(trace)[0]);
  }


  function findOdd(A) {
    //happy coding!
    var x = 0;
    for (var i = 0; i < A.length; i++) {
      x = x ^ A[i];
    }
    return x;
  }