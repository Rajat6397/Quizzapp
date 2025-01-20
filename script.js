const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "7", "8", "10"],
      answer: "8",
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "C++", "HTML", "Swift"],
      answer: "HTML",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const progressElement = document.getElementById("progress");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => handleAnswer(option));
      optionsElement.appendChild(button);
    });
  
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${
      questions.length
    }`;
  }
  
  function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    nextBtn.disabled = false;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextBtn.disabled = true;
    } else {
      showResult();
    }
  });
  
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    restartBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    loadQuestion();
  });
  
  function showResult() {
    questionElement.textContent = `Quiz Completed! Your score is ${score} out of ${questions.length}`;
    optionsElement.innerHTML = "";
    progressElement.textContent = "";
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
  }
  
  loadQuestion();
  