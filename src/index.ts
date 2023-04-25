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
  protected _courseCount = 1;

  readonly city: string = "Losone";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}
  private deleteToken() {
    console.log("token deleted"); // NOT ACCESSIBLE
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const nicoleM = new uUser("n.n@ad.com", "Nicole", "id");
console.log("Hello");
