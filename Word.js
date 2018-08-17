const Letter = require("./Letter");

var Word = function(word) {
    this.wordArr = word.split('');

    for (var i = 0; i < word.length; i++) {
        this.wordArr[i] = new Letter(this.wordArr[i]);
    }

    console.log(this.wordArr);

    // this.returnWord = function() {
    //     for (var i = 0; i < this.wordArr.length; i++) {
    //         this.wordArr[i]
    //     }
    // }
}

Word("hello");
