// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// Solutions

function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }


  const stringy = x => ''.padStart(x,'10');


  const stringy = size => "10".repeat(size).slice(0,size);


  function stringy(size) {
    string = "1";
    for (var i = 0; i < size-1; i++) {
      if(i % 2 == 0)
        string += "0";
      else
        string += "1";
    }
    return string;
  }


  const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');


  const stringy = size =>
  ``.padStart(size, `10`);


  function stringy(size) {
    return ''.padStart(size,'10');
    }



