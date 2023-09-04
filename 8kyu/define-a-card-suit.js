// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// Solutions

function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }


  function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }


    function defineSuit(card) {
        return {
          '♣' : 'clubs',
          '♦' : 'diamonds',
          '♥' : 'hearts',
          '♠' : 'spades'
        }[card.substr(-1)]
      }



      function defineSuit(card) {
        switch (card.slice(-1)){
          case '♣': return 'clubs';
          case '♦': return 'diamonds';
          case '♥': return 'hearts';
          case '♠': return 'spades';    
        }
          
      }



      function defineSuit(card) {
        if (card.includes('♣')) {
          return "clubs";
        }
        else if (card.includes('♦')) {
          return "diamonds";
        }
        else if (card.includes('♥')) {
          return "hearts";
        }
        else if (card.includes('♠')) {
          return "spades";
        }
      };



      function defineSuit(card) {
        if (card.includes('♣')) return 'clubs';
        if (card.includes('♦')) return 'diamonds';
        if (card.includes('♥')) return 'hearts';
        if (card.includes('♠')) return 'spades';
      }