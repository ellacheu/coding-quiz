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

// add start quiz button that starts timer and presents question

// starting point of quiz
var questionIndex = 0;
var score = 0;

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


questionIndex++;

if(questionIndex >= questions.length) {
    allDone();
     createDiv.textContent = "End of quiz! " + "Your Score " + score;
} else {
    render(questionIndex);
}
questionsDiv.appendChild(createDiv);


}

function allDone() {
    questionsDiv.innerHTML = "";
    timeRemaining.innerHTML = "";

    var createTitle = document.createElement("h1");
    createTitle.setAttribute("id", "createTitle");
    createTitle.textContent =  "All done!"

    questionsDiv.appendChild(createTitle);

      
    if (timeRemaining >= 0) {
        var timerRemaining = timeLeft;
        var createFinalScore = document.createElement("p");
        createFinalScore.setAttribute("id", "createFinalScore");
        clearInterval(holdInterval);
        createFinalScore.textContent = "Your final score is " + timeLeft;

        questionsDiv.appendChild(createFinalScore);
    }

    var createForm = document.createElement("form")
    createForm.setAttribute("id", "createForm");
    createForm.textContent = "Enter your intials: ";

    questionsDiv.appendChild(createForm);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

}



/*when all question are answer OR timer reaches zero
the game is over
can save initial and score
*/

