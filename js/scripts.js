// Задание 1

let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Ваш город проживания?'),
    phone = prompt('Ваш номер телефона?'),
    email = prompt('Ваш электронный адрес?'),
    company = prompt('Ваша компания');

    console.log('Меня зовут ' + name);
    console.log('Мне ' + age + ' лет');
    console.log('Я проживаю в городе ' + city);
    console.log('и работаю в компании ' + company);
    console.log('Мои контактные данные: телефон ' + phone + ' мой емэйл ' + email);

// Задание 2

let year = 2021,
    yearofBirth = year - age;
    console.log(name + ' родился/родилась в ' + yearofBirth);

// Задание 3 
let str = prompt('Введите 6 чисел');
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
console.log('Да');
} else {
console.log('Нет');
}



// Задание 4

let a = -3;
(a > 0) ? console.log('Верно') : console.log('Неверно');

// Задание 5 

let a = 10,
    b = 2,
    sum = a + b;
    console.log(sum);


// Задание 6

(a > 2 || a < 11 || b >= 6 || b < 14) ? console.log('Верно!') : console.log('Неверно');

// Задание 7

let min7 = 20;
    if (min7 >= 0 && min7 <= 14) {
	console.log('В первую четверть.');
}
    if (min7 >= 15 && min7 <= 30) {
	console.log('Во вторую четверть.');
}
    if (min7 >= 31 && min7 <= 45) {
	console.log('В третью четверть.');
}
    if (min7 >= 46 && min7 <= 59) {
	console.log('В четвертую четверть.');
}

// Задание 8

let day = 5;
    if (day >= 0 && day <= 10) {
	console.log('В первую декаду.');
}
    else if (day >= 11 && day <= 20) {
	console.log('Во вторую декаду.');
}
    else if (day >= 21 && day <= 31) {
	console.log('В третью третью.');
}
 
// Задание 9 
let days = 120,
    year = days / 365,
    month = days / 31,
    week = days / 7,
    hour = days / 24,
    min = days / 60;
    console.log('Количество дней: ' + days + ' Количество месяцев: ' + month.toFixed(2) + ' Количество недель: ' + week.toFixed(2) + ' Количество часов: ' + hour.toFixed(2) + ' Количество минут: ' + min.toFixed(2))
    
    switch (true) {
            case (week < 1):
            console.log('Меньше недели.');
            break;
            case (month < 1):
            console.log('Меньше месяца.');
            break;
            case (year < 1):
            console.log('Меньше года.');
            break;
    }

// Задание 10

    switch (true) {
            case (month < 3):
            console.log('Зима.');
            break;
            case (month < 6):
            console.log('Весна.');
            break;
            case (month < 9):
            console.log('Лето.');
            break;
            case (month < 12):
            console.log('Осень.');
            break;
            case (month < 2):
            console.log('Зима.');
            break;
            default:
                console.log('В этом году нет такого дня!')
    }

