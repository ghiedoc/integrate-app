const questionNumber = document.querySelector(".questionnumber");
const questionText = document.querySelector(".questiontext");
const optionContainer = document.querySelector(".optioncontainer");
const questionContainer = document.querySelector(".optioncontainer");
const answersIndicatorContainer = document.querySelector(".answersindicator");
const homebox = document.querySelector(".homebox");
const resultBox = document.querySelector(".resultbox");
const quizBox = document.querySelector(".quizbox");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// TODO push the question into the available question array
function setAvailableQuestions() {
    const totalQuestion = unit1.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(unit1[i]);
    }
}

// TODO set question number and its options
function getNewQuestion() {
    //question number
    questionNumber.innerHTML = "Question " + (questionContainer + 1) + " of " + unit1.length;

    //question text
    //random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    // get the position of questionInex from the available questions array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the question from the array to avoid repetition of questions
    availableQuestions.splice(index1, 1);
    // console.log(questionIndex);

    // set options
    const optionLength = currentQuestion.options.length
    for (let i = 0; i < optionLength; i++) {
        availableOptions.push(i);
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    //create options in html
    for (let i = 0; i < optionLength; i++) {
        // random options
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2, 1);
        //console.log(optionIndex);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++;
}

// TODO get the result of current attempt question
function getResult(element) {
    const id = parseInt(element.id);
    // get the correct answer
    if (id === currentQuestion.answer) {
        // green when correct
        element.classList.add("correct");
        // progress
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("c: " + correctAnswers);
    } else {
        // red when incorrect
        element.classList.add("wrong");
        // progress
        updateAnswerIndicator("wrong");

        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
    $.ajax({
        url:"func.php",
        method:"post",
        data: correctAnswers,
        success:function(res){
            console.log(res);
        }
    })
}
// TODO restrict the user in changing anwers
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = unit1.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}

function next() {
    if (questionCounter === unit1.length) {
        console.log('quiz over');
        quizOver();
    } else {
        getNewQuestion();
    }
}

function quizOver() {
    // hide quiz box
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}

function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = unit1.length;
    resultBox.querySelector(".attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    document.getElementById("scoreToDB").setAttribute("value",correctAnswers);
    resultBox.querySelector(".total-score").innerHTML = correctAnswers;

}

window.onload = function () {

    // hide home box

    // show quizbox

    // set all the questions in the available questions array
    setAvailableQuestions();
    // cthen call the get new question
    getNewQuestion();
    // progress indicator
    answersIndicator();
}
