//Enums are needed to restrict user choises

// const AISLE = 0;
// const MIDDLE= 1
// const WINDOW =2

// if (seat === 0){
//     "blabla"
// }
// not best practice

// the first data value is = 0 in this case is the AISLE, if I want another number i have to define it
enum SeatChoice {
  AISLE = 10, // e.g. to define anothe value then 0
  MIDDLE, //now because the 10 middle is 11 but you can always change it manually e.g. =34
  WINDOW = "window",
  // FOURTH = 0
}

const nmSeat = SeatChoice.AISLE;
