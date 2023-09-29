var returnButton = document.querySelector("#return");
// variable to pull scores from local storage
var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);
// display scores in list
for (var i = 0; i < highScores.length; i++) {

var createLi = document.createElement("li");
createLi.setAttribute("id", "createLi");
createLi.textContent = highScores[i].initials + " " + highScores[i].score;
questionsDiv.appendChild(createLi);
}
// return button event listener to quiz page
returnButton.addEventListener("click", function(){
window.location.replace("./index.html");
});