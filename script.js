function submitQuiz() {
  console.log("Submit button clicked!");
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answer = questions[currentQuestion].answer;
    if (parseInt(selectedOption.value) === answer) {
      score++;
    }
  }
document.getElementById("submit-btn").onclick = function() {
  alert("Submit button clicked!");
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("result").innerHTML = Quiz submitted! Your score is ${score} out of ${questions.length};
};
