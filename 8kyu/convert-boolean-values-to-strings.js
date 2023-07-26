// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solutions

function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }


  function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }


  let boolToWord = bool => bool ? 'Yes' : 'No';


  const boolToWord = bool => bool ? 'Yes' : 'No';


  var boolToWord = function boolToWord() {
    //compile
    var result = compile(Array.prototype.slice.call(arguments, 0)[0])
    //finish
    return result;
  };
  
  function compile(input) {
    var iterator = 0,
        input    = input.toString(),
        output   = [];
    for( ; iterator < input.length; iterator++) {
      output[iterator] = input[iterator];
    }
    switch (output.join('')) {
      case 'true':
        return 'Yes';
        break;
      case 'false':
        return 'No';
        break;
      case 'maybe':
        return 'Maybe';
        break;
      default: 
        throw new Error('Input was not recognized');
    }
  }