// #31 
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// const giveParcel = () => {
//     const nameGet = peopleWaiting.shift();
//     alert(`${nameGet} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
// };

// giveParcel();
// giveParcel();
// giveParcel();

// const leaveQueueWithoutParcel = () => {
//     const departedPeople = peopleWaiting.pop();
//     alert(`${departedPeople} не получил(а) посылку и ушел(ла) из очереди`);
// };

// for (let i = peopleWaiting.length; i > 0; i -=1) {
//     leaveQueueWithoutParcel();
// }


// #32 
// const getNum = +prompt('Enter num');

// const getSumOfSequence = (number) => {
//     const array = [];
//     let sum = 0;

//     for (let i = 1; i <= number; i += 1) {
//         array.push(i);
//     }

//     sum = array[0] + array[array.length - 1];

//     return sum;
// };

// console.log(getSumOfSequence(getNum));


// #33
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// let coffeeName = prompt('Поиск кофе по названию:');
// coffeeName = coffeeName.trim().toLocaleLowerCase();

// const orderDrink = coffees.findIndex((drink) => drink.toLocaleLowerCase() === coffeeName);
// const favoriteCoffee = coffees[orderDrink];

// if (favoriteCoffee) {
//     alert(`Держите ваш любимый кофе ${favoriteCoffee}.Он ${orderDrink + 1}-й по популярности в нашей кофейне.`);
// } else {
//     alert('К сожалению, такого вида кофе нет в наличии');
// }

// const newPrices = prices.map((price) => price + (price * 0.5));

// coffees.forEach((coffeeName, index) => {
//     alert(`Кофе ${coffeeName} сейчас стоит ${newPrices[index]} евро`);
// });



// #34
// let clientsEstimations = [];

// const askClientToGiveEstimation = () => { 
//     const questionForTheClient = prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`);
//     const clientEstimation = Number(questionForTheClient.trim());

//     if (clientEstimation >= 1 && clientEstimation <= 10) {
//         clientsEstimations.push(clientEstimation);
//     }  
// };

// for (let i = 0; i <= 5; i ++) {
//     askClientToGiveEstimation();
// } 

// const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5);
// const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5);

// alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);


// #35 
// const numbers = [10, 4, 100, -5, 54, 2];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] **3;
// }
// console.log(sum);

// let sum2 = 0;
// for (const number of numbers) {
//     sum2 += number **3;
// }
// console.log(sum2);

// let sum3 = 0;
// numbers.forEach((number) => {
//     sum3 += number **3;
// });
// console.log(sum3);

// const sum4 = numbers.reduce((acc, number) => {
//     return acc + number ** 3;
// }, 0);
// console.log(sum4);


// #36 

// const checkQuestionAnswer = (question, correctAnswer) => {
//     let questionUser = prompt(question).trim();
//     // questionUser = questionUser.toLocaleLowerCase();
//     if(questionUser.toLocaleLowerCase() == correctAnswer.toLocaleLowerCase()) {
//         alert ('True');
//     } else {
//         alert('False');
//     }
// };

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');


// #37
// const showSuccessMessage = (message) => {
//     console.log(message);
// };

// const showErrorMessage = (message) => {
//     console.error(message);
// };
// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {

//     for(let i = 0; i < text.length; i++) {
//         if (text[i] === errorSymbol) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//         } else {
//             successCallback(`В данном тексте нет запрещенных символов`);
//         }
//     }
// };
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// #38
// const goals = [8, 1, 1, 3, 2, -1, 5]; 

// let maxNumberOfGoals = goals[0];
// let maxNumberOfGoalsIndex = 0;
// let minNumberOfGoals = goals[0];

// goals.forEach((goalNumber, index) => {
//     if (goalNumber > maxNumberOfGoals) {
//         maxNumberOfGoals = goalNumber;
//         maxNumberOfGoalsIndex = index;
//     } 
//     if (goalNumber < minNumberOfGoals && goalNumber >=0) {
//         minNumberOfGoals = goalNumber; 
//     }
// });
// alert(minNumberOfGoals);

