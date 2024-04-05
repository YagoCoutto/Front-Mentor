const questionBox = document.querySelectorAll('.question-box');
const responseBox = document.querySelectorAll('.response-box');


function showAnswer(question) {
    let isActive = false;
    question.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (!isActive) {
                isActive = true;
                ver(index)
            } else {
                isActive = false;
                ex(index)
            }
        })
    });

    const ver = (index) => responseBox[index].style.display = 'flex'; 
    const ex = (index) => responseBox[index].style.display = 'none';
}
showAnswer(questionBox)