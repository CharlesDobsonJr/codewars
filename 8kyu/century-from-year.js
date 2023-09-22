// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here


// Solutions


const century = year => Math.ceil(year/100)



function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }


  function century(year) {
    return (year + 99) / 100 | 0;
  }


  function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
  }


  function century(year) {
    return Math.ceil(year / 100);
  }


  function century(year) {
    return Math.floor((year-1)/100)+1;
  }


  