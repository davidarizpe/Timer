const start = document.getElementById("start");
const reset = document.getElementById("reset");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let time = 0;
let state = false;
let timer;

function startTimer() {
  timer = setInterval(() => {
    time++;

    let minutesNumber = Math.floor(time / 60) > 9 ? Math.floor(time / 60) : "0" + Math.floor(time / 60);
    let secondsNumber = time % 60 > 9 ? time % 60 : "0" + time % 60;

    minutes.innerHTML = minutesNumber;
    seconds.innerHTML = secondsNumber;

    if (time === 5999) {
      time = 0;
    }
  }, 1000);
}

start.addEventListener("click", () => {
  if(state) {
    state = false;
    clearInterval(timer);
  }
  else {
    state = true;
    startTimer();
  }
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  time = 0;
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  state = false;
})