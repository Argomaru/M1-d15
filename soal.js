// let number = 13;
// let result = "";

// while (number > 0) {
//   number + 2;
//   number--;
//   if (number % 3 === 0) continue;
//   result = result + number;
// }
// console.log(result);

// let result = "jason naik kuda".split();
// let count = 3;
// do {
//   switch (count % 3 == 0) {
//     case 0:
//       result.slice(count, count + 20);
//       console.log("case 0 ");
//       break;
//     default:
//       result = result.slice(count, count + 20);
//       console.log("case default ");
//   }
//   count -= 1;
// } while (count);
// console.log(result);

// let str = "javascript is for everyone yo!".split(" ");
// console.log(str);
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   console.log(str);
//   i + 2;
//   result = str[i].split("");
// }
// console.log(result);

// let str = "apel buah manis".split("");
// let b = "jeruk adalah kesukaanku";
// let result = "";
// console.log(str);
// str.forEach((a) => {
//   if (a == "h")
//     result += `
//      ${b.split("")}    `;
// });
// console.log(b.split(""));

let boolean = "False";
console.log(Boolean(boolean));

// let arr = [
//   3,
//   [4, 5, 6, 7, [5, 3, 2, 1, 5]],
//   9,
//   10,
//   54,
//   32,
//   3,
//   45,
//   6,
//   7,
//   8,
//   [
//     [1, 2, 3, 4, 5, 6, 7, [4, 4, 3, 2, 1]],
//     [2, 3, 4, 5, 6],
//   ],
// ];

// console.log(arr[11][0][1]);

// const categories = ["Horror", "Sci-fi", "Thriller", "Adventure", "Animation"]; // declare array
// categories.reverse();
// let info = `Terdapat ${categories.length} kategori film `;
// for (let i = 0; i < categories.length; i++) {
//   info += "\n " + categories[i];
// }
// console.log(info);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.pop();
// fruits.shift();
// fruits.unshift("Grape");
// const citrus = fruits.slice(undefined, 5);
// console.log(citrus);

// const things = [
//   ["red pen", "blue pen"],
//   ["analog clock", "digital clock", "smart watch"],
// ];
// console.log(things[1].length);

// var result = 20;

// function a() {
//   console.log(result);
// }

// function b() {
//   var result = 30;
//   c();
// }

// function c() {
//   var result = 35;
//   a();
// }

// b();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = arr.map((el) => Math.round(el));
// let b = [];
// arr.forEach((el) => {
//   b.push(Math.ceil(el));
// });
// let c = arr.filter((el) => {
//   el < 3;
// });

// // console.log(Math.ceil(4));
// console.log(b);
// console.log(a);
// console.log(c);

// const objUser = {
//   username: "userTest",
//   password: "123",
//   email: "test123@gmail.com",
//   intro: function () {
//     return [
//       " email saya " + this.email + " password saya " + this.password,
//       "hello bandung",
//     ];
//   },
// };

// console.log(objUser.intro());
// console.log(objUser.intro()[1]);

// class Electronic extends Product {
//   constructor(name, price, category, stock, warranty) {
//     super(name, price, category, stock);
//     this.warranty = warranty;
//   }
// }
// class Fruits extends Product {
//   constructor(name, price, category, stock, sugarLevel) {
//     super(name, price, category, stock);
//     (this.sugarLevel = sugarLevel),
//       (this.intro = function () {
//         return;
//         "hello sugar level saya adalah" + sugarLevel;
//       });
//   }
// }

// let buah = new Fruits("melon", 30000, "buah,10");

// buah.intro();

// console.log(typeof console.log());

// let number = 89 + 43 + 65 - 23 + 93 * 23 + 8;

// number - 0.5;
// number * 300;
// number--;

// console.log(number);

// let str = "1234";
// let count = 1;
// let x = 0;

// while (x < str.length) {
//   x = parseInt(str.charAt(x));
//   count++;
//   x++;
// }
// console.log(count + x);

// let arr = [
//   "5",
//   [["2.7"], [false]],
//   true,
//   "false",
//   0.5,
//   [[9], 0.3, [NaN, undefined, "true"]],
//   null,
//   "0",
//   undefined,
// ];

// console.log(Boolean([false]) + Boolean(arr[5][0]));

// let xx = "1234567"; //7

// let yy = "12,34,56,7"; //10
// let res = 0;
// console.log(xx.length);
// console.log(yy.length);

// function compare(a, b) {
//   console.log(a + b);
// }
// do {
//   compare(xx.length, yy.length);
//   xx += 3;
// } while (xx.length < yy.length);
