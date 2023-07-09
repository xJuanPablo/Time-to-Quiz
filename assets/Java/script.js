//! Start of application

// I want to set up the start but as an action to start the quiz

// When the start button is pressed, I want the page to switch to the first question
var QuestionTitle = document.querySelector('#question')
var answerChoice = document.querySelectorAll('.answerChoice')
var questionIndex = 0;
var questionSpace = document.querySelector('#questionSpace')
var Main = document.querySelector('#main')
let time = document.querySelector("#time")
let startTimer = document.querySelector("#button")
let secondsLeft = 4;





let questions = [
  {
    question: 'What does JSON do?',
    choices: [
    'Appears on Friday the 13th',
    'Can help turn code into string',
    'It makes a value the equivelent of null'
    ],
    answer: 1
  },

  {
    question: 'What is an object?',
    choices: [
      'A collection of properties.',
      'The equivelent of an array.',
      'A value type, such as a string or number'
    ],
    answer: 0
  },

  {
    question: 'What is a method?',
    choices: [
      'A function within an object',
      'A fancy word for pseudocoding',
      'A mindset to write JavaScript'
    ],
    answer: 0
  },

  {
    question: 'Which one of the following checks if both booleans are true?',
    choices: [
      '||',
      '&&',
      '!'
    ],
    answer: 1
  },

  {
    question: 'What does "Math.random();" do?',
    choices: [
      'Accesses a random math equation',
      'Takes a decimal and rounds it up to the nearest whole number.',
      'Generates a random number between 0 and 1'
    ],
    answer: 2
  },

  {
    question: 'What does "JSON.stringify()" NOT covert into a string?',
    choices: [
      'Functions',
      'Booleans',
      'Strings in objects'
    ],
    answer: 0
  },

  {
    question: 'Which variable type foes not change?',
    choices: [
      'let',
      'var',
      'const'
    ],
    answer: 2
  },

  {
    question: 'What does "===" do?',
    choices: [
      'It makes sure that 2 values are equal and the same type',
      'Tries to equal two different values to same type',
      'Creates a shortcut to make a function'
    ],
    answer: 0
  },

  {
    question: 'What is does a scope do?',
    choices: [
      'Allows a variable created in a function to be used outside a function',
      'Limits where a variable can exist',
      'Makes things that are far away look close.'
    ],
    answer: 1
  },

  {
    question: 'What does "console.log()" do?',
    choices: [
      'Logs the code into the computers monitor',
      'Inserts the code into the web browsers console',
      'Consoles every log in the HTML'
    ],
    answer: 1
  },

  {
    question: 'What does "JSON.parse()" do?',
    choices: [
      'Saves a value inside the local storage',
      'Deletes information inside the local storage.',
      'Converts the JSON syntax back to JavaScript syntax'
    ],
    answer: 2
  },
]

let CorrectWrong = {
correct: 0,
wrong: 0
}



// --- When the new page switches, a random question appears
// --- When the new page switches, four answer choices appear


// When the start button is pressed, I want a timer to start that goes on for one minute




startTimer.addEventListener("click", function () {
  let timeInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timeInterval)
      time.textContent = ``;
    }
  }, 1100)
showQuestion()
Main.classList.add('hide');

questionSpace.classList.remove('hide')
})

//! Quiz Gameplay

// When an answer choice is chosen:
// --- If wrong, I want text that informs it's wrong
// --- If correct, I want text that informs it's correct

// Once an answer choice is chosen, wrong or right, new random question appears

// Once an answer choice is chosen, wrong or right, the answer is tallied.
// ******** Repeat *********









function showQuestion(){
  // if questionindex is equal or greater to 11 I want
  if (questionIndex >= 11){
    console.log(`hi`)
    return;
  }
  console.log(`here is question index: `, questionIndex)
  QuestionTitle.textContent = questions[questionIndex].question

  answerChoice[0].textContent = questions[questionIndex].choices[0]

  answerChoice[1].textContent = questions[questionIndex].choices[1]

  answerChoice[2].textContent = questions[questionIndex].choices[2]

  
}

questionSpace.addEventListener('click', function(event){
  if (event.target.matches('button')){
    questionIndex++;
    showQuestion()
  }

})

function AddingUpScore(){
  if (answerChoice === questions.answer) {
    CorrectWrong.correct++;
  } else if (!(answerChoice === questions.answer)) {
    CorrectWrong.wrong++;
  }
    }

    console.log