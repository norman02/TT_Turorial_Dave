type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific

let d = <One>"world"; // cant be used in react
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string // TS wont allow this
(10 as unknown) as string // force cast to string

// The DOM
const img = document.querySelector('img')! // not null assertion 
const myImg = document.getElementById('#img') as HTMLImageElement

img.src
myImg.src
