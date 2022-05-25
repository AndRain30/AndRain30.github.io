import {answorsTheme1, answorsTheme2} from './answors.js';
import {antTest1Theme1, antTest1Theme2} from './antworts1.js';
import {antTest2Theme1, antTest2Theme2} from './antworts2.js';
import {antTest3Theme1, antTest3Theme2} from './antworts3.js';
import {antTest4Theme1, antTest4Theme2} from './antworts4.js';

const answorsTest = [answorsTheme1, answorsTheme2];

const antTest1 = [antTest1Theme1, antTest1Theme2];
const antTest2 = [antTest2Theme1, antTest2Theme2];
const antTest3 = [antTest3Theme1, antTest3Theme2];
const antTest4 = [antTest4Theme1, antTest4Theme2];

const answorTest = document.querySelector('.answor');
const elemAntwort1 = document.querySelector('.antwort1');
const elemAntwort2 = document.querySelector('.antwort2');
const elemAntwort3 = document.querySelector('.antwort3');
const elemAntwort4 = document.querySelector('.antwort4');
const elemAntworts = document.querySelector('.test__antworts');
let numOfThemes = 0;
let numOfQuestion = 0;

const btnConfirm = document.querySelector('.test__button-confirm');
const btnNext = document.querySelector('.test__button-gray');
const btnClose = document.querySelector('.test__result__button-close');
const btnAgain = document.querySelector('.test__result__button-again');

const checks = document.querySelector('.test__checks');
let numChecks = 0;
let allChecks = antTest1[numOfThemes].length;
let rightChecks = 0;

const testResult = document.querySelector('.test__result');
const testDiagramma = document.querySelector('.test__result-diagramma');
const testResultText = document.querySelector('.test__result-percent');
const testResultPercentBar = document.querySelector('.test__result-progress');

const linkOfThemes = document.querySelector('.menu__links');

function addTestOrRepeat () {
    while (checks.firstChild) {
        checks.removeChild(checks.firstChild);
    }
    for (let i = 0; i < antTest1[numOfThemes].length; i++) {
        checks.insertAdjacentHTML('afterbegin', '<div class = "test__check-gray"></div>')
    }
    
    answorTest.textContent = answorsTest[numOfThemes][0];
    elemAntwort1.textContent = antTest1[numOfThemes][0].ant;
    elemAntwort2.textContent = antTest2[numOfThemes][0].ant;
    elemAntwort3.textContent = antTest3[numOfThemes][0].ant;
    elemAntwort4.textContent = antTest4[numOfThemes][0].ant;

    elemAntwort1.id = antTest1[numOfThemes][0].id;
    elemAntwort2.id = antTest2[numOfThemes][0].id;
    elemAntwort3.id = antTest3[numOfThemes][0].id;
    elemAntwort4.id = antTest4[numOfThemes][0].id;

    elemAntwort1.setAttribute('check-id', 0);
    elemAntwort2.setAttribute('check-id', 0);
    elemAntwort3.setAttribute('check-id', 0);
    elemAntwort4.setAttribute('check-id', 0);

    for (let i = 0; i < elemAntworts.children.length; i++) {
        elemAntworts.children[i].classList.remove('test__antwort-green', 'test__antwort-red','test__antwort-gray','test__antwort-picked');
    }
    numChecks = 0;
    numOfQuestion = 0;
    rightChecks = 0;
}

addTestOrRepeat();

for (let i = 0; i < elemAntworts.children.length; i++) {
    elemAntworts.children[i].addEventListener('click', () => {
        if (elemAntworts.children[i].getAttribute('check-id') == 1) {
            for (let j = 0; j < elemAntworts.children.length; j++) {
                elemAntworts.children[j].setAttribute('check-id', 0);
            }
            elemAntworts.children[i].classList.remove('test__antwort-picked');
        } else {
        for (let j = 0; j < elemAntworts.children.length; j++) {
            elemAntworts.children[j].removeAttribute('check-id');
            elemAntworts.children[j].classList.remove('test__antwort-picked');
        }
        elemAntworts.children[i].classList.add('test__antwort-picked');
        elemAntworts.children[i].setAttribute('check-id', 1);
    }
    })
}

function showAntworts () {
        for (let i = 0; i < elemAntworts.children.length; i++) {
            if (elemAntworts.children[i].getAttribute('check-id') == 0) {
            alert("Не выбран ответ");
            break;
        } else if (elemAntworts.children[i].id == 1 && elemAntworts.children[i].id == elemAntworts.children[i].getAttribute('check-id')) {
            for (let j = 0; j < elemAntworts.children.length; j++) {
                elemAntworts.children[j].classList.add('test__antwort-gray');
            }
            elemAntworts.children[i].classList.add('test__antwort-green');
            btnNext.classList.add('test__button-next-green');
            btnNext.addEventListener('click', showNextQuestions);
            btnNext.id = 1;
            checks.children[numChecks].classList.add('test__check-green');
            checks.children[numChecks].id = 1;
            ++numChecks;
            btnConfirm.classList.remove('test__button-confirm');
            btnConfirm.classList.add('test__button-confirm-gray');
            btnConfirm.removeEventListener('click', showAntworts);
            rightChecks++;
            break;
        } else if (elemAntworts.children[i].id == 1) {
            elemAntworts.children[i].classList.add('test__antwort-green');
        } else if (elemAntworts.children[i].id == 0 && elemAntworts.children[i].getAttribute('check-id') == 1) {
            elemAntworts.children[i].classList.add('test__antwort-red');
            btnNext.classList.add('test__button-next-green');
            btnNext.addEventListener('click', showNextQuestions);
            checks.children[numChecks].classList.add('test__check-red');
            checks.children[numChecks].id = 1;
            btnNext.id = 1;
            ++numChecks;
            btnConfirm.classList.remove('test__button-confirm');
            btnConfirm.classList.add('test__button-confirm-gray');
            btnConfirm.removeEventListener('click', showAntworts);
        } else if (elemAntworts.children[i].id == 0) {
            elemAntworts.children[i].classList.add('test__antwort-gray');
        } 
    }
    if (numChecks == antTest1[numOfThemes].length) {
        btnNext.textContent = 'Результат';
        btnNext.id = 1;
    }
}

