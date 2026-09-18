document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  if (header) fetch("header.html").then(r => r.text()).then(h => header.innerHTML = h).catch(() => {});
  const footer = document.getElementById("footer");
  if (footer) fetch("footer.html").then(r => r.text()).then(f => footer.innerHTML = f).catch(() => {});
});
