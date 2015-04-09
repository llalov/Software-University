/**
 * Created by Lucho on 3/11/2015.
 */
var timer;
getTime();


//functtions:
function showTime() {
    var time = new Date();
    var hours = time.getHours();
    if (hours < 10) {
        hours = "0"+ hours;
    }
    var minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = "0"+minutes;
    }
    var seconds = time.getSeconds();
    if (seconds < 10) {
        seconds = "0"+seconds;
    }
    var result = hours+":"+minutes+":"+seconds;
    document.getElementById("timer").innerHTML= result;
}
function getTime() {
    timer = setInterval(showTime,1000);
}