const ARTICLES = [
  {
    "category": "ہستی باری تعالیٰ",
    "title": "ہستی باری تعالیٰ",
    "file": "article-001-hastibarritalah.pdf"
  },
  {
    "category": "سیرت حضرت خاتم النبیین ﷺ",
    "title": "رسول اللہ ﷺ کا جذبہ ایثار و قربانی",
    "file": "article-002-muhammadpbuh-essaroqurbani.pdf"
  },
  {
    "category": "سیرت حضرت خاتم النبیین ﷺ",
    "title": "آنحضرت ﷺ بحیثیت مزّکی",
    "file": "article-003-muhammadpbuh-muzzaki.pdf"
  },
  {
    "category": "سیرت حضرت خاتم النبیین ﷺ",
    "title": "قبولیتِ دُعا رسول اللہ ﷺ",
    "file": "article-004-MuhammadPBUH-qabooletDua.pdf"
  },
  {
    "category": "قرآن کریم",
    "title": "قرآن کریم کے پاروں کی تقسیم",
    "file": "article-012-Quran_orginizing_in_30parts.pdf"
  },
  {
    "category": "قرآن کریم",
    "title": "الْحَدِید: لوہا",
    "file": "article-016-Alhadid_iron.pdf"
  },
  {
    "category": "حضرت مسیح موعود علیہ السلام",
    "title": "حضرت مسیح موعود علیہ السلام بطور سلطان القلم",
    "file": "article-005-MasihASSultanulQalam.pdf"
  },
  {
    "category": "حضرت مسیح موعود علیہ السلام",
    "title": "آٹھویں شرطِ بیعت: یہ کہ دین اور دین کی عزت اور ہمدریٔ اسلام۔۔۔",
    "file": "article-028-8thCondition_of_Bait.pdf"
  },
  {
    "category": "حضرت مسیح موعود علیہ السلام",
    "title": "دسویں شرطِ بیعت: یہ کہ اس عاجز سے عقدِ اخوت محض لِللہ۔۔۔",
    "file": "article-029-10thCondition_of_Bait.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "خلفائے کرام کی اطاعت و ادب کی قابلِ تقلید مثالیں",
    "file": "article-006-khulfa.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "نِظامِ خلافت کی اہمیت اور ضرورت",
    "file": "article-007-NizameKhilafat.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "اطاعتِ نظامِ جماعت اور ہماری ذمہ داریاں",
    "file": "article-008-ItaatNizameJamaat.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "اطاعتِ خلافت",
    "file": "article-013-Obedience_of_Khilafat.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "تعمیرِ ربوہ : خلافتِ احمدیہ کا عظیم کارنامہ",
    "file": "article-014-Construction_of_Rabwah.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "تحریکِ وقفِ نو",
    "file": "article-015-WaqfeNau.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "ہجری شمی تقویم۔ کیلینڈر",
    "file": "article-027-Hijri_Shamsi_Calendar.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "جلسہ سالانہ ربوہ کی یادیں",
    "file": "article-023-Rabwahs_Jalsa_Salanas.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "یتامیٰ ،غرباء ، بیوگان اور بے سہارا لوگوں کی نگہداشت سے متعلق انصار اللہ کی ذمہ داریاں",
    "file": "article-022-Orphans-poors.pdf"
  },
  {
    "category": "خلافتِ احمدیہ و نظامِ جماعت",
    "title": "اِسیرانِ رَاہِ مَولا",
    "file": "article-024-Iseeraan-e-Rah-e-Maula.pdf"
  },
  {
    "category": "اعتراضات اور ان کے جوابات",
    "title": "اسلام اور مغرب: چند غلط فہمیوں کی تصحیح",
    "file": "article-009-IslamAurMaghrib.pdf"
  },
  {
    "category": "اعتراضات اور ان کے جوابات",
    "title": "اسلام میں چار شادیوں کی اجازت پر اعتراض کا جواب",
    "file": "article-010-Islam4Marriages.pdf"
  },
  {
    "category": "اعتراضات اور ان کے جوابات",
    "title": "حضرت عائشہ رضی اللہ تعالیٰ عنہا",
    "file": "article-011-Hazrat_Aysha_RA.pdf"
  },
  {
    "category": "اعتراضات اور ان کے جوابات",
    "title": "کیا احمدی پاکستانی آئین کو تسلیم نہیں کرتے؟",
    "file": "article-021-Do_Ahmadies_not_Follow_Pakistani_Constitution.pdf"
  },
  {
    "category": "سوانحاتِ حیات",
    "title": "حکیم محمد رشید رضی اللہ تعالیٰ عنہ",
    "file": "article-017-Hakeem_Muhammad_Rashid.pdf"
  },
  {
    "category": "سوانحاتِ حیات",
    "title": "چوہدری محمد یوسف صاحب و رقیہ بی بی صاحبہ",
    "file": "article-018-Muhammad_Yousaf_Ruqiyya_Bibi.pdf"
  },
  {
    "category": "سوانحاتِ حیات",
    "title": "ماسٹر محمد عیسیٰ ظفر مرحوم",
    "file": "article-019-Muhammad_Essa_Zafar.pdf"
  },
  {
    "category": "سوانحاتِ حیات",
    "title": "محترمہ حلیمہ خالدہ مرحومہ",
    "file": "article-020-Haleema_Khalida.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "کُتب بینی کا شوق کیسے پیدا کیا جائے",
    "file": "article-025-BookReading.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "قبریں جواب دے رہی ہیں",
    "file": "article-026-Graves_are_responding.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "مکھی کا دماغ: ایک نیا حیرت کدہ",
    "file": "article-030-FruitFly_Brainmap.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "ٹیری فاکس: ایک عالمی ہیرو",
    "file": "article-031-Terry_Fox.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "کشمیر پر قانوناً کس کا حق ہے؟",
    "file": "article-035-Kashmir.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "زندہ ڈرائینگ / مردہ ڈرائینگ",
    "file": "article-033-zinda_drawing.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "ومی ریج کی تاریخی جنگ Vimy Ridge",
    "file": "article-037-VimyRidge.pdf"
  },
  {
    "category": "متفرق/معلوماتی",
    "title": "اٹس یور شپ It's Your Ship",
    "file": "article-038-Its_Your_Ship.pdf"
  },
  {
    "category": "نظمیں",
    "title": "مدرز ڈے Mothers' Day",
    "file": "article-039-nazm_mothersday.pdf"
  },
  {
    "category": "نظمیں",
    "title": "وقت ملاقات Fathers' Day",
    "file": "article-040-nazm_fathersday.pdf"
  },
  {
    "category": "نظمیں",
    "title": "چاند",
    "file": "article-036-nazm_chaand.pdf"
  },
  {
    "category": "نظمیں",
    "title": "دیس کا سفر",
    "file": "article-041-nazm_Dais_ka_safar.pdf"
  },
  {
    "category": "نظمیں",
    "title": "باتیں",
    "file": "article-042-nazm_baatain.pdf"
  },
  {
    "category": "نظمیں",
    "title": "دوسرا کنارہ",
    "file": "article-043-nazm_doosra_kinarah.pdf"
  },
  {
    "category": "نظمیں",
    "title": "خط",
    "file": "article-044-nazm-khat.pdf"
  },
  {
    "category": "نظمیں",
    "title": "دیسی مٹیار",
    "file": "article-032-nazm-desi-mutiyar.pdf"
  },
  {
    "category": "پرانی کہانیاں",
    "title": "قربانی",
    "file": "article-045-story-Qurbani.pdf"
  },
  {
    "category": "پرانی کہانیاں",
    "title": "خاندان",
    "file": "article-046-story-Khandaan.pdf"
  },
  {
    "category": "پرانی کہانیاں",
    "title": "سسکیاں",
    "file": "article-047-story-siskiaan.pdf"
  }
];
