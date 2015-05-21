/*
Alexander Dolak
SDI
5/21/15
 */
// lecture
if(false) {
//using .indexOf() // this is case sensitive
//find if the substring "adam" appears in the string and where
    var myINdexOf = "Madam, I'm Adam.";

//using .lastIndexOf()
//find if the substring "time" appears in the string and where
    var myLastIndexOf = "There is a time and a place for everything, and there is neither";

//using  substr()
//output the string "data" from the string
    var mySubStr = "This class is called scalable data infrastructures";

//using substring()
//output the substring between two index numbers in the strinf
    var mySubString = "life, the universe, and Everything.";

//using charAt()
//find the character at index position 7
    var myEmail = "abdolak@fullsail.edu"

//using .split()
// split the string into an array and output each item individually
    var mySplit = "Now is the time for all good men to com to the aid of the party.";


//functions
    function wheresAdam(whereIsIt) {

        var where = whereIsIt.lastIndexOf("dam");
        var where2 = whereIsIt.indexOf("dam");
        return [where, where2];

    }

    function subStrFunction(hitchArg) {
        var theT = hitchArg.indexOf("t");
        var theComma = hitchArg.indexOf(",", theT);
        ;

        var theUniverse = hitchArg.substring(theT, theComma);
        return theUniverse;

    }

    function substrFunction(hitchArg) {

        var everything = hitchArg.substr(24);

        return everything

    }

    function charAtFunction(emailArg) {
        var atSymbol = emailArg.charAt(7);

        return atSymbol;
    }

    function splitString(stringToSplit) {

        var splitArray = stringToSplit.split(" ", 4);

        return splitArray;

    }

    function changeCase(caseString) {
        var newString = caseString.toUpperCase();

        return newString;
    }

//main code
//console.log("The index is " + wheresAdam(myINdexOf))
//console.log("we've returned " + substrFunction(mySubString));
//console.log("The character at indec 7 is " + charAtFunction(myEmail));
//var returnedArray = splitString(mySplit);
//console.log(returnedArray);
//
//for (var each in returnedArray){
//    console.log(returnedArray[each]);
//}
//
}


//problem


    var ourString;
    var returnedString;

    function initialCaps(argString){

        var newString;
        var strArray;
        var currentWord;
        var newWord = "";

        //uppercase everything
        newString = argString.toUpperCase();

        strArray = newString.split(" ");

        for(var each in strArray){

            currentWord = strArray[each];

            for(var char in strArray[each]){

                if (char != 0){

                    currentChar = currentWord[char].toLowerCase();
                    newWord = newWord + currentChar;


                } else {
                    newWord = newWord + currentWord[0];

                }

            }
            newWord = newWord + " ";

        }
            return newWord;

    }

    ourString = prompt("enter string to initial cap: ", "i am batman");

    returnedString = initialCaps(ourString);

    console.log(returnedString);

}