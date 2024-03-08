
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var path = "./images/dice" + randomNumber1 + ".png";
var path2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll('.dice img')[0].setAttribute("src", path);
document.querySelectorAll('.dice img')[1].setAttribute("src", path2);


var dice1 = document.querySelectorAll('img')[0].getAttribute("src");
var dice2 = document.querySelectorAll('img')[1].getAttribute("src");
console.log('Dice1: ' + dice1);
console.log('Dice2: ' + dice2);

if (randomNumber1 > randomNumber2) {    
    document.querySelector('h1').innerHTML = 'Player 1 Wins!'
}
else if (randomNumber1 < randomNumber2) {    
    document.querySelector('h1').innerHTML = 'Player 2 Wins!'
}
else if (randomNumber1 === randomNumber2) {    
    document.querySelector('h1').innerHTML = 'Its a draw!'
}