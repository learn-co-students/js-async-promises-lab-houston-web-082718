const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  let questiontainer = document.querySelector('.question-container')
  questiontainer.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  // return new Promise(function (resolve, reject) {
  // }, time);
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve()
    }, time )
  })
}

function removeQuestion() {
  let questiontainer = document.querySelector('.question-container')
  questiontainer.innerHTML = ''
  toggleTrueAndFalseButtons()

}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return tfbuttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(element => {
    element.classList.toggle("hide")
  });
}

function displayQuestionOnClick() {
  let askButton = document.querySelector('a')
  return askButton.addEventListener('click', function() {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  });
}

displayQuestionOnClick()