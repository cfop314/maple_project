const form = document.querySelector(".js-search"),
    input = form.querySelector("input"),
    answer = document.querySelector(".js-answer");

function paintAnswer(n) {
    if(n === null) {
        answer.innerHTML = `정답을 확인할 수 없습니다.<br>다시 한 번  확인해주세요.`;
    } else {
        answer.innerText = `정답은 ${n}번 입니다!`;  
    }
}

function answerOfQuestion(a) {
    const theAnswer = localStorage.getItem(a);
    paintAnswer(theAnswer);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentAsk = input.value;
    input.value = "";
    answerOfQuestion(currentAsk);
}

function search() {
    form.addEventListener("submit", handleSubmit);
}

function init() {
    search();
}

init();