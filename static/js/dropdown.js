// assets/js/dropdown.js

document.addEventListener("DOMContentLoaded", function () {
  const categoryToggle = document.querySelector(".category-toggle");
  const dropdownContent = document.querySelector(".dropdown-content");

  categoryToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownContent.classList.toggle("show");
  });

  // Close the dropdown if clicked outside
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".category-toggle")) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});
