// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


// Solutions

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }



  function shortcut(string){
    return string.replace(/[aeiou]/gi, '');
  }



  function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }



  function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }


  const shortcut = string => string.replace( /[euioa]/g, '' );



  const shortcut = string => string.replace(/[aeiou]/g, '');



  function shortcut(string) {
    return string.replace(/[aeiou]+/g, '')
  }


  const shortcut = (s) => s.replace(/[aeiou]/g,'');



  function shortcut(s){
    return s.replace(/[aeiou]/g,"")
  }