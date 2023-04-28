class Chronometer {
constructor(){
  this.currentTime = 0;
  this.intervalId = null;
}
  
         
  start(printTimeCallback){
    this.intervalId = setInterval(() => {
    this.currentTime++;
    printTimeCallback();
    }, 1000);
  
  }

  getMinutes() {
    // ... your code goes here
   let minutes = this.currentTime / 60;
   return Math.floor(minutes);
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return ('0' + value).slice(-2);
  }

  stop() {
    // ... your code goes here
    clearInterval();
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let format = this.computeTwoDigitNumber(this.getSeconds) + ":" + this.computeTwoDigitNumber(this.getMinutes);
    return format;
  }

}