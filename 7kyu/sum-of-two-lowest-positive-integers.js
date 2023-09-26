// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Solutions

function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };


  function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }


  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };


  function sumTwoSmallestNumbers(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
        if(n < min) {
          secondMin = min;
        min = n;
      } else if( n < secondMin ) {
          secondMin = n;
      }
    }
    
    return min + secondMin;
  }


  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function (a, b) { 
      return a - b;
    });
    return numbers[0] + numbers[1];
  };


  function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a-b).slice(0,2).reduce((a,b)=>a+b);
  };


  function sumTwoSmallestNumbers(numbers) {  
    var sorted = numbers.sort(function(a,b) { return a - b; });
    return sorted[0] + sorted[1];
  }; 


  function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort((a,b) => a - b);
    return arr[0] + arr[1];
  };


  function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort( (a,b) => a-b);
    return numbers[0]+numbers[1];
  };

  
  function sumTwoSmallestNumbers(numbers) {  
    const sorted = numbers.sort((a,b) => a-b)
    return sorted[0] + sorted[1];
  };