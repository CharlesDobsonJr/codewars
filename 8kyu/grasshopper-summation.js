// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// Solutions

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }


  const summation = n => n * (n + 1) / 2;



  function summation(num) {
    return num * (num + 1) / 2
  }


  var summation = function (num) {
    var sum = 0;
    for(var i=0; i<=num;i++){
      sum+=i
    }
    return sum;
  }


  var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }

  
  var summation = function (num) {
    return num * (num+1) / 2;
  }


  var summation = function (num) {
    let sum = 0;
    
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    
    return sum;
  }


  var summation = function (num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
      sum += i
    }
    return sum
   }



   var summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i
    }
    return result;
  }


  var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++){
      total += i;
    }
    return total;
  }

  