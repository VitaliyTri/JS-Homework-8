// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', () => {
    console.log(`все теги прогрузились`)
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', () => {
    console.log("страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
const bodyEl = document.querySelector('body');
bodyEl.addEventListener('click', function (e) {
    if (e.target.className === 'super_element') {
        console.log(`Класс "super_element" присутствует в элементе "${e.target.tagName.toLowerCase()}"`);
    }
    else console.log(`Класс "super_element" отсутствует в элементе "${e.target.tagName.toLowerCase()}"`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textareaEl = document.querySelector('textarea');
textareaEl.addEventListener('mouseover', function (e) {
    console.log('Вы навели на "textarea"');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.innerHTML);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами. (Ответ: Наверно, потому что это так называемое "Всплытие", которое начинается от вложенного элемента и идет дальше к родителю, прародителю и т.д.)

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liElements = document.querySelectorAll('li');
for (let i = 0; i < liElements.length; i++) {
    if (i % 2 !== 0) {
        liElements[i].style.backgroundColor = 'grey';
    }
}