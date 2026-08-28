/* ----------------------------------------------------
   HYBRID PDF LOADING
   - Mobile: open PDF in new full-screen tab
   - Desktop: load PDF inside viewer
---------------------------------------------------- */
function loadPDF(pdfFile) {

    // Detect mobile screen width
    if (window.innerWidth <= 768) {
        // Mobile → open full screen
        window.open(`articles/${pdfFile}`, "_blank");

        // Highlight active article
        highlightActive(pdfFile);
        return;
    }

    // Desktop → load inside viewer
    const viewer = document.getElementById("pdfViewer");
    const intro = document.querySelector(".article-intro");

    // Hide intro text
    if (intro) {
        intro.style.display = "none";
    }

    // Load PDF inside iframe viewer
    viewer.src = `articles/${pdfFile}#toolbar=0&zoom=page-width`;

    // Highlight active article
    highlightActive(pdfFile);

    // Scroll to viewer
    viewer.scrollIntoView({ behavior: "smooth" });
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
