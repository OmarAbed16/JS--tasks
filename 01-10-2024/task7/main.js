// Quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

loadQuiz();

function loadQuiz() {
  clearChoices();
  showQuestion(quizData[currentQuestion]);
  nextBtn.classList.add("hide");
}

function showQuestion(questionData) {
  questionEl.innerText = questionData.question;
  questionData.choices.forEach((choice, index) => {
    const choiceBtn = document.createElement("button");
    choiceBtn.classList.add("choice");
    choiceBtn.dataset.number = index + 1;
    choiceBtn.innerText = choice;
    choiceBtn.addEventListener("click", handleChoiceClick);
    const li = document.createElement("li");
    li.appendChild(choiceBtn);
    choicesEl.appendChild(li);
  });
}

function handleChoiceClick(event) {
  const selectedChoice = event.target;
  const selectedNumber = selectedChoice.dataset.number;
  const correctChoice = quizData[currentQuestion].correct;

  if (selectedNumber == correctChoice) {
    selectedChoice.style.backgroundColor = "green";
    score++;
  } else {
    selectedChoice.style.backgroundColor = "red";
    document.querySelector(
      `[data-number="${correctChoice}"]`
    ).style.backgroundColor = "green";
  }

  nextBtn.classList.remove("hide");
}

function clearChoices() {
  while (choicesEl.firstChild) {
    choicesEl.removeChild(choicesEl.firstChild);
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.classList.add("hide");
  choicesEl.classList.add("hide");
  nextBtn.classList.add("hide");
  resultEl.classList.remove("hide");
  scoreEl.innerText = `${score} / ${quizData.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  questionEl.classList.remove("hide");
  choicesEl.classList.remove("hide");
  resultEl.classList.add("hide");
  loadQuiz();
});
