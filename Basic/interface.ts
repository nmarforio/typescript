// is more a cenario, is like the type or a class but less restricted

interface AUser {
  email: string;
  userId: number;
  readonly dbId: number;
  googleId?: string;
  startTrail: () => string; // () => is providing a method
  anotherTrail(): string; //this is always a method
  getCoupon(Coupon: string, percent: number): number; // in the parentesisi always put the key word(doesnt metter how you call it) when you call the function
}

interface AUser {
  githunToken: string;
} // if you wanna to add data in your AUser interface you can just call it again in the same exact way and add what you need
//here is for me the token

interface Admin extends AUser {
  role: "admin" | "ta" | "learner";
} // you have all the information of the Auser in Admin and you can give to bla bla Admin as a type

const blaBla: AUser =
  // Admin
  {
    githunToken: "hex",
    email: "skf@ad",
    userId: 2212,
    dbId: 32,
    startTrail: () => {
      return "4";
    },
    anotherTrail: () => {
      return "34r3";
    },
    getCoupon: (code: "ekjghker", discount: 30) => {
      return 23;
    },
  };

//blaBla.dbId = 223; //I can't change it cause is readonly!
