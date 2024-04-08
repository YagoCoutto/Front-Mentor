const questionBox = document.querySelectorAll('.question-box');
const responseBox = document.querySelectorAll('.response-box');
const questionsImg = document.querySelectorAll('.icon');

function showAnswer(question) {
    let isActive = false;
    question.forEach((element, index) => {
        element.addEventListener("click", () => {
            isActive === false ? showAnswer(index) : hideAnswer(index)
        })
    });

    const showAnswer = (index) => {
        const iconMinus = questionBox[index].children[1].src = "assets/images/icon-minus.svg";
        const displayFlex = responseBox[index].style.display = 'flex';
        isActive = true;
    }
    const hideAnswer = (index) => {
        const iconPlus = questionBox[index].children[1].src = "assets/images/icon-plus.svg";
        const displayNone = responseBox[index].style.display = 'none';
        isActive = false;
    }
}
showAnswer(questionBox)