// const matchesWithMinNumberOfGoals = goals
//     .map((goalNumber, index) => goalNumber === minNumberOfGoals ? index + 1 : -1)
//     .filter((goalNumber) => goalNumber > 0);
// console.log(matchesWithMinNumberOfGoals);
// alert(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}. В нем было забито ${maxNumberOfGoals} гол(ов).`);
// alert(`Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals.join(', ')}. В каждом из них было забито ${minNumberOfGoals} мяча(у).`);

// const numberOfGoalsPerSeason = goals.reduce((acc, goalNumber) => {
//     return goalNumber >=0 ? acc + goalNumber : acc;
// },0);
// alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`);

// const wereAutomaticLoses = goals.some((goal) => goal < 0);
//     if (wereAutomaticLoses) {
//         console.log(`Были автоматические поражения: да`);
//     } else {
//         alert('Были автоматические поражения: нет');
//     }

// const middleGoals = Math.round(numberOfGoalsPerSeason / goals.length);
// alert(`Среднее количество голов за матч равно ${middleGoals}`);

// const ascendingOrderGoals = [...goals].sort((a, b) => a - b);

// alert(ascendingOrderGoals.join(', '));


// #39 
// const operators = [ '>', '<', '=', '+', '-','*', '/'];

// const getMathResult = (expression) => {
//     let acceptsParameters = [...expression]; 

//     if (expression.length > 3) {
//         acceptsParameters = acceptsParameters.filter((item) => !isNaN(item) || operators.includes(item));
//     }

//     const firstDigit = Number(acceptsParameters[0]);
//     const secondDigit = Number(acceptsParameters[acceptsParameters.length - 1]);
//     const mathSign = acceptsParameters[1];

//     switch (mathSign) {
//         case '>': 
//             return firstDigit > secondDigit;
//         case '<': 
//             return firstDigit < secondDigit;
//         case '=': 
//             return firstDigit === secondDigit;
//         case '+': 
//             return firstDigit + secondDigit;
//         case '-': 
//             return firstDigit - secondDigit;
//         case '*': 
//             return firstDigit * secondDigit;
//         case '/': 
//             return firstDigit / secondDigit;
//         default: 
//             return 'Error';
//     }
// };

// const result = getMathResult(['120', '+', 'ervd', '5']);

// console.log(result);


// #40 
// let matrix = [];

// for (let i =0; i < 3; i++) {
//     let row = [];

//     for (let j = 1; j <=5; j++) {
//         row.push(j);
//     }
//     matrix.push(row);
// }

// console.log(matrix);

// #41

// const matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ];

// const arr = matrix.reduce((acc, sum) => {
//     return [...acc, ...sum];
// }, []);

// console.log(arr);

// #42 
// const users = [
//     {
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     }, 
//     {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     }, 
//     {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }
// ];

// const user = users.filter((item) => item.status === 'online');

// const usersOnlineNames = user.reduce((acc, sum) => {
//     acc.push(sum.username);
//     return acc;
// }, []).join(', ');

// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


// Решение конечно же владилена, в 3 строчки 
// const userOnline = users.filter((person) => person.status === 'online');
// const usersOnlineNames = userOnline.map((person) => person.username).join(', ');
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


// другое, менее верное решение, но оно мое
// users.forEach((item) => {
//     if (item.status === 'online') {
//         alert(`Сейчас в онлайн следующие пользователи: ${item.username}`);
//     }
// });


// #43
// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: "Максим" },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" },
// ];

// const giveTalonsInOrder = (patients, orders) => {
//     const giveTalons = patients.reduce((acc, curPerson) => {
//         acc [curPerson.id] = curPerson;
//         return acc;
//     }, {});
//     console.log(giveTalons);
//     return orders.map((order) => giveTalons[order]);
// };

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);


// #44
// const redactionKey = prompt('Enter key');
// const methodRedection = prompt('Enter get, add or delete');

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// };


// const handleObject = (obj, key, action) => {

//     if (action === 'get') {
//         return obj[key];
//     } else if (action === 'add') {
//         const addNewName = prompt('Enter mane key');
//         obj[redactionKey] = addNewName;
//         return obj;
//     } else if (action === 'delete') {
//         delete obj[key];
//         return obj;
//     } else {
//         return obj;
//     }
// };

