// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).


// Solutions

function bonusTime(salary, bonus) {
    let total;
    if (bonus) {
        total = salary * 10;
    } else {
        total = salary;
    }
    return `£${total}`;
}

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }


  const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


  function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
  }


  const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;


  function bonusTime(salary, bonus) {
    return '£'+(bonus ? salary*10:salary)
   }


   function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`
  }

  function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
  }


  function bonusTime(salary, bonus) {
    return bonus?'£'+(salary*10):'£'+salary
 }