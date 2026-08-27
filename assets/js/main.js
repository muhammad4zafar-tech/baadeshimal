/* ----------------------------------------------------
   OPEN PDF IN NEW FULL-SCREEN WINDOW
---------------------------------------------------- */
function loadPDF(pdfFile) {
    // Open PDF in a new tab/window (best for mobile)
    window.open(`articles/${pdfFile}`, "_blank");

    // Highlight the active article in the sidebar
    highlightActive(pdfFile);
}

/* ----------------------------------------------------
   HIGHLIGHT ACTIVE ARTICLE
---------------------------------------------------- */
function highlightActive(pdfFile) {
    const items = document.querySelectorAll(".sidebar li");

    items.forEach(item => {
        item.classList.remove("active-article");

        if (item.getAttribute("onclick").includes(pdfFile)) {
            item.classList.add("active-article");
        }
    });
}

/* ----------------------------------------------------
   SEARCH / FILTER ARTICLES
---------------------------------------------------- */
function filterArticles() {
    const input = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll(".sidebar li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}
