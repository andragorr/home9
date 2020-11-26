// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const text = document.getElementById('text');
// const button = document.getElementById('hide');

// button.addEventListener('click', () => {
//     text.style.display = 'none';
// })

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const button = document.getElementById('hide');

// button.onclick = ev => {
//      button.style.display = 'none'
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
// та повідомити про це користувача


// const button = document.getElementById('hide');
// button.onclick = ev => {
//     const input = document.getElementById('input1');
//     const value = input.value
//     if( value < 18 && value>0) {
//         alert ('You are not adult')
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


// let commentsArr = [ 
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ]

// const content = document.getElementById('content');
// commentsArr.forEach(item => {
//     const div = document.createElement('div');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//     const button = document.createElement('button');

//     button.innerText = 'show';
//     h1.innerText = item.title;
//     p.innerText = item.body;

//     button.onclick = ev => {
//         p.hidden ? p.hidden = false : p.hidden = true
//     }

//         div.appendChild(h1);
//         div.appendChild(p);
//         div.appendChild(button);
//         content.appendChild(div);
// })



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const button = document.getElementById('btn');
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input3 = document.getElementById('input3');
// const input4 = document.getElementById('input4');

// button.onclick = ev => {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.




// const content = document.getElementById('content');

// function createTable(rows,colums,tag) {
//     const table = document.createElement('table');
//     for ( let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//             for ( let k = 0; k < colums; k++){
//                 const td = document.createElement('td');
//                 td.innerHTML = i + k;
//                 tr.appendChild(td);
//             }
//             table.appendChild(tr);
//         }
//         tag.appendChild(table);
//     }

// createTable(4, 5 , content)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.



// const images = [
//     {id: 1,
//         img_url: "images/body1.jpg"},
//     {id: 2,
//         img_url: "images/body2.jpg"},
//     {id: 3,
//         img_url: "images/body3.jpg"},
//     {id: 4,
//         img_url: "images/body4.jpg"},
//     {id: 5,
//         img_url: "images/body5.jpg"}, 
// ];

// const content = document.getElementById('content');
// const img = document.createElement('img');
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');

// btn1.innerText = 'Left';
// btn2.innerText = 'Right';
// img.width = 400;
// img.height = 400;
// let index = 0;
// img.scr = images[index].img_url

// content.appendChild(img);
// content.appendChild(btn1);
// content.appendChild(btn2);

// btn1.onclick = () => { 
//    if (  index -1 < 0) {
//        index = images.length-1
//    } else {
//        index = index -1

//        img.src = images[index].img_url
//    }
// }
    
// btn2.onclick = () => { 
//     if (  index +1 > images.length-1) {
//         index = 0
//     } else {
//         index = index +1
 
//         img.src = images[index].img_url
//     }
//  }


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let censorArr = [ 'fuck', 'faggot', 'asshole'];

// const censor = document.forms.censor.text;
// const button = document.getElementById('censor_field');

// button.onclick = ev => {
//     if ( censorArr.includes(censor.value)){
//         alert('Uncorect word');
//     }
    
// }


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку


// let censorArr = [ 'fuck', 'faggot', 'asshole'];

// const censor = document.forms.censor.text;
// const button = document.getElementById('censor_field');

// button.onclick = ev => {
//     let sentense = censor.value.split(" ");
//     for ( let word of sentense) {
//         censorArr.forEach(value => word.includes(value) ? alert("Uncorect word") : null)
  
//     }
    
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


// const h2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const wrap = document.getElementsByTagName('wrap');
// const ul = document.createElement('ul');

// for ( let i = 0; i < h2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let fullstop = 'fullstop' + i;
//     a.href = '#' + fullstop;
//     h2[i].setAttribute('id',fullstop);
//     a.innerHTML = h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }

// content.appendChild(ul);

// -- взять массив пользователей

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ





let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];


const content = document.getElementById('content');
const div = document.createElement('div');

div.className = 'user';
div.appendChild(filtredUsers(usersWithAddress));

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');


const label1 = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');

const button = document.createElement('button');

label1.innerText = 'status False'

label2.innerText = 'age'

label3.innerText = 'location Kyiv'


button.innerText = 'Filter ON'

input1.type = 'checkbox';
input2.type = 'checkbox';
input3.type = 'checkbox';

content.appendChild(div);

content.appendChild(input1)
content.appendChild(label1)
content.appendChild(input2)
content.appendChild(label2)
content.appendChild(input3)
content.appendChild(label3)
content.appendChild(button)

button.onclick = ev => {
    let myArr = JSON.parse(JSON.stringify(usersWithAddress))

    if(input1.checked) myArr = myArr.filter(value => !value.status);
    if(input2.checked) myArr = myArr.filter(value => value.age >= 29);
    if(input3.checked) myArr = myArr.filter(value => value.address.city === 'Kyiv');

    div.innerHTML = '';
    div.appendChild(filtredUsers(myArr));

}


function filtredUsers(array) {
    const main = document.createElement('div');
    array.forEach(element => {
        const div1 = document.createElement('div');
        const h2 = document.createElement('h2');


        div1.innerText = JSON.stringify(element);

        main.appendChild(div1);
    });
    return main;
}








