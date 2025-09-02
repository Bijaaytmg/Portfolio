
// Contact form
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Dark Mode Toggle with Switch
const toggleSwitch = document.getElementById("darkModeToggle");

// Load user preference
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }
};

// Listen for toggle
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
