var quizQuestions = [
  {
    question: 'What does JSON do?',
    choices: [
    'Appears on Friday the 13th',
    'Can help turn code into string',
    'It makes a value the equivelent of null'
    ],
    answer: 'Can help turn code into string'
  },

  {
    question: 'What is an object?',
    choices: [
      'A collection of properties.',
      'The equivelent of an array.',
      'A value type, such as a string or number'
    ],
    answer: 'A collection of properties.'
  },

  {
    question: 'What is a method?',
    choices: [
      'A function within an object',
      'A fancy word for pseudocoding',
      'A mindset to write JavaScript'
    ],
    answer: 'A function within an object'
  },

  {
    question: 'Which one of the following checks if both booleans are true?',
    choices: [
      '||',
      '&&',
      '!'
    ],
    answer: '&&'
  },

  {
    question: 'What does "Math.random();" do?',
    choices: [
      'Accesses a random math equation',
      'Takes a decimal and rounds it up to the nearest whole number.',
      'Generates a random number between 0 and 1'
    ],
    answer: 'Generates a random number between 0 and 1'
  },

  {
    question: 'What does "JSON.stringify()" NOT covert into a string?',
    choices: [
      'Functions',
      'Booleans',
      'Strings in objects'
    ],
    answer: 'Functions'
  },

  {
    question: 'Which variable type foes not change?',
    choices: [
      'let',
      'var',
      'const'
    ],
    answer: 'const'
  },

  {
    question: 'What does "===" do?',
    choices: [
      'It makes sure that 2 values are equal and the same type',
      'Tries to equal two different values to same type',
      'Creates a shortcut to make a function'
    ],
    answer: 'It makes sure that 2 values are equal and the same type'
  },

  {
    question: 'What is does a scope do?',
    choices: [
      'Allows a variable created in a function to be used outside a function',
      'Limits where a variable can exist',
      'Makes things that are far away look close.'
    ],
    answer: 'Limits where a variable can exist'
  },

  {
    question: 'What does "console.log()" do?',
    choices: [
      'Logs the code into the computers monitor',
      'Inserts the code into the web browsers console',
      'Consoles every log in the HTML'
    ],
    answer: 'Inserts the code into the web browsers console'
  },

  {
    question: 'What does "JSON.parse()" do?',
    choices: [
      'Saves a value inside the local storage',
      'Deletes information inside the local storage.',
      'Converts the JSON syntax back to JavaScript syntax'
    ],
    answer: 'Converts the JSON syntax back to JavaScript syntax'
  }
];

//Variables
var rules = document.getElementById("rules");
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizAnswers = document.getElementById("quizAnswers");
var timer = document.getElementById("timer");
var currentQuestionIndex = 0;
var timeLeft = 75;
var score = 0;
var timerInterval;

//Keeps the quizQuestion hidden before we start the game
quiz.style.visibility = "hidden";

startBtn.addEventListener('click', startQuiz);

//Function which hides some blocks with text
function startQuiz() {
  startBtn.style.display = "none";
  introduction.style.display = "none";
  quiz.style.visibility = "visible";
  timerInterval = setInterval(updateTimer, 1000);
  showQuestion();
  // showHighScore(); add a function later
}

//Function which shows the questions after we clicked the button
function showQuestion() {
  //Display questions
  var quizState = quizQuestions[currentQuestionIndex];
  quizQuestion.innerText= `${currentQuestionIndex + 1}. ${quizState.question}`;
  quizAnswers.innerHTML= "";
  //For loop chooses elements from the array
  for (let i = 0; i < quizState.choices.length; i++) {
    var createLi = document.createElement("li");
    var option = document.createElement("button");
    option.setAttribute("id", "answerBtn");
    option.textContent = quizState.choices[i];
    option.addEventListener("click", () => checkAnswer(i));
    createLi.appendChild(option);
    quizAnswers.appendChild(option);
  }
}

// Function which checks whether the answer is correct or no
function checkAnswer(answerIndex) {
  var quizState = quizQuestions[currentQuestionIndex];
  // Check if the selected choice matches the correct answer
  if (quizState.choices[answerIndex] === quizState.answer) {
    //Correct answer
    score++;
    console.log(score);
    console.log("Clicked choice: ", quizState.choices[answerIndex]);
    console.log("Correct answer: ", quizState.answer);
  } else {
    // Wrong answer
    timeLeft -= 15;
  }
  // The question index is incremented after the answer check.
  currentQuestionIndex++;
  // Check if we've gone through all the questions
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
  // saveScore();
}

//Timer
function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
      endQuiz();
  }
  timer.textContent = `Time: ${timeLeft} seconds`;
}

// End quiz
function endQuiz() {
  clearInterval(timerInterval);
  quiz.style.display = "none";

  //Adding text after the quiz is finished
  var message = document.createElement('h2');
  var scoreNumber = document.createElement('h3');
  message.textContent = "You've finished!";
  scoreNumber.textContent = `Your final score is: ${score}0`;
  quizField.appendChild(message);
  quizField.appendChild(scoreNumber);

  saveScore()
}

var highscore = [];

function saveScore() {
    //Initials field and submit button
    var initials = document.createElement('input');
    initials.placeholder = "Write your initials here";
    initials.setAttribute("id", "initialsField");
    quizField.appendChild(initials);
  
    var submitButton = document.createElement('button');
    submitButton.setAttribute("id", "submitButton");
    submitButton.innerText = "Submit";
    quizField.appendChild(submitButton);
    
    //Event listener and a function to save highscore in a local storage
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      var scoreText = initials.value.trim();

      if (scoreText === "") {
        return;
      }

      highscore.push(scoreText);
      initials.value = ""
      window.location.href="score.html";

      saveScore();
      renderHighscore();
    })
  //Unfinished, I couldn't make the local storage work
};