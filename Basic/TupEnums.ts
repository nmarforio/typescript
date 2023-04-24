// to have a precise order do so, in this case you cannot put in mixed order the 3 different data you have in the array
let tUser: [string, number, boolean];

tUser = ["nm", 34, true];

//here you can put only int of number no coma
let rgb: [number, number, number] = [255, 2324, 346]; //6.757];

type bUser = [number, string];

const newUser: bUser = [112, "kajgkhgkhf"];

//carful cause you can always change your value
newUser[1] = "asga";
// newUser.push(true)
