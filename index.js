const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(){
  value = document.querySelector('div.question-container')
value.innerHTML = questions[0].questionText 
}

function askQuestionThen(num){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve()
    }, num)
  })
}

function removeQuestion(){
  value = document.querySelector('div.question-container') 
value.innerHTML = '' 
}

function askQuestionThenRemoveQuestion(num){
  return askQuestionThen(num)
  .then(removeQuestion)
}

function trueAndFalseButtons(){
  return button = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons()
  .forEach(element => element.classList.toggle('hide'))
}

function displayQuestionOnClick(){

}

displayQuestionOnClick()

















// ------------------------------------
function doSlowMath(num1, num2){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      let value = num1 * num2
      resolve(value)
    }, 2000 )
  })
}

doSlowMath(2, 2)
  .then(function(answer){
    console.log(`The answer is ${answer}`)
  })

  doSlowMath(2, 2)
  .then(answer => answer + 10)
  .then(answer => answer - 3 )
  .then(answer => answer + 7 )
  .then(answer => console.log(answer))
  // ------------------------------------
