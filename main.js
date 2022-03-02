// Условие

// 2 == 2 - сравнивает наши значения между двумя элементами ( операндами ) не строгое сравнение

// 2 === 2 - сравнивает наши значения и типы данных между двумя элементами - строное сравнение

// if(1 == '1') {
//     console.log("Привет");
// }else {
//     console.log('Пока');
// }


// var a = prompt('Введите слово Привет');

// if(a === 'Привет') {
//     console.log("Вы молодец");
// }else {
//     console.log('Вы холодец');
// }


// var mark = +prompt('Введите любое число');

// if(mark === 5) {
//     console.log('ты получишь тачку');
// }else if(mark == 5) {
//     console.log('ты получишь айфон');
// }else {
//     console.log('тебя убьют');
// }





// var secret = prompt('Введите секретное слово');

// if(secret == 'admin' || secret == 'админ' || secret == 'zafar') {
//     console.log('Вы угадали');
// }else {
//     console.log('сорян');
// }


//  || - оператор или
//  && - оператор и 
// ! - восклицательный знак перед значением или функцией возвращает противоположное значение
// isNaN() - функция проверяет на NaN если внутри значение NaN то отдаст true


// var a = +prompt('Введите первое число');
// var b = +prompt('Введите второе число');

// if(a > b && !isNaN(a) && !isNaN(b) ) {
//     console.log(a + ' больше чем ' + b);
// }else if(b > a && !isNaN(a) && !isNaN(b) ) {
//     console.log(b + ' больше чем ' + a);
// }else if(b == a && !isNaN(a) && !isNaN(b) ) {
//     console.log(a + ' равно ' + b);
// }else {
//     console.log('Вы ввели не число');
// }


// var num = +prompt('Введите день недели');

// switch(num) {
//         case 1:
//             alert('Пн');
//             break;
//         case 2:
//             alert('Вт');
//             break;
//         case 3:
//             alert('Ср');
//             break;
//         case 4:
//             alert('Чт');
//             break;
//         default:
//             alert('Такого дня недели нету');
//             break;
// }

// if(2 === 2) {
//     console.log('good');
// }else {
//     console.log("bad");
// }

// var x = 2 === 2 ? 'good' : 'bad';

// console.log(x);

// Первое задание про возраст
var num = +prompt('Введите свой возраст');

if (num >= 0 && num <= 18 ) {
    alert('Вы еще молоды. Вам нужно учиться');
}else if (num >= 19 && num <= 50) {
    alert('Вам нужно работать')
}else if (num >= 51 && num <= 59) {
    alert('Вам скоро на пенсию');
}else if (num >= 60 && num <= 150) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}



// Второе задание про часы
var num = +prompt('Введите время')
if (num == 24 || num == 0 || num == 1 || num == 2 || num == 3 ) {
    alert(num + ' час ночи');
}else if (num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9 || num == 10 || num == 11) {
    alert(num + ' часов утра');
}else if (num == 12 || num == 13 || num == 14 || num == 15 || num == 16) {
    alert(num + ' часов дня')
}else if (num == 17 || num == 18 || num == 19 || num == 20 || num == 21 || num == 22 || num == 23) {
    alert(num + ' часов вечера')
}



// Третье задание про среднее число
var x = +prompt('Введите число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третие число');

if (x > y && y < z || x < y && x > z) {
    alert('среднее число ' + x);
}else if (y > x && y < z || y < x && y > z) {
    alert('среднее число ' + y)
}else if (z > x && z < y || z < x && z > y) {
    alert('среднее число ' + z)
}


