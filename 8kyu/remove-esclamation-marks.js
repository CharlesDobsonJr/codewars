// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Solutions

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }


  function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }



  function removeExclamationMarks(s) {
    return s.split('!').join('');
  }



  const removeExclamationMarks = s => s.replace(/!/g,"") ;



  function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
  }