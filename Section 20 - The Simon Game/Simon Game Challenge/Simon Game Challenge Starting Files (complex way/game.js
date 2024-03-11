var gamePattern = [];
var usereSequence = [];
var buttonColours = ["red", "blue", "green", "yellow"];
let i = 0;
var gameIsStarted = false;

function startGame() {    
    
    var randomChosenColour = buttonColours[nextSequence()];
    gamePattern.push(randomChosenColour);
    

    console.log(randomChosenColour);

    if (gameIsStarted == false) {        
        $("body").keypress(function(event) {
            console.log(event.key);
            if (event.key == 'a' || event.key == 'A') {            
                console.log('Game starting');   
                setTimeout(() => {
                    let index = 0
                    playSoundSeqDemo(index);                
                }, 2000);
                $("#level-title").text('Level ' + gamePattern.length); 
            }
        })
        gameIsStarted == true;
    }
    else {
        console.log('Continuing the game');   
                setTimeout(() => {
                    let index = 0
                    playSoundSeqDemo(index);                
                }, 2000);
                $("#level-title").text('Level ' + gamePattern.length); 
    }
    i++;
    if (i < 5) {
        makeSoundAfterClick();
        startGame();
    }
    
    
    
}

function checkUserClickSequence() {

}


function nextSequence() {
    randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
}


function makeSoundAfterClick() {
    for (let i = 0; i < buttonColours.length; i++) {   
            var sound = new Audio("sounds/" + buttonColours[i] + ".mp3");
            sound.play();
            console.log(gamePattern);
            setTimeout(() => {
                let index = 0
                playSoundSeqDemo(index);                
            }, 2000);
    }    
}

function playSoundSeqDemo(index) {
    $("#level-title").text('Sequence demonstration... Level:' + gamePattern.length);
    setTimeout(function() {
        console.log("Sequence " + index + ": " + gamePattern[index]);
        $("#" + gamePattern[index]).fadeOut(100).fadeIn(100);
        var sound = new Audio("sounds/" + gamePattern[index] + ".mp3");
        sound.play();
        
        // Increment index for the next iteration
        index++;

        // Check if there are more iterations to run
        if (index < gamePattern.length) {
            // Call the function recursively with the updated index after a delay
            playSoundSeqDemo(index);
        }
    }, 800); // Adjust the delay time (in milliseconds) as needed
}


function myLoop() {
    
    setTimeout(function() {
        console.log('hello' + i); // Your code here
        j++; // Increment the counter
        if (i < gamePattern.length) {
            myLoop(); // Call the loop function again
        }
    }, 3000); // 3-second delay
}


startGame();
