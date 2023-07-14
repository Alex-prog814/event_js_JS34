// 2
// let btn = document.querySelector('button');
// btn.onclick = () => alert('BTN CLICKED');
// btn.onclick = () => alert('BTN CLICKED 2');

// 3
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => alert('BTN CLICKED'));
// btn.addEventListener('click', () => alert('BTN CLICKED 2'));

// let btn = document.querySelector('button');
// function handler() {
//     console.log('Hello');
// };

// function handler2() {
//     console.log('Hello 2');
// };

// btn.addEventListener('click', handler);
// btn.addEventListener('click', handler2);
// ...code...
// btn.removeEventListener('click', handler);

// offline, online
// window.addEventListener('offline', () => {
//     console.log('Нет интернета!!!');
// });

// window.addEventListener('online', () => {
//     console.log('Интернет появился!!!');
// });

// click
// let block = document.querySelector('div');
// block.addEventListener('click', () => {
//     console.log('CLICKED');
// });

// mousemove - срабатывает при движении мыши
// mousedown - срабатывает при нажатии на кнопку мыши
// mouseup - срабатывает при отпускании кнопки мыши

// block.addEventListener('mousemove', (event) => {
//     console.log(event.clientX, event.clientY);
// });

// window.addEventListener('mousedown', (event) => {
//     console.log(event.clientX, event.clientY);
// });

// window.addEventListener('mouseup', (event) => {
//     console.log(event.clientX, event.clientY);
// });

// let block = document.querySelector('div');
// dblclick - двойной клик мыши
// block.addEventListener('dblclick', e => {
//     block.style.background = 'yellow';
// });

// contextmenu - правая кнопка мыши
// block.addEventListener('contextmenu', e => {
//     block.style.background = 'green';
// });

// let inp = document.querySelector('input');

// input - срабатывает при любом изменении значения инпута
// inp.addEventListener('input', e => {
//     console.log(e.target.value);
// });

// focus - при фокусировке на инпуте
// inp.addEventListener('focus', e => {
//     console.log(e.target);
// });

// change - при нажатии на enter(при изменении контента)
// inp.addEventListener('change', e => {
//     console.log(e.target.value);
// });

// paste - при вставке контента(который был скопирован)
// inp.addEventListener('paste', e => {
//     console.log(e.target);
// });

// let text = document.querySelector('p');

// copy - срабатывает при копировании
// text.addEventListener('copy', () => {
//     console.log('COPY WORK');
// });

// let block = document.querySelector('div');

// mouseover - когда заходим в границы элемента
// block.addEventListener('mouseover', () => {
//     block.style.transition = '1s';
//     block.style.background = 'green';
// });

// mouseleave - когда покидаем границы элемента
// block.addEventListener('mouseleave', () => {
//     block.style.transition = '1s';
//     block.style.background = 'red';
// });

// resize - при изменении размера экрана
// window.addEventListener('resize', () => {
//     console.log('Размер экрана изменен!');
// });

let inp = document.querySelector('input');
let form = document.querySelector('form');
let title = document.querySelector('h1');

// submit
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let value = inp.value;
//     title.innerText = value;
// });

// keydown - обрабатывает нажатие любой клавиши, срабатывает первой
// keypress - обрабатывает символьные значения(клавиши), срабатывает после keydown
// keyup - срабатывает последним, работает при отпускании клавиши

// document.addEventListener('keypress', (e) => {
//     console.log('keypress', e);
// });

// document.addEventListener('keydown', (e) => {
//     console.log('keydown', e);
// });

// document.addEventListener('keyup', (e) => {
//     console.log(e);
// });

// MINI PROJECT
let addBtn = document.querySelector('#add-btn');
let saveBtn = document.querySelector('#save-btn');
let titleInp = document.querySelector('#add-title');
let colorInp = document.querySelector('#add-color');
let priceInp = document.querySelector('#add-price');
let list = document.querySelector('#product-list');
// console.log(list);

const db = [];

addBtn.addEventListener('click', e => {
    e.preventDefault();

    if(
        !titleInp.value.trim() ||
        !colorInp.value.trim() ||
        !priceInp.value.trim()
    ) {
        alert('Some inputs are empty!');
        return;
    };

    let newObj = {
        id: Date.now(),
        title: titleInp.value,
        color: colorInp.value,
        price: priceInp.value
    };

    db.push(newObj);

    titleInp.value = '';
    colorInp.value = '';
    priceInp.value = '';

    render();
});

function render() {
    list.innerHTML = '';

    db.forEach(item => {
        list.innerHTML += `
            <li id="${item.id}">
                Product: ${item.title};
                Color: ${item.color};
                Price: ${item.price};
                <button id="del-btn">Delete</button>
                <button id="edit-btn">Edit</button>
            </li>
        `;
    });
};