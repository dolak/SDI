/*
Alexander Dolak
SDI
5/12/15
 */

//if statements
if(false) {
    var firstName = "Alexander",
        lastName = "Dolak",
        yourFirstName,
        yourLastName;


    yourFirstName = prompt("Please enter a name", "Type your name here:");
    yourLastName = prompt("Enter a last name", "Type your last name here:")
    if (yourFirstName === firstName && yourLastName === lastName) {
        console.log("You are correct!");
    } else if (yourFirstName === "Gir") {
        console.log("What is it?");
        if (yourLastName === "Zim") {
            console.log("A hunter destroyer machine.");
        } else {
            console.log("Intruder!")
        }

    } else {
        console.log("Intruder!")
    }
}

//while loops
if(false) {
    var myName = "Alex"
    var newName

    while (myName != newName) {
        newName = prompt("type in your name.", "type here:")
    }
}
if(false) {
    var myNumber = 10;

    while (myNumber < 15) {
        console.log("My number is: " + myNumber);
        myNumber++;
    }
}

//for loops (bottles of pop on the wall)
if(true) {
    for (var pop = 99; pop >= 1; pop--) {
        if(pop === 1){
            console.log(pop + " bottle of pop on the wall");
            console.log(pop + " bottle of pop!");
        } else {
            console.log(pop + " bottles of pop on the wall");
            console.log(pop + " bottles of pop!");
        }
        console.log("Take one down, pass it around, ");

        if (pop > 2){
            console.log(pop - 1 + " bottles of pop in the wall");
        } else if(pop == 1){
            console.log("No more bottles of pop on the wall");
        } else {
            console.log(pop - 1 + " bottle of pop in the wall");
        }
        console.log("");

    }
}