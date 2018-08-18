const Letter = require("./Letter");

// var guess = process.argv[2];

var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.underscores = [];

    this.splitWord = function() {
        this.letters = this.word.split("");
        for (var i = 0; i < this.letters.length; i++) {
            this.underscores.push("_ ");
        }
    }

    this.generateLetters = function() {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i] = new Letter(this.letters[i]);
        }
    }

    // this.returnWord = function() {
    //     var wordie = "";
    //     for (var i = 0; i < this.wordArr.length; i++) {
    //         wordie += this.wordArr[i].toString() + " ";
    //     }
    //     console.log("\n" + wordie + "\n");
    // }

    // this.checkWord = function(char) {
    //     for(var i = 0; i < this.wordArr.length; i++) {
    //         this.wordArr[i].check(char);
    //     }

    //     // if(this.wordArr[i].check(char) === true) {
    //     //     console.log("Correct!")
    //     // } else {
    //     //     console.log("\nIncorrect!\nGuess Again!\n")
    //     // }
    // }
}

module.exports = Word;

// var hello = new Word("hello");

// hello.checkWord(guess);

// hello.returnWord();