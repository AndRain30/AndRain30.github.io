const answorsTest = ['В каком году вышел ES6?', 'Как называется стандарт, описывающий спецификацию JS?', 'Уберите из вариантов то, что не подходит Javascript-у.'];

const antwortTest1 = ['В 2015 году', 'ECMA-124', 'Однопоточный'];
const antwortTest2 = ['В 2006 году', 'ECMA-262', 'Прототипное программирование'];
const antwortTest3 = ['В 2019 году', 'ECMAES-6', 'Автоматическое управление памятью'];
const antwortTest4 = ['В 2016 году', 'ECMAJs-2015', 'Динамическая типизация'];

const answorTest = document.querySelector('.answor');
const elemAntwort1 = document.querySelector('.antwort1');
const elemAntwort2 = document.querySelector('.antwort2');
const elemAntwort3 = document.querySelector('.antwort3');
const elemAntwort4 = document.querySelector('.antwort4');

const elemAntworts = document.querySelector('.test__antworts');

const btnConfirm = document.querySelector('.test__button-confirm');
const btnNext = document.querySelector('.test__button-next');

const checks = document.querySelector('.test__checks');

answorTest.textContent = answorsTest[0];

elemAntwort1.textContent = antwortTest1[0];
elemAntwort1.id = 'yes';
elemAntwort2.textContent = antwortTest2[0];
elemAntwort3.textContent = antwortTest3[0];
elemAntwort4.textContent = antwortTest4[0];

let num = 0;  

for (let i = 0; i < elemAntworts.children.length; i++) {
    elemAntworts.children[i].addEventListener('click', () => {
        if (elemAntworts.children[i].getAttribute('checkid') == 'yes') {
            elemAntworts.children[i].setAttribute('checkid', 'no');
        } else {
            for (let j = 0; j < elemAntworts.children.length; j++) {
                elemAntworts.children[j].setAttribute('checkid', 'none');
            }
        elemAntworts.children[i].setAttribute('checkid', 'yes');
        }
        
    })
    
}


btnConfirm.addEventListener('click', () => {
    for (let i = 0; i < elemAntworts.children.length; i++) {
        if (elemAntworts.children[i].id == 'yes' && !elemAntworts.children[i].getAttribute('checkid')) {
            alert('Вы не выбрали вариант');
            break;
        }
        if (elemAntworts.children[i].id == elemAntworts.children[i].getAttribute('checkid') || elemAntworts.children[i].id == 'yes') {
            elemAntworts.children[i].classList.add('test__antwort-green');
            btnNext.classList.add('test__button-next-green');
            btnNext.id = 'yes';
       } else if (elemAntworts.children[i].getAttribute('checkid') == 'yes' && elemAntworts.children[i].id == '') {
            elemAntworts.children[i].classList.add('test__antwort-red');
       } else if (elemAntworts.children[i].getAttribute('checkid') == 'none' && elemAntworts.children[i].id == '') {
            elemAntworts.children[i].classList.add('test__antwort-gray');
       } 
    }
})

btnNext.addEventListener('click', () => {

    if (btnNext.id) {
        num += 1;
        answorTest.textContent = answorsTest[num];

        elemAntwort1.textContent = antwortTest1[num];
        elemAntwort1.id = 'yes';
        elemAntwort2.textContent = antwortTest2[num];
        elemAntwort3.textContent = antwortTest3[num];
        elemAntwort4.textContent = antwortTest4[num];
        for (let i = 0; i < elemAntworts.children.length; i++) {
           elemAntworts.children[i].classList.remove('test__antwort-gray');
           elemAntworts.children[i].classList.remove('test__antwort-red');
           elemAntworts.children[i].classList.remove('test__antwort-green');
           elemAntworts.children[i].removeAttribute('checkid');
           } 
        }
        
})
