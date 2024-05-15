// const user = {
//   name: "John"
// };

// user.name = "Pete"; // (*)

// console.log(user.name); // Pete

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
console.log(clone)
clone.name = "Pete"; // changed the data in it
console.log(clone)

console.log( user.name ); // still John in the original object