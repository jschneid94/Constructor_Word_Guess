const Letter = require("./Letter");

// var guess = process.argv[2];

var Word = function(word) {
    this.wordArr = word.split('');

    for (var i = 0; i < word.length; i++) {
        this.wordArr[i] = new Letter(this.wordArr[i]);
    }

    console.log(this.wordArr);

    this.returnWord = function() {
        var wordie = "";
        for (var i = 0; i < this.wordArr.length; i++) {
            wordie += this.wordArr[i].toString() + " ";
        }
        console.log(wordie);
    }

    this.checkWord = function(char) {
        for(var i = 0; i < this.wordArr.length; i++) {
            this.wordArr[i].check(char);
        }
    }
}

module.exports = Word;

// var hello = new Word("hello");

// hello.checkWord(guess);

// hello.returnWord();