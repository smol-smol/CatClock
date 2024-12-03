// script.js
function updateTime() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
  clock.textContent = timeString;
}

function toggleTheme() {
  const container = document.querySelector(".container");
  const button = document.getElementById("theme-toggle");

  if (container.classList.contains("light-mode")) {
    container.classList.remove("light-mode");
    container.classList.add("dark-mode");
    button.textContent = "Switch to Light Mode";
  } else {
    container.classList.remove("dark-mode");
    container.classList.add("light-mode");
    button.textContent = "Switch to Dark Mode";
  }
}

// Initialize clock and theme toggle
document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", toggleTheme);
});
