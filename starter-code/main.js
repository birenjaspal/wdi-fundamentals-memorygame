//console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
//Get an element with the id of game-board and set it to a variable.
var memoryBoard = document.getElementById('game-board');

var createCards = function(){
  for (var i=0; i<cards.length; i++){
    // creates an HTML element for each card. each HTML element should be a div and have the class card
    var cardElement=document.createElement('div');
    cardElement.addEventListener('click', isTwoCards);
    //adds a class... <div class='card'></div>
    cardElement.className = 'card';
    cardElement.setAttribute('card-data', cards[i]);
    memoryBoard.appendChild(cardElement);
  }
}

var isMatch = function(cardsInPlay){
  if (cardsInPlay[0] !== cardsInPlay[1]) {
    alert('Sorry, try again.');
  }
  else {
    alert('You found a match!');
    if (cardsInPlay[0] === "king") {
      alert('Both cards are kings!');
    }
    else if (cardsInPlay[0] === "queen") {
      alert('Both cards are queens!');
    }
    else {
      alert('error');
    }
  }
}

var isTwoCards = function(){
  cardsInPlay.push(this.getAttribute('card-data'));
  if (this.getAttribute('card-data') === "king"){
    this.innerHTML = '<img src="king.png" alt="King of Spades" />'
  }
  else {
    this.innerHTML = '<img src="queen.png" alt="Queen of Clubs" />'
  }
  if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay); 
       cardsInPlay = [];
     }
}

createCards();
