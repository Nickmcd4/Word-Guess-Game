//Here lies first attempt, may he RIP

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


  var fish = ["octopus", "shark","anglerfish","clownfish","squid", "makerel", "bluegill", "stingray", "dolphin", "seahorse", "turtle", "whale", "porpoise","seastar", "orca", "jellyfish"];
  var word = "";
  var letters= [];
  var wrongLetters = [];
  var underScores = [];
  

  var num = 0;
  var guessesLeft = 9;
  var losses = 0;
  var wins= 0;
  var underScores = [];

//end variables
  function gameStart() {
    word = fish[Math.floor(Math.random() * fish.length)];
    letters = word.split("");
    num = letters.length;
    guessesLeft = 9;
    wrongLetters = [];
    underScores = [];
    //console.log(word)

    for(var i = 0; i < num; i++) {
      underScores.push("_")
      //console.log(underScores)
    }
           //add all new stats to html page 
    document.getElementById("answer").innerHTML = underScores.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;


  };
    
//We out here tryna function, man we out here tryna function 
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
        //console.log(underScores)
      }         
    }
  } else {
      wrongLetters.push(letter);
      guessesLeft--;
  }
  
};


gameStart();

//win lose where to go
function newGame() {
    document.getElementById("answer").innerHTML = underScores.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;     //collects all the html and assigns variables
    document.getElementById("answersGuessed").innerHTML = wrongLetters;

   
  if(letters.toString() == underScores.toString()) { //winners get some points 
    wins++
    document.getElementById("wins").innerHTML = wins;
    alert("YOU WIN!! The word was: " + word);
    gameStart();
    
  } else if (guessesLeft===0) { //losers get points upon losing
      losses++
      document.getElementById("losses").innerHTML = losses;
      alert("NICE TRY LOSER! The word was: " + word);
      gameStart();
      
  }
};

//event listener
document.onkeyup = function(event) { 
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  letterCheck(userGuess);
  newGame();
  //console.log(userGuess);
};


var sample = document.getElementById("foobar");
sample.play();

