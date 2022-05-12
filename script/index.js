let answor = document.querySelector('.answors__list');
let answors = document.querySelector('.answors__list').children;
for (let i = 0; i < answors.length; i++) {
    if (i % 2 === 0) {
    answor.children[i].lastElementChild.addEventListener('click', () => {
        answor.children[i + 1].classList.toggle("answors__antwort-visible");
    })
  }
}



