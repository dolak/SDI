/*
Alexander Dolak
SDI
5/19/15
 */
// second commit evenArray


//my code
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
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var returnedArray = [];

function evenArray(argArray){

    var newArray = [];
    var modNum;

    console.log(argArray);


}


returnedArray = evenArray(numberArray);