/**
 * wedding-data.js — Customer-facing editable data layer for emerald-nikah
 * Edit this file to update couple names, families, dates, venue, itinerary, verses, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    groom: {
      name: "Yakub",
      firstName: "Yakub",
      lastName: "",
      parents: "",
      role: "The Groom",
      note: "With a thoughtful heart, gentle soul, and deep devotion to family and faith.",
      photo: "./editable/assets/groom.jpg",
    },
    bride: {
      name: "Sana Iqra",
      firstName: "Sana",
      lastName: "Iqra",
      parents: "",
      role: "The Bride",
      note: "Radiant with grace and warmth, whose kindness and joyous spirit brighten every room.",
      photo: "./editable/assets/bride.jpg",
    },
  },

  wedding: {
    dateISO: "2026-12-12T07:00:00-05:00",
    dateBadge: "Saturday · 12 December 2026",
    dateFormatted: "Saturday, 12 December 2026",
    timeFormatted: "07:00 AM onwards",
    eventTitle: "Nikah Ceremony & Walima Banquet",
    inviteLine: "Cordially invite you to celebrate their",
    hostLine: "Together with their families",
    countdownEyebrow: "Counting Every Sacred Moment",
    countdownTitle: "Until We Say Qubool",
  },

  religious: {
    bismillah: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    duaArabic: "بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation: "“May Allah bless you both, shower His blessings upon you, and unite you together in goodness.”",
    verseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    verseTranslation: "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”",
    verseRef: "Surah Ar-Rum · 30:21",
  },

  venue: {
    name: "New Haven Conservation Club",
    badge: "New Haven Conservation Club · Indiana",
    address: "13031 Old 24 E Rd, New Haven, IN 46774",
    fullAddress: "New Haven Conservation Club, 13031 Old 24 E Rd, New Haven, IN 46774, United States",
    notes: "Ample on-site parking available for all guests. Easy access from Old US 24.",
    mapImage: "./editable/assets/map.jpg",
    mapsUrl: "https://maps.app.goo.gl/LNH9AaMZEwCAuv7m8?g_st=ic",
  },

  itinerary: [
    {
      time: "07:00 AM",
      title: "Grand Welcome",
      subtitle: "Istiqbal",
      description: "Warm traditional welcome, rose water shower, and morning refreshments to begin the auspicious day.",
    },
    {
      time: "10:00 AM",
      title: "The Nikah Ceremony",
      subtitle: "Ijab-e-Qubool",
      description: "Solemnisation of marriage according to Sunnah, recitation of Quranic verses, and acceptance of vows.",
    },
    {
      time: "07:00 PM",
      title: "Walima (Reception)",
      subtitle: "Reception",
      description: "Evening celebratory reception welcoming the newlyweds with loved ones, blessings, and joyous memories.",
    },
    {
      time: "08:30 PM",
      title: "Royal Dastarkhwan (Feast)",
      subtitle: "Walima Dinner",
      description: "Celebratory royal dinner banquet featuring delectable feast and desserts served in honour of the newlyweds.",
    },
  ],

  closing: {
    blessing: "“May He unite your hearts in goodness, strengthen you with patience, and grant you harmony, prosperity, and everlasting happiness.”",
    coupleNames: "Yakub & Sana Iqra",
    duasLine: "We await your precious duas & presence",
    footerCredit: "with prayers for our families",
    instagram: "@invitestory.in",
    instagramUrl: "https://www.instagram.com/invitestory.in/",
  },

  music: {
    src: "./editable/assets/bgm.mp3",
    title: "Oonchi Oonchi Deewarein Instrumental Ringtone",
    youtubeUrl: "https://youtu.be/2zK6K3LbwY4?si=0aPNr9bHGrwjvkRH",
  },

  images: {
    heroBackground: "./editable/assets/hero-bg.jpg",
    groom: "./editable/assets/groom.jpg",
    bride: "./editable/assets/bride.jpg",
    map: "./editable/assets/map.jpg",
    mandala: "./editable/assets/mandala.png",
    roses: "./editable/assets/roses.png",
    daisies: "./editable/assets/daisies.png",
    divider: "./editable/assets/divider.png",
  },
};
