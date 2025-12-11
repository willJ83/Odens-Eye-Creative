// ===============================
// EXPLORE THE COLLECTION Navigation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const branchLinks = document.querySelectorAll("#explore .branch-list a");

  branchLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default jump
      const targetPage = link.getAttribute("href");
      window.location.href = targetPage; // navigate to branch page
    });
  });
});

// ===============================
// ENGRAVING STYLES Interactivity
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const engravingBoxes = document.querySelectorAll(".engraving-box");

  engravingBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const styleName = box.querySelector("h3").textContent;
      alert(`Engraving style selected: ${styleName}`);
      // Later: replace alert with modal or product filter
    });
  });
});

// ===============================
// OPTIONAL: Product Filtering Logic
// ===============================
// If you add product cards with data-style attributes,
// this function can filter them by engraving style.
function filterProductsByStyle(style) {
  const products = document.querySelectorAll(".product-card");
  products.forEach(card => {
    if (card.getAttribute("data-style") === style || style === "all") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}