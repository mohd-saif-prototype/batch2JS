class Student {
  constructor(name, course, marks, admissionYear) {
    this.name = name;
    this.course = course;
    this.marks = marks;
    this.admissionYear = admissionYear;
  }
}

let student1 = new Student("Ankita", "BSc", 90, 2020);
let student2 = new Student("Saif", "BCA", 95, 2021);
let student3 = new Student("Bushra", "Unknown", 80, 2022);


console.log(`Name: ${student1.name} \nmarks: ${student1.marks}`);
console.log(`Name: ${student2.name} \nmarks: ${student2.marks}`);
console.log(`Name: ${student3.name} \nmarks: ${student3.marks}`);