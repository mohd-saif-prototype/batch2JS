questions = [
  {
    question: "What is 2 + 2",
    option: ["3", "5", "4", "0"],
    answer: "4",
  },
  {
    question: "What is 2 - 2",
    option: ["3", "5", "4", "0"],
    answer: "0",
  },
];

let qs = document.querySelector(".question");
let opt1 = document.querySelector("#opt1").nextElementSibling;
let opt2 = document.querySelector("#opt2").nextElementSibling;
let opt3 = document.querySelector("#opt3").nextElementSibling;
let opt4 = document.querySelector("#opt4").nextElementSibling;

let o1 = document
  .querySelector("#opt1")
  .setAttribute("value", questions[0].option[0]);
let o2 = document
  .querySelector("#opt2")
  .setAttribute("value", questions[0].option[1]);
let o3 = document
  .querySelector("#opt3")
  .setAttribute("value", questions[0].option[2]);
let o4 = document
  .querySelector("#opt4")
  .setAttribute("value", questions[0].option[3]);

let check = document.querySelector("#check");

let selected = document.querySelectorAll(`input[name="opt"]`);

let initQ = 0;
a = () => {
  selected.forEach((index) => {
    if (index.checked == true) {
      console.log(index.value);
      if (index.value == questions[initQ].answer) {
        console.log("true");
        index.nextElementSibling.style.color = "green";
      } else {
        console.log("false");
        index.nextElementSibling.style.color = "red";
      }
    }
    // console.log(index.value)
  });
};

// options
opt1.innerHTML = questions[0].option[0];
opt2.innerHTML = questions[0].option[1];
opt3.innerHTML = questions[0].option[2];
opt4.innerHTML = questions[0].option[3];

next = () => {
  initQ++;
  if (initQ < questions.length) {
    qs.innerHTML = questions[initQ].question;
    opt1.innerHTML = questions[initQ].option[0];
    opt2.innerHTML = questions[initQ].option[1];
    opt3.innerHTML = questions[initQ].option[2];
    opt4.innerHTML = questions[initQ].option[3];
  } else {
    alert("Quiz Completed");
  }
};

/* console.log(questions[0].question);
console.log(questions[0].option[0]);
console.log(questions[0].option[1]);
console.log(questions[0].option[2]);
console.log(questions[0].option[3]); */
console.log(questions[0].answer);
