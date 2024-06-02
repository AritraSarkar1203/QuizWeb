const quizData = [{
    question: "What is the purpose of the (canvas) element in HTML5?",
    a: "To display database records",
    b: "To draw graphics on a web page",
    c: " To create draggable elements",
    d: "To embed audio streams",
    correct: "b",
},
{
    question: "Which CSS property controls the text size?",
    a: "font-style",
    b: "text-style",
    c: "text-size",
    d: "font-size",
    correct: "d",
},
{
    question: "Which HTML attribute is used to define inline styles?",
    a: "style",
    b: "class",
    c: " styles",
    d: "inline",
    correct: "a",
},
{
    question: "In JavaScript, which object is the topmost object in the hierarchy?",
    a: "Document",
    b: "Form",
    c: "Window",
    d: "Element",
    correct: "c",
},
{
    question: "How do you select an element with the id demo in CSS?",
    a: "#demo",
    b: ".demo",
    c: "demo",
    d: "*demo",
    correct: "a",
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
    <button id="exitbtn">Exit</button>
`
document.getElementById("exitbtn").addEventListener("click", () => {
    window.location.href = "start.html";
});

}
loadQuestion(index);
