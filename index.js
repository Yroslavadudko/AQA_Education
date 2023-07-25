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
 
// Task-17/27
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
  
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// //Task-18/27
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; 

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// // Task-19/27
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// // Task-20/27
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// // Task-21/27
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   } 
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000))

// // Task-22/27
// function checkStorage(available, ordered) {
//   let message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// // Task-23/27
// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) { 
//    case "starter": 
//       price = 0; 
//       break;

//     case "professional": 
//       price = 20; 
//       break;

//     case "organization": 
//       price = 50; 
//       break;

//   }
//   return price;
// }
// getSubscriptionPrice("starter"); 
// getSubscriptionPrice("professional"); 
// getSubscriptionPrice("organization"); 
// getSubscriptionPrice("_stаrter_"); 

