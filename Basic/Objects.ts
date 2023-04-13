// const User = {
//   name: "nicole",
//   email: "nicoole@com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "nicole", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "nicky", price: 345 };
//   //after the colums is the return value which is a object
// }

// let newUser = { name: "bala", isPaid: false, email: "nicole@com" };
// // I got an extra value in my object and is still exceptet
// createUser(newUser);

// type User ={
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function getUser(user: User){
//     return {}
// }

// getUser({name: "", email: "", isActive: true}){

// }

type User = {
  readonly _id: string;
  // is not possible to change the value of the _id
  creditcard?: number;
  // ? means optional
};
type cardNumber = {
  cardnumber: string;
};
type cardDeta = {
  carddate: String;
};

type cardDetails = cardNumber &
  cardDeta & {
    cvv: number;
  }; // in this case you can create a new type with the infos stored inside of both type
export {};
