const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];
let cardInPlay = [];

function checkForMatch(){
  if (cardInPlay[0] === cardInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
function flipCard(cardId){
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardInPlay.push(cards[cardId].rank);
};

flipCard(0);
flipCard(2);

checkForMatch();	
