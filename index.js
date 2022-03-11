var randomNumber1 = Math.floor( (Math.random() * 6) + 1 );
var randomNumber2 = Math.floor( (Math.random() * 6) + 1 );


var leftDiceImg = document.getElementById("leftDiceImg");
leftDiceImg.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var rightDiceImg = document.getElementById("rightDiceImg");
rightDiceImg.setAttribute("src", "images/dice" + randomNumber2 + ".png");