let problem = {};
let answers = {};
let score = 0;
let problemNumber = 1;

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
* Utility function to shuffle the items in an array
* @param {object} arr
*/
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function startNewProblemSet() {
    generateAndDisplayProblem();
    generateAndDisplayAnswers();
}

function generateAndDisplayProblem() {
    let left = getRandomNumber(10);
    let right = getRandomNumber(10);
    let answer = left * right;
    problem = {
        left: left,
        right: right,
        answer: answer
    };
    const pElement = document.getElementById('problem');
    const expression = left + ' * ' + right;
    pElement.querySelector('div.expression').innerText = expression;
}

function generateAndDisplayAnswers() {
    const liElements = document.querySelectorAll('section#answers ul li');

    answers = [problem.answer];

    for (let i = 0; i < liElements.length - 1; i++) {
        let left = getRandomNumber(10);
        let right = getRandomNumber(10);
        let answer = left * right;
        answers.push(answer);
    }
    answers = shuffleArray(answers);

    for (let n = 0; n < liElements.length; n++) {
        liElements[n].innerText = answers[n];
    }
}

function displayEndScreen() {
    const hideElements = document.querySelectorAll('.show-hide');
    hideElements.forEach((element) => {
        element.classList.add('hidden');
    })
}

function displayStartScreen() {
    const showElements = document.querySelectorAll('.show-hide');
    showElements.forEach((element) => {
        element.classList.remove('hidden');
    })
}

    document.addEventListener('DOMContentLoaded', () => {
        startNewProblemSet();

        const answersElement = document.getElementById('answers');
        const ulElement = answersElement.querySelector('ul');
        const problemNumberElement = document.querySelector('.currentProblem');
        const currentScore = document.querySelector('.currentScore');
        const startOver = document.getElementById('btnStartOver');


        ulElement.addEventListener('click', (event) => {

            if (event.target.innerText == problem.answer) {
                score++;
                currentScore.innerText = score;
            }
            if (problemNumber < 10) {
                problemNumber++;
                problemNumberElement.innerText = problemNumber;
            }

            if (problemNumber == 10) {
                displayEndScreen();
            } else {
                startNewProblemSet();
            }
        })

        startOver.addEventListener('click', () => {
            displayStartScreen();
            startNewProblemSet();
            problemNumber = 1;
            score = 0;
            problemNumberElement.innerText = problemNumber;
            currentScore.innerText = score;

        })



    })