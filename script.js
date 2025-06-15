let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;

function updateDisplay() {
  const timerDisplay = document.getElementById("timer");
  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.textContent = `${min}:${sec}`;
}

function playBeep() {
  const beep = document.getElementById("beep");
  beep.play();
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  const input = document.getElementById("custom-minutes");
  minutes = parseInt(input.value, 10);
  seconds = 0;
  updateDisplay();

  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        playBeep();
        isRunning = false;
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  const input = document.getElementById("custom-minutes");
  minutes = parseInt(input.value, 10);
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

updateDisplay();

const toggleBtn = document.getElementById("theme-toggle");
let isDark = true;

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.className = isDark ? "dark" : "light";
  toggleBtn.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
});

document.body.className = "dark";
