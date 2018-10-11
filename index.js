const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion() {
  document.querySelector('.question-container').innerHTML = questions[0].questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, time)
  })
}

function removeQuestion() {
  document.querySelector('.question-container').innerHTML = "";
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion();
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn');
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(button) {
    if (button.classList.contains('hide')) {
      button.classList.remove('hide');
    } else {
      button.classList.add('hide');
    }
  })
}

function displayQuestionOnClick() {
  const button = document.querySelector('.waves-light')

  button.addEventListener('click', function() {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  })
}

displayQuestionOnClick();