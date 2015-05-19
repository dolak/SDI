//alert("JavaScript works!");

//global


//function
function smashBrothers(){
    //arrays
    var myCharacters = ["Captain Falcon", "Pikachu", "Link", "Dr. Mario", "Pikachu"];
    var characterGames = ["F-Zero", "Pokemon", "Legend of Zelda", "Mario", "Pokemon"];
    var noMore;
    var main;

    console.log("These are the characters I play competitively in Super Smash Bros. Melee and the games they are from.")

    //Here I am stating what characters I play and their games or origin
    for(var i = 0; i < myCharacters.length; i++){
        if (myCharacters[i] === "Pikachu") {
            myCharacters[1] = "Jigglypuff"  // Here I am changing one of the characters to another.
            console.log(myCharacters[i] + " is from the game " + characterGames[i]);
        } else {
            console.log(myCharacters[i] + " is from the game " + characterGames[i]);
        }
    }
    console.log("They are oredered by how well I play them.")
    console.log("")


    noMore = myCharacters.pop();        //Here I am removing a character that I no longer play.
    for(var i = 0; i < myCharacters.length; i++) {
        console.log(myCharacters[i] + " is from the game " + characterGames[i]);
    }
    console.log("I took " + noMore + " out because I do not play them anymore.");

    console.log("")
    main = myCharacters[0];
    console.log("The main character I play is " + main);//Here I am stating what the #1 position in the list is
    console.log("")

    myCharacters.unshift("Marth");          //Here I am putting in another character and the game they are from.
    characterGames.unshift("Fire Emblem");

    console.log("")
    console.log("I forgot about another character. Here is the updated list.")  //I am showing the user the updated list.
    for(var i = 0; i < myCharacters.length; i++) {
        console.log(myCharacters[i] + " is from the game " + characterGames[i]);
    }
    console.log("")
    main = myCharacters[0];
    console.log("The main character I play is " + main); //This is the new first place character.

}
//function call
smashBrothers();
