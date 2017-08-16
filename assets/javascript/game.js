function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var userGuess = " ";
// Creating variables to hold the number of wins, losses. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var generate = getRandomArbitrary(96, 123);
document.onkeypress = function (event) {
    console.log(generate);
    var userGuess = event.key;
    if (generate === userGuess.charCodeAt(0)) {
        wins++;
        console.log("you won:", wins);
        generate = getRandomArbitrary(96, 123);
        guessesLeft = 9;
    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            losses++;
            console.log("lost game", losses);
            guessesLeft = 9;
            generate = getRandomArbitrary(96, 123);
        }
    }
};