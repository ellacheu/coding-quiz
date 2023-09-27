// Quiz Questions/Choices and Answers
const questions = [
    {
    question: "Commonly used data types DO Not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 3,
    },
    {
    question: "The condition in a if / else statement is enclosed with ___.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: 1,
    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: 3,
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: 3,    
    },
    {
    question: "A very useful tool used during development and debuggings for printing to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: 3,
    }

];

console.log(questions);

// add start quiz button that starts timer and presents question

// starting point of quiz
let currentQuestion = 0;
let score = 0;
let timeLeft = 75;

// variables for functions
const questionElement = document.querySelector("#questionDiv");
const choiceList = document.querySelector("#choices")
const timerDisplay = document.querySelector("#time-remaining");
const scoreDisplay = document.querySelector("#score");
const wrapper = document.querySelector(".wrapper")

// timer element and function
let timerValue = 75;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timerDisplay.addEventListener("click", function () {
    if (holdInterval === 0)
        holdInterval = setInterval(function () {
            secondsLeft --;
            timerValue.textContent = "Time " + secondsLeft;
        })
});

        // add time reduction from false answer
        // timer decrement by 10


const timerInterval = setInterval(updateTimer, 1000);

// scorecard / save initials
const allDone = `All done!
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

