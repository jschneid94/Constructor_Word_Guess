const Letter = require("./Letter");

var Word = function(word) {
    this.wordArr = word.split('');

    for (var i = 0; i < word.length;) {
        this.wordArr[i] = new Letter(this.wordArr[i]);
    }
}