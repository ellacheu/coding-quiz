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
    answer: "quotes",
    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "booleans",
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",    
    },
    {
    question: "A very useful tool used during development and debuggings for printing to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "for loops",
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
}







// add time reduction from false answer
// timer decrement by 10


// scorecard / save initials
var allDone = `All done!
Your final score is`
// enter intials - form - submit button 



/* Start button
start timer and presented with question
answer question
presented with next question
when answered incorrectly
timer subtracts 10 seconds
when all question are answer OR timer reaches zero
the game is over
can save initial and score
*/

