/*var fishTypes = ["cod", "guppy","shark", "trout", "eel", "mackerel", "salmon", "goldfish" ];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord;
var correctGuess = 0;


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
    document.getElementById("lettersGuessed").innerHtml = userGuesses;
}

document.onkeyup = function (event) {
    userGuesses = event.key;
    console.log(userGuesses);
    
    
    if (randWord.indexOf(userGuesses) >= 0) {
        console.log('correct');
        for(var i = 0; i < randWord.length; i++) {
            if(randWord[i] === userGuesses) {
                underScores[i] = userGuesses;
                console.log(underScores);
                document.getElementById("guesses").innerHTML = underScores.join("");
                correctGuess++;
                winlose();
            }
        }
    }
        else {
            wrongLetter.push(userGuesses);
            console.log("incorrect");
            console.log("wrongLetter");
            guessesLeft--;
            console.log(guessesLeft);
            document.getElementById("RemainingGuesses").innerHTML = guessesLeft;
            document.getElementById("lettersGuessed").innerHtml = userGuesses;

            winlose();
        }
    
}

function winlose (){
    if (correctGuess === randWord.length) {
        alert("WINNER!!!");

    }
    else if (guessesLeft === 0) {
        alert("NICE TRY LOSER");

    }
}
startGame();

*/


  var fish = ["octopus", "shark","anglerfish","clownfish","squid", "makerel", "bluegill"];
  var word = "";
  var letters= [];
  var underScores = [];
  var wrongLetters = [];

  var num = 0;
  var guessesLeft = 12;
  var losses = 0;
  var wins= 0;
  var underScores = [];

//end variables
  function gameStart() {
    word = fish[Math.floor(Math.random() * fish.length)];
    letters = word.split("");
    num = letters.length;
    guessesLeft = 12;
    wrongLetters = [];
    underScores = [];
    console.log(word)

    for(var i = 0; i < num; i++) {
      underScores.push("_")
      console.log(underScores)
    }
           //add all new stats to html page 
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answer").innerHTML = underScores.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;


  };
    

function letterCheck (letter) {

  var letterInWord = false;

  for(var i = 0; i < num; i++) {

    if (letter == word[i]) {
      letterInWord = true;
    }
  }
 
  if (letterInWord) {
    for(var i = 0; i < num; i++) {
      if (word[i] == letter) {
        underScores[i] = letter;
        console.log(underScores)
      }         
    }
  } else {
      wrongLetters.push(letter);
      guessesLeft--;
  }
  
};


gameStart();


function newGame() {
    document.getElementById("answer").innerHTML = underScores.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answersGuessed").innerHTML = wrongLetters;

   
  if(letters.toString() == underScores.toString()) {
    wins++
    document.getElementById("wins").innerHTML = wins;
    gameStart();
    alert("YOU WIN!!");
  } else if (guessesLeft===0) {
      losses++
      document.getElementById("losses").innerHTML = losses;
      gameStart();
      alert("NICE TRY LOSER");
  }
};

//event listener
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  newGame();
  letterCheck(userGuess);
};

// //end































var sample = document.getElementById("foobar");
sample.play();

