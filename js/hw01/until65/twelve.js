// #12
// const myName = 'Kate';
// const programmingLanguage = 'JavaScript';
// const courseCreatorName = 'Vladilen';
// const reasonText = 'it`s interesting';
// const numberOfMonth = 'six month';

// console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`);


// #13
// const progLeng = programmingLanguage.replaceAll('JavaScript', 'JAVASCRIPT');
// const progLeng = programmingLanguage.toUpperCase();
// let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${progLeng} на курсе по ${progLeng} у ${progLeng}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${progLeng} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

// let myInfoTexts = 'Всем привет! Меня зовут, Kate. Сейчас я изучаю язык программирования JAVASCRIPT на курсе по JAVASCRIPT у JAVASCRIPT. Я хочу стать веб-разработчиком, потому что it`s interesting. До этого я изучал(а) JAVASCRIPT six month месяцев. Я уверен(а), что пройду данный курс до конца!';

// console.log(myInfoTexts.length);
// console.log(myInfoTexts.slice(myInfoTexts.length - 1));


// #14
// const uName = prompt('Enter your name');
// const age = prompt('How old are u?');
// const result = uName.trim() + 'and you are' + age.trim();
// alert(result);


// #15
// const string = prompt('enter str');
// const start = +prompt('start?');
// const end = +prompt('end?');

// const str = string.trim();
// const re = str.slice(start, end);

// alert(re);


// #16 
// const  userText = prompt('Введите текст').trim();
// const wordFromText = prompt('Введите слово из текста').trim();

// const indexOfWord = userText.includes(wordFromText);
// const result = userText.slice(wordFromText, wordFromText.length);

// alert(result);


//#17 
// let health = prompt('Введите число параметра "здоровье" для персонажа');
// if (health <= 0 || !health) {
//     console.log('здоровье меньше');  
//     alert('Параметр "здоровье" должен быть больше нуля!');
// } else {
//     console.log('ne to');
//     alert(`Параметр "здоровье" равен ${health}`);
// }

// #18
// const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

// if (temperatureInCelsius === 0) {
//    console.log('0 градусов ');
//    alert('0 градусов по Цельсию - это температура замерзания воды');
// } else if (temperatureInCelsius > 0) {
//    console.log('more 0');
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }
// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
// Фаренгейту.`);


// #19 
// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary = 0;

// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//    totalJuniorDevelopersSalary += salaryWithTax;
// // console.log(totalJuniorDevelopersSalary);
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);


// #20

// function expression 
// const getName1 = (name) => {
//     return name;
// };
// console.log(getName1('kate'));

// // function declaration 
// function getName2(name) {
//     return name;
// }

// const getName3 = name=> name;

// // console.log(getName2('Dixi'));
// console.log(getName3('Jeck'));