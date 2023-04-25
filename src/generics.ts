const scoregg: Array<number> = [];
const animals: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val; // it can be boolean or number
}

function identityTwo(val: any): any {
  return val; // it can be whatever
}

function identityThree<Type>(val: Type): Type {
  return val; // almost a like any but when you use the function and return a number or string etc the TYPE change as it the return all the 3 TYPES are then what we declare when we call the function
}

identityThree(3); // if you check now val is number not TYPE!!!

function identityFour<T>(val: T): T {
  return val; // using T insted TYPE
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "cola", type: 3 });
