// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// Solutions

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }


 const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }


  function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }


/**
 * This function will calculate the multiplication of the digit of the number 
 * given as parameter
 */
function multiplyDigits( num ) {
	// If have just 1 digit number, we just return it
	if( num < 10 ) {
  	return num;
  // If more than one digit, will be first digit * recursive call to this function
  }else {
    let firstDigit = Math.floor( num / 10 );
    return ( num - firstDigit * 10 ) * 
    	multiplyDigits(firstDigit);
  }
}

/**
 * This function will count on the number of times we have to call multiply
 * till we don't have any more times to call ( we just have one digit ) 
 */
function count( num, times = 0 ) {
  if( num < 10 ) {
  	return times;
  }else {
  	// 999 = 9 * 9 * 9 = 729, ...
  	return count( multiplyDigits( num ), ++times );
  }
}
/**
 * Just the public function we call in order to count the number of times
 * we have to multiply the digits of the param number till we have just 
 * one digit as result 
 */
function persistence( num ) {
  return count( num );
}



function persistence(num, cnt=0) {
    let arrayNum = num.toString().split('');
    return arrayNum.length === 1 ?
      cnt :
      persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
  }



