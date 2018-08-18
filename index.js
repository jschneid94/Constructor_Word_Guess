// MODULES
const inquirer = require("inquirer");
const Word = require("./Word");

// GLOBAL VARIABLES
var guessesLeft;
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
        var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        var chosenWord = new Word(randomWord);
        chosenWord.returnWord();
        playGame(chosenWord);
    } else {
        process.exit();
    }
});

function startGame() {
    guessesLeft = 10;
    // function for choosing word
    lettersGuessed = [];
}

function chooseRandomWord() {
    
}

function playGame(word) {
    if (guessesLeft > 0) {
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then(function(response) {
            word.checkWord(response.guess);
            // if(word.checkWord(response.guess)) {
                word.returnWord();
            // } else {
                // guessesLeft--;
                // console.log("Incorrect! Remaning guesses: " + )
            // }
            playGame(word);
        });
    } else {
        console.log("You lose!");
        playAgain();
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

