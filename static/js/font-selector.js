const fontSelector = document.querySelector(".fontSelector");

// Set initial font based on localStorage or default to Tesla
const savedFont = localStorage.getItem("font") || "Tesla";
document.body.style.fontFamily = savedFont;
fontSelector.value = savedFont;

fontSelector.addEventListener("change", (e) => {
  const selectedFont = e.target.value;
  document.body.style.fontFamily = selectedFont;
  localStorage.setItem("font", selectedFont);
});
