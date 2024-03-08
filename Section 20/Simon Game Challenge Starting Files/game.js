var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var gameOverStatus = false;


function startGame() {
    console.log("startGame func");
    console.log("game started status:" + gameStarted);
    $("body").keypress(function (event) {   
        if (gameStarted == false) {        
            console.log("pressed key: " + event.key);
            if (event.key == 'a' || event.key == 'A') {
                console.log("Starting the game...");
                nextSequence();                
                showUserSequence(1);
                gameStarted = true;
                setTimeout(() => {                    
                    checkButtonClick();
                }, 3000);
            }  
        }              
    })
    // nextSequence(); 
    // startGame();
    // startGame();
}

function nextSequence() {
    console.log("nextSequence func");
    var randomNumber =  randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log("randomChosenColour: " + randomChosenColour);
    // return randomNumber = Math.floor(Math.random() * 3);
}

function showUserSequence(index) {
    setTimeout(function () {        
        console.log("showUserSequence func");
        // for (let i = 0; i < gamePattern.length; i++) {
        //     console.log("gamePattern (showUserSequence): " + gamePattern[i]);
        //     $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
        //     var sound = new Audio("./sounds/" + gamePattern[i] + ".mp3");
        //     sound.play();        
        // }
        $("#level-title").text('Level ' + (gamePattern.length));
        setTimeout(() => {
            // console.log("gamePattern...");
            // console.log(gamePattern);
            // console.log("gamePattern (showUserSequence): " + gamePattern);
            // console.log("gamePattern - index: " + index);
            $("#" + gamePattern[index-1]).fadeOut(100).fadeIn(100);
            // $("#level-title").text('Level ' + index + 1);
            var sound = new Audio("./sounds/" + gamePattern[index-1] + ".mp3");
            // console.log("Sound (showUserSequence:" + "sounds/" + gamePattern[index-1] + ".mp3");
            sound.muted = false;
            sound.autoplay = true;
            sound.play();
        }, 1000);
        // if (index < gamePattern.length) {
        //     console.log("gamePattern lenght: " + gamePattern.length);
        //     showUserSequence(index);
        // }
    })


    // $("#level-title").text('Sequence demonstration... Level:' + gamePattern.length);
    // setTimeout(function() {
    //     console.log("Sequence " + index + ": " + gamePattern[index]);
    //     $("#" + gamePattern[index]).fadeOut(100).fadeIn(100);
    //     var sound = new Audio("sounds/" + gamePattern[index] + ".mp3");
    //     sound.play();
        
    //     // Increment index for the next iteration
    //     index++;

    //     // Check if there are more iterations to run
    //     if (index < gamePattern.length) {
    //         // Call the function recursively with the updated index after a delay
    //         playSoundSeqDemo(index);
    //     }
    // }, 800); // Adjust the delay time (in milliseconds) as needed
}

function gameOver() {
    console.log("Game Over...");
    $("#level-title").text("Game over... Press Any Key To Restart");
    $("body").css("background-color", "red").fadeOut(200).fadeIn(200);
    var sound = new Audio("sounds/wrong.mp3");
    sound.muted = false;
    sound.autoplay = true;
    sound.play();
    setTimeout(() => {
        $("body").css("background-color", "#011F3F");
    }, 100);
    $("body").keypress(function () {
        gamePattern = [];
        userClickedPattern = [];
        gameOver = false;
        console.log("Restarting the game...");
        console.log("gameStarted: " + gamePattern);
        console.log("userClickedPattern: " + userClickedPattern);
        console.log("gameStarted lenght: " + gamePattern.length);
        console.log("userClickedPattern lenght: " + userClickedPattern.length);
        nextSequence();                
        showUserSequence(1);
        gameStarted = true;
        setTimeout(() => {                    
            checkButtonClick();
        }, 3000);
    });
}

function checkButtonClick() {
    console.log("#############################################################################");
    console.log("checkButtonClick func");
    $(".btn").on("click", function (event) {
        var userChosenColour = event.target.id;
        console.log("Element id: " + userChosenColour);        
        userClickedPattern.push(userChosenColour);
        console.log("Element clicked pattern: " + userClickedPattern);
        console.log(userClickedPattern);
        if (!gameOverStatus) {
            $("#" + userChosenColour).fadeOut(100).fadeIn(100);
            var sound = new Audio("sounds/" + userChosenColour + ".mp3");
            console.log("Sound (checkButtonClick:" + "sounds/" + userChosenColour + ".mp3");
            sound.muted = false;
            sound.autoplay = true;
            sound.play();
        }
        console.log("gamePattern:" + gamePattern);
        console.log("userClickedPattern:" + userClickedPattern);
        console.log("gamePattern[userClickedPattern.length-1]:" + gamePattern[userClickedPattern.length-1]);
        console.log("userClickedPattern[userClickedPattern.length-1]:" + userClickedPattern[userClickedPattern.length-1]);
        // if (gamePattern[userClickedPattern.length-1] != userClickedPattern[userClickedPattern.length-1]) {
        //     gameOver();
        // }
        // else {
            
        // }
        console.log("gamePattern lenght: " + gamePattern.length);
        console.log("Userpattern lenght: " + userClickedPattern.length);
        // if (gamePattern.length == 1) {
        //     // console.log("gamePattern.length == 1");
        //     // if (gamePattern[0] != userClickedPattern[0]) {
        //     //     gameOverStatus = true;
        //     //     gameOver();
        //     // // if (gamePattern[userClickedPattern.length-1] != userClickedPattern[userClickedPattern.length-1]) {
        //     // //     gameOver();
        //     // }
        // }
        if (gamePattern.length > 1 && userClickedPattern.length < gamePattern.length) {
            console.log("gamePattern.length > 1 && userClickedPattern.length < gamePattern.length");
            if (gamePattern[userClickedPattern.length-1] != userClickedPattern[userClickedPattern.length-1]) {
                gameOverStatus = true;
                gameOver();
            }
        }
        else if (!gameOverStatus && gamePattern.length == userClickedPattern.length) {
            if (gamePattern.length == 1) {
                console.log("gamePattern.length == 1");
                if (gamePattern[0] != userClickedPattern[0]) {
                    gameOverStatus = true;
                    gameOver();
                // if (gamePattern[userClickedPattern.length-1] != userClickedPattern[userClickedPattern.length-1]) {
                //     gameOver();
                }
                else {
                    console.log("!gameOverStatus && gamePattern.length == userClickedPattern.length");
                    nextSequence();
                    setTimeout(() => {                      
                        showUserSequence(gamePattern.length);     
                        startGame();           
                    }, 2000); 
                }
            }
            else {
                console.log("!gameOverStatus && gamePattern.length == userClickedPattern.length");
                nextSequence();
                if (gamePattern[userClickedPattern.length != userClickedPattern[userClickedPattern.length]]) {
                    setTimeout(() => {                      
                        showUserSequence(gamePattern.length);     
                        startGame();           
                    }, 2000); 
                }                
            }            
        }
    })    
}



startGame();
// checkButtonClick();
// showUserSequence();

