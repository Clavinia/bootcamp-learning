function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.
    var nameList = names;
    var randomNumber = Math.floor( Math.random() * names.length );
    var poorSoul = names[randomNumber];
    var message = poorSoul + " is going to buy lunch today!"
    return message;




/******Don't change the code below*******/
}

var gente = ["Fahr", "Zarot", "Rowen", "Diana", "Gal", "Seras", "Vivek", "Derek"];

console.log(gente);
console.log(whosPaying(gente));
