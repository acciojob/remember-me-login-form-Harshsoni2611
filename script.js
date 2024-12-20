  // On page load, check if user credentials are saved
window.onload = function () {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername && storedPassword) {
    document.getElementById("existing").style.display = "block";
  }
};

// Handle form submission
document.getElementById("loginForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
};

// Handle existing user button click
document.getElementById("existing").onclick = function () {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    alert(`Logged in as ${storedUsername}`);
  }
};