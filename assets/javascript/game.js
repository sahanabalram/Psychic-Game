function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var userGuess = " ";
// Creating variables to hold the number of wins, losses. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var generate = getRandomArbitrary(97, 122);
document.onkeypress = function (event) {

    var userGuess = event.key;
    if (generate === userGuess.charCodeAt(0)) {
        wins++;
        generate = getRandomArbitrary(97, 122);
        guessesLeft = 9;
        document.querySelector("#your-guess-so-far").innerHTML = " ";
    } else {
        guessesLeft--;
        document.querySelector("#your-guess-so-far").innerHTML = document.querySelector("#your-guess-so-far").innerHTML + userGuess + " ,";
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            generate = getRandomArbitrary(97, 122);
            document.querySelector("#your-guess-so-far").innerHTML = " ";
        }
    }
    document.querySelector("#wins").innerHTML = wins.toString();
    document.querySelector("#losses").innerHTML = losses.toString();
    document.querySelector("#guesses-left").innerHTML = guessesLeft.toString();

};