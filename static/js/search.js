let searchIndex;

// Fetch the search index
fetch("/index.json")
  .then((response) => response.json())
  .then((data) => {
    searchIndex = data;
  });

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const listContainer = document.querySelector(".list");

  if (query.length < 2) {
    // If the query is too short, show all posts
    document.querySelectorAll(".listItem").forEach((item) => {
      item.style.display = "flex";
    });
    return;
  }

  document.querySelectorAll(".listItem").forEach((item) => {
    const title = item
      .querySelector(".listItemTitle a")
      .textContent.toLowerCase();
    const categories = Array.from(
      item.querySelectorAll(".listItemCategory"),
    ).map((category) => category.textContent.toLowerCase());

    if (
      title.includes(query) ||
      categories.some((category) => category.includes(query))
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", performSearch);
  }
});
