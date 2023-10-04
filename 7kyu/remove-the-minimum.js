// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// Solutions

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }


  function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
  }


  const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));



  function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
  }


  function removeSmallest(numbers) {
    let copy = [...numbers]
    let smallest = Math.min(...numbers);
    let smallestIdx = numbers.indexOf(smallest)
    copy.splice(smallestIdx, 1)
    return copy
    }


    function removeSmallest(numbers) {
        var smallest;
        var newNums = [];
        numbers.forEach(function(num) {
          if (smallest > num || smallest === undefined) {
            smallest = num;
          }
        });
        var index = numbers.indexOf(smallest);
        numbers.forEach(function(n, i) {
          if (i !== index) {
            newNums.push(n);
          }
        });
        return newNums;
      }


      const removeSmallest = numbers =>
      numbers.filter((_, idx) => idx !== numbers.indexOf(Math.min(...numbers)));


      function removeSmallest(numbers) {
        var output = [...numbers];
        output.splice(numbers.indexOf(Math.min(...numbers)), 1);
        return output;
      }


      function removeSmallest(numbers) {
        let min = Infinity, index
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] < min) min = numbers[index = i]
        }
      
        return numbers.slice(0, index).concat(numbers.slice(index + 1))
      }