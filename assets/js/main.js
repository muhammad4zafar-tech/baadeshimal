function loadPDF(pdfFile) {
    // Remember which article is currently open
    window.currentArticle = pdfFile;

    // Mobile phones
    if (window.innerWidth <= 768) {
        highlightActive(pdfFile);
        window.open(`articles/${pdfFile}`, "_blank");
        return;
    }

    // Desktop
    const viewer = document.getElementById("pdfViewer");
    const intro = document.querySelector(".article-intro");

    if (intro) {
        intro.style.display = "none";
    }

    viewer.src = `articles/${pdfFile}#toolbar=0&zoom=page-width`;

    highlightActive(pdfFile);
}


function highlightActive(pdfFile) {
    const items = document.querySelectorAll(".article-link");

    items.forEach(item => {
        item.classList.remove("active-article");

        const onclickValue = item.getAttribute("onclick");

        if (onclickValue && onclickValue.includes(pdfFile)) {
            item.classList.add("active-article");
        }
    });
}


function filterArticles() {
    const input = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll(".article-link");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (text.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


function shareArticle() {

    // Make sure an article has been selected
    if (!window.currentArticle) {
        alert("Please open an article first.");
        return;
    }

    const pdfFile = window.currentArticle;

    const link =
        `https://www.baadeshimal.ca/articles/${pdfFile}`;

    // Phones and browsers that support the Share menu
    if (navigator.share) {

        navigator.share({
            title: "Baad-e-Shimal Article",
            text: "Check out this article from Baad-e-Shimal Canada:",
            url: link
        }).catch(error => {
            // User cancelled the share window
            console.log("Share cancelled.");
        });

        return;
    }

    // If Share is not available, copy the link
    if (navigator.clipboard) {

        navigator.clipboard.writeText(link)
            .then(() => {
                alert("Article link copied to clipboard!");
            })
            .catch(() => {
                prompt("Copy this article link:", link);
            });

        return;
    }

    // Final fallback
    prompt("Copy this article link:", link);
}