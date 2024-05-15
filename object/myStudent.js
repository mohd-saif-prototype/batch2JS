let myStudent = {
  name: {
    first: 'Ankita',
    last: 'Mishra'
  },
  age: 21,
  gender: "female",
  address: {
    house: 123,
    street: 'Main St',
    city: 'Delhi',
    pinCode: 123456,
    state: 'Delhi',
    country: 'India'
  },
  activites: {
    sleep: function() {
      console.log('sleeping');
    },
    walk: function() {
      console.log('walking');
    },
    talk: function() {
      console.log('talking');
    },
    eat: function() {
      console.log('eating');
    }
  }
}

myStudent.phone = 123456789;

delete myStudent.phone;
delete myStudent.age;

console.log(myStudent);


// console.log(`name: ${myStudent.name.first} ${myStudent.name.last}`);