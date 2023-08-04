// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


// Solutions


function booleanToString(b){
    return b.toString();
  }


  function booleanToString(b){
    return b ? 'true' : 'false';
  }


  function booleanToString(b){
    return String(b);
  }


  function booleanToString(b){
    return `${b}`
  }


  const booleanToString = b => b ? 'true' : 'false';



  function booleanToString(b){
    return b+'';
  }