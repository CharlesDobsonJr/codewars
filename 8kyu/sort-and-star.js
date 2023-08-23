// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// Solutions

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }



  twoSort = s => s.sort()[0].split('').join('***')



  function twoSort(s) {
    s.sort();
    return s[0].split('').join('***');
  }


  const twoSort = s => [...s.sort()[0]].join('***');



  const twoSort = s => s.sort()[0].split("").join("***");



  function twoSort(s) {
    const sorted = s.sort();
    
    return sorted[0].split('').join('***');
  }


  function twoSort(s) {
    return [...s.sort()[0]].join('***')
  }