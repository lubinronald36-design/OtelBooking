function generateQuestion() {
  const question = questions[currentQuestion];
  const questionElement = document.getElementById("question");
  questionElement.innerHTML = question.question;

  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="radio" name="option" value="${index}">
      ${option}
    `;
    optionsElement.appendChild(li);
  });
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answer = questions[currentQuestion].answer;
    if (parseInt(selectedOption.value) === answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      generateQuestion();
      if (currentQuestion === questions.length - 1) {
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("submit-btn").style.display = "block";
      }
    }
  } else {
    alert("Please select an option!");
  }
}

function submitQuiz() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answer = questions[currentQuestion].answer;
    if (parseInt(selectedOption.value) === answer) {
      score++;
    }
  }
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("result").innerHTML = `Quiz submitted! Your score is ${score} out of ${questions.length}`;
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("submit-btn").addEventListener("click", submitQuiz);

generateQuestion();
document.getElementById("submit-btn").style.display = "none";
