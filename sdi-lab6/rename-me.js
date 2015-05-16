alert("JavaScript works!");

//global


//function
function smashBrothers(){
    //arrays
    var myCharacters = ["Marth", "Captain Falcon", "Pikachu", "Link", "Dr. Mario"];
    var characterGames = ["Fire Emblem", "F-Zero", "Pokemon", "Legend of Zelda", "Mario"];

    //for loop
    for(var i = 0; i < myCharacters.length; i++){
        console.log(myCharacters[i] + " is from the game " + characterGames[i]);
    }
if(myCharacters[i] === "Pikachu"){
    myCharacters["2"] = "Jigglypuff"
    console.log(myCharacters)
} else{
    console.log(myCharacters)
}

}
//function call
smashBrothers();
