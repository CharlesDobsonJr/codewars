// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solutions

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }


  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }


  function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }


  function highAndLow(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
  }


  function highAndLow(numbers){
    numbers = numbers.split(' ');
    
    return Math.max(...numbers) + ' ' + Math.min(...numbers);
  }


  function highAndLow(numbers){
    return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
  }


  function highAndLow(numbers){
    let arr = numbers.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }


  function highAndLow(numbers){
    return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
  }