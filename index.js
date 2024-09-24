/////////////// 1 - masala ///////////////

// function myFunc(arr, num) {
//   let newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let res = arr[i] + arr[i + 1];
//     newArr.push(res - num);
//   }
//   let maxNum = Math.min(...newArr);
//   let index = newArr.indexOf(maxNum);
//   return [arr[index], arr[index + 1]];
// }
// console.log(myFunc([21, 43, 11, 45, 4, 32, 54], 35));

/////////////// 2 - masala ///////////////

// function myFunc(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   let num = newArr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr[i] = arr[i] + num;
//     }
//   }
//   return arr;
// }
// console.log(myFunc([1, 4, 5, 2, 33, 1, 8]));

/////////////// 3 - masala ///////////////

// function myFunc(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       newArr.push(arr[i]);
//     }
//   }
//   let num = newArr[newArr.length - 1];
//   for (let i = 0; i < newArr.length; i++) {
//     newArr[i] += num;
//   }
//   return newArr;
// }
// console.log(myFunc([2, 55, 2, 21, 44, 3]));

/////////////// 4 - masala ///////////////

// function myFunc(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min) {
//       arr[i] = max;
//     } else if (arr[i] === max) {
//       arr[i] = min;
//     }
//   }
//   return arr;
// }
// console.log(myFunc([23, 43, 12, 56, 64]));

/////////////// 5 - masala ///////////////

// function myFunc(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let num1 = arr.indexOf(min);
//   let num2 = arr.indexOf(max);
//   if (num1 > num2) {
//     for (let i = num2 + 1; i < num1; i++) {
//       arr[i] = 0;
//     }
//   } else if (num1 < num2) {
//     for (let i = num1 + 1; i < num2; i++) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// }
// console.log(myFunc([2, 54, 4, 11, 1, 34, 11]));

/////////////// 6 - masala ///////////////

// function myFunc(arr) {
//   let newArr = [];
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let num1 = arr.indexOf(min);
//   let num2 = arr.indexOf(max);
//   if (num1 > num2) {
//     for (let i = num2 + 1; i < num1; i++) {
//       let a = arr.slice(0, num2 + 1);
//       let b = arr.slice(num2 + 1, num1).reverse();
//       let c = arr.slice(num1);
//       return [...a, ...b, ...c];
//     }
//   } else if (num1 < num2) {
//     for (let i = num1 + 1; i < num2; i++) {
//       let a = arr.slice(0, num1 + 1);
//       let b = arr.slice(num1 + 1, num2).reverse();
//       let c = arr.slice(num2);
//       return [...a, ...b, ...c];
//     }
//   }
// }
// console.log(myFunc([2, 54, 4, 11, 1, 34, 11]));

/////////////// 7 - masala ///////////////

// function myFunc(arr, k) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== k) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(myFunc([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

/////////////// 8 - masala ///////////////

// function myFunc(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr[i] = "";
//       arr[i + 1] = "";
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] !== "") {
//       newArr.push(arr[j]);
//     }
//   }
//   return newArr;
// }
// console.log(myFunc([1, 2, 2, 3, 4, 4, 5, 6]));

/////////////// 9 - masala ///////////////

// function myFunc(arr) {
//   let obj = {};
//   let newArr = [];
//   for (let res of arr) {
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] >= 3) {
//       newArr.push(parseInt(key));
//     }
//   }
//   return newArr;
// }
// console.log(myFunc([1, 6, 6, 1, 2, 3, 1, 2, 4, 4, 3, 4, 2, 4, 5, 6]));

/////////////// 10- masala ///////////////

// function myFunc(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }
// console.log(myFunc([1, 2, 3, 4, 5, 6]));

///////////////Qo'shimcha masalalar///////////////

/////////////// 1 - masala ///////////////

// function myFunc(n) {
//   return (n * (n - 3)) / 2;
// }
// console.log(myFunc(6));

/////////////// 2 - masala ///////////////

// function myFunc(arr) {
//   let obj = {};
//   let newArr = [];
//   for (let res of arr) {
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] === 1 && parseInt(key) % 2 === 1) {
//       newArr.push(parseInt(key));
//     }
//   }
//   let max = Math.max(...newArr);
//   let min = Math.min(...newArr);
//   return [min, max];
// }
// console.log(myFunc([1, 3, 2, 3, 5, 6, 5, 6, 5, 7, 9, 8]));

/////////////// 3 - masala ///////////////

// function myFunc(s) {
//   let obj = {};
//   let result = 0;
//   let arr = [];
//   let newArr = [];
//   let arr2 = [];
//   for (const res of s) {
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] % 2 == 0) {
//       result += obj[key];
//       for (let i = 0; i < obj[key] / 2; i++) {
//         arr.push(key);
//         arr.unshift(key);
//       }
//     } else if (obj[key] % 2 == 1) {
//       newArr.push(key);
//     }
//   }
//   for (let i = 0; i < arr.length / 2; i++) {
//     arr2.push(arr[i]);
//   }
//   arr2.push(newArr[0]);
//   for (let i = arr.length / 2; i < arr.length; i++) {
//     arr2.push(arr[i]);
//   }
//   return {
//     PalindromString: arr2.join(""),
//     length: arr2.length,
//   };
// }
// console.log(myFunc("abccccddh"));

/////////////// 4 - masala ///////////////

// function myFunc(s) {
//   let obj = {};
//   let result = 0;
//   for (let res of s) {
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] > 1) {
//       result += obj[key] - 1;
//     }
//   }
//   return result;
// }
// console.log(myFunc("aebaecedabbee"));

/////////////// 5 - masala ///////////////

// function isHappy(n) {
//   while (true) {
//     n = String(n)
//       .split("")
//       .reduce((a, b) => a + Math.pow(Number(b), 2), 0);
//     if (n < 10) {
//       return n === 1 || n === 7;
//     }
//   }
// }
// console.log(isHappy(19));