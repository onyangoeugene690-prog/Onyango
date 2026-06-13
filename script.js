// Dynamic Quiz Functionality
const quizData = [
    {
        question: "Which component is known as the 'brain' of the computer?",
        options: ["GPU", "RAM", "CPU", "Motherboard"],
        correct: 2
    },
    {
        question: "What type of memory is volatile and loses data when powered off?",
        options: ["SSD", "RAM", "HDD", "ROM"],
        correct: 1
    },
    {
        question: "Which component renders images and video to your monitor?",
        options: ["CPU", "Power Supply", "Motherboard", "GPU"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quizBox = document.getElementById('quiz-box');
    if (!quizBox) return;

    if (currentQuestion >= quizData.length) {
        quizBox.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>You scored ${score} out of ${quizData.length}.</p>
            <button class="btn" onclick="location.reload()">Restart Quiz</button>
        `;
        return;
    }

    let currentData = quizData[currentQuestion];
    let html = `<h3>${currentData.question}</h3>`;
    
    currentData.options.forEach((option, index) => {
        html += `<button class="option-btn" onclick="checkAnswer(${index})">${option}</button>`;
    });

    quizBox.innerHTML = html;
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuiz();
}

// Interactive demo for CPU page
function simulateCpu() {
    const output = document.getElementById('cpu-output');
    if(!output) return;
    output.innerText = "Fetching instruction... Decoding... Executing data calculation! Done.";
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
});
