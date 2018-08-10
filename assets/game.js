// function genCharArray(charA, charZ) {
    // var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    // for (; i <= j; ++i) {
        // a.push(String.fromCharCode(i));
    // }
    // return a;
// }
// genCharArray('a', 'z');
// a way to write an alphabet array as a funtion, dont fully understand how it works yet and thus dont want to use it, ask instrs.

var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guesses = 5;
document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    
    var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
    //perhaps use a for loop to solve this convoution?
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g")
        || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n")
        || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u")
        || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
            
        //   console.log(userGuess);
        //   console.log(compGuess);
          // code good through here
        if (userGuess === compGuess){
            wins++;
            guesses = 5;

        }
        // code good through here
        else if (userGuess !== compGuess){
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
        
      
        document.querySelector("#scoreBoard").innerHTML = htmlScore;

    }
};