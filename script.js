//I need to make a function that creates a form as I've laid out in HTML
//Trigger form creating function when start and submit buttons are pressed
//prevent default
//create side bar with high score and timer
//show prompt at the end for name and save to local storage
//store time remaining at the end
//display onto highscore

//global variables
// numberCorrect
time = 300;
timerElement = document.querySelector("#timer");
startElement = document.querySelector("#start");
timerElement.textContent = time;

//Timer setup. Initial time 300s.
function startTimer() {
    timer = setInterval(function(){
    time--;
    if (time > 1){
    document.querySelector("#timer").textContent = time;
    }
}, 1000)
};

function showQuestion(){

}

startElement.addEventListener("click", startTimer)