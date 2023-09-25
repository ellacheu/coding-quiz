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

// starting point of quiz
let currentQuestion = 0;
let score = 0;
let timeLeft = 75;

// variables for functions
const questionElement = document.getElementById("question");
const choiceList = document.getElementById("choices")
const timerDisplay = document.getElementById("time-remaining");
const scoreDisplay = document.getElementById("score");

// displaying questions in quiz card
function displayQuestion() {
    console.log("questions");
  
} 


// first card before start of quiz?
const startQuiz = `Try to answer to following code related questions within the time limit.
Keep in mind that incorrect answers will penalize your score/time by ten seconds!`
// add start quiz button that starts timer and presents question


// timer element and function
const timerElement = document.getElementById("time-remaining");
let timerValue = 75;

function updateTimer() {
    timerElement.textContent = timerValue + " seconds";

    if (timerValue <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's Up!";

        // add time reduction from false answer
        // timer decrement
    } else {
        timerValue--;
    }
}

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

