/* 
Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties with names a and b respectively.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.

*/

let calculator = {
  a: 0,
  b: 0,
  read: function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
  sum: function () {
    totalSum = this.a + this.b;
    return totalSum;
  },
  mul: function () {
    totalMul = this.a * this.b;
    return totalMul;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());