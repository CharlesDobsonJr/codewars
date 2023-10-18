// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// Solutions


function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


  function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}


function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }


  function countCharacters(chars) {
    return chars
      .reduce( function(memo, char){
        memo[char] = memo[char] ? memo[char] + 1 : 1;
        return memo;
      }, {});
  }
  
  function duplicateEncode(word){
    const chars = word.split('').map(ch => ch.toLowerCase());
    const charsCount = countCharacters(chars);
    return chars
      .map( ch => charsCount[ch] > 1 ? ')' : '(' )
      .join('');
  }


  const duplicateEncode = s => s
  .toLowerCase()
  .split``
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join``;


  function duplicateEncode(word) {
    var letters = word.toLowerCase().split('')
    return letters.map(function(c, i) {
      return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
    }).join('')
  }


  function duplicateEncode(string){
    var occurances = string.toLowerCase().split('').reduce(function(occ, cha){
       occ[cha] = (occ[cha] || 0) + 1;
       return occ;
    }, {});
    return string.toLowerCase().replace(/[\S\s]/g, function(cha){
       return occurances[cha] > 1 ? ')' : '(';
    });
 }


 const duplicateEncode = w => w.replace(/./g, c => (new RegExp(`([${c}]).*\\1`, 'gi')).test(w) ? ')' : '(');



 function duplicateEncode(word){
    function count(word, char) {
      var result = 0;
      for (var index = 0, len = word.length; index < len; index++) {
        if (word[index] == char) result++;
      }
        
      return result;
    }
      
    var result = [];
    var lowerCasedWord = word.toLowerCase();
    for (var index = 0, len = lowerCasedWord.length; index < len; index++) {
      if (count(lowerCasedWord, lowerCasedWord[index]) > 1)
        result.push(")");
      else
        result.push("(");
    }  
    
    return result.join('');
  }


  