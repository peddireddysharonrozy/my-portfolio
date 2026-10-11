
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Automatically update the copyright year.
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email address when the button is clicked.
const copyButton = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");
const emailAddress = "peddireddysharonrozy@gmail.com";

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copyMessage.textContent = "Email copied successfully!";
  } catch (error) {
    copyMessage.textContent = "Email: " + emailAddress;
  }
});
