function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
var compChoice = genCharArray('a', 'z');
  


// var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guesses = 5;
document.onkeypress = function(event) {

    var userGuess = event.key.toLowerCase();
    
    var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
    
    if ((userGuess.charCodeAt(0) >= 97 && userGuess.charCodeAt(0) <= 122)){
        //certain ancilary keys are giving me viable number e.g. capslock returns a value of 99, which is valid because the string capslock at index 0 is 99 or c, but y? use onkeypress
        
        console.log(userGuess.charCodeAt(0));
        //   console.log(userGuess);
        //   console.log(compGuess);
        if (userGuess === compGuess){
            wins++;
            guesses = 5;

        } else if (userGuess !== compGuess){
            guesses--;
                if (guesses === 0){
                    losses++;
                    guesses = 5;
                }
                
        } 
        
        var htmlScore =
        "<h3>Wins: " + wins + "</h3>" +
        "<h3>Losses: " + losses + "</h3>" +
        "<h3>Guesses left: " + guesses + "</h3>" +
        "<h3>Last letter selected: " + userGuess + "</h3>";
        // need to figure out how to make it display all the letters the user inputs
        
      
        document.querySelector("#scoreBoard").innerHTML = htmlScore;

    }
};