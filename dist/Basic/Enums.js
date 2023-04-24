"use strict";
//Enums are needed to restrict user choises
// const AISLE = 0;
// const MIDDLE= 1
// const WINDOW =2
// if (seat === 0){
//     "blabla"
// }
// not best practice
// the first data value is = 0 in this case is the AISLE, if I want another number i have to define it
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice["WINDOW"] = "window";
    // FOURTH = 0
})(SeatChoice || (SeatChoice = {}));
const nmSeat = SeatChoice.AISLE;
