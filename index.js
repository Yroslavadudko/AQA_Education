// const user = "Mango"

// let age = 5;
// age = 25;
// console.log('age', age)

// const quantity = age;
// console.log('quantity', quantity)

// age = 50;
// console.log('age', age)
// console.log("quantity", quantity);

// const valueB = "random string";
// console.log(Number (valueB)); //'NaN'
// console.log(typeof Number (valueB));
// isNaN(13);
// console.log('isNaN(13):', isNaN(undefined)); //undefined точно не число

// 5>4
// console.log("🚀 ~ 5>4:", 5>4)

// 5>=4
// console.log("🚀 ~ 5>=4:", 5>=4)

// 5>=6
// console.log("🚀 ~ 5>=6:", 5>=6)

// 5<7
// console.log("🚀 ~ 7:", 7)

// 5<=5
// console.log("🚀 ~ 5:", 5)

// 6===7
// console.log("🚀 ~ 7:", 7)

// 5/2
// console.log("🚀 ~ 5/2:", 5/2)

// 6*6
// console.log("🚀 ~ 6*6:", 6*6)

// 1236-477
// console.log("🚀 ~ 1236-477:", 1236-477)

// 2+2
// console.log("🚀 ~ 2:", 2) //?

// const apples = '47';
// const greapes = 135;
// const total = Number(apples) + Number(greapes);
// console.log('total', total);

// const diff = greapes-apples;
// console.log("diff", diff)

// const diff1 = apples - greapes;
// console.log("diff1", diff1);

// let students = 100;
// // students = students +50;
// students += 50;
// console.log('students:', students);

//Task-1/27
// const productName = 'Droid';
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

// //Task-2/27
// let productName = "Droid";
// productName = "Repair droid";
// let pricePerItem = 2000;
// pricePerItem = 2000 + 1500;
// console.log('productName:' , productName);
// console.log('pricePerItem:' , pricePerItem);

//Task-3/27
// const topSpeed = 160;
// console.log("topSpeed:", topSpeed);

// const distance = 617.54;
// console.log("distance:", distance);

// const login = "mango935";
// console.log("login:", login);

// const isOnline = true;
// console.log("isOnline:", isOnline);

// const isAdmin = false;
// console.log("isAdmin:", isAdmin);

// //Task-4/27
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice  = pricePerItem * orderedQuantity;
// console.log("totalPrice:", totalPrice)

// // Change code below this line
// // const totalPrice = pricePerItem;

// // Task-5?27
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log("message:", message)

// // Task-6/27
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log("totalPrice:", totalPrice)

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log("message:", message)

// // Task-7/27
// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

// // Task-8/27
// function add(a , b , c)

//  {
//     console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// //Task-9/27
// function add(a, b, c) {
//     return a + b + c
// }
// add(2, 5, 8);
// let result = add(15, 27, 10);
// console.log("result:", result) // variant-1
// result = add(10, 20, 30);
// console.log("result:", result)
// result = add(5, 10, 15);
// console.log("result:", result)

// console.log(add(15, 27, 10)); // variant-2
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// // Task-10/27
// function makeMessage (name, price) {

//    const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// };

// //Task-11/27
// function calculateTotalPrice (orderedQuantity, pricePerItem) {

//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;

// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// //Task-12/27
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

//   message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// //Task-13/27
// function isAdult(age) {
//     const passed = age >= 18;
//     return passed;
// }

// // Приклади виклику функції:
// console.log(isAdult(20));  // Виведе true
// console.log(isAdult(14));  // Виведе false
// console.log(isAdult(8));   // Виведе false
// console.log(isAdult(37));  // Виведе true

// // Task-14/27
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
 
//   const isMatch = password === SAVED_PASSWORD;


//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// // Task-15/27
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// // Task-16/27
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { 
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// const value = 27.5;
// console.log(Math.floor(value)); //27.5>27 ціле число в меньший біе
// console.log(Math.ceil(value)); //27.5>28 ціле число в більший бік
// console.log(Math.round(value)); //27.5>28 ціле число як в математиці

// const companyName = "Cyberdyne System";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock.`;
// console.log(message);
