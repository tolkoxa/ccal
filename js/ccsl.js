let height = document.querySelector('#height');
let weight = document.querySelector('#weight');

height.onfocus = () => {
    height.placeholder = '';
    height.style.outline = 'none';
}
height.onblur = () => {
    height.placeholder = 'Ваш рост (см)';
}

weight.onfocus = () => {
    weight.placeholder = '';
    weight.style.outline = 'none';
}
weight.onblur = () => {
    weight.placeholder = 'Ваш вес (кг)';
}

document.querySelector('#mainbtn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');


})