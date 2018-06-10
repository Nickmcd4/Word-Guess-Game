var fishTypes = ["cod", "guppy","shark", "trout", "eel", "mackerel", "salmon", "goldfish" ];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord;

function startGame() {
    randWord = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    console.log(randWord);

    for (var i = 0; i < randWord.length; i++){
        console.log(i);
        underScores.push(" _ ");
    }
    console.log(underScores);

    document.getElementById ("guesses").innerHTML = underScores.join("");

    //new game
    wrongLetter = [];
    guessesLeft = 9;

    document.getElementById("RemainingGuesses").innerHTML = guessesLeft;
}

document.onkeyup = function (event) {
    userGuesses = event.key;
    console.log(userGuesses);
}

startGame();


































var sample = document.getElementById("foobar");
sample.play();

