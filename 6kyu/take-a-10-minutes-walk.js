// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// Solutions

function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }


  function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }


  function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }


  function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
  }


  function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
  }


  const MOVEMENTS = {
	n({x, y}) { return { x, y: y + 1 }; },
  s({x, y}) { return { x, y: y - 1 }; },
  e({x, y}) { return { x: x + 1, y }; },
  w({x, y}) { return { x: x - 1, y }; },
};

function isValidWalk(walk) {
  return takes10MinutesToWalk(walk) &&
  				returnsToStartingPoint(walk);
}

function takes10MinutesToWalk(walk) {
	return walk.length === 10;
}

function returnsToStartingPoint(walk) {
	return isOrigin(processWalk(walk));
}

function isOrigin(position) {
	return position.x === 0 && position.y === 0
}

function processWalk(walk=[], position={ x: 0, y: 0 }) {
	return walk.reduce((pos, direction) => MOVEMENTS[direction](pos), position);
}


function isValidWalk(walk) {
    function count(c) { return walk.filter(function (v) { return v == c }).length }
    return walk.length == 10 && count('w') == count('e') && count('n') == count('s')
  }



  function isValidWalk(walk) {
    if(walk.length != 10) return false;
    var c = {}
    walk.forEach(function(d){ c[d] ? c[d] += 1 : c[d] = 1 });
    return c["w"] == c["e"] && c["n"] == c["s"];
  }