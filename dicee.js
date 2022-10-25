
// Image 1 randomization
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage = "images/dice" + randomNumber1 + ".png";
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", diceImage);

// Image 2 Randomization

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage = "images/dice" + randomNumber2 + ".png";
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", diceImage);

// Winner Decision

var winner = document.querySelector("h1");

if(randomNumber1 === randomNumber2){
  // tie
    winner.innerHTML = "Its a TIE!"
} else if (randomNumber1 > randomNumber2){
  // playe 1 won
  winner.innerHTML = "Player 1 WON!"
} else{
  // player 2 won
  winner.innerHTML = "Player 2 WON!"
}
