/* let myObj = {
  "my name": "Mohd Saif",
  age: 23,
}

console.log(myObj)

// dot notation
console.log(myObj["my name"]);
let check = "gender" in myObj;
console.log(check); */


let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user[key] ); // John, 30, true
}