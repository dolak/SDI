//alert("JavaScript works!");

var returnedValue;
var userPick = prompt("Are you going to choose the Powerball or the Florida lottery?, Powerball or Florida lottery");
var numUsed;
var limitNum

while(userPick.toLowerCase() != "powerball" && userPick.toLowerCase() != "florida lottery"){

    userPick = prompt("Are you going to choose the Powerball or the Florida lottery?, Powerball or Florida lottery");

}
if (userPick.toLowerCase() === "powerball"){

    numUsed = [0, 0, 0, 0, 0, 0];
    limitNum = 59;

} else {

    numUsed = [0, 0, 0, 0, 0, 0];
    limitNum = 35;

}


function lottoNum(nums, limNum){
    var numbersArray = nums;
    var rand = parseInt(Math.random() * limNum + 1);
    var randOne;

    for(var i = 0; i < numbersArray.length; i++){


        for(var k = 0; k < numbersArray.length; k++){

                randOne = rand;
//This is an excuse to make rand run again and get another random number. It is not an infinite loop because it is
//checking randOne and the rand that is assigned inside the loop and not making randOne the new rand till it gets
//outside the loop.
                while (randOne === rand) {

                    rand = parseInt(Math.random() * limNum + 1);

                    numbersArray[i] = rand;
                }

//This checks against all of the numbers in the array and makes sure that none of them are then same and if they
//are then they will be swapped for a new one
            for (var j = 0; j < numbersArray.length; j++) {
                for (var m = 1; m < numbersArray.length; m++) {
                    if (j >= m) {
                        m = j + 1;
                    }

                    while (numbersArray[j] === numbersArray[m]) {

                        numbersArray[m] = parseInt(Math.random() * limNum + 1)

                    }

                }
            }

        }



        }

    return numbersArray;
    }



returnedValue = lottoNum(numUsed, limitNum);

console.log("Your numbers are: " + returnedValue)