let cards = ["queen", "queen", "king", "king"];
let cardInPlay = [];

function checkForMatch(){
  if (cardInPlay[0] === cardInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
function flipCard(cardId){
console.log("User flipped " + cards[cardId]),
cardInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);

checkForMatch();	
