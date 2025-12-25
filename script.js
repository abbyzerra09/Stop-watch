let interval = null;        // Null marks it as “empty / not running yet”.
const startTimer = document.getElementById("start");
const stopTimer = document.getElementById("stopTime");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

let min = 0;
let sec = 0;
let ms = 0;

startTimer.addEventListener("click", function() {
    if (interval)  //checks is engine running?  // interval stores the ID returned by setInterval  // checks if time is already running    // if we don't use if interval return => and we pressed 
        return;    // Return immediately stops the function from running again.                               // start *3 times then it shows running, running, running. to prevent this we used that

    interval=setInterval(()=> {      // setInterval is JS function that repeats a task after a fixes interval of time.
        ms++;                       // syntax: setInterval(function, delay_in_mili's) 

        if(ms >= 100) {
            sec++;
            ms = 0;
        }

        if(sec === 60) {
            min++;
            sec = 0;
        }

        // formating the time to always show 2 digits.
        let m = min < 10 ? `0${min}` : min;
        let s = sec < 10 ? `0${sec}` : sec;
        let mi = ms < 10 ? `0${ms}` : ms;

        display.textContent = `${m} : ${s} : ${mi}`;
    }, 10 );  //this block runs every 10 mili's
})

    stopTimer.addEventListener("click", function() {
        clearInterval(interval)
        interval=null;      //reset's the interval value so start btn can start timer again
    });

    reset.addEventListener("click", function() {
        
        min = 0;
        sec = 0;
        ms = 0;
        
        clearInterval(interval);
        interval = null;
        display.textContent = "00 : 00 : 00";
});