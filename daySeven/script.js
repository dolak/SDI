/*
Alexander Dolak
SDI
5/19/15
 */
// second commit evenArray


//my code before the teacher.     C++ is kinda messing me up. it is similar but very different at the same time.
if(false) {


    var array = [1, 2, 3, 4, 5, 6]
    var barrel;

    function evenNumbers(array) {
        var newArray = [];

        for (var i = 0; i < 5; i++) {

            if (array[i] % 2 === 0) {
                newArray[i] = array[i];
            }

        }
        return newArray;

    }

    evenNumbers();
    barrel = evenNumbers();
    console.log(barrel);
}

//teacher code
if(true) {


    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var returnedArray = [];
    var userPrompt;

    userPrompt = prompt("Enter 'odd' or 'even' into the console.");

    while (userPrompt.toLowerCase() != "odd" && userPrompt.toLowerCase() != "even"){

        userPrompt = prompt("Imma computa. Stop entering stuff I don't understand")
    }


    function evenArray(argArray, oddOrEven) {

        var newArray = [];
        var modNum;
        var zeroOrOne;
        //var newArgArray =  new Array(argArray);

        if(oddOrEven.toLowerCase() === "odd"){

            zeroOrOne = 1;

        } else {

            zeroOrOne = 0;
        }

        for (var i = 0; i < argArray.length; i++) {
            modNum = argArray[i] % 2

            if (modNum === zeroOrOne) {

                newArray.push(argArray[i]);
            }


        }

        //argArray.pop();
        //console.log("argArray " + argArray);
        //console.log("neaArgArray " + newArgArray);
        return newArray;

    }
    returnedArray = evenArray(numberArray, userPrompt);

    console.log("The " + userPrompt + " numbers in the array are " + returnedArray);
    console.log("numberArray " + numberArray)
}