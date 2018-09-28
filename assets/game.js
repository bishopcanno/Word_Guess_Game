function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
var alphabet = genCharArray('a', 'z');
  
var wins = 0;
var losses = 0;
var remainingGuessCount = 5;

document.onkeypress = function(event) {
    var guessRecordDiv = document.querySelector('#guessRecord');
    var reset = false;
    var userGuess = event.key.toLowerCase();
    
    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    if (alphabet.indexOf(event.key) !== -1) {
 
        if (userGuess === compGuess){
            wins++;
            reset = true;

        } else if (userGuess !== compGuess){
            remainingGuessCount--;
            
            if (remainingGuessCount === 0){
                losses++;
                reset = true;
            }                
        }

        if (reset) {
            while (guessRecordDiv.hasChildNodes()) {
                guessRecordDiv.removeChild(guessRecordDiv.firstChild);
            }
            remainingGuessCount = 5;
        } else {
            var lastGuessSpan = document.querySelector('#last-guess');
            lastGuessSpan.innerHTML = userGuess;
            guessRecordDiv.appendChild(lastGuessSpan);
        }

        var htmlScore = "<h3>Wins: " + wins + "</h3>" +
            "<h3>Losses: " + losses + "</h3>" +
            "<h3>Guesses left: " + remainingGuessCount + "</h3>" + 
            "<h3>Past guesses:<span id = 'last-guess'></span></h3>";

            document.querySelector("#scoreBoard").innerHTML = htmlScore;
    }
};