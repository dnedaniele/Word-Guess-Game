
var songsOptions = ["YellowSubmarine", "EleanorRugby", "AllYouNeedIsLove", "StrawberryFieldsForever"];
var pickSong = [];
var numbLettToGuess;
var ShowProgress = []
var wins = 0;
var loss = 0;
var guessesLeft = 15;
var letterGuessed = [];
var userguess;
var n = "_"

// Functions

// Pick Random Song

document.onkeyup = function (event) {
    pickSong = songsOptions[Math.floor(Math.random() * songsOptions.length)];
    console.log(pickSong);
    // Write on HTML "current song to be guessed:" "_ _ _ _ _ "  - pick number of letters from pickSong and reproduce the spaces
    for (var i = 0; i < pickSong.length; i++) {
        ShowProgress[i] = "_";
    }

        var numbLettToGuess = pickSong.length;
        console.log(numbLettToGuess);
 ////**************************************************8

 while (numbLettToGuess > 0) {
    document.getElementById("answer").innerHTML = ShowProgress.join(" ");

    var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userguess);


 }
        


//         function CountSpaces (event, ShowProgress) {
//         var ShowProgress = numbLettToGuess.split(",");
//         };
        
//         document.getElementById("answer").innerHTML = pickSong[numbLettToGuess];
// // reproduce the spaces
//         ShowProgress = // number of spaces _ _ _ = pickSong(numbLettToGuess)
//         document.getElementById

        // empty = numbLettToGuess.split("").join(" ");
    
        
    } 
} 




    // if the guess of the letter is right: 
//    1. add a letter in the spaces "_ a _ _"
//    2. ++wins
//*************************************************** 
// if (userguess === /*pickSong one of the letters making the song title*/) {
//     wins++;
//     alert('you win: ' + wins);
// }
//*********************************************************** */
// else the guess is wrong 
//    1. --guessesLeft
//    2. ++ loss
//********************************************************** */
// else {
//     loss++ , guessesLeft--;
//     alert('you loose: ' + loss);
//     //    3. add letterGuessed = [] CAPITAL
//     letterGuessed.push(userguess);
//     document.getElementById("youGuessedsoFar").innerHTML = letterGuessed.join(" ").toUpperCase();
// }
//***************************************************************************** */

// each time the userclick (document.onkeyup) --GuessesLeft and useruguessnumb++

var html = '<h3>Press any key to start the game ;)</h3>' + '<p >Wins: ' + wins + '</p>' + '<p>Losses: ' + loss + '</p>' +
    '<p>Number of Guesses Remaining: ' + guessesLeft + '</p>'

document.querySelector('#game').innerHTML = html;

    
   // document.getElementById("answer").innerHTML = numbLettToGuess


// the player guesses a letter
 
// prompt () {}
// document.onkeyup = function (event) {
//     var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
//     console.log(userguess); }



