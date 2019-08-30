let hours = 1;
let minutes = 1;
let seconds = 5;
let timer;
let isRunning = false;


function setTime() {

    if (seconds == 0) {


        if (minutes == 0) {
            hours--;
            minutes = 59;
    
       if(seconds==0 && minutes==0 && hours==0){
           stop();
       }  
        
            
        }
        else {

            minutes--;
            seconds = 59;
            
        }
    }
    else {

        seconds--;

    }

    // hours = document.querySelector("#hours").value;
    // minutes = document.querySelector("#minutes").value;
    // seconds = document.querySelector("#seconds").value;
    console.log(hours+":"+minutes + ":" + seconds);
}
function start() {
    if (isRunning === false) {
        timer = setInterval(setTime, 10);
        isRunning = true;
    }
    // let sound = newAudio()
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    stop();
}




// function setTime() {
//     // // hours = document.querySelector('#hours');
//      minutes = document.querySelector('#minutes').value;
//      seconds = document.querySelector('#seconds').value;
//     // // milliseconds = document.querySelector('#seconds');

//     // // milliseconds.value =getMilliseconds();
//     //  seconds.value;
//     //  minutes.value;
//     // // hours.value = getHours();


//     if (seconds === 59) {
//         seconds = 0    

//     }
//     else {
//         seconds--
//         // seconds.value = getSeconds();
//         // minutes.value = getMinutes();
//         // hours.value = getHours();
//     }
// }

// function getSeconds(){
//     if(seconds.value===59){
//         seconds=0;
//     }
// }
// if (mins < 1) { 
//     minutes.style.color = "red"; 
//     seconds.style.color = "red"; 
// } 
// //if seconds becomes zero, 
// //then page alert time up 
// if (mins < 0) { 
//     alert('time up'); 
//     minutes.value = 0; 
//     seconds.value = 0; 
// } 