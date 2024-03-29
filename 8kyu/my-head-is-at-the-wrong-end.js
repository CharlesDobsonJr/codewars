// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr) {
    return arr.reverse();
  }

//   There is a potential problem with this solution. In JavaScript, the reverse() method will MUTATE the original array, which may needlessly cause bugs elsewhere in your application.

// If you want to use the reverse() approach, you should first duplicate the incoming array, and reverse the duplicate, so that your original array remains unchanged.

// Examples:

// return Array.from(arr).reverse() (most readable and Array.from() is a best-practice for shallow-cloning an array)
// return [...arr].reverse() (coolest, increasingly popular, but less readable)
// return arr.slice().reverse() (faster and compatible with very old browsers/engines)
// Finally, for this particular kata, if your goal is performance, the fastest solution would avoid array methods entirely. Since we know that there should only be three items in the array, we can access these items without a loop, and use them to construct a new array in the desired order.

// For example:

// function ([tail, body, head]) { return [head, body, tail] } (using array destructuring)
// function (arr) { return [arr[2], arr[1], arr[0]] } (compatible with legacy browsers/engines, pre-2015)
// I would use example 1, because I don't have to support old JavaScript engines. It uses a new JavaScript feature (destructuring), but this function is so incredibly simple that it is nearly self-explanatory, making this a very good function for introducing destructuring to junior-level developers. Overall, it is readable and fast.

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

function fixTheMeerkat(arr) {
    return [arr[2], arr[1], arr[0]];
  }


  var fixTheMeerkat=a=>a.reverse();

  
  const fixTheMeerkat=arr=>arr.reverse();

  const fixTheMeerkat = arr => arr.slice().reverse();

  function fixTheMeerkat(arr) {
    let nArr = [];
    for(let i = arr.length-1; i >= 0; i--){
     nArr.push(arr[i]) 
    }
   return nArr;
  }


 //Using es6 deconstructor, simply switch location
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail];

fixTheMeerkat = a => a.reverse();


function fixTheMeerkat(arr) {
    var end = arr.shift();
    var begin = arr.pop();
    arr.push(end);
    arr.unshift(begin);
    return arr;
  }


  fixTheMeerkat = (arr) => arr.reverse()


  const fixTheMeerkat = arr => {
    return arr.reverse();
  }


  function fixTheMeerkat(arr) {
    //your code here 
    let newArr = []
    for (let i = arr.length-1; i >= 0; i--) {
      newArr.push(arr[i])
    }
    return newArr
   }


   function fixTheMeerkat(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }

