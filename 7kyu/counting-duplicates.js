// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// Solutions

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }


  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }


  function duplicateCount(text){
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];
    
    lower.split('').forEach(function(letter) {
      if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
        count++;
        used.push(letter);
      }
    });
    
    return count;
  }


  function duplicateCount(text){
  
    var input = text.toLowerCase().split('');
    
    var obj = {};
    
    for( var i in input) {
      
      if(!obj[ input[i] ]){
        
        obj[ input[i] ] = 1;
        
      } else{
        obj[ input[i] ] += 1;
      }	
    }
    
    var result = 0;
    
    for( var prop in obj) {
      
      if(obj[prop] > 1){
       result++;
      }
    }
    
    return result;
    
  }


  const duplicateCount = (string) => {
    
    // makes an array all lowercase and sorts the array in alpha order for easy comparrison
    let newString = string.toLowerCase().split('').sort();
    
    // this array will house the duplicated values so we can 
    // get the length of it (or the number of duplicated characters). 
    let newArray = []
    
    // set a loop for the array
    for(i = 0; i < newString.length; i++){
       // if the current element equals the following element the push it to the new array AND
       // ONLY if the new array doesn't already include the current element
       if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
           // push elements to new array
           newArray.push(newString[i])
       }
    }
    // return the number of elements in the array to represent the number characters that were duplicated
    return newArray.length
}


function duplicateCount(text){
  var count = text.toLowerCase().split('').reduce((accum, curr) => {
    accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
    return accum;
  }, {});
  return Object.keys(count).filter(key => count[key] > 1).length;
}


function duplicateCount(text){
  return text
      .toLowerCase()
      .split('')
      .reduce(function(a, l) {
        a[l] = a[l] ? a[l]+1 : 1;
        if(a[l] === 2) a.count++;
        return a;
      }, {count:0}).count;
}


function duplicateCount(text){
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}


function duplicateCount(text) {
  var dup = [];
  text.toLowerCase().split('').forEach(function(v, i, arr) {if(i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);});
  return dup.length;
}


function duplicateCount(text){
  return (
    text.toLowerCase().split('').sort().join('').match(/(.)\1+/g)||[]
  ).length;
}


