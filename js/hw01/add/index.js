// #78

// let allTikets = [];
// let max;

// for (let i = 1016; i < 1937; i++) {
//     if (i % 3 == 0 && i % 7 == 0 && i % 5 !== 0 && i % 2 !== 0) {
//         allTikets.push(i);

//         for (let j = 0; j < allTikets.length; j++) {
//             if(allTikets[j] > allTikets.length) {
//                 max = allTikets[j];
//             }
//         }
//     }
// }
// console.log(max);


// #79
// const isEqualSymbol = (str) => {
//     const obg = {};
//     for (let elem of str.replace(/\[^\W]/g).toLowerCase()) {
//         obg[elem] = obg[elem] + 1 || 1;
//     }
//     return obg;
// };

// function isEqualSymbols (str1, str2)  {
//     const obj1 = isEqualSymbol(str1);
//     const obj2 = isEqualSymbol(str2);

//     if(Object.keys(obj1).length !== Object.keys(obj2)) {
//         return false;
//     }
//     for (let elem in obj1) {
//         if(obj1[elem] == obj2[elem]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(isEqualSymbols('адрес', 'среда')); // true
// console.log(isEqualSymbols('ноутбук', 'программист'));// false
// console.log(isEqualSymbols('rfnz ', 'znfr'));// false

// #80
// function unique(arr) {
//     let res = [];
//     for(let elem of arr ) {
//         if(!res.includes(elem)) {
//             res.push(elem);
//         }
//     }
//     return res;
// }

// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]

// #81

// const isPalindrome = (rep) => {
//     return rep == rep.split('').reverse().join('');
// };

// console.log(isPalindrome('racecar4')); // true
// console.log(isPalindrome('programmer')); // false