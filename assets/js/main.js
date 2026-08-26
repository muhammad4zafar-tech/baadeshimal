/* ---------------------------------------------------------
   Dynamic Article Loader for Baad-e-Shimal Canada
   Loads external HTML files from /articles/ folder
--------------------------------------------------------- */

function loadArticle(articleFile) {
    const viewer = document.getElementById("articleContent");

    // Show loading message
    viewer.innerHTML = `
        <p style="font-size:22px; color:#777;">
            مضمون لوڈ ہو رہا ہے… براہِ کرم انتظار فرمائیں۔
        </p>
    `;

    // IMPORTANT: Correct relative path from /pages/ to /articles/
    fetch(`../articles/${articleFile}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("File not found");
            }
            return response.text();
        })
        .then(data => {
            viewer.innerHTML = data;
        })
        .catch(error => {
            viewer.innerHTML = `
                <p style="font-size:22px; color:#b00000;">
                    معذرت! یہ مضمون دستیاب نہیں ہے۔
                </p>
            `;
        });
}

/* ---------------------------------------------------------
   Search Filter for Sidebar
--------------------------------------------------------- */

function filterArticles() {
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll(".sidebar li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
    });
}

/* ---------------------------------------------------------
   Smooth Scroll to Top Button
--------------------------------------------------------- */

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
