const questions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Power Unit", "Central Processing Unit", "Computer Processing Unit", "Central Performance Unit"],
        answer: 1
    },
    {
        question: "What is the primary function of RAM?",
        options: ["Storage", "Processing", "Input/Output", "Memory"],
        answer: 3
    },
    {
        question: "What is a byte?",
        options: ["A unit of measurement", "A type of computer virus", "A type of software", "A group of 8 bits"],
        answer: 3
    },
    {
        question: "What is a motherboard?",
        options: ["A type of software", "A type of hardware", "The main circuit board of a computer", "A type of peripheral device"],
        answer: 2
    },
    {
        question: "What is a browser?",
        options: ["A type of software", "A type of hardware", "A program that allows users to access the internet", "A type of virus"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timer = 300; // 5 minutes in seconds

function generateQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    const options = document.getElementById("options");
    options.innerHTML = "";
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = <input type="radio" name="option" value="${index}"> ${option};
        options.appendChild(li);
    });
    const checkedOption = document.querySelector('input[name="option"]:checked');
    if (checkedOption) {
        checkedOption.checked = false;
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = questions[currentQuestion].answer;
        if (parseInt(selectedOption.value) === answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length - 1) {
            generateQuestion();
        } else if (currentQuestion === questions.length - 1) {
            generateQuestion();
            document.getElementById("next-btn").style.display = "none";
            document.getElementById("submit-btn").style.display = "block";
        }
    } else {
        alert("Please select an option!");
    }
}

function submitQuiz() {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("result").innerHTML = Your score is ${score} out of ${questions.length};
}

function startTimer() {
    setInterval(() => {
        timer--;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        document.getElementById("timer").innerHTML = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
        if (timer === 0) {
            submitQuiz();
        }
    }, 1000);
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    timer = 300; // Reset timer to 5 minutes
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("result").innerHTML = "";
    generateQuestion();
    startTimer();
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("submit-btn").addEventListener("click", submitQuiz);
startQuiz();
