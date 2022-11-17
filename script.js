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
q1El = document.querySelector("#q1")
q2El = document.querySelector("#q2") 
q3El = document.querySelector("#q3")
q4El = document.querySelector("#q4")
q5El = document.querySelector("#q5")

q1Ch = document.querySelector(".choice1")
q2Ch = document.querySelector(".choice2")
q3Ch = document.querySelector(".choice3")
q4Ch = document.querySelector(".choice4")
q5Ch = document.querySelector(".choice5")


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
    q1El.style.display = "inherit";
    q1Ch.addEventListener("click", showQuestion2
);
    
    
}

function showQuestion2(){
    q1El.style.display = "none";
    q2El.style.display = "inherit";
    q2Ch.addEventListener("click", showQuestion3)
    
}

function showQuestion3(){
    q2El.style.display = "none";
    q3El.style.display = "inherit";
    q3Ch.addEventListener("click", showQuestion4)

}

function showQuestion4(){
    q3El.style.display = "none";
    q4El.style.display = "inherit";
    // q4Ch.addEventListener("click", showQuestion4)

}


startElement.addEventListener("click", startTimer)
startElement.addEventListener("click", showQuestion)
