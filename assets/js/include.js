document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       LOAD HEADER
    ------------------------------ */
    const header = document.getElementById("header");
    if (header) {
        fetch("header.html")
            .then(r => r.text())
            .then(h => header.innerHTML = h);
    }

    /* ------------------------------
       LOAD FOOTER
    ------------------------------ */
    const footer = document.getElementById("footer");
    if (footer) {
        fetch("footer.html")
            .then(r => r.text())
            .then(f => footer.innerHTML = f);
    }

});
