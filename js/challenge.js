// code here
const counter = document.getElementById('counter');
let count = 0;

function incrementCounter() {
  count++;
  counter.textContent = count;
}

// Start the timer when the page loads
const timerInterval = setInterval(incrementCounter, 1000);
