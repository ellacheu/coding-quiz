// Quiz Questions/Choices and Answers
var questions = [
    {
    question: "Commonly used data types do NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
    },
    {
    question: "The condition in a if / else statement is enclosed with ___.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets",
    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",    
    },
    {
    question: "A very useful tool used during development and debuggings for printing to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console log",
    }

];


// starting point of quiz
var questionIndex = 0;
var score = 1;

// variables for functions
var questionsDiv = document.querySelector("#questionsDiv");
var choiceUl = document.querySelector("#choicesUl")
var timer = document.querySelector("#startTime");
var timeRemaining = document.querySelector("#time-remaining");

// timer variables and function
var timerLeft = 75;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");
// display timer countdown after start quiz
timer.addEventListener("click", function () {
    if (holdInterval === 0)
        holdInterval = setInterval(function () {
            timerLeft --;
            timeRemaining.textContent = "Remaining Time: " + timerLeft + " seconds";

            if (timerLeft <=0) {
                clearInterval(holdInterval);
                allDone();
                timeRemaining.textContent = "Time's up!";
            }
        }, 1000)
    render(questionIndex);
});

// render the questions and choices
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++);
    var currentQuestion = questions[questionIndex].question;
    var currentChoices = questions[questionIndex].choices;
    questionsDiv.textContent = currentQuestion;

    currentChoices.forEach(function (newCard) {
        var button = document.createElement("button");
        button.textContent = newCard;
        ulCreate.appendChild(button); 
        var listItem = document.createElement("li");
        listItem.textContent = newCard;
        questionsDiv.appendChild(ulCreate);
          
        button.addEventListener("click", (compare));
    })

}
// compare event to answers and display correct or wrong in text underneath
function compare(event) {
    console.log(event);
    var element = event.target;

    if (element.matches("button")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            timerLeft = timerLeft - penalty;
            createDiv.textContent = "Wrong!";
        }

    }

// progress the quiz through question index and display score at the end in all done
questionIndex++;

if(questionIndex >= questions.length) {
    allDone();
     createDiv.textContent = "End of quiz! " + "Your Score " + score;
} else {
    render(questionIndex);
}
questionsDiv.appendChild(createDiv);


}
// all done question div page
function allDone() {
    questionsDiv.innerHTML = "";
    timeRemaining.innerHTML = "";

    var createTitle = document.createElement("h1");
    createTitle.setAttribute("id", "createTitle");
    createTitle.textContent =  "All done!"

    questionsDiv.appendChild(createTitle);
      
// form
    var createForm = document.createElement("form")
    createForm.setAttribute("id", "createForm");
    createForm.textContent = "Enter your intials: ";

    questionsDiv.appendChild(createForm);
// initials input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);
// submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);
// event listener to submit button to store high scores and then bring to high scores page
    createSubmit.addEventListener("click", function(){
        var initials = createInput.value;

        if (initials === null) {
            console.log ("Invalid Input");
        } else {
            var finalScore = {
                initials: initials,
                score: score
            }
        console.log(finalScore);
        var highScores = localStorage.getItem("highScores");
        if (highScores === null) {
            highScores = [];
        } else {
            highScores = JSON.parse(highScores);
        }
        highScores.push(finalScore);
        var newScore = JSON.stringify(highScores);
        localStorage.setItem("highScores", newScore);
        window.location.replace("./highscore.html");
        }
    });

}


