// MODULES
const inquirer = require("inquirer");
const prompt = require("prompt");

// GLOBAL VARIABLES
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var Prompt = function() {
    if (guessesLeft > 0) {
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess the letter!"
            }
        ]).then(function(answers) {

        });
    }
}

Prompt();