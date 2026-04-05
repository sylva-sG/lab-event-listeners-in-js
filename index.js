// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  if (display) {
    display.textContent = `Key pressed: ${event.key}`;
  }
} `1`

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById("textInput");
  const display = document.getElementById("textInputDisplay");

  if (input && display) {
    display.textContent = `You typed: ${input.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  if (changeBtn) {
    changeBtn.addEventListener("click", changeBackgroundColor);
  }

  const resetBtn = document.getElementById("resetColorButton");
  if (resetBtn) {
    resetBtn.addEventListener("dblclick", resetBackgroundColor);
  }

  document.addEventListener("keydown", displayKeyPress);

  const input = document.getElementById("textInput");
  if (input) {
    input.addEventListener("input", displayUserInput);
  }
}
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}