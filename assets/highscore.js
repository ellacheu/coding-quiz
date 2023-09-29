var returnButton = document.querySelector("#return");
var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);

for (var i = 0; i < highScores.length; i++) {

var createLi = document.createElement("li");
createLi.setAttribute("id", "createLi");
createLi.textContent = highScores[i].initials + " " + highScores[i].score;
questionsDiv.appendChild(createLi);
}
console.log(createLi);

returnButton.addEventListener("click", function(){
window.location.replace("./index.html");
});