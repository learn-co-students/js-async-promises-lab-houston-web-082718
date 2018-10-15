const questions = [
  {
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText:
      "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
];

let question;

function appendQuestion(question) {
  document.querySelector(".question-container").innerHTML =
    question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(question);
    }, time);
  });
}

function removeQuestion() {
  return new Promise(function() {
    let container = document.querySelector(".question-container");
    container.innerHTML = "";
    toggleTrueAndFalseButtons();
  });
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

// function trueAndFalseButtons() {
//   let arr = [];
//   arr.push(
//     document.getElementsByClassName("btn center-align hide  green lighten-2")[0]
//   );
//   arr.push(
//     document.getElementsByClassName(".btn center-align hide  red lighten-2")[0]
//   );
//   return arr;
// }

function toggleTrueAndFalseButtons() {
  let a = trueAndFalseButtons();
  a[0].classList.toggle("hide");
  a[1].classList.toggle("hide");
}

function trueAndFalseButtons() {
  return (btns = document
    .querySelector(".true-false-list")
    .querySelectorAll(".btn"));
}

function displayQuestionOnClick() {
  let askBtn = document.querySelectorAll(".btn");
  document.addEventListener("click", () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
    toggleTrueAndFalseButtons();
  });
}
