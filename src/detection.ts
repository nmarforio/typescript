function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 4;
}

function providedID(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }
  id.toLowerCase;
}

interface Usera {
  name: string;
  email: string;
}
interface Admina {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Usera | Admina) {
  // if you wanna check some of the two interfaces datas use IN
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
} // here is returning a boolean not fish or bird

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish Food";
  } else {
    pet;
    return "bird Food";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}
