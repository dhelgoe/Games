
const quizData = [
    {
      imageSrc: "../geoimg/Poland.png",
      options: ["Germany", "United Kingdom", "Belgium", "Poland"],
      answer: 3
    },
    {
      imageSrc: "../geoimg/eth.jpg",
      options: ["Sudan", "Ethiopia", "Uganda", "Yemen"],
      answer: 1
    },
    {
        imageSrc: "../geoimg/Bolivia.jpg",
        options: ["Peru", "Columbia", "Paraguay", "Bolivia"],
        answer: 3
      },
      {
        imageSrc: "../geoimg/nepal.jpg",
        options: ["Nepal", "Bhutan", "Bangladesh", "Malaysia"],
        answer: 0
      },
      {
      imageSrc: "../geoimg/finland.jpg",
      options: ["Norway", "Iceland", "Sweden", "Finland"],
      answer: 3
    },
    {
        imageSrc: "../geoimg/taiwan.jpg",
        options: ["Taiwan", "Phillippines", "Cambodia", "Fiji"],
        answer: 0
      },
      {
        imageSrc: "../geoimg/france.jpg",
        options: ["Germany", "France", "Spain", "Ukraine"],
        answer: 1
      },
      {
        imageSrc: "../geoimg/Pakistan.jpg",
        options: ["Uzbekistan", "Afghanistan", "Pakistan", "Turkmenistan"],
        answer: 2
      },
      {
        imageSrc: "../geoimg/uruguay.jpg",
        options: ["Columbia", "Guyana", "Paraguay", "Uruguay"],
        answer: 3
      },
      {
        imageSrc: "../geoimg/austria.jpg",
        options: ["Czech Republic", "Slovakia", "Austria", "Hungary"],
        answer: 2
      },
  ];
  
  let currentQuestion = 0;
  let score = 0; 
  
  const questionImage = document.getElementById("question-image");
  const optionButtons = document.querySelectorAll(".option");
  const nextButton = document.getElementById("next-button");
  
 
  loadQuestion();
  
  
  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionImage.src = question.imageSrc;
  
    optionButtons.forEach((button, index) => {
      button.textContent = question.options[index];
      button.onclick = () => checkAnswer(index);
    });
  
    nextButton.disabled = true;
  }
  

  function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestion];
    const correctAnswer = question.answer;
  
    if (selectedIndex === correctAnswer) {
      optionButtons[selectedIndex].style.backgroundColor = "green";
      score++;
    } else {
      optionButtons[selectedIndex].style.backgroundColor = "red";
      optionButtons[correctAnswer].style.backgroundColor = "green";
    }
  
    optionButtons.forEach(button => {
      button.disabled = true;
    });
  
    nextButton.disabled = false;
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      resetQuestion();
      loadQuestion();
    } else {
      showResult();
    }
  });
  

  function resetQuestion() {
    questionImage.src = "";
    optionButtons.forEach(button => {
      button.textContent = "";
      button.style.backgroundColor = "";
      button.disabled = false;
    });
    nextButton.disabled = true;
  }

  function showResult() {
    const container = document.querySelector(".container");
    container.innerHTML = `<h1>Quiz Completed!</h1>
                           <p>Your score: ${score}/${quizData.length}</p>
                           <button id="home-button">Back to Home</button>`
                           
  const homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", () => {
    location.reload();
  });
}
  
  