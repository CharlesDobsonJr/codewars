// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// Solutions

function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }



  const nameShuffler = str => str.split(' ').reverse().join(' ');



  function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
  }



  function nameSuffler(str){
    return str.split(' ').reverse().join(' ');
  }


  function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
  }


  var nameShuffler = str => str.split(" ").reverse().join(" ");



  function nameShuffler(str){
    const arr = str.split(" ")
    const shuffledName = arr.reverse();
    return shuffledName.join(" ");
  }
  
  
  //shuffle the name
  //take a string.
  //split into an array
  //append index 1 into index 0 in a new array
  //append index 0 into index 1 in the new array
  //join the new array into a new string and return it



  nameShuffler = str => str.split(' ').reverse().join(' ');
