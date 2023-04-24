"use strict";
// when you don't know exaclty which type you have as a value.
let score = 33;
score = 44;
score = "55";
let nicole = { name: "nicole", id: 334 };
let nicoles = { username: "asdf", id: 334 };
// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("2");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id;
    }
}
// array
const data = [1, 2, 3, "4", true];
let seatAllotment;
// seatAllotment = "crew"; //not working cause ist in the possibility in line 37
