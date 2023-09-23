// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


// Solutions

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }


  const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);


  function past(h, m, s){
    var hours = h * 60 * 60 * 1000;
    var minutes = m * 60 * 1000;
    var seconds = s * 1000;
    
    return hours + minutes + seconds;
  }


  function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
  }


  function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
  }


  function past(h, m, s){
    return h * 3600000 + m * 60000  + s * 1000;
  }


  function past(h, m, s){
    return (((h*60) + m)*60 + s)*1000;
  }


  function past(h, m, s){
    return (h*60*60 + m*60 + s) * 1000;
  }


  const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000;



  function past(h, m, s){
    return s*1000 + m*60000 + h*3600000
   }


   function past(h, m, s){
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  }


  const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;
