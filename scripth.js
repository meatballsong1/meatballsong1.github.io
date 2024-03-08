let hours = 1; // Initial hours set to 1 (to match the 9-minute delay)
let minutes = 51; // Initial minutes set to 51 (to match the 9-minute delay)
let seconds = 0;
let timerInterval;

// Function to display time
function displayTime() {
  document.getElementById('timer').innerHTML = formatTime();
}

// Function to format time
function formatTime() {
  return (
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds)
  );
}

// Function to update timer
function updateTimer() {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
    if (minutes < 0) {
      hours--;
      minutes = 59;
      if (hours < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = '00:00:00'; // Reset timer to 00:00:00
        playBeepSound(); // Play beep sound when timer reaches 00:00:00
        return;
      }
    }
  }
  displayTime();
}

// Function to play beep sound
function playBeepSound() {
  // Create an audio element for the beep sound
  const beepSound = new Audio('beep.mp3');
  beepSound.play(); // Play the beep sound
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000); // Update timer every second
}

// Start the timer when the window loads
window.onload = function() {
  startTimer();
};
