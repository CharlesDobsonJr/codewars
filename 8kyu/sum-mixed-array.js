// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solutions

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }


  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }



  const sumMix=x=>x.reduce((a,b)=>+b+a,0)


  function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
      somme += Number(x[i]);
    }
    return somme;
  }



  const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);



  function sumMix(x){
    return x.reduce((s,x)=>s+ +x,0);
   }


   function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
  }


  function sumMix(x){
    return eval( x.join("+") )
  }