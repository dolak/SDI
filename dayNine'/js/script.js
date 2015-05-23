/*
 Alexander Dolak
 SDI
 5/23/15
 */

function goodDates(){

    var myDate = "5-23-2016";

    console.log(myDate);

    var newDate = new Date(2015, 4, 23);
    var secondDate = new Date(myDate)

    var dayOfWeek = newDate.getDay();

    switch(dayOfWeek){
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
        Default:
            dayOfWeek = "I'm sorry this is not a day of the week."
            break;
    }

    console.log(newDate/*.toDateString()//this is to make the date easier for people to read*/);
    console.log(secondDate)

    dateDiff = dateDiff / 1000 / 60 / 60 / 24 ;

    dateDiff = newDate = secondDate;

    console.log(dateDiff);
}



function mathMethods(agePrompt){
    /*random
     var myRandom = Math.floor(Math.random() * (max - min) + min);

     console.log(myRandom);
     */
    /*
    while (isNaN(agePrompt)) {

        agePrompt = prompt("Enter a number please: ");

    }

    var newAge = parseInt(agePrompt);

    console.log(newAge);
*/


}

//var myPrompt = prompt("Enter your age:");
//
//
//mathMethods(myPrompt);

goodDates();