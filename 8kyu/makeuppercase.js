// Write a function which converts the input string to uppercase.

//Solutions

const makeUpperCase = str => str.toUpperCase();


function makeUpperCase(str) {return str.toUpperCase();}


function makeUpperCase(str) {
    return str.toLocaleUpperCase();
  }


  function makeUpperCase(str) {
    // Code here
    var res = str.toUpperCase();
    return res;
  }


  const makeUpperCase = (s) => s.toUpperCase()



  function makeUpperCase(str) {
    // Code here
    return str.toUpperCase()
  }


  const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)



  const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)
