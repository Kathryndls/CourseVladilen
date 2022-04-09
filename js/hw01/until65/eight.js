// lesson 8 Basics JS

// Exemple  switch
// const developerJobType = 'Back-End';
// switch(developerJobType) {
//     case 'Front-End': 
//         console.log('2000$');
//     break;
//     case 'Back-End': 
//     console.log('1500$');
//     break;
//     case 'Full-Stack':
//         console.log('3500$');
//     break;
//     default: 
//         console.log('SP not found');
// }

// Exemple ternarny operator
// const favoriteDrink = 'Coffee';
// const message = favoriteDrink === 'Coffee'
//     ? 'Your lovely drink - it`s coffee'
//     : 'You lovely tea';

//     console.log(message);


// #21
// const existedUserLogin = 'the_best_user';
// const existedUserPassword = '12345678';

// const userLogin = prompt('Enter login').trim();
// const userPassword = prompt('Enter parol').trim();

// if (userLogin === existedUserLogin || userPassword === existedUserPassword) {
//     alert(`Добро пожаловать, ${userLogin}!`);
// } else {
//     alert('Логин и (или) Пароль введены неверно');
// }


// #22
// let questions = ['Сколько будет 2 + 2?',
//                 'Сколько будет 2 * 2?',
//                 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
//                 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
//                  'Сколько будет 2 + 2 * 2?'];

// let answers = [4, 4, 1, 12, 6];
// let correctAnswers = 0;
// let incorrectAnswers= 0;
// let userAnswer = '';

// for (let i = 0; i < questions.length; i += 1) {
//     userAnswer = Number(prompt(questions[i]));
//     if (userAnswer === answers[i]) {
//         alert('Ответ верный!');
//         correctAnswers += 1;
//     } else {
//         alert('Ответ неверный!');
//         incorrectAnswers += 1;
//     }
// }
// alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);


// #23
// let asks = [
//     'JavaScript появился в 1995 году?',
//     'Спецификация JavaScript называется ECMAScript?',
//     ' JavaScript был создан за 1 месяц?',
// ];

// let unswers = [true, true, false];
// let userAnswer = '';

// for (let i = 0; i < asks.length; i +=1) {
//     userAnswer = Number(confirm(asks[i]));
//     if (userAnswer == unswers[i]) {
//         alert('Good');
//     } else {
//         alert('Bad');
//     }
// }


// #24

// let i = 0; 
// while (i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//     i+=1;
// }

// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//     i+=1;
// } while (i < 3);


// #25 
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }

// let log = sum;
// console.log(log);


// #26

// let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';


// javaScriptDescription = javaScriptDescription
//     .slice(0, Math.floor(javaScriptDescription.length / 2))
//     .replaceAll('а', 'А')   
//     .replaceAll(' ', '')
//     .repeat(3);

//     console.log(javaScriptDescription);

//     let javaScriptDescriptions = Math.floor(javaScriptDescription.length /2);
//     console.log(javaScriptDescriptions);


// #27 

// const clientName = prompt('Введите имя клиента');
// let clientSpentToday = +prompt('Сколько клиент потратил сегодня');
// let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?');

// let discount;

// if (clientSpentForAllTime && clientSpentToday) {
//     if (clientSpentForAllTime <=100 && clientSpentForAllTime < 300) {
//         discount =10;
//     } else if (clientSpentForAllTime >=300 && clientSpentForAllTime < 500) {
//         discount = 20;
//     } else if (clientSpentForAllTime > 500) {
//         discount = 30;
//     } 
    
//     alert(`Вам предоставляется скидка в ${discount}%!`);
    
//     clientSpentToday = clientSpentToday - (clientSpentToday * (discount/ 100));
    
    
//     clientSpentForAllTime += clientSpentToday;
    
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`);
    
// } else {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
    
// }


// #28 

// const password = prompt('Введите пароль');
// const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
// const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

// if (password.length < 3 || password.length > 20) {
//     alert(errorMessage);
// } else {
//     let hasBigSymbol = false; 
//     let hesNumbers = false; 

//     for (let i = 0; i < password.length; i +=1) {
//         const symbol = password[i];
//         const numberSymbol = Number(symbol);
//         const isNumberSymbol = numberSymbol && typeof numberSymbol === 'number';

//         if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
//             hasBigSymbol = true; 
//         }
//         if (isNumberSymbol) {
//             hasNumbers = true;
//         }
//     }

//     if (!hasBigSymbol || !hasNumbers) {
//         alert(errorMessage);
//     } else {
//         alert(successMessage);
//     }
// }


// #29
// const number = prompt('Enter sum');

// function getSumOfNumbers(number, type = 'odd') {
//     let sum = 0;

//     if (type === "odd") {
//         for (let i = 1; i <= number; i+=2) {
//             sum +=i;
//         }
//     } else if (type === 'even') {
//         for (let i = 0; i <= number; i+=2) {
//             sum += i;
//         }
//     } else {
//         for (let i = 0; i <= number; i++) {
//             sum +=i;
//         }
//     }
//     return sum;
// }
// alert(getSumOfNumbers(number, ''));



// #30
// const number = prompt('Enter num');

// function getDivisorsCount (number = 1) {

//         if (number < 0 || Number.isInteger(number)) {
//             alert(`${number} должен быть целым числом и больше нуля!`);
//         } else {
//             let counter = 0;
//                 for (let i = number; i > 0; i -=1) {
//                     const isDivisor = number % i === 0;
//                     if (isDivisor) {
//                         counter +=1;
//                     }
//                 }
//             return counter;
//         }
//     }

//     const result = getDivisorsCount(number);
//     alert(result);
