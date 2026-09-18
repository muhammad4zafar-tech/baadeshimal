function updateHeaderDates() {
  const gregorian = document.getElementById("gregorianDate");
  const shamsi = document.getElementById("hijriShamsiDate");
  const hijri = document.getElementById("hijriDate");
  if (!gregorian || !shamsi || !hijri) return;

  const now = new Date();

  // Gregorian date: Urdu month name, Western/Latin digits.
  const gregorianMonthsUrdu = [
    "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون",
    "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"
  ];
  gregorian.textContent = `${now.getDate()} ${now.toLocaleString("en-CA", { month: "long" })} ${now.getFullYear()}`;
  gregorian.dir = "ltr";

  // Ahmadiyya Hijri-Shamsi calendar: Gregorian month/day structure.
  const hsMonths = ["صلح", "تبلیغ", "امان", "شہادت", "ہجرت", "احسان", "وفا", "ظہور", "تبوک", "اخاء", "نبوت", "فتح"];
  const hsYear = now.getFullYear() - 621;
  shamsi.innerHTML = `<span dir="ltr">${now.getDate()}</span> ${hsMonths[now.getMonth()]} <span dir="ltr">${hsYear}</span> ہجری شمسی`;
  shamsi.dir = "rtl";

  // Lunar Hijri date: Umm al-Qura calendar, with Western/Latin digits.
  // Use numeric parts so browser locale wording (e.g. era text) cannot leak into the display.
  const hijriMonthsUrdu = [
    "محرم", "صفر", "ربیع الاول", "ربیع الثانی", "جمادی الاولی", "جمادی الثانیہ",
    "رجب", "شعبان", "رمضان", "شوال", "ذوالقعدہ", "ذوالحجہ"
  ];

  try {
    const formatter = new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura-nu-latn", {
      day: "numeric", month: "numeric", year: "numeric"
    });
    const parts = formatter.formatToParts(now);
    const day = parts.find(p => p.type === "day")?.value;
    const month = Number(parts.find(p => p.type === "month")?.value);
    const year = parts.find(p => p.type === "year")?.value;

    if (day && month >= 1 && month <= 12 && year) {
      hijri.innerHTML = `<span dir="ltr">${day}</span> ${hijriMonthsUrdu[month - 1]} <span dir="ltr">${year}</span> ہجری`;
      hijri.dir = "rtl";
    } else {
      hijri.textContent = "";
    }
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
