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
    const items = document.querySelectorAll(".article-link");

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
    const items = document.querySelectorAll(".article-link");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

/* ----------------------------------------------------
   SHARE ARTICLE
---------------------------------------------------- */
function shareArticle() {
    // Find the active article
    const active = document.querySelector(".active-article");
    if (!active) {
        alert("Please open an article first.");
        return;
    }

    // Extract PDF filename from onclick attribute
    const pdfFile = active.getAttribute("onclick").match(/'(.*?)'/)[1];

    // Build full link
    const link = `https://www.baadeshimal.ca/articles/${pdfFile}`;

    // Mobile share API
    if (navigator.share) {
        navigator.share({
            title: "Baad-e-Shimal Article",
            text: "Check out this article:",
            url: link
        });
    } else {
        // Desktop fallback
        navigator.clipboard.writeText(link);
        alert("Article link copied!");
    }
}
