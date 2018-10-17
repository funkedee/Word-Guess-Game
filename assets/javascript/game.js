var wordGuessGame = {
    words: ["portal", "schwifty", "dimension", "scientist", "spaceship", "meeseeks"],
    currentWord: "",
    blankWord: "",
    wins: 0,
    lettersGuessed: "",
    guessesLeft: 10,
    randomWord: function(){
        this.currentWord= this.words[Math.floor(Math.random()*this.words.length)];
        console.log(this.currentWord);
    },
    underlines: function(){
        for (i=0; i<this.currentWord.length; i++) {
            this.blankWord = this.blankWord + "_ ";
        };
        console.log(this.blankWord);
    },
};

document.onkeyup = function (event) {
    if(wordGuessGame.currentWord===""){
        wordGuessGame.randomWord();
        wordGuessGame.underlines();
        var currentWordDiv= document.getElementById("current-word");
        currentWordDiv.textContent= wordGuessGame.blankWord;
    }
    else {
        var letter = event.key.toLowerCase();
        var index = wordGuessGame.currentWord.search(letter);
        if (index >= 0 ) {

        }
        if (index===-1) {
            wordGuessGame.lettersGuessed = wordGuessGame.lettersGuessed + letter + ", ";
            var lettersGuessedDiv = document.getElementById("letters-guessed");
            lettersGuessedDiv.textContent= wordGuessGame.lettersGuessed;
            wordGuessGame.guessesLeft--;
            var guessesLeftDiv = document.getElementById("guesses-left");
            guessesLeftDiv.textContent = wordGuessGame.guessesLeft;

        }
    };
};
console.log(wordGuessGame.lettersGuessed)