const startQuiz = `Try to answer to following code related questions within the time limit.
Keep in mind that incorrect answers will penalize your score/time by ten seconds!`
// add start quiz button that starts timer and presents question

const quizCard = document.getElementsByClassName("card-body");
const questionElement = document.getElementById("question");
const choiceElement = document.getElementById("choices");

console.log(questionElement);

const questions = [
    {
    question: "Commonly used data types DO Not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "4. numbers",
    },
    {
    question: "The condition in a if / else statement is enclosed with ___.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets"
    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "parenthesis",    
    },
    {
    question: "A very useful tool used during development and debuggings for printing to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
    }

];

const allDone = `All done!
Your final score is`
// enter intials - form - submit button 


console.log(startQuiz);
console.log(questions);

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

