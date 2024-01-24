"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific
let d = "world"; // cant be used in react
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string // TS wont allow this
10; // force cast to string
// The DOM
const img = document.querySelector('img'); // not null assertion 
const myImg = document.getElementById('#img');
img.src;
myImg.src;
