// when you don't know exaclty which type you have as a value.

let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admins = {
  username: string;
  id: number;
};

let nicole: User = { name: "nicole", id: 334 };
let nicoles: Admins = { username: "asdf", id: 334 };

// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("2");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id;
  }
}

// array
const data: (string | number | boolean)[] = [1, 2, 3, "4", true];

let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "crew"; //not working cause ist in the possibility in line 37
