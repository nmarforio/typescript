const User = {
  name: "nicole",
  email: "nicoole@com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "nicole", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "nicky", price: 345 };
  //after the colums is the return value which is a object
}

let newUser = { name: "bala", isPaid: false, email: "nicole@com" };
// I got an extra value in my object and is still exceptet
createUser(newUser);

export {};
