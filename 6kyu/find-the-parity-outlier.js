// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// Solutions

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }


  function findOutlier(integers){
    return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
  }
  function even(num){
    return (num % 2 == 0);
  }
  function odd(num){
    return !even(num)
  }


  function findOutlier(integers){
    const even = integers.filter(int => int % 2 === 0);
    const odd  = integers.filter(int => int % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
  }


  function findOutlier(integers){
    //your code here
    var len = integers.length;
    var first = Math.abs(integers[0]) % 2,
    second = Math.abs(integers[1]) % 2,
    third = Math.abs(integers[2]) % 2,
    base = (first + second + third) >= 2 ? 1 : 0;
    
    for (var i = 0; i < len; i++) {
      if (Math.abs(integers[i] % 2) != base) {
        return integers[i];
      }
    }
  };

  

  function findOutlier(integers){
    var res;
    var odd = integers.filter(function(e){
      if(e%2 != 0){
        res = e;
      };
      return e%2 == 0;
    });
    
    return odd.length>1 ? res : odd.pop();
  }


  function findOutlier(int){
    var evens=[],odds=[];
    int.forEach(function(num){num% 2 !=0? odds.push(num):evens.push(num) });
    return odds.length>1? evens[0]: odds[0];
    }


    function findOutlier(arr){
        var even = arr.filter(function(num) {
            return num % 2 === 0;
        });
        var odd = arr.filter(function(num) {
            return num % 2 !== 0;
        });
        return even.length > odd.length ? odd[0] : even[0];
      }


