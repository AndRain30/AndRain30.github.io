
const answorsTest = [
    'В каком году вышел ES6?', 
    'Как называется стандарт, описывающий спецификацию JS?', 
    'Уберите из вариантов то, что не подходит Javascript-у.'
];

const antTest1 = [ { ant: 'В 2015 году', id: 1}, {ant: 'ECMA-124', id: 0}, {ant: 'Однопоточный', id: 1} ];
const antTest2 = [ { ant: 'В 2006 году', id: 0}, {ant: 'ECMA-262', id: 1}, {ant: 'Прототипное программирование', id: 0} ];
const antTest3 = [ { ant: 'В 2019 году', id: 0}, {ant: 'ECMAES-6', id: 0}, {ant: 'Автоматическое управление памятью', id: 0} ];
const antTest4 = [ { ant: 'В 2016 году', id: 0}, {ant: 'ECMAJs-2015', id: 0}, {ant: 'Динамическая типизация', id: 0} ];


let numOfQuestion = 0;
const answorTest = document.querySelector('.answor');
const elemAntwort1 = document.querySelector('.antwort1');
const elemAntwort2 = document.querySelector('.antwort2');
const elemAntwort3 = document.querySelector('.antwort3');
const elemAntwort4 = document.querySelector('.antwort4');


const elemAntworts = document.querySelector('.test__antworts');

const btnConfirm = document.querySelector('.test__button-confirm');
const btnNext = document.querySelector('.test__button-gray');
const btnClose = document.querySelector('.test__result__button-close');
const btnAgain = document.querySelector('.test__result__button-again');

const checks = document.querySelector('.test__checks');
let numChecks = 0;
let allChecks = antTest1.length;
let rightChecks = 0;

const testResult = document.querySelector('.test__result');
const testDiagramma = document.querySelector('.test__result-diagramma');
const testResultText = document.querySelector('.test__result-percent');

function addTestOrRepeat () {

    for (let i = 0; i < antTest1.length; i++) {
        checks.insertAdjacentHTML('afterbegin', '<div class = "test__check-gray"></div>')
    }
    answorTest.textContent = answorsTest[0];
    elemAntwort1.textContent = antTest1[0].ant;
    elemAntwort2.textContent = antTest2[0].ant;
    elemAntwort3.textContent = antTest3[0].ant;
    elemAntwort4.textContent = antTest4[0].ant;

    elemAntwort1.id = antTest1[0].id;
    elemAntwort2.id = antTest2[0].id;
    elemAntwort3.id = antTest3[0].id;
    elemAntwort4.id = antTest4[0].id;

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
            ++numChecks;
            btnConfirm.classList.remove('test__button-confirm');
            btnConfirm.classList.add('test__button-confirm-gray');
            btnConfirm.removeEventListener('click', showAntworts);
        } else if (elemAntworts.children[i].id == 0) {
            elemAntworts.children[i].classList.add('test__antwort-gray');
        } 
    }
    if (numChecks == antTest1.length) {
        btnNext.textContent = 'Результат';
    }
}

btnConfirm.addEventListener('click', showAntworts)

function showNextQuestions () {
    if (numOfQuestion <= antTest1.length - 2) {
        numOfQuestion++;
        answorTest.textContent = answorsTest[numOfQuestion];
        elemAntwort1.textContent = antTest1[numOfQuestion].ant;
        elemAntwort2.textContent = antTest2[numOfQuestion].ant;
        elemAntwort3.textContent = antTest3[numOfQuestion].ant;
        elemAntwort4.textContent = antTest4[numOfQuestion].ant;
    
        elemAntwort1.id = antTest1[numOfQuestion].id;
        elemAntwort2.id = antTest2[numOfQuestion].id;
        elemAntwort3.id = antTest3[numOfQuestion].id;
        elemAntwort4.id = antTest4[numOfQuestion].id;
    
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
    } else if (btnNext.textContent == "Результат") {
        testResult.classList.add('test__result_show');
        showResultTestDiagramma ();
    }
}
btnNext.addEventListener('click', showNextQuestions);

btnClose.addEventListener('click', () => {
    testResult.classList.remove('test__result_show');
})

btnAgain.addEventListener('click', () => {
    testResult.classList.remove('test__result_show');
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
    if (numChecks/rightChecks == Infinity) {
        testResultText.textContent = `Ты хоть че то читал? : 0 %`;
    } else if ((rightChecks * 100/numChecks) >= 75) {
        testResultText.textContent = `Отлично : ${(rightChecks * 100/numChecks).toFixed(0)} %`;
    } else if ((rightChecks * 100/numChecks) >= 62 && (rightChecks * 100/numChecks) < 75) {
        testResultText.textContent = `Хорошо : ${(rightChecks * 100/numChecks).toFixed(0)} %`;
    } else {
        testResultText.textContent = `Неудовлетворительно : ${(rightChecks * 100/numChecks).toFixed(0)} %`;
    }
    
}