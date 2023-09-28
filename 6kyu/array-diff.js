// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Solutions

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }


  function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }


  function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }


  function array_diff(a, b) {
    return a.filter(function (v) { return b.indexOf(v) === -1 });
  }


  function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
  }


  function array_diff(a, b) {
    return a.filter(item => !b.includes(item));
  }


  function array_diff(a, b) {
    return a.filter(x => b.indexOf(x) == -1);
  }


  const arrayDiff = (a, b) => a.filter(e => !b.includes(e))



  function array_diff(a, b) {
    return a.filter(value => !b.includes(value));
  }


  function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
  }


  function arrayDiff(a, b) {
    return a.filter( ( el ) => !b.includes( el ) );
  }


  