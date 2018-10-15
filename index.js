const questions = [{
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText: "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
]

let question;

const appendQuestion = question => {
  container = document.querySelector('.question-container');
  container.innerText = question.questionText;
}

const askQuestionThen = time => {
  question = questions[0];
  return new Promise(() => {
    setTimeout(appendQuestion(question), time);
  });
}

function removeQuestion() {
  container = document.querySelector('.question-container');
  container.removeChild(container.firstChild);
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time);

}

function trueAndFalseButtons() {
  console.log(document.querySelectorAll('div.btn'));
  return document.querySelectorAll('div.btn');
}

function toggleTrueAndFalseButtons() {
  let buttons = trueAndFalseButtons();
  buttons.forEach(btn => {
    btn.classList.toggle("hide");
  })
}

function displayQuestionOnClick() {

}
