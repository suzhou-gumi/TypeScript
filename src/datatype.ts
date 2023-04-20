// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, "3"]; // 联合类型

// 元组
let tuple: [number, string] = [0, "1"];
tuple.push(2); // 元组越界问题
console.log(tuple);
// tuple[2];

// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
let obj: object = {
  x: 1,
  y: 2,
};
let obj2: { x: number; y: number } = {
  x: 1,
  y: 2,
};

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false

// undefined, null
let un: undefined;
let nu: null = null;

// void
let noReturn = () => {};

// any
let x;

// never
let error = () => {
  throw new Error("error");
};
let endless = () => {
  while (true) {}
};
