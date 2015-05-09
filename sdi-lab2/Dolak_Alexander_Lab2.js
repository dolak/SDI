alert("JavaScript works!");
var emotion    =   "I\'m feeling great";
var dialog     =   "How are you feeling?";
var alarm       =   530;
var snooze     =   true;

console.log("Your alarm wakes you up at  " + alarm);

snooze = confirm("Do you go back to sleep?   " + "OK if Yes, Cancel if No");
console.log(snooze);
if (snooze == true) {
    alarm = 730;
    console.log("You wake up at  " + alarm);
}
else {
    console.log("It\'s " + alarm + " in the morning.");
}
console.log(dialog)
emotion = prompt(dialog + "  example:  " + emotion);
console.log(emotion);