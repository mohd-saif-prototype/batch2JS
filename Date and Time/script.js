let myElement = document.querySelector("#myDiv");

setInterval(() => {
  let myDate = new Date();
  let milliseconds = myDate.getMilliseconds();
  myElement.innerHTML = `${myDate} <hr /> milliseconds: ${milliseconds}`;
}, 1000);

