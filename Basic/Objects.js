"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "nicole",
    email: "nicoole@com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "nicole", isPaid: false });
function createCourse() {
    return { name: "nicky", price: 345 };
    //after the colums is the return value which is a object
}
var newUser = { name: "bala", isPaid: false, email: "nicole@com" };
// I got an extra value in my object and is still exceptet
createUser(newUser);
