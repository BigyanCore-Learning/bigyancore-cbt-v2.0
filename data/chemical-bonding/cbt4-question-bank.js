const CBT4_QUESTION_BANK = [
  {
    id: 1,
    type: "single",
    difficulty: "easy",
    topic: "VSEPR তত্ত্ব ও অণুর আকৃতি",
    question: "ClF₃ অণুর প্রকৃত আকৃতি এবং কেন্দ্রীয় পরমাণুর উপর lone pair-এর সংখ্যা কত?",
    options: [
      "T-আকৃতি, ২টি",
      "ত্রিকোণীয় দ্বিপিরামিডীয়, ০টি",
      "সুষম চতুষ্তলকীয়, ১টি",
      "বক্রাকার, ২টি"
    ],
    correctAnswer: 0,
    explanation: "Cl-এর ৭টি যোজ্যতা ইলেকট্রনের মধ্যে ৩টি বন্ধন গঠনে ব্যবহৃত হয়। কেন্দ্রীয় Cl-এ ২টি lone pair থাকে। পাঁচটি electron domain-এর বিন্যাস trigonal bipyramidal হলেও অণুর প্রকৃত আকৃতি T-shaped।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 2,
    type: "single",
    difficulty: "moderate",
    topic: "VSEPR তত্ত্ব ও অণুর আকৃতি",
    question: "VSEPR তত্ত্ব অনুযায়ী IF₅ অণুর আকৃতি ও প্রচলিত সংকরায়ণ কী?",
    options: [
      "বর্গাকার পিরামিডীয়, sp³d²",
      "ত্রিকোণীয় দ্বিপিরামিডীয়, sp³d",
      "অষ্টতলকীয়, sp³d²",
      "পঞ্চভুজাকার দ্বিপিরামিডীয়, sp³d³"
    ],
    correctAnswer: 0,
    explanation: "IF₅-এ I-এর চারপাশে ৫টি bonding pair এবং ১টি lone pair থাকে। প্রচলিত স্কুল-স্তরের মডেলে electron-domain geometry octahedral, hybridization sp³d² এবং molecular shape square pyramidal।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 3,
    type: "single",
    difficulty: "moderate",
    topic: "আয়ন ও অণুর আকৃতি নির্ণয়",
    question: "NO₂⁺ এবং NO₂⁻ আয়নের যথাক্রমে আকৃতি কী?",
    options: [
      "রৈখিক, বক্রাকার",
      "বক্রাকার, রৈখিক",
      "উভয়ই রৈখিক",
      "উভয়ই বক্রাকার"
    ],
    correctAnswer: 0,
    explanation: "NO₂⁺-এ কেন্দ্রীয় N-এর চারপাশে দুটি bonding domain থাকে এবং lone pair থাকে না, তাই এটি linear। NO₂⁻-এ একটি lone pair থাকায় অণুটি bent।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 4,
    type: "multiple",
    difficulty: "hard",
    topic: "VSEPR তত্ত্ব ও অণুর আকৃতি",
    question: "নিচের কোন প্রজাতিগুলির আকৃতি trigonal planar?",
    options: [
      "CO₃²⁻",
      "NO₃⁻",
      "SO₃²⁻",
      "BF₃"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "CO₃²⁻, NO₃⁻ এবং BF₃-এ কেন্দ্রীয় পরমাণুর চারপাশে তিনটি bonding domain ও কোনো lone pair নেই। SO₃²⁻-এ একটি lone pair থাকায় এর আকৃতি trigonal pyramidal।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 5,
    type: "single",
    difficulty: "easy",
    topic: "যোজ্যতা বন্ধন তত্ত্ব (VBT)",
    question: "VBT অনুযায়ী একটি সমযোজী বন্ধন সাধারণত কীভাবে গঠিত হয়?",
    options: [
      "দুটি নিউক্লিয়াস পরস্পরকে আঘাত করে",
      "বিপরীত স্পিনযুক্ত অযুগ্ম ইলেকট্রনবিশিষ্ট অরবিটাল অতিব্যাপন করে",
      "ইলেকট্রন সম্পূর্ণ স্থানান্তরিত হয়",
      "পূর্ণ অরবিটাল পরস্পরের সঙ্গে যুক্ত হয়"
    ],
    correctAnswer: 1,
    explanation: "VBT-তে বিপরীত স্পিনযুক্ত অযুগ্ম ইলেকট্রন ধারণকারী পারমাণবিক অরবিটালের overlap-এর ফলে ইলেকট্রন যুগল ভাগাভাগি হয় এবং covalent bond গঠিত হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 6,
    type: "single",
    difficulty: "moderate",
    topic: "যোজ্যতা বন্ধন তত্ত্ব (VBT)",
    question: "প্রচলিত VBT-এর একটি গুরুত্বপূর্ণ সীমাবদ্ধতা কোনটি?",
    options: [
      "এটি কোনো অণুর জ্যামিতি ব্যাখ্যা করতে পারে না",
      "সাধারণ VBT বর্ণনা O₂-এর paramagnetism যথাযথভাবে ব্যাখ্যা করতে পারে না",
      "এটি কোনো σ বন্ধনের ধারণা দেয় না",
      "এটি কোনো covalent bond গঠনের ব্যাখ্যা দেয় না"
    ],
    correctAnswer: 1,
    explanation: "সাধারণ VBT-র প্রাথমিক বর্ণনা O₂-এর paramagnetism ব্যাখ্যা করতে পারে না। MOT-তে দুটি unpaired electron-এর উপস্থিতি দিয়ে এই ধর্ম ব্যাখ্যা করা যায়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 7,
    type: "single",
    difficulty: "moderate",
    topic: "H₂ অণু ও potential-energy curve",
    question: "দুটি H পরমাণুর মধ্যবর্তী দূরত্বের সঙ্গে potential energy-এর লেখচিত্রে সর্বনিম্ন বিন্দুটি কী নির্দেশ করে?",
    options: [
      "সর্বাধিক বিকর্ষণ",
      "সাম্যাবস্থার H–H বন্ধন দৈর্ঘ্য ও সর্বনিম্ন potential energy",
      "ইলেকট্রন মেঘের সম্পূর্ণ অনুপস্থিতি",
      "অরবিটালের শূন্য overlap"
    ],
    correctAnswer: 1,
    explanation: "Potential-energy curve-এর minimum বিন্দুতে আকর্ষণ ও বিকর্ষণের ভারসাম্য থাকে। সেই দূরত্বটি equilibrium bond length। Minimum energy থেকে বিচ্ছিন্ন পরমাণুর শক্তির পার্থক্য উপযুক্ত সংজ্ঞায় bond dissociation energy-এর সঙ্গে সম্পর্কিত।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 8,
    type: "single",
    difficulty: "easy",
    topic: "পারমাণবিক অরবিটাল ও অতিব্যাপন",
    question: "দুটি p-orbital অক্ষ বরাবর head-on overlap করলে কোন বন্ধন গঠিত হয়?",
    options: [
      "π বন্ধন",
      "σ বন্ধন",
      "δ বন্ধন",
      "হাইড্রোজেন বন্ধন"
    ],
    correctAnswer: 1,
    explanation: "Internuclear axis বরাবর head-on overlap হলে σ bond তৈরি হয়। p-orbital-এর lateral overlap হলে π bond তৈরি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 9,
    type: "single",
    difficulty: "moderate",
    topic: "σ ও π বন্ধন",
    question: "একটি অণুতে ৫টি σ বন্ধন এবং ২টি π বন্ধন থাকলে মোট covalent bond-এর সংখ্যা কত?",
    options: ["৩", "৫", "৭", "১০"],
    correctAnswer: 2,
    explanation: "একটি σ বা π bond প্রত্যেকটিই একটি covalent bond হিসেবে গণ্য হয়। মোট bond সংখ্যা = ৫ + ২ = ৭।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 10,
    type: "single",
    difficulty: "hard",
    topic: "σ ও π বন্ধন",
    question: "N₂ অণুর N≡N ত্রিবন্ধনের গঠনে কোন ধরনের overlap থাকে?",
    options: [
      "একটি s–s overlap এবং দুটি p–p lateral overlap",
      "একটি p–p head-on overlap এবং দুটি p–p lateral overlap",
      "তিনটি s–s overlap",
      "একটি sp–sp overlap এবং দুটি s–p overlap"
    ],
    correctAnswer: 1,
    explanation: "N₂-এর ত্রিবন্ধনে একটি σ bond এবং দুটি π bond থাকে। প্রচলিত orbital-overlap বর্ণনায় একটি p–p head-on overlap থেকে σ bond এবং দুটি পরস্পর লম্ব p–p lateral overlap থেকে দুটি π bond তৈরি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 11,
    type: "single",
    difficulty: "easy",
    topic: "σ ও π বন্ধন",
    question: "একটি দ্বিবন্ধনে সাধারণত কোন সমন্বয় থাকে?",
    options: [
      "দুটি σ বন্ধন",
      "একটি σ এবং একটি π বন্ধন",
      "দুটি π বন্ধন",
      "একটি σ এবং দুটি π বন্ধন"
    ],
    correctAnswer: 1,
    explanation: "দুটি পরমাণুর মধ্যে প্রথম বন্ধনটি σ bond। দ্বিবন্ধনের অতিরিক্ত বন্ধনটি π bond।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 12,
    type: "multiple",
    difficulty: "moderate",
    topic: "σ ও π বন্ধন",
    question: "π বন্ধন সম্পর্কে সঠিক উক্তিগুলি নির্বাচন করো।",
    options: [
      "এটি lateral overlap-এর ফলে গঠিত হয়",
      "এটি সাধারণত σ বন্ধনের চেয়ে শক্তিশালী",
      "এটি বন্ধনের অক্ষের চারপাশে মুক্ত আবর্তনে বাধা দেয়",
      "এতে internuclear axis-এর উপরে ও নিচে electron density থাকে"
    ],
    correctAnswer: [0, 2, 3],
    explanation: "π bond lateral overlap-এর ফলে তৈরি হয়। Electron density internuclear axis-এর উপরে ও নিচে থাকে এবং π bond মুক্ত আবর্তনে বাধা দেয়। সাধারণত π bond, σ bond-এর তুলনায় দুর্বল।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 13,
    type: "single",
    difficulty: "easy",
    topic: "সংকরায়ণ (Hybridization)",
    question: "CH₄ অণুতে কার্বনের সংকরায়ণ কী?",
    options: ["sp", "sp²", "sp³", "sp³d"],
    correctAnswer: 2,
    explanation: "CH₄-এ কার্বনের চারটি σ bond এবং কোনো lone pair নেই। প্রচলিত hybridization মডেলে এটি sp³।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 14,
    type: "single",
    difficulty: "moderate",
    topic: "সংকরায়ণ (Hybridization)",
    question: "PCl₅ অণুতে ফসফরাসের প্রচলিত সংকরায়ণ ও আকৃতি কী?",
    options: [
      "sp³d, trigonal bipyramidal",
      "sp³d², octahedral",
      "sp³, tetrahedral",
      "sp³d³, pentagonal bipyramidal"
    ],
    correctAnswer: 0,
    explanation: "স্কুল-স্তরের hybridization মডেলে PCl₅-এর কেন্দ্রীয় P-এর পাঁচটি bonding domain ও কোনো lone pair নেই। তাই আকৃতি trigonal bipyramidal এবং সংকরায়ণ sp³d হিসেবে বর্ণনা করা হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 15,
    type: "single",
    difficulty: "moderate",
    topic: "সংকরায়ণ (Hybridization)",
    question: "XeF₄-এর কেন্দ্রীয় Xe-এর প্রচলিত sp³d² সংকরায়ণে মোট কয়টি অরবিটাল অংশগ্রহণ করে?",
    options: ["৪", "৫", "৬", "৮"],
    correctAnswer: 2,
    explanation: "sp³d²-তে একটি s, তিনটি p এবং দুটি d orbital ধরা হয়। মোট orbital = ১ + ৩ + ২ = ৬। এটি প্রচলিত স্কুল-স্তরের bonding model।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 16,
    type: "single",
    difficulty: "moderate",
    topic: "সংকরায়ণ (Hybridization)",
    question: "নিচের কোন যুগলে উভয় প্রজাতির কেন্দ্রীয় পরমাণুর সংকরায়ণ একই?",
    options: [
      "BF₃ এবং NH₃",
      "CO₂ এবং SO₂",
      "CH₄ এবং NH₄⁺",
      "PCl₅ এবং IF₅"
    ],
    correctAnswer: 2,
    explanation: "CH₄-এ C এবং NH₄⁺-এ N—উভয় কেন্দ্রীয় পরমাণুর চারটি σ bond এবং কোনো lone pair নেই। প্রচলিত মডেলে উভয়ই sp³ hybridized।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 17,
    type: "multiple",
    difficulty: "moderate",
    topic: "সংকরায়ণ (Hybridization)",
    question: "কোন প্রজাতিগুলিতে sp² সংকরায়ণ দেখা যায়?",
    options: ["C₂H₄", "BCl₃", "BeCl₂", "SO₃"],
    correctAnswer: [0, 1, 3],
    explanation: "C₂H₄-এ প্রতিটি C, BCl₃-এ B এবং SO₃-এর প্রচলিত bonding description-এ S-এর চারপাশের তিনটি bonding domain trigonal-planar arrangement-এর সঙ্গে সামঞ্জস্যপূর্ণ। BeCl₂-এর isolated gaseous molecule রৈখিক; স্কুল-স্তরের মডেলে Be sp hybridized।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 18,
    type: "single",
    difficulty: "hard",
    topic: "সংকরায়ণ (Hybridization)",
    question: "IF₇-এর প্রচলিত sp³d³ hybridization মডেলে কয়টি d-orbital ধরা হয়?",
    options: ["১", "২", "৩", "৪"],
    correctAnswer: 2,
    explanation: "প্রচলিত sp³d³ notation-এ একটি s, তিনটি p এবং তিনটি d orbital ধরা হয়। এটি একটি স্কুল-স্তরের মডেল; আধুনিক bonding ব্যাখ্যা কেবল d-orbital hybridization-এর উপর নির্ভর করে না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 19,
    type: "single",
    difficulty: "easy",
    topic: "রেজোন্যান্স (Resonance)",
    question: "রেজোন্যান্স তত্ত্ব অনুযায়ী প্রকৃত অণুকে কীভাবে বর্ণনা করা হয়?",
    options: [
      "বিভিন্ন কাঠামোর মধ্যে দ্রুত পরিবর্তনশীল অণু",
      "সম্ভাব্য resonance contributor-গুলির একটি hybrid",
      "সবচেয়ে স্থিতিশীল contributor-এর সঙ্গে সম্পূর্ণ অভিন্ন",
      "সবচেয়ে অস্থিতিশীল contributor-এর সঙ্গে অভিন্ন"
    ],
    correctAnswer: 1,
    explanation: "প্রকৃত অণু কোনো একক resonance structure নয়। এটি বিভিন্ন গ্রহণযোগ্য contributor-এর সমন্বিত resonance hybrid হিসেবে বর্ণিত হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 20,
    type: "single",
    difficulty: "moderate",
    topic: "রেজোন্যান্স (Resonance)",
    question: "রেজোন্যান্স শক্তি সাধারণত কী নির্দেশ করে?",
    options: [
      "সব resonance contributor-এর শক্তির যোগফল",
      "প্রকৃত resonance hybrid-এর শক্তি ও সবচেয়ে স্থিতিশীল গ্রহণযোগ্য localized contributor-এর আনুমানিক শক্তির পার্থক্য",
      "একটি নির্দিষ্ট বন্ধন ভাঙার শক্তি",
      "অণুর ionization energy"
    ],
    correctAnswer: 1,
    explanation: "Resonance energy অণুর resonance stabilization নির্দেশ করে। এর পরিমাণ নির্ভর করে প্রকৃত hybrid-এর শক্তির সঙ্গে তুলনার জন্য কোন localized reference structure ব্যবহার করা হচ্ছে তার উপর।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 21,
    type: "multiple",
    difficulty: "hard",
    topic: "রেজোন্যান্স (Resonance)",
    question: "অর্থবহ resonance contributor লেখার ক্ষেত্রে কোন শর্তগুলি সাধারণত মানতে হয়?",
    options: [
      "পরমাণুগুলির অবস্থান ও connectivity একই থাকতে হবে",
      "মোট ইলেকট্রন সংখ্যা ও সামগ্রিক charge অপরিবর্তিত থাকতে হবে",
      "সব contributor-এ ঋণাত্মক charge অবশ্যই কম electronegative পরমাণুর উপর থাকবে",
      "মূল কাঠামোর σ-bond framework সাধারণত অপরিবর্তিত থাকবে"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Resonance contributor-গুলিতে nuclei-এর অবস্থান ও σ framework অপরিবর্তিত থাকে; electron distribution বদলায়। মোট electron count এবং overall charge সংরক্ষিত থাকে। ঋণাত্মক charge সবসময় কম electronegative পরমাণুর উপর থাকে—এমন নিয়ম নেই।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 22,
    type: "single",
    difficulty: "easy",
    topic: "তড়িৎঋণাত্মকতা (Electronegativity)",
    question: "Pauling scale অনুযায়ী সর্বাধিক electronegativity কোন মৌলের?",
    options: ["অক্সিজেন", "ক্লোরিন", "ফ্লোরিন", "নাইট্রোজেন"],
    correctAnswer: 2,
    explanation: "ফ্লোরিন Pauling scale-এ সর্বাধিক electronegative মৌল। প্রচলিত Pauling মান প্রায় ৩.৯৮।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 23,
    type: "single",
    difficulty: "moderate",
    topic: "তড়িৎঋণাত্মকতা (Electronegativity)",
    question: "Mulliken-এর সংজ্ঞা অনুযায়ী IE = 10 eV এবং EA = 4 eV হলে electronegativity-এর মান কত?",
    options: ["৭ eV", "১৪ eV", "৩ eV", "৬ eV"],
    correctAnswer: 0,
    explanation: "Mulliken electronegativity = (IE + EA)/2 = (10 + 4)/2 = 7 eV।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 24,
    type: "single",
    difficulty: "moderate",
    topic: "তড়িৎঋণাত্মকতা (Electronegativity)",
    question: "একটি পর্যায়ে সাধারণত বাম থেকে ডানে গেলে electronegativity কীভাবে বদলায়?",
    options: [
      "হ্রাস পায়",
      "বৃদ্ধি পায়",
      "অপরিবর্তিত থাকে",
      "প্রথমে বৃদ্ধি পায়, পরে সবসময় হ্রাস পায়"
    ],
    correctAnswer: 1,
    explanation: "একটি পর্যায়ে কার্যকরী নিউক্লীয় আধান সাধারণত বাড়ে এবং atomic radius কমে। তাই electronegativity সাধারণত বৃদ্ধি পায়; এটি একটি সাধারণ trend, সব ক্ষেত্রে ব্যতিক্রমহীন নিয়ম নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 25,
    type: "single",
    difficulty: "hard",
    topic: "তড়িৎঋণাত্মকতা (Electronegativity)",
    question: "Electronegativity সম্পর্কে কোন উক্তিটি ভুল?",
    options: [
      "Atomic size বাড়লে সাধারণত electronegativity কমে",
      "কার্যকরী nuclear attraction বাড়লে electronegativity বাড়তে পারে",
      "Hybridization-এ s-character বাড়লে electronegativity কমে",
      "Shielding বাড়লে সাধারণত valence electron-এর উপর nuclear attraction কমে"
    ],
    correctAnswer: 2,
    explanation: "একই মৌলের hybrid orbital-এ s-character বাড়লে electron density গড়ে নিউক্লিয়াসের কাছাকাছি থাকে। তাই প্রচলিত তুলনায় electronegativity সাধারণত sp > sp² > sp³।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 26,
    type: "single",
    difficulty: "easy",
    topic: "বন্ধন পোলারিটি ও দ্বিমেরু ভ্রামক",
    question: "নিচের কোন অণুর net dipole moment শূন্য?",
    options: ["H₂O", "NH₃", "CCl₄", "CHCl₃"],
    correctAnswer: 2,
    explanation: "CCl₄-এর tetrahedral geometry সুষম। চারটি C–Cl bond dipole-এর vector sum শূন্য, তাই net dipole moment শূন্য।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 27,
    type: "single",
    difficulty: "moderate",
    topic: "বন্ধন পোলারিটি ও দ্বিমেরু ভ্রামক",
    question: "H₂O-এর dipole moment শূন্য নয়, কিন্তু CO₂-এর শূন্য। প্রধান কারণ কী?",
    options: [
      "CO₂ সম্পূর্ণ ionic",
      "H₂O bent, কিন্তু CO₂ linear",
      "O, C-এর চেয়ে কম electronegative",
      "CO₂-তে hydrogen bonding থাকে"
    ],
    correctAnswer: 1,
    explanation: "H₂O-এর bent geometry-তে O–H bond dipole-গুলি পুরোপুরি বাতিল হয় না। CO₂-এর linear geometry-তে দুটি সমান C=O bond dipole বিপরীতমুখী হওয়ায় পরস্পরকে বাতিল করে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 28,
    type: "single",
    difficulty: "moderate",
    topic: "বন্ধন পোলারিটি ও দ্বিমেরু ভ্রামক",
    question: "A–B বন্ধনের dipole moment 1.2 D এবং bond length 1.0 Å হলে আনুমানিক percentage ionic character কত? 100% ionic dipole moment-এর জন্য e = 4.8 × 10⁻¹⁰ esu এবং 1 Å = 10⁻⁸ cm ধরো।",
    options: ["১০%", "২৫%", "৫০%", "১০০%"],
    correctAnswer: 1,
    explanation: "সম্পূর্ণ ionic dipole moment = e × r = 4.8 × 10⁻¹⁸ esu·cm ≈ 4.8 D। Percentage ionic character = (1.2/4.8) × 100 = 25%।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 29,
    type: "multiple",
    difficulty: "hard",
    topic: "বন্ধন পোলারিটি ও দ্বিমেরু ভ্রামক",
    question: "Dipole moment সম্পর্কে সঠিক উক্তিগুলি নির্বাচন করো।",
    options: [
      "এটি একটি vector quantity",
      "এটি molecular symmetry সম্পর্কে তথ্য দিতে পারে",
      "বিশুদ্ধ nonpolar covalent bond-এর dipole moment সর্বাধিক",
      "এটি অণুর polarity বিচার করতে সাহায্য করে"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Dipole moment vector quantity। Molecular geometry ও bond dipole-এর সমষ্টি এর মান নির্ধারণ করে। বিশুদ্ধ nonpolar bond-এর bond dipole moment শূন্য।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 30,
    type: "single",
    difficulty: "moderate",
    topic: "বন্ধন পোলারিটি ও দ্বিমেরু ভ্রামক",
    question: "cis-2-butene এবং trans-2-butene-এর মধ্যে সাধারণত কোনটির dipole moment বেশি?",
    options: [
      "cis-2-butene, কারণ এর bond dipole-গুলি পুরোপুরি বাতিল হয় না",
      "trans-2-butene, কারণ এটি বেশি স্থিতিশীল",
      "cis-2-butene, কারণ এতে hydrogen bond থাকে",
      "উভয়ের dipole moment অবশ্যই সমান"
    ],
    correctAnswer: 0,
    explanation: "cis-2-butene-এ molecular symmetry-এর কারণে bond dipole-গুলি সম্পূর্ণ বাতিল হয় না। trans-2-butene-এ অধিক symmetry-এর কারণে dipole moment খুব কম বা শূন্য হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 31,
    type: "single",
    difficulty: "easy",
    topic: "হাইড্রোজেন বন্ধন (Hydrogen Bond)",
    question: "সাধারণ শক্তিশালী hydrogen bonding-এর জন্য কোন শর্তটি গুরুত্বপূর্ণ?",
    options: [
      "H অবশ্যই একটি বৃহৎ পরমাণুর সঙ্গে যুক্ত থাকবে",
      "H, F, O বা N-এর মতো ক্ষুদ্র ও highly electronegative পরমাণুর সঙ্গে যুক্ত থাকবে",
      "H অবশ্যই धातুর সঙ্গে যুক্ত থাকবে",
      "অণুটি অবশ্যই nonpolar হবে"
    ],
    correctAnswer: 1,
    explanation: "সাধারণ hydrogen bonding-এ H, F, O বা N-এর মতো highly electronegative atom-এর সঙ্গে যুক্ত থাকে এবং অন্য একটি electronegative atom-এর lone pair-এর সঙ্গে আকর্ষণ তৈরি করে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 32,
    type: "single",
    difficulty: "moderate",
    topic: "হাইড্রোজেন বন্ধন (Hydrogen Bond)",
    question: "নিচের কোন যৌগের স্ফুটনাঙ্ক hydrogen bonding-এর কারণে অস্বাভাবিকভাবে বেশি?",
    options: ["HCl", "H₂S", "HF", "HBr"],
    correctAnswer: 2,
    explanation: "HF অণুগুলির মধ্যে শক্তিশালী intermolecular hydrogen bonding থাকে। এই অতিরিক্ত আকর্ষণের কারণে HF-এর boiling point একই ধরনের কিছু hydrogen halide-এর তুলনায় অস্বাভাবিকভাবে বেশি।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 33,
    type: "single",
    difficulty: "moderate",
    topic: "হাইড্রোজেন বন্ধন (Hydrogen Bond)",
    question: "সাধারণ বরফের কাঠামোতে প্রতিটি H₂O অণু সর্বোচ্চ কতটি hydrogen bond-এর সঙ্গে যুক্ত হতে পারে?",
    options: ["২", "৩", "৪", "৬"],
    correctAnswer: 2,
    explanation: "সাধারণ ice-Ih কাঠামোতে প্রতিটি জল অণু চারটি hydrogen bond গঠনে অংশ নিতে পারে—দুটি donor এবং দুটি acceptor হিসেবে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 34,
    type: "single",
    difficulty: "hard",
    topic: "হাইড্রোজেন বন্ধন (Hydrogen Bond)",
    question: "o-nitrophenol-এর boiling point p-nitrophenol-এর তুলনায় সাধারণত কম কেন?",
    options: [
      "o-nitrophenol-এ intramolecular hydrogen bonding হতে পারে",
      "p-nitrophenol-এ কোনো intermolecular attraction নেই",
      "o-nitrophenol-এর molecular mass কম",
      "উভয়ের boiling point সব অবস্থায় সমান"
    ],
    correctAnswer: 0,
    explanation: "o-nitrophenol-এ intramolecular hydrogen bonding অণুগুলির মধ্যে intermolecular association কমাতে পারে। p-nitrophenol-এ intermolecular hydrogen bonding বেশি কার্যকর হওয়ায় এর boiling point সাধারণত বেশি।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 35,
    type: "multiple",
    difficulty: "hard",
    topic: "হাইড্রোজেন বন্ধন (Hydrogen Bond)",
    question: "Hydrogen bonding-এর প্রভাব সম্পর্কে সঠিক উক্তিগুলি নির্বাচন করো।",
    options: [
      "এটি অনেক যৌগের boiling point বাড়াতে পারে",
      "জলের অস্বাভাবিক ঘনত্বের আচরণে hydrogen bonding গুরুত্বপূর্ণ",
      "এটি DNA double helix-এর দুই strand-এর মধ্যে base pairing-এ অবদান রাখে",
      "এটি সব যৌগের জলে দ্রাব্যতা কমায়"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Hydrogen bonding অনেক পদার্থের boiling point এবং জলের অস্বাভাবিক ধর্মে অবদান রাখে। DNA-তে complementary base pair-এর মধ্যে hydrogen bond গুরুত্বপূর্ণ। তবে hydrogen bonding সব পদার্থের aqueous solubility কমায় না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 36,
    type: "single",
    difficulty: "hard",
    topic: "Molecular Orbital Theory",
    question: "MOT অনুযায়ী O₂-এর bond order কত?",
    options: ["১", "১.৫", "২", "৩"],
    correctAnswer: 2,
    explanation: "O₂-এ bonding molecular orbital-এ ৮টি এবং antibonding molecular orbital-এ ৪টি electron থাকে। Bond order = (Nᵦ − Nₐ)/2 = (8 − 4)/2 = 2।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 37,
    type: "single",
    difficulty: "hard",
    topic: "Molecular Orbital Theory",
    question: "O₂ অণু paramagnetic কেন?",
    options: [
      "এতে সব electron paired",
      "দুটি antibonding π* orbital-এ দুটি unpaired electron থাকে",
      "এর bond order শূন্য",
      "এতে কোনো antibonding orbital নেই"
    ],
    correctAnswer: 1,
    explanation: "MOT-তে O₂-এর দুটি degenerate π* antibonding orbital-এ Hund's rule অনুসারে দুটি unpaired electron থাকে। তাই O₂ paramagnetic।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 38,
    type: "single",
    difficulty: "hard",
    topic: "Molecular Orbital Theory",
    question: "N₂⁺-এর bond order, N₂-এর bond order-এর তুলনায় কেমন?",
    options: [
      "বেশি, কারণ antibonding electron অপসারিত হয়",
      "কম, কারণ bonding orbital থেকে electron অপসারিত হয়",
      "সমান",
      "শূন্য"
    ],
    correctAnswer: 1,
    explanation: "N₂-এর bond order 3। N₂⁺-এ সর্বোচ্চ occupied bonding σ orbital থেকে একটি electron অপসারিত হয়, ফলে bond order 2.5 হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 39,
    type: "single",
    difficulty: "hard",
    topic: "আয়নীয় বন্ধন ও lattice enthalpy",
    question: "সাধারণভাবে কোন যৌগটির lattice enthalpy-এর মান সর্বাধিক হওয়ার প্রত্যাশা করা যায়?",
    options: ["NaCl", "KBr", "MgO", "CsI"],
    correctAnswer: 2,
    explanation: "Electrostatic attraction আনুমানিকভাবে ionic charge-এর গুণফলের সঙ্গে বাড়ে এবং ion separation কমলে বাড়ে। MgO-তে Mg²⁺ ও O²⁻ থাকায় এর lattice enthalpy-এর মান সাধারণত একযোজী বিকল্পগুলির চেয়ে অনেক বেশি।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 40,
    type: "multiple",
    difficulty: "hard",
    topic: "Fajans' rule",
    question: "Fajans' rule অনুযায়ী covalent character বৃদ্ধির প্রবণতার সঙ্গে কোন বিষয়গুলি সম্পর্কিত?",
    options: [
      "ছোট ও উচ্চ charge-যুক্ত cation",
      "বড় ও সহজে polarizable anion",
      "বড় ও কম charge-যুক্ত cation সবসময় সর্বাধিক polarizing",
      "cation-এর polarizing power বৃদ্ধি"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "ছোট, উচ্চ charge-যুক্ত cation-এর polarizing power বেশি। বড় anion সহজে polarize হয়। ফলে electron cloud distortion বাড়ে এবং covalent character বৃদ্ধির প্রবণতা দেখা যায়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 41,
    type: "single",
    difficulty: "hard",
    topic: "Formal charge",
    question: "CO₂-এর Lewis structure O=C=O-তে কেন্দ্রীয় carbon-এর formal charge কত?",
    options: ["−1", "০", "+1", "+2"],
    correctAnswer: 1,
    explanation: "Formal charge = valence electrons − nonbonding electrons − (bonding electrons/2)। Carbon-এর জন্য FC = 4 − 0 − 4 = 0।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 42,
    type: "single",
    difficulty: "hard",
    topic: "Bond order ও bond length",
    question: "একই ধরনের পরমাণুর মধ্যে bond order বাড়লে সাধারণত bond length কীভাবে বদলায়?",
    options: [
      "বাড়ে",
      "কমে",
      "সবসময় অপরিবর্তিত থাকে",
      "প্রথমে বাড়ে, পরে কমে"
    ],
    correctAnswer: 1,
    explanation: "একই ধরনের bond-এ bond order বাড়লে সাধারণত electron density ও bonding interaction বাড়ে এবং bond length কমে। এটি সাধারণ trend; সব রাসায়নিক পরিবেশে নিখুঁত সার্বজনীন নিয়ম নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 43,
    type: "multiple",
    difficulty: "hard",
    topic: "Bond order ও magnetic properties",
    question: "MOT-এর সাধারণ diatomic-orbital filling অনুযায়ী কোন প্রজাতিগুলির bond order 2?",
    options: ["O₂", "NO⁺", "C₂", "He₂"],
    correctAnswer: [0, 2],
    explanation: "O₂ এবং C₂ উভয়ের bond order 2। NO⁺-এর মোট ইলেকট্রন সংখ্যা ১৪ (N₂-এর সমান), তাই এর bond order 3। He₂-এর bond order 0।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 44,
    type: "single",
    difficulty: "hard",
    topic: "MOT ও magnetic properties",
    question: "নিচের কোন প্রজাতিটি diamagnetic?",
    options: ["O₂", "O₂⁺", "N₂", "NO"],
    correctAnswer: 2,
    explanation: "N₂-এ সব occupied molecular orbital-এ electron paired থাকে, তাই N₂ diamagnetic। O₂ এবং O₂⁺-এ unpaired electron থাকে; NO-ও paramagnetic।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 45,
    type: "single",
    difficulty: "hard",
    topic: "Born–Haber cycle",
    question: "Born–Haber cycle কোন নীতির উপর ভিত্তি করে তৈরি?",
    options: [
      "Pauli exclusion principle",
      "Hess's law of constant heat summation",
      "Hund's rule",
      "Heisenberg uncertainty principle"
    ],
    correctAnswer: 1,
    explanation: "Born–Haber cycle Hess's law ব্যবহার করে ionic solid-এর formation enthalpy-কে atomization, ionization, electron affinity এবং lattice enthalpy-র মতো ধাপে বিশ্লেষণ করে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 46,
    type: "multiple",
    difficulty: "hard",
    topic: "Hydrogen bonding",
    question: "Intermolecular hydrogen bonding-এর কারণে কোন ধর্মগুলিতে পরিবর্তন দেখা যেতে পারে?",
    options: [
      "Boiling point বৃদ্ধি",
      "Viscosity বৃদ্ধি",
      "Volatility হ্রাস",
      "সব ক্ষেত্রে density বৃদ্ধি"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Intermolecular hydrogen bonding অণুগুলির মধ্যে আকর্ষণ বাড়াতে পারে, ফলে boiling point ও viscosity বাড়তে এবং volatility কমতে পারে। Density-এর পরিবর্তন পদার্থের গঠন ও অবস্থার উপর নির্ভর করে; সব ক্ষেত্রে বাড়ে না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 47,
    type: "single",
    difficulty: "hard",
    topic: "Resonance ও bond length",
    question: "Benzene-এ ছয়টি C–C bond-এর দৈর্ঘ্য সমান হওয়ার প্রধান ব্যাখ্যা কী?",
    options: [
      "তিনটি single bond ও তিনটি double bond স্থায়ীভাবে পালা করে থাকে",
      "π-electron delocalization-এর ফলে resonance hybrid-এ bond-গুলি সমতুল্য হয়",
      "প্রতিটি carbon sp³ hybridized",
      "Benzene-এ কোনো π electron নেই"
    ],
    correctAnswer: 1,
    explanation: "Benzene-এর π electron delocalized থাকে। Resonance hybrid-এ ছয়টি C–C bond সমতুল্য হয় এবং তাদের bond length single ও double bond-এর সাধারণ মানের মধ্যবর্তী।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 48,
    type: "multiple",
    difficulty: "hard",
    topic: "Dipole moment ও molecular geometry",
    question: "নিচের কোন অণুগুলির net dipole moment শূন্য?",
    options: ["CO₂", "BF₃", "CCl₄", "SO₂"],
    correctAnswer: [0, 1, 2],
    explanation: "CO₂ linear, BF₃ trigonal planar এবং CCl₄ symmetric tetrahedral। উপযুক্ত symmetry-র কারণে তাদের bond dipole-গুলির vector sum শূন্য। SO₂ bent হওয়ায় এর net dipole moment শূন্য নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 49,
    type: "single",
    difficulty: "hard",
    topic: "Electronegativity ও bond polarity",
    question: "একটি bond-এর electronegativity difference বৃদ্ধি পেলে সাধারণত কী ঘটে?",
    options: [
      "Bond polarity বাড়ার প্রবণতা দেখা যায়",
      "Bond অবশ্যই সম্পূর্ণ ionic হয়ে যায়",
      "Bond dipole moment সবসময় শূন্য হয়",
      "Bond length সবসময় শূন্য হয়ে যায়"
    ],
    correctAnswer: 0,
    explanation: "Electronegativity difference বাড়লে bonding electron pair-এর অসম বণ্টন সাধারণত বাড়ে এবং bond polarity বাড়ার প্রবণতা দেখা যায়। তবে শুধু electronegativity difference দিয়ে সম্পূর্ণ ionic character নিশ্চিত করা যায় না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 50,
    type: "single",
    difficulty: "hard",
    topic: "Bond enthalpy ও thermochemistry",
    question: "গ্যাসীয় অবস্থায় কোনো বিক্রিয়ার আনুমানিক enthalpy change bond enthalpy থেকে নির্ণয় করতে কোন সম্পর্ক ব্যবহার করা হয়?",
    options: [
      "ΔH ≈ Σ(bonds formed) − Σ(bonds broken)",
      "ΔH ≈ Σ(bonds broken) − Σ(bonds formed)",
      "ΔH = Σ(atomic numbers)",
      "ΔH = Σ(electronegativity values)"
    ],
    correctAnswer: 1,
    explanation: "Bond enthalpy থেকে আনুমানিকভাবে ΔH = Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed)। Bond ভাঙতে শক্তি লাগে; bond গঠনে শক্তি নির্গত হয়।",
    marks: 4,
    negativeMarks: 1
  }
];

export default CBT4_QUESTION_BANK;