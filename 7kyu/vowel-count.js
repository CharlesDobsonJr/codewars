// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Solutions

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }


  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }


  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


   function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }


  function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }


  function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
  }


  function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length
  }


  function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }


  function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
  
    return vowelsCount;
  }


  const getCount = (str) => (str.match(/[aeiou]/g) || []).length;
