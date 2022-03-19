const questions = document.querySelectorAll('.item__header');

questions.forEach(question => {
    question.addEventListener('click', function () {

        let openQuestion = document.querySelector('.item__header.active');

        if (openQuestion && openQuestion !== this){
            setAnswer(openQuestion);
        }

        setAnswer(question);

    });
});

function setAnswer(question) {

    question.classList.toggle('active');

    let answer = question.nextElementSibling;

    if (answer.style.maxHeight)
        answer.style.maxHeight = null;
    else
        answer.style.maxHeight = answer.scrollHeight + 'px';
}

const questions2 = document.querySelectorAll('.item2__header');

questions2.forEach(question2 => {
    question2.addEventListener('click', function () {

        let openQuestion2 = document.querySelector('.item2__header.active');

        if (openQuestion2 && openQuestion2 !== this){
            setAnswer2(openQuestion2);
        }

        setAnswer2(question2);

    });
});

function setAnswer2(question2) {

    question2.classList.toggle('active');

    let answer2 = question2.nextElementSibling;

    if (answer2.style.maxHeight)
        answer2.style.maxHeight = null;
    else
        answer2.style.maxHeight = answer2.scrollHeight + 200 + 'px';
}