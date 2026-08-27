function loadPDF(pdfFile) {

    console.log("Loading:", pdfFile);

    const viewer = document.getElementById("pdfViewer");
    const intro = document.querySelector(".article-intro");

    // Hide intro text when an article is selected
    if (intro) {
        intro.style.display = "none";
    }

    viewer.src = `articles/${pdfFile}`;

    highlightActive(pdfFile);

    viewer.scrollIntoView({ behavior: "smooth" });

}

function highlightActive(pdfFile) {
    const items = document.querySelectorAll(".sidebar li");

    items.forEach(item => {
        item.classList.remove("active-article");

        if (item.getAttribute("onclick").includes(pdfFile)) {
            item.classList.add("active-article");
        }
    });
}
function filterArticles() {
    const input = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll(".sidebar li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}