// const result = handleObject(student, redactionKey, methodRedection);
// console.log('result', result);


// #45

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// };

// const giveJobToStudent = (student, jobName) => {
//     alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

//     student.job = jobName;

//     return student;
// };

// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

// console.log(updatedStudent);


// #46

// const addZero = (numberSrt) => String(numberSrt).length === 1 ? `0${numberSrt}`: String(numberSrt); 

// const getDateFormat = (date, separator) => {

//     let day = date.getDate();
//     let year = date.getFullYear();
//     let month = date.getMonth();

//     const result = [day, month + 1, year].map((item) => addZero(item));
//     return result.join(separator);
// };

// console.log(getDateFormat(new Date('2022, 04, 26'), '-'));


// #47

// const convert = (ms) => Math.round(ms /(1000*60*60*24));

// const getDaysBeforeBirthday = (nextBirthdayDate) => {

//     const dateNow = new Date();
//     const birdayDate = nextBirthdayDate.getTime();

//     console.log(birdayDate);
//     return convert(birdayDate - dateNow);
// };

// console.log(getDaysBeforeBirthday(new Date('2022, 04, 26'))); 


// #48 
// const convertDaysToMs = (days) => days * 24 * 3600 * 1000;

// const addDays = (date, days = 1) => {
//     return new Date(date.getTime() + convertDaysToMs(days));
// };

// const date = new Date();
// console.log('before', date);

// const newDate = addDays(date, 5);
// console.log('after', newDate);


// #49 
// const groceries = {
//     "Orange Juice": {h
//         price : 1.5,
//         discount: 10, 
//     },
//     "Chocolate": {
//         price : 2,
//         discount : 0,
//     },
// more items...
// };

// function getTotalPriceOfShoppingBag(shoppingBag) {
//     const shoppingItems = Object.values(shoppingBag);

//     if(shoppingItems.length === 0) {
//         return 0;
//     }

//     const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
//         const {product, quantity} = currentProduct;
//         const productObject = groceries[product];
//         const {price, discount} = productObject;

//         const priceWithDiscount = productObject.price - (price * discount / 100);
//         let totalProductPrice = priceWithDiscount * quantity;
//         return acc + totalProductPrice;
//     }, 0);

//     return totalPrice.toFixed(2);
// }

// const shoppingBag = [
//     { product: 'Chocolate', quantity: 3 },
//     { product: 'Orange Juice', quantity: 23 },
// ];

// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log('totalPrice', totalPrice); // Возвращает 37.05


// #50
// const hero = {
//     name: 'Kate',
//     health: 100, 
//     heatEnemy: (enemy) => enemy.health -= 10,
// };

