// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// Solutions

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }


  function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }



  let countSheeps = x => x.filter( s => s ).length;



  function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }


  function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }


  const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;


  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(x => (x)).length;
  }