// var guess = process.argv[2];

var Letter = function(letter) {
    
    // A string value to store the underlying character for the letter
    this.character = letter;

    // A boolean value that stores whether that letter has been guessed yet
    this.hasBeenGuessed = true;

    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function() {
        if (!this.hasBeenGuessed) {
            return "_";
        } else {
            return this.character;
        }
    }

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.check = function(char) {
        if (char === this.character) {
            this.hasBeenGuessed = true;
        }
    }
}

module.exports = Letter;

// console.log(guess);

// var g = new Letter(guess);
// var newChar = g.pushChar();
// console.log(newChar);