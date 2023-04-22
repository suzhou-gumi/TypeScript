// let add: (x: number, y: number) => number;

// interface Add {
//   (x: number, y: number): number;
// }

type Add = (x: number, y: number) => number;

let add: Add = (a, b) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
} // 混合类型接口

// 单例
let lib: Lib = (() => {}) as Lib;
lib.version = "1.0";
lib.doSomething = () => {};

// 工厂模式
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
