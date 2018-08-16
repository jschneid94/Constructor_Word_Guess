var guess = process.argv[2];

var Letter = function(letter) {
    
    // A string value to store the underlying character for the letter
    var character = letter;

    // A boolean value that stores whether that letter has been guessed yet
    var hasBeenGuessed = false;

    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    function toString() {
        if ()
    }

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    function check(char) {
        if (char === character) {
            hasBeenGuessed === true;
        }
    }
}

Letter(guess);