let cards = ["queen", "queen", "king", "king"];
let cardInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];
cardInPlay.push(cardOne);
cardInPlay.push(cardTwo);
console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);
if(cardInPlay.length === 2) {
	if(cardInPlay[0] ===cardInPlay[1]) {
		alert("you found a match!");
	}
	else{
		alert("sorry, try again");
	}
}
	
