/*
Alexander Dolak
SDI
5/14/15
 */
//for loop
if(false) {
    var frontRight;
    var frontLeft;
    var backRight;
    var backLeft;
    var tirePressure;
    var tireLocation;

    for (var i = 0; i < 4; i++) {

        if (i === 0) {
        } else if (i === 1) {
            tireLocation = "front right";
        } else if (i === 2) {
            tireLocation = "front left";
        } else if (i === 3) {
            tireLocation = "rear right";
        } else {
            tireLocation = "rear left";
        }

        tirePressure = parseFloat(prompt("What is the tire pressure of the " + tireLocation + " tire?"));

        if (i === 0) {
        } else if (i === 1) {
            frontRight = tirePressure;
        } else if (i === 2) {
            frontLeft = tirePressure;
        } else if (i === 3) {
            backRight = tirePressure;
        } else {
            backLeft = tirePressure;
        }

    }
}

//fun with top down
if(false) {
    var foo = 1;
    var bar = 2;
    var baz = 3;

    console.log(foo + "" + bar + "" + baz);
}

//fun with functions
if(true) {
//global var
    var globalName = "Bob";
    var returnedVariable;
    var checkedName;

    function nameFetcher() {
        var myName = prompt("Enter your name: ", "Type here:");

        return myName;
    }

    function nameChecker(nameArgument) {

        var trueName;

        //console.log("The nameChecker function recieved " + nameArgument);
        if(nameArgument === "Optimus"){
            trueName = true;
        } else {
            trueName = false;
        }
        return trueName;


    }

//main code that calls the function

    returnedVariable = nameFetcher();

    checkedName = nameChecker(returnedVariable)

    if(checkedName){
        console.log("Hello");
    } else{
        console.log("Intruder!");
    }
    //console.log("Hello there, " + returnedVariable + ".");


}

