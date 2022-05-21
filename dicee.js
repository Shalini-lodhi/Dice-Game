var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //random dice image from dice1-dice2 and image/dice1.png - image/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//for heading
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player2 wins ";
} else {
  document.querySelector("h1").innerHTML = "Draw 🎃";
}