// const enemy = {
//     name: 'Pari',
//     health: 100, 
//     heatHero: (hero) => hero.health -= 10,
// };

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const startGame = (heroPlayer, enemyPlayer) => {
//     while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
//         const ramdonNumber = getRandomNumberInRange(0,1);

//         if (ramdonNumber === 0) {
//             heroPlayer.heatEnemy(enemyPlayer);
//             if (enemyPlayer.health <=0) {
//                 break;
//             }
//         } else {
//             enemyPlayer.heatHero(heroPlayer);
//             if (heroPlayer.health <=0) {
//                 break;
//             }
//         }
//     }

//     if (heroPlayer.health <=0) {
//         alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
//     } else {
//         alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
//     }
// };

// startGame(hero, enemy);


// #51 

// const kills = {
//     'James': ['Jacob', 'Bill', 'Lucas'],
//     'Johnny': ['David', 'Kyle', 'Lucas'],
//     'Peter': ['Lucy', 'Kyle'],
// };
// const die = ['Lucas', 'Bill'];

// const getKiller = (suspectInfo, deadPeople) => {
//     let killerName = '';

//     Object.entries(suspectInfo).forEach((data) => {
//         const suspectPerson = data[0];
//         console.log();
//         const peopleWereSeen = data[1];
//         const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName));
//         if(isKiller) {
//             killerName = suspectPerson;
//         }
//     });
//     return killerName;
// };

// console.log(getKiller(kills, die));

// №52 
// const todaysWinner = {
//     prize: '10 000$',
// };

// const winnerApplicants = {
//     '001': {
//         name: 'Максим',
//         age: 25,
//     },
//     '201': {
//         name: 'Светлана',
//         age: 20,
//     },
//     '304': {
//         name: 'Екатерина',
//         age: 35,
//     },
// };

// function getRandomNumberInRange(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }

// const getWinner = (applicants, winnerObject) => {
//     const numberWinnerTiket = Object.keys(winnerApplicants);
//     const randomNumberWnners = getRandomNumberInRange(0, numberWinnerTiket.length);
    
//     const WinerIndex = numberWinnerTiket[randomNumberWnners];
//     const WinerPeople = applicants[WinerIndex];

//     return {
//         ...winnerObject,
//         ...WinerPeople,
//     };
// };

// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log('resultWinner', resultWinner); 


// #53
// const peopleWithVisa = [
//     {
//         firstName: 'Stasia',
//         lastName: 'Ward',
//         criminalRecord: true,
//         passportExpiration: '19.06.2023',
//     },
//     {
//         firstName: 'Elliot',
//         lastName: 'Baker',
//         criminalRecord: false,
//         passportExpiration: '04.06.2021',
//     },
//     {
//         firstName: 'Leighann',
//         lastName: 'Scott',
//         criminalRecord: true,
//         passportExpiration: '31.07.2022',
//     },
//     {
//         firstName: 'Nick',
//         lastName: 'Pop',
//         criminalRecord: false,
//         passportExpiration: '31.12.2021',
//     },
// ];

// const allowVisa = (people) => {
//     return people.filter((person) => {
//         const splittedExpirationDate = person.passportExpiration.split('.');
//         const year = splittedExpirationDate[splittedExpirationDate.length - 1];
//         const month = splittedExpirationDate[1];
//         const date = splittedExpirationDate[0];
//         const passportExpirationDate = new Date(year, month - 1, date);
//         console.log('passportExpirationDate', passportExpirationDate);
//         if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
//             return true;
//         }

//         return false;
//     });
// };

// const result = allowVisa(peopleWithVisa);
// console.log('result', result);



// №54
// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//             this.level += 1;
//             if (this.level == 2) {
//             this.stack.push('CSS');
//             } else if (this.level == 3) {
//                 this.stack.push('JavaScript');
//             } else if (this.level == 4) {
//                 this.stack.push('React');
//             } else if (this.level == 5) {
//                 this.stack.push('NodeJS');
//             } else  {
//                 console.log('Студент выучил все технологии!');
//             }
//         return this;
//     }
// };

// console.log(student.improveLevel());
// console.log(student);
// console.log(student.improveLevel());
// console.log(student);
// console.log(student.improveLevel());
// console.log(student);
// console.log(student.improveLevel());
// console.log(student);
// console.log(student.improveLevel());


// #55

// const dog = {
//     name: 'Чарли',
//     type: 'Собака',
//     makeSound() {
//         return 'Гав-Гав';
//     }
// };

// const bird = {
//     name: 'Петя',
//     type: 'Воробей',
//     makeSound() {
//         return 'Чик-чирик';
//     }
// };

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

//     return {
//         ...this,
//         isDomestic,
//     };
// }
// console.log(makeDomestic.call(bird, true));
// console.log(makeDomestic.apply(dog,[true]));
// console.log(makeDomestic.bind(dog,true)());

// №56
// Функцию attack необходимо исправить при помощи bind + нужно вспомнить особенность стрелочных функций (нет своего this)
// Функцию score - при помощи call
// Функцию substitute - при помощи apply

// const footballer = {
//     fullName: 'Cristiano Ronaldo',
//     attack() {
//         console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//     },
//     scoreGoal(sound) {
//         console.log(`${this.fullName} забил гол! Вот это да!`);
//         this.celebrate(sound);
//     },
//     celebrate(sound) {
//         console.log(sound);
//     },
//     goToSubstitution: function(newPlayer) {
//         console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
//     }
// };

// const attacks = footballer.bind(footballer.attack()) ();
// const score = footballer.call(footballer.scoreGoal('Сиииии'));
// const substitute = footballer.apply([footballer.goToSubstitution("Я выхожу!")]);
// attacks();
// score();
// substitute('Paulo Dibala');
// footballer.celebrate("куи");


// #57
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';    
//     }
//     setTechnologies(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }
// }
// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);


// #58
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     compareAge(person) {
//         if (this.age > person.age) {
//             console.log(`${this.name} старше, чем ${this.name}`);
//         } else {
//             console.log(`${this.name} младше, чем ${this.name}`);
//         }
//     }
// }
// const person1 = new Person('Максим', 24);
// const person2 = new Person('Светлана', 36);
// const person3 = new Person('Ирина', 23);

// person1.compareAge(person2); // Максим младше, чем Светлана 
// person2.compareAge(person3); // Светлана старше, чем Ирина 
// person3.compareAge(person1); // Ирина младше, чем Максим


// #59
// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }

//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//             }
//         }
//     }

//     remove(word) {
//         delete this.words[word];
//     }

//     get() {
//         return this.words[word];
//     }

//     showAllWords() {
//         Object.values(this.words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`);
//         });
//     }
// }


// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

// dictionary.remove('JavaScript');
// dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие


// #60
// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }

//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//             }
//         }
    // }

    // remove(word) {
    //     delete this.words[word];
    // }

    // get() {
    //     return this.words[word];
    // }

//     showAllWords() {
//         Object.values(this.words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`);
//         });
//     }
// }


// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name);
//     }

//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//                 isDifficult: true,
//         };
//     }
// }}

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
// hardWordsDictionary.add('квант', 'Неделимая част какой-либо величины в физике.'); 
    
// hardWordsDictionary.remove('неологизм');
    
// hardWordsDictionary.showAllWords();


// 61

// class Developer {
//     constructor(fullName, age, position) {
//         this.fullName = fullName;
//         this.age = age;
//         this.position = position;
//         this.technologies = [];
//     }

//     code() {}

//     learnNewTechnology(technology) {
//         this.technologies.push(technology);
//     }
// }

// class JuniorDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, 'Junior');
//         this.technologies = ['HTML', 'CSS', 'JavaScript'];
//     }

//     code() {
//         console.log('Junior разработчик пишет код...”');
//     }
// }

// class MiddleDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, 'Middle');
//         this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
//     }

//     code() {
//         console.log('Middle разработчик пишет код...');
//     }
// }

// class SeniorDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age,'Senior');
//         this.technologies = [ 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//     }
//         code() {
//             console.log(`${this.position} разработчик пишет код...`);
//         }
//     }

// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
// const middleDeveloper = new MiddleDeveloper('Игорь', 25);
// const seniorDeveloper = new SeniorDeveloper('Максим', 30);

// juniorDeveloper.code(); // Junior разработчик пишет код... 
// middleDeveloper.code(); // Middle разработчик пишет код…
// seniorDeveloper.code(); // Senior разработчик пишет код... 

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); // 'Игорь', 25, 'Middle'
// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); // 'Максим', 30, 'Senior'


//  #62 
// const defender = {
//     archer: 33,
//     footSoldier: 50,
//     cavalry: 40,
//     artillery: 10,
// };

// const attacker = {
//     archer: 30,
//     footSoldier: 55,
//     cavalry: 10,
//     artillery: 3, 

//     checkChancesToWin(defenderObject) {
//         const attackerValues = Object.values(this);
//         const defenderValues = Object.values(defenderObject);
//         let chancesCounter = 0;
//         attackerValues.forEach((value, index) => {
//             if (value > defenderValues[index] && typeof value === 'number') {
//                 chancesCounter += 1;
//             }
//         });

    //     return [chancesCounter, defenderValues.length];
    // },
    
    // improveArmy() {
    //     Object.entries(this).forEach((item) => {
    //         const key = item[0];
    //         const value = item[1];
    //         if (typeof value === 'number') {
    //             this[key] = value + 5;
    //         }
    //     });
    // },

    // attack(defender) {
    //     const chancesValues = this.checkChancesToWin(defender);
    //     const ourArmyChances = chancesValues[0];
//         const seventyPercentChances = Math.round(chancesValues[1] * 70 / 100);

//         if (ourArmyChances < seventyPercentChances) {
//             alert(`Наши шансы равны ${ourArmyChances}/${chancesValues[1]}. Необходимо укрепление!`);
//             this.improveArmy();
//         } else {
//             alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
//         }

//         console.log(this);
//     }
// };

// attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
// attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
// attacker.attack(defender);


// #63
// class Dictionary {
//     #name
//     #words

//     constructor(name) {
//         this.#name = name;
//         this.#words = {};
//     }

//     get mainName() {
//         return this.#name;
//     }

//     set setMainName(newName) {
//         this.#name = newName;
//     }

//     get allWords() {
//         return this.#words
//     }

//     addNewWord(wordKey, wordObj) {
//         this.#words[wordKey] = wordObj;
//     }

//     add(word, description) {
//         if (!this.#words[word]) {
//             const newWord = { word, description };
//             this.addNewWord(word, newWord);
//         }
//     }

//     remove(word) {
//         delete this.#words[word];
//     }

//     get() {
//         return this.#words[word];
//     }

//     showAllWords() {
//         Object.values(this.#words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`);
//         });
//     }
// }

// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name);
//     }

//     add(word, description) {
//         if (!this.allWords[word]) {
//             this.addNewWord(word, {
//                 word,
//                 description,
//                 isDifficult: true,
//             });
//         }
//     }
// }

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

// hardWordsDictionary.remove('неологизм');
// hardWordsDictionary.showAllWords();

// console.log(hardWordsDictionary.mainName); // Сложные слова
// hardWordsDictionary.setMainName = 'Новый Словарь';
// console.log(hardWordsDictionary.mainName); // Новый Словарь
// console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант


// #64
// class CarService {
//     static DefaultWorkingHours = {
//         from: '09:00',
//         till: '18:00',
//     }

//     constructor(name, workingHours) {
//         this.name = name;
//         this.workingHours = workingHours || CarService.DefaultWorkingHours;
//     }

//     repairCar(carName) {
//         if (!carName) {
//             console.error(`Вам необходимо указать название машины, чтобы ее отремонтировать`);
//         } else {
//             const currentTime = new Date();
//             const currentHours = currentTime.getHours();
//             const workingHoursFrom = Number(this.workingHours.from.split(':'[0]));
//             const workingHoursTill = Number(this.workingHours.till.split(':')[0]);

//             if (currentHours => workingHoursFrom && currentHours < workingHoursTill) {
//                 console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
//             } else {
//                 console.log(`К сожалению, мы сейчас закрыты. Приходите завтра`);
//             }
//         }

//     }
// }

// const carService = new CarService('RepairCarNow', { from: '8:00', till: '00:00' });
// carService.repairCar('BMW');


//#65
/* <form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form> */

// document.body.innerHTML = `
//     <form class="create-user-form">
//         <label>
//             Имя
//             <input type="text" name="userName" placeholder="Введите ваше имя">
//         </label>
//         <label>
//             Пароль
//             <input type="password" name="password" placeholder="Придумайте Пароль">
//         </label>
//         <button type="submit">
//             Подтвердить
//         </button>
//     </form> 
// `;

// const createInputWithLabel = (
//     label, inputType, inputName, placeholder,
// ) => {
//     const labelContainer = document.createElement('label');
//     labelContainer.innerText = label;

//     const inputElement = document.createElement('input');
//     inputElement.type = inputType;
//     inputElement.name = inputName;
//     inputElement.placeholder = placeholder;

//     labelContainer.append(inputElement);

//     return labelContainer;
// };

// const formContainer = document.createElement('form');
// formContainer.className = 'create-user-form';

// const userNameLabel = createInputWithLabel(
//     'Имя', 'text', 'userName', 'Введите ваше имя',
// );
// const passwordLabel = createInputWithLabel(
//     'Пароль', 'password', 'password', 'Придумайте Пароль',
// );

// const confirmButton = document.createElement('button');
// confirmButton.type = 'submit';
// confirmButton.innerText = 'Подтвердить';

// formContainer.append(userNameLabel, passwordLabel, confirmButton);
// document.body.prepend(formContainer);
