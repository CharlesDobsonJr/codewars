// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Solutions

function maps(x){
    return x.map(n => n * 2);
  }


  maps = x => x.map(e => e * 2);


  function maps(x){
    //return x.map(el => el * 2);
    let arr = [];
    for(let i = 0; i < x.length; i++){
    arr.push(x[i] * 2);
    }
    return arr;
    }


    const maps = arr => arr.map( x => x * 2 )


    function maps(x){
        return x.map (num => num * 2) 
      }


      function maps(x){
        return x.map(y => y * 2);
      }


      function maps(x){
        return x.map(el => el * 2);
    }


    function maps(x){return x.map(x=>x*2)};



    function maps(x){
        return x.map(item => item*2);
      }


      const maps = x => x.map(x=>x*2);



      function maps(x){
        return x.map(a => a * 2);
      }


      function maps(x){
        return x.map(i => i*2);
      }



      function maps(x){
        return x.map(e=>e*2)
      }