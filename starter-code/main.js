console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardThree !== cardFour) {
  alert('Sorry, try again.');
}
else {
  alert('You found a match!');
  if (cardTwo === "king") {
    alert('Both cards are kings!');
  }
  else if (cardTwo === "queen") {
    alert('Both cards are queens!');
  }
  else {
    alert('error');
  }
} */
document.getElementById('game-board');

var createCards = function(){
  for (x=0; x<4; x+=1){
    var cards=document.createElement('div');
    cards.className = 'card';
    game-board.appendChild(cards);
  }
}

createCards();
