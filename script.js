function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const result = document.getElementById("result");

  result.textContent =
    "Thank you, " + name + "! Your message has been sent.";

  event.target.reset();
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});
