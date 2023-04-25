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

function getSearchProducts<T>(products: T[]): T {
  // the return value has to be one of the value inside the array
  const myIndex = 3;
  return products[myIndex];
}

const getMore = <T>(products: T[]): T => {
  const myIndexs = 4;
  return products[myIndexs];
};

interface DataBase {
  connection: string;
  username: string;
  password: string;
}

function genericFunction<T, U extends DataBase>(
  valueOne: T,
  valueTow: U
): object {
  return { valueOne, valueTow };
}
// you can also do <T, dataBase>(valueTow: database)

genericFunction(3, { connection: "s", username: "d", password: "e" });

interface QUIZ {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sale<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
