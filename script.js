// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Typing effect
const text = "Programmeur | Développeur Web | Visionnaire";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Mode terminal secret
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "t") {
    alert("Bienvenue dans le système Orphet 🚀");
  }
});
