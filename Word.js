const Letter = require("./Letter");

var Word = function(word) {
    this.wordArr = word.split('');

    for (var i = 0; i < word.length; i++) {
        this.wordArr[i] = new Letter(this.wordArr[i]);
    }

    console.log(this.wordArr);

    this.returnWord = function() {
        var wordie;
        for (var i = 0; i < this.wordArr.length; i++) {
            wordie += this.wordArr[i].toString() + " ";
        }
        console.log(wordie);
    }
}

var hello = new Word("hello");

hello.returnWord();