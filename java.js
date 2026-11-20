// ---------- 1. DARK / LIGHT MODE ----------
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");   // add or remove the "light" class

  // Change the button icon
  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// ---------- 2. VISITOR COUNTER ----------
// localStorage saves a number in the browser, even after closing the page
let visits = localStorage.getItem("visits");

if (visits === null) {
  visits = 1;                // first visit
} else {
  visits = Number(visits) + 1;   // add 1 each time the page loads
}

localStorage.setItem("visits", visits);
document.getElementById("visitorCount").textContent = visits;

// ---------- 3. CONTACT FORM ----------
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check that nothing is empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields.");
    return;
  }

  alert("Thanks " + name + "! Your message was sent.");
  form.reset();   // clear the form
});