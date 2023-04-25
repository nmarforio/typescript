"use strict";
// class uUser {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     (this.email = email), (this.name = name);
//   }
// }
//more professionale way to code
class uUser {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Losone";
    }
    deleteToken() {
        console.log("token deleted"); // NOT ACCESSIBLE
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more then 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends uUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const nicoleM = new uUser("n.n@ad.com", "Nicole", "id");
console.log("Hello");
