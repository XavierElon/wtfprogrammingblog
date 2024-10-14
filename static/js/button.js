const button = document.querySelector(".magic-button");
let hue = 0;

function updateColors() {
  hue = (hue + 1) % 360;
  button.style.setProperty("--color-1", `hsl(${hue}deg, 100%, 45%)`);
  button.style.setProperty(
    "--color-2",
    `hsl(${(hue + 30) % 360}deg, 100%, 45%)`,
  );
  button.style.setProperty(
    "--color-3",
    `hsl(${(hue + 60) % 360}deg, 100%, 55%)`,
  );
  requestAnimationFrame(updateColors);
}

updateColors();

// Event listener for alert
button.addEventListener("click", () => {
  alert("This feature is under development.");
});
