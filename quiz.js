const questions = [
    {
      question: "Qual é a capital da França?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Londres", correct: false },
        { text: "Roma", correct: false },
        { text: "Berlim", correct: false }
      ]
    },
    {
      question: "Quem pintou a Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
      question: "Qual é o maior planeta do nosso sistema solar?",
      answers: [
        { text: "Júpiter", correct: true },
        { text: "Saturno", correct: false },
        { text: "Marte", correct: false },
        { text: "Terra", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  const scoreElement = document.getElementById("score");
  
  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hide");
    nextButton.innerText = "Próxima Pergunta";
    scoreElement.innerText = `Pontuação: ${score}`;
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(answer, button));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(answer, selectedButton) {
    if (answer.correct) {
      score++;
      scoreElement.innerText = `Pontuação: ${score}`;
      selectedButton.style.color = "green";
    } else {
      selectedButton.style.color = "#dc143c";
    }
    
    // Desabilita todos os botões após a resposta
    Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
    });
    
    nextButton.classList.remove("hide");
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      questionElement.innerText = `Fim do Quiz! Sua pontuação foi: ${score}`;
      nextButton.innerText = "Recomeçar";
      nextButton.onclick = startGame;
    }
  }
  
  nextButton.addEventListener("click", () => {
    showNextQuestion();
  });
  
  startGame();
  