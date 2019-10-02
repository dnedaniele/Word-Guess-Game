
var songsOptions = ["YellowSubmarine", "EleanorRugby", "AllYouNeedIsLove", "StrawberryFieldsForever"];
var pickSong = [];
var showProgress= [];
var wins = 0;
var loss = 0;
var guessesLeft = 15;
var letterGuessed = [];
var userguess;

// Functions

// Pick Random Song

document.onkeyup = function (event) {
    pickSong = songsOptions[Math.floor(Math.random() * songsOptions.length)];
    console.log(pickSong);
    // Write on HTML "current song to be guessed:" "_ _ _ _ _ "  - pick number of letters from pickSong and reproduce the spaces
    for (var i = 0; i < pickSong.length; i++) {
        pickSong[i] = "_";

        var showProgress = pickSong.length;

        empty = showProgress.split("").join(" ");
        console.log(showProgress);
        
    }

    // if the guess of the letter is right: 
//    1. add a letter in the spaces "_ a _ _"
//    2. ++wins
if (userguess === pickSong) {
    wins++;
    alert('you win: ' + wins);
}
// else the guess is wrong 
//    1. --guessesLeft
//    2. ++ loss
else {
    loss++ , guessesLeft--;
    alert('you loose: ' + loss);
    //    3. add letterGuessed = [] CAPITAL
    letterGuessed.push(userguess);
    document.getElementById("youGuessedsoFar").innerHTML = letterGuessed.join(" ").toUpperCase();
}


// each time the userclick (document.onkeyup) --GuessesLeft and useruguessnumb++

var html = '<h3>Press any key to start the game ;)</h3>' + '<p >Wins: ' + wins + '</p>' + '<p>Losses: ' + loss + '</p>' +
    '<p>Number of Guesses Remaining: ' + guessesLeft + '</p>'

document.querySelector('#game').innerHTML = html;

    
   // document.getElementById("answer").innerHTML = showProgress
}

// the player guesses a letter
 
// prompt () {}
// document.onkeyup = function (event) {
//     var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
//     console.log(userguess); }



