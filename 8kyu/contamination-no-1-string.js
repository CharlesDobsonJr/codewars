// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Solutions

function contamination(text, char){
    return char.repeat(text.length)
  }


  function contamination(text, char){
    return text.replace(/./g, char);
  }


  function contamination(text, char) {
    return text.split("").fill(char).join("");
  }
  
  /////////////////////////////////////////////////
  
  function contamination(text, char) {
    return char.repeat(text.length);
  }
  
  /////////////////////////////////////////////////
  
  function contamination(text, char) {
    return text.replace(/./g, char);
  }



  const contamination = (s,v) => s.replace(/./g,v);


  const contamination = (text, char) => text.replace(/./g, char);


  const contamination = (text, char) => char.repeat(text.length);


  const contamination = (text, char) => text.replace(/./gi,char);



  function contamination(text, char){
    // Code here ;)
    return char.repeat(text.length);
  }