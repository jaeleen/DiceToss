var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //random number for dice 1 (1-6)

var diceOneImageSource = "images/dice" + randomNumber1 + ".png"; //creates random image source for dice 1
document.querySelectorAll("img")[0].setAttribute("src", diceOneImageSource); //select element and set attribute.


var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //random number for dice 2 (1-6)

var diceTwoImageSource = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceTwoImageSource);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}
