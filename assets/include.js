function toUrduDigits(value) {
  return String(value).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function updateHeaderDates() {
  const gregorian = document.getElementById("gregorianDate");
  const shamsi = document.getElementById("hijriShamsiDate");
  const hijri = document.getElementById("hijriDate");
  if (!gregorian || !shamsi || !hijri) return;

  const now = new Date();

  gregorian.textContent = new Intl.DateTimeFormat("en-CA", {
    day: "numeric", month: "long", year: "numeric"
  }).format(now);

  // Ahmadiyya Hijri-Shamsi calendar: Gregorian month/day structure,
  // Hijri-Shamsi year = Gregorian year - 621.
  const hsMonths = ["صلح", "تبلیغ", "امان", "شہادت", "ہجرت", "احسان", "وفا", "ظہور", "تبوک", "اخاء", "نبوت", "فتح"];
  const hsYear = now.getFullYear() - 621;
  shamsi.textContent = `${toUrduDigits(now.getDate())} ${hsMonths[now.getMonth()]} ${toUrduDigits(hsYear)} ہجری شمسی`;

  try {
    const parts = new Intl.DateTimeFormat("ur-PK-u-ca-islamic", {
      day: "numeric", month: "long", year: "numeric"
    }).format(now);
    hijri.textContent = `${parts} ہجری`;
  } catch (e) {
    hijri.textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  if (header) {
    fetch("header.html")
      .then(r => r.text())
      .then(h => {
        header.innerHTML = h;
        updateHeaderDates();
      })
      .catch(() => {});
  }

  const footer = document.getElementById("footer");
  if (footer) fetch("footer.html").then(r => r.text()).then(f => footer.innerHTML = f).catch(() => {});
});
