function addTwo(num: number): number {
  //   return "hello";
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

function getValue(myVal: number): boolean {
  if (myVal > 5) {
    return true;
  }
  return false;
  //   return "200 Ok";
  // you have more then one type to declare
}

const getHello = (s: string): string => {
  return "Hello";
  //the second string after the columns is the type of what you return
};
const heros = [1, 2, 3];
heros.map((hero): string => {
  return ` hero is ${hero}`;
});

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);

getUpper("boob");
signUpUser("nicole", "nicole@com", false);
loginUser("h", "h@acom");

function consoleError(errormessage: string): void {
  console.log(errormessage);
  // void means returning nothing!!
}

function handleError(errormessage: string): never {
  throw new Error(errormessage);
  //never is never return a value
}

export {};
