// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

// Solutions

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }


  const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());


  const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);


  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }


  function capitalizeWord(word) {
    const first = word[0].toUpperCase()
    return first + word.slice(1)
    
  }


  const capitalizeWord = w => `${w[0].toUpperCase()}${w.slice(1)}`;


  const capitalizeWord = s => s[0].toUpperCase() + s.slice(1)

