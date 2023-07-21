// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Solutions

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }



  const reverseWords = (str) => str.split(" ").reverse().join(" ");


  function reverseWords(str){
    return str.trim().split(' ').reverse().join(' '); // reverse those words
  }


  const reverseWords = s => s
  .split` `
  .reverse()
  .join` `;


  function reverseWords(str){
    return str.split(" ").reverse().join(" ");; // reverse those words
  }


  function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
      reverse.push(words[i]);
      
    }
    return reverse.join(" ")
  }


  