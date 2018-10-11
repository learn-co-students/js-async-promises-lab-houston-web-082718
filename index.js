const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion() {
  document.getElementsByClassName("question-container")[0].innerHTML = questions[0].questionText
}

function askQuestionThen(time) {
  question = questions[0]
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve()
    }, time )
  })
}

function removeQuestion() {
  document.getElementsByClassName("question-container")[0].innerHTML = ""
  toggleTrueAndFalseButtons()
  return new Promise((resolve, reject) => {})
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion()
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return Array.from(document.getElementsByClassName("true-false-list")[0].children)
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(element) {
    if (element.classList.contains("hide"))
      element.classList.remove("hide")
    else
      element.classList.add("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

displayQuestionOnClick();