//var sername = prompt("Как к вам обращаться?")

//var titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

//var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
//promoTitle.innerText = titleText;                       // заменяем текст в заголовке

let old = prompt("сколько вам лет?")
let wrapper = document.getElementById('promo_wrapper');

if (old < 10) {
	wrapper.classList.toggle("forkids")
}

if (old > 10 && old < 45) {
	wrapper.classList.toggle("foraverageagepeople")
}

if (old > 45) {
	wrapper.classList.toggle("forold")
}
