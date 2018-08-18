// MODULES
const inquirer = require("inquirer");
const Word = require("./Word");

// GLOBAL VARIABLES
var guessesLeft;
var correctGuesses;
var wins = 0;
var losses = 0;

var lettersGuessed;

var wordBank = ["test", "guess", "constructor"];

// console.log(wordBank);

inquirer.prompt([
    {
        name: "startMenu",
        type: "list",
        message: "Word Guess Game!",
        choices: ["Start", "Exit"]
    }   
]).then(function(response) {
    if (response.startMenu === "Start") {
        console.log("Great! Let's start.")
        startGame();
    } else {
        process.exit();
    }
});

function startGame() {
    guessesLeft = 10;
    chooseRandomWord();
    lettersGuessed = [];
}

function chooseRandomWord() {
    console.log("I've just chosen a random word. Try to guess what it is!");
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var chosenWord = new Word(randomWord);
    chosenWord.splitWord();
    chosenWord.generateLetters();
    guessLetter();
}

function guessLetter() {
    if (guessesLeft > 0 || correctGuesses < chosenWord.letters.length) {
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter: ",

            }
        ]).then(function(response) {
            lettersGuessed.push(response.letter);

            userGuessedCorrectly = false;

            for (var i = 0; i < chosenWord.length; i++) {
                if (response.letter === chosenWord.letters[i].character && chosenWord.letters[i].hasBeenGuessed === false) {
                    chosenWord.letters[i].hasBeenGuessed = true;
                    userGuessedCorrectly = true;
                    chosenWord.underscores[i] = response.letter;
                    lettersGuessed++
                }
            }

            chosenWord.split();
            chosenWord.generateLetters();

            if (userGuessedCorrectly) {
                console.log("Correct!!");
                // function to check if user won
            } else {
                console.log("Incorrect!")
                console.log("You have " + guessesLeft + " guesses left.\n");
                // function to check if user won
            }
        });
    } 
}

function playAgain() {
    inquirer.confirm([
        {
            name: "playAgain",
            message: "Play again?"
        }
    ]).then(function(response) {
        if (response.playAgain === true) {
            playGame();
        } else {
            process.exit();
        }
    })
}

