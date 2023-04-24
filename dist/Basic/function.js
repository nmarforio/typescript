"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //   return "hello";
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
    //   return "200 Ok";
    // you have more then one type to declare
}
const getHello = (s) => {
    return "Hello";
    //the second string after the columns is the type of what you return
};
const heros = [1, 2, 3];
heros.map((hero) => {
    return ` hero is ${hero}`;
});
let loginUser = (name, email, isPaid = false) => { };
let myValue = addTwo(5);
getUpper("boob");
signUpUser("nicole", "nicole@com", false);
loginUser("h", "h@acom");
function consoleError(errormessage) {
    console.log(errormessage);
    // void means returning nothing!!
}
function handleError(errormessage) {
    throw new Error(errormessage);
    //never is never return a value
}
