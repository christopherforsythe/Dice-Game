var randomNumber1 =Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceSource = "images/" + "dice" + randomNumber1 + ".png";

var imageResult =document.querySelectorAll("img")[0];

imageResult.setAttribute("src", randomDiceSource);

var randomNumber2 =Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource = "images/dice" + randomNumber2 + ".png";

var imageResult2 =document.querySelectorAll("img")[1];

imageResult2.setAttribute("src", randomDiceImageSource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 2 wins!"
} else if (randomNumber2 == randomNumber1) {
    document.querySelector("h1").innerHTML ="Draw!"
}