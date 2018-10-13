const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

// appendQuestion - appends the question to the "question-container" in the index.html file
function appendQuestion(question) {
  document.querySelector('.question-container').innerText = question.questionText;
}

// askQuestionThen(time) - this assigns a global variable question to equal the first question; 
// it also returns a promise that is resolved after a specified amount of time (so that we can 
// expire the question after 5 seconds); the amount of time to wait is provided as an argument 
// to the function

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(`Resolved after ${time/1000} sec`);
    }, time);
  })
}

// removeQuestion - removes the question from the "question-container"; 
// it returns a promise so that the function is "thennable", meaning 
// we can do something after the question
function removeQuestion() {
  document.querySelector('.question-container').innerText = "";
}

// askQuestionThenRemoveQuestion(time) - it appends the question to the "question-container" and 
// after a specified amount of time removes the question; it takes an argument of "time" 
// indicating the amount of time the question will be displayed
function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(function(resolveMessage) {
    removeQuestion();
  });
}

// trueAndFalseButtons - it returns the collection of true and false buttons already provided 
// in the index.html file
function trueAndFalseButtons() {
  return Array.from(document.getElementsByClassName('section center-align true-false-list')[0].getElementsByTagName('div')).map(element => element)
}

// toggleTrueAndFalseButtons - it adds the hide class if not on the buttons, 
// and removes the hide class if it is on the buttons
function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(element) {
    if (element.classList.contains("hide"))
      element.classList.remove("hide")
    else
      element.classList.add("hide")
  })
}

// displayQuestionOnClick - it adds both the true and false buttons and the question for 
// five seconds, and then hides both of the true and false questions and removes the 
// text of the question
function displayQuestionOnClick() {
  document.getElementsByClassName('waves-effect waves-light btn')[0].addEventListener('click', function() {
    askQuestionThenRemoveQuestion(5000);
  })
}