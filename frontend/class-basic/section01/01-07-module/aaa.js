import fruit, { apple, grape } from "./bbb.js";

console.log("사과 : ", apple);
console.log("포도 : ", grape);
console.log("과일 : ", fruit);

import * as fruits from "./bbb.js";
console.log("과일들 : ", fruits);
console.log("과일들 중 사과 : ", fruits.apple);
console.log("과일들 중 포도 : ", fruits.grape);
console.log("과일들 중 default: ", fruits.default);
