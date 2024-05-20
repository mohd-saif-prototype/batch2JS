/* Part 1: */
// let arr = ["John", "Smith"];

// // let fname = arr[0]
// // let lname = arr[1]

// let [fname, lname] = arr;

// console.log("First name is:", fname);
// console.log("Last name is:", lname);

// let [firstName, , ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(title);

/* Part 2: */
// let a = 5;
// let b = 10;

// console.log("Value of a before swapping:", a);
// console.log("Value of b before swapping:", b);

// // swapping using third variable
// // let temp = a;
// // a = b;
// // b = temp;
// /* swapping using destructuring */
// [a, b] = [b, a];

// console.log("Value of a after swapping:", a);
// console.log("Value of b after swapping:", b);

/* Part 3: */
// // ...variableName is called rest operator
// let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(titles);

/* Part 4: */
// // default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// console.log(name, surname);

/* Part 5: */
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // console.log(options.title);
// // console.log(options.width);
// // console.log(options.height);

// let {title, width, height} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200

/* Part 6: */
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title: t} = options;

// // width -> w
// // height -> h
// // title -> t

// console.log(t);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200

/* Part 7: */
let age = 3;
{
  let age = 5;
  console.log(age);
}

console.log(age);