btnConfirm.addEventListener('click', showAntworts)

function showNextQuestions () {
    if (numOfQuestion <= antTest1[numOfThemes].length - 2 && btnNext.id == 1) {
        numOfQuestion++;
        btnNext.id = 0;
        answorTest.textContent = answorsTest[numOfThemes][numOfQuestion];
        elemAntwort1.textContent = antTest1[numOfThemes][numOfQuestion].ant;
        elemAntwort2.textContent = antTest2[numOfThemes][numOfQuestion].ant;
        elemAntwort3.textContent = antTest3[numOfThemes][numOfQuestion].ant;
        elemAntwort4.textContent = antTest4[numOfThemes][numOfQuestion].ant;
    
        elemAntwort1.id = antTest1[numOfThemes][numOfQuestion].id;
        elemAntwort2.id = antTest2[numOfThemes][numOfQuestion].id;
        elemAntwort3.id = antTest3[numOfThemes][numOfQuestion].id;
        elemAntwort4.id = antTest4[numOfThemes][numOfQuestion].id;
    
        elemAntwort1.setAttribute('check-id', 0);
        elemAntwort2.setAttribute('check-id', 0);
        elemAntwort3.setAttribute('check-id', 0);
        elemAntwort4.setAttribute('check-id', 0);

        for (let i = 0; i < elemAntworts.children.length; i++) {
            elemAntworts.children[i].classList.remove('test__antwort-green', 'test__antwort-red','test__antwort-gray','test__antwort-picked');
            
        }

        btnConfirm.addEventListener('click', showAntworts);
        btnConfirm.classList.remove('test__button-confirm-gray');
        btnConfirm.classList.add('test__button-confirm');

        btnNext.classList.remove('test__button-next-green');
        btnNext.removeEventListener('click', showNextQuestions);
    } else if (btnNext.textContent == "Результат" && btnNext.id == 1) {
        testResult.classList.add('test__result_show');
        setInterval(showResultTestDiagramma, 500);
        move ();
    }
}
btnNext.addEventListener('click', showNextQuestions);

btnClose.addEventListener('click', () => {
    testResult.classList.remove('test__result_show');
})

btnAgain.addEventListener('click', () => {
    testResult.classList.remove('test__result_show');
    btnNext.id = 0;
    testResultPercentBar.style.width = 0 + 'px';
    while (checks.firstChild) {
        checks.removeChild(checks.firstChild);
    }
    addTestOrRepeat();
    btnNext.textContent = "Продолжить";
    btnNext.classList.remove('test__button-next-green');
    btnConfirm.addEventListener('click', showAntworts);
    btnConfirm.classList.remove('test__button-confirm-gray');
    btnConfirm.classList.add('test__button-confirm');
})

function showResultTestDiagramma () {
    testResultPercentBar.textContent = `${(rightChecks * 100/numChecks).toFixed(0)} %`;
    if (numChecks/rightChecks == Infinity) {
        testResultText.textContent = `Ты хоть че то читал?`;
    } else if ((rightChecks * 100/numChecks) >= 75) {
        testResultText.textContent = `Отлично`;
    } else if ((rightChecks * 100/numChecks) >= 62 && (rightChecks * 100/numChecks) < 75) {
        testResultText.textContent = `Хорошо`;
    } else {
        testResultText.textContent = `Неудовлетворительно`;
    }
    
}

function move () {
    let width = 1;
    let id = setInterval(frame, 10);
    function frame () {
        if (width >= (rightChecks * 100/numChecks.toFixed(0))) {
            clearInterval(id);
        } else {
            width++;
            testResultPercentBar.style.width = `${width}%`
            testResultPercentBar.textContent = width * 1 + '%';
        }
    }
}

for (let i = 0; i < linkOfThemes.children.length; i++) {
    linkOfThemes.children[i].id = i;
    linkOfThemes.children[i].addEventListener('click', () => {
        numOfThemes = linkOfThemes.children[i].id;
        console.log(numOfThemes);
        addTestOrRepeat ();
        btnNext.textContent = "Продолжить";
        btnNext.classList.remove('test__button-next-green');
        btnConfirm.addEventListener('click', showAntworts);
        btnConfirm.classList.remove('test__button-confirm-gray');
        btnConfirm.classList.add('test__button-confirm');
    })
}
