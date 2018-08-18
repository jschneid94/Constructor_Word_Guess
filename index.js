// MODULES
const inquirer = require("inquirer");
const Word = require("./Word");

// GLOBAL VARIABLES
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var wordBank = ["test", "guess", "constructor"];

console.log(wordBank);

inquirer.prompt([
    {
        name: "startMenu",
        type: "list",
        message: "Word Guess Game!",
        choices: ["Start", "Exit"]
    }   
]).then(function(response) {
    if (response === "Start") {
        var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        var chosenWord = new Word(randomWord);
        playGame(chosenWord);
    } else {
        process.exit();
    }
});



function playGame(word) {

    if (guessesLeft > 0) {
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then(function(response) {
            word.checkWord(response);
            word.returnWord();
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
        if (response === true) {
            playGame();
        } else {
            process.exit();
        }
    })
}

