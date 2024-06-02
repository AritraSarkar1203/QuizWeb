const quizData = [{
    question: "What HTTP status code indicates a successful GET request?",
    a: " 200",
    b: "404",
    c: " 500",
    d: " 302",
    correct: "a",
},
{
    question: "Which of the following is not a commonly used HTTP method?",
    a: " POST",
    b: "FETCH",
    c: "PUT",
    d: "DELETE",
    correct: "b",
},
{
    question: "In CSS, ‘em’ is a relative unit that is relative to:",
    a: "The parent element’s font-size",
    b: "The viewport width",
    c: " The root element’s font-size",
    d: "The default browser font-size",
    correct: "a",
},
{
    question: "Which of the following is not a valid Flexbox property?",
    a: "flex-grow",
    b: "flex-basis",
    c: " flex-reverse",
    d: "flex-shrink",
    correct: "c",
},
{
    question: "What is the purpose of the ‘alt’ attribute in an image tag in HTML?",
    a: "To provide a text alternative for search engines",
    b: "To display alternative image if the primary image fails to load",
    c: "To provide a text description for screen readers",
    d: "All of the above",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let timer;
let timeLeft = 60;

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const timerDisplay = document.getElementById("timer");

const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d

startTimer();
};

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
};

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
clearInterval(timer);
timeLeft = 60;
timerDisplay.innerText = `Time Left: ${timeLeft}s`;
};

const startTimer = () => {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            index++;
            loadQuestion();
        }
    }, 1000);
};

const quizEnd = () => {

document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> thank you for playing  </h3>
        <h2>you've scored ${correct} / ${total}</h2> <br/>
        <h3>your accurecy :${(100*correct)/total} %</h3>
    </div>
    <button id="exitbtn">exit</button>
`
document.getElementById("exitbtn").addEventListener("click", () => {
    window.location.href = "start.html";
});

}
loadQuestion(index);

