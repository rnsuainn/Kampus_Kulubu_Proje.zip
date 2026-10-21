const searchInput = document.querySelector("#title-search");
const clearButton = document.querySelector("#clear-search");
const eventCards = [...document.querySelectorAll(".grid article")];
const resultCount = document.querySelector("#result-count");
const noResults = document.querySelector("#no-results");

function filterEvents() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLocaleLowerCase("tr-TR");
    const matches = title.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
  searchInput.focus();
});

filterEvents();