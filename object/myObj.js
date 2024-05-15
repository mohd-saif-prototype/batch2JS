const mouse = {
  name: 'hp',
  color: 'black',
  size: 'medium',
  weight: 'light',
  noOfButtons: 5,
  powerStatus: true,
  togglePower: function () {
    if(this.powerStatus === true) {
      this.powerStatus = false;
    } else {
      this.powerStatus = true;
    }
  }
}

console.log("isPowerOn:",mouse.powerStatus);

mouse.togglePower();
console.log("isPowerOn:",mouse.powerStatus);