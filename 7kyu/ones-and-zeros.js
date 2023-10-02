// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// Solutions


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);



const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };


  function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
  }


  const binaryArrayToNumber = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
  }


  const binaryArrayToNumber = arr => {
    return parseInt(Number(arr.join('')), 2)
  };


  const binaryArrayToNumber = a => parseInt(a.join(''), 2);


  const binaryArrayToNumber = arr => {
    return arr.reduce((a,b)=>(a<<1|b),0);
  };


  const binaryArrayToNumber = arr => {

    return  parseInt(arr.join('').toString(), 2);
    };


    const binaryArrayToNumber = arr => {
        // your code
        const binaryString = arr.join('');
        return parseInt(binaryString,2);
      };


