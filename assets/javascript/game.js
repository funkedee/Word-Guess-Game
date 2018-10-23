
var wordGuessGame = {
    alphabet: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r,  s, t, u, v, w, x, y, z",
    words: ["PORTAL", "SCHWIFTY", "DIMENSION", "SCIENTIST", "SPACESHIP", "MEESEEKS", "GALACTIC", "UNIVERSE", "PLANET", "FEDERATION", "NEEDFUL", "BIRDPERSON", "REALITY", "PICKLE", "SUMMER", "SQUANCHY", "CRONENBURG", "EYEHOLES", "VINDICATORS"],
    currentWord: "",
    blankWord: "",
    wins: 0,
    lettersGuessed: "",
    guessesLeft: 10,
    randomWord: function(){
        this.currentWord= this.words[Math.floor(Math.random()*this.words.length)];
    },
    underlines: function(){
        for (i=0; i<this.currentWord.length; i++) {
            this.blankWord = this.blankWord + "_";
        };
    },
    startGame: function(){
        this.randomWord();
        this.underlines();
        var currentWordDiv= document.getElementById("current-word");
        currentWordDiv.textContent= wordGuessGame.blankWord;
    },
    correctLetter: function (){
        this.blankWord= this.blankWord.substr(0,index)+ letter + this.blankWord.substr(index+1);
        var currentWordDiv= document.getElementById("current-word");
        currentWordDiv.textContent= this.blankWord;
    },
    restart: function (){
        this.guessesLeft= 10;
        this.lettersGuessed= "";
        this.blankWord= "";
        var lettersGuessedDiv = document.getElementById("letters-guessed");
        lettersGuessedDiv.textContent= this.lettersGuessed;
        var guessesLeftDiv = document.getElementById("guesses-left");
        guessesLeftDiv.textContent = this.guessesLeft;
        this.startGame();
    },
};

// start game
document.onkeyup = function (event) {
    if(wordGuessGame.currentWord===""){
        wordGuessGame.startGame();
    }
    else {
        // search word for guessed letter
        var letter = event.key.toLowerCase();
        var indexes =[];
        if (wordGuessGame.alphabet.search(letter) >= 0) {
            for(i=0; i<wordGuessGame.currentWord.length; i++) {
               if(wordGuessGame.currentWord.toLowerCase().charAt(i)===letter) {
                indexes.push(i);
               }
            }
        }
        //correct letter
        if (indexes !== [] ) {
            for(i=0; i<indexes.length; i++) {
                var index= indexes[i];
                wordGuessGame.blankWord= wordGuessGame.blankWord.substr(0,index)+ wordGuessGame.currentWord[index] + wordGuessGame.blankWord.substr(index+1);
            }
            var currentWordDiv= document.getElementById("current-word");
                currentWordDiv.textContent= wordGuessGame.blankWord;
        }
        // incorrect letter
        if (indexes.length === 0 && wordGuessGame.lettersGuessed.search(letter)===-1 && wordGuessGame.alphabet.search(letter)>=0) {
            wordGuessGame.lettersGuessed= wordGuessGame.lettersGuessed + letter +", ";
            var lettersGuessedDiv = document.getElementById("letters-guessed");
            lettersGuessedDiv.textContent= wordGuessGame.lettersGuessed.toUpperCase();
            wordGuessGame.guessesLeft--;
            var guessesLeftDiv = document.getElementById("guesses-left");
            guessesLeftDiv.textContent = wordGuessGame.guessesLeft;
        }
        // win game and restart
        if (wordGuessGame.blankWord===wordGuessGame.currentWord){
            wordGuessGame.wins++;
            var winsDiv = document.getElementById("wins");
            winsDiv.textContent= wordGuessGame.wins;
            alert("You Win!");
            wordGuessGame.restart();
        }
        // lose game and restart
        if (wordGuessGame.guessesLeft === 0){
            alert("You lose. The word was " + wordGuessGame.currentWord);
            wordGuessGame.restart();
        }
    }
 };