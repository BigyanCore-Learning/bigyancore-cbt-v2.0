// Chemical Bonding and Molecular Structure — CBT 2
// 35 questions | Class 11 Chemistry
// Single-answer correctAnswer: zero-based index (0–3)
// Multiple-answer correctAnswer: array of zero-based indexes
// Marking: +4 correct, -1 incorrect
const CBT2_QUESTION_BANK = [
  {
    id: 1,
    type: "single",
    question: "Kossel–Lewis-এর ইলেকট্রনিক তত্ত্ব অনুযায়ী, পরমাণুগুলি রাসায়নিক বন্ধন গঠনের সময় প্রধানত কী অর্জন করতে চায়?",
    options: [
      "সর্বাধিক পারমাণবিক ভর",
      "নিষ্ক্রিয় গ্যাসের মতো স্থিতিশীল ইলেকট্রন বিন্যাস",
      "সর্বাধিক নিউট্রন সংখ্যা",
      "সর্বাধিক আয়নীকরণ শক্তি"
    ],
    correctAnswer: 1,
    explanation: "Kossel–Lewis ধারণা অনুযায়ী পরমাণু সাধারণত বহিঃস্তরে স্থিতিশীল noble-gas configuration অর্জনের দিকে অগ্রসর হয়।",
    difficulty: "easy",
    topic: "Kossel–Lewis Theory",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 2,
    type: "single",
    question: "নিচের কোন অণুটি Lewis octet rule-এর একটি ব্যতিক্রমের উদাহরণ?",
    options: ["CH₄", "NH₃", "BF₃", "H₂O"],
    correctAnswer: 2,
    explanation: "BF₃-এ কেন্দ্রীয় B পরমাণুর চারপাশে মাত্র 6টি valence electron থাকে; তাই এটি incomplete octet-এর উদাহরণ।",
    difficulty: "easy",
    topic: "Octet Rule",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 3,
    type: "single",
    question: "NaCl-এ Na-এর electrovalency কত?",
    options: ["0", "+1", "+2", "−1"],
    correctAnswer: 1,
    explanation: "Na একটি electron ত্যাগ করে Na⁺ হয়। তাই তার electrovalency-এর মান 1 এবং আধান +1।",
    difficulty: "easy",
    topic: "Electrovalency",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 4,
    type: "single",
    question: "MgO-তে বন্ধন গঠনের সময় কোন পরিবর্তনটি ঘটে?",
    options: [
      "Mg একটি electron গ্রহণ করে এবং O একটি electron ত্যাগ করে",
      "Mg ও O উভয়ই electron গ্রহণ করে",
      "Mg দুটি electron ত্যাগ করে এবং O দুটি electron গ্রহণ করে",
      "Mg ও O electron সমানভাবে ভাগ করে"
    ],
    correctAnswer: 2,
    explanation: "Mg → Mg²⁺ + 2e⁻ এবং O + 2e⁻ → O²⁻। বিপরীত আধানযুক্ত ion-এর electrostatic attraction-এর ফলে ionic bond গঠিত হয়।",
    difficulty: "medium",
    topic: "Ionic Bond",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 5,
    type: "single",
    question: "একটি পরমাণু যতগুলি electron pair covalent bond গঠনে share করে, তার covalency সাধারণত কত দ্বারা প্রকাশ করা হয়?",
    options: [
      "তার atomic mass",
      "তার oxidation number মাত্র",
      "গঠিত covalent bond-এর সংখ্যা",
      "neutron সংখ্যা"
    ],
    correctAnswer: 2,
    explanation: "Covalency বলতে কোনো পরমাণুর দ্বারা গঠিত covalent bond-এর সংখ্যা বোঝায়।",
    difficulty: "easy",
    topic: "Covalency",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 6,
    type: "single",
    question: "NH₃ এবং H⁺ থেকে NH₄⁺ গঠনের সময় coordinate bond-এর electron pair কোথা থেকে আসে?",
    options: [
      "H⁺ থেকে",
      "NH₃-এর N-এর lone pair থেকে",
      "N ও H উভয়ের একটি করে electron থেকে",
      "অন্য একটি NH₃ অণু থেকে"
    ],
    correctAnswer: 1,
    explanation: "NH₃-এর N পরমাণুর lone pair H⁺-কে দান করে N→H coordinate bond তৈরি করে।",
    difficulty: "medium",
    topic: "Coordinate Bond",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 7,
    type: "multiple",
    question: "নিচের কোনগুলিতে coordinate covalent bond-এর উপস্থিতি ধরা যায়?",
    options: ["NH₄⁺", "H₃O⁺", "BF₄⁻", "CH₄"],
    correctAnswer: [0, 1, 2],
    explanation: "NH₄⁺-এ NH₃→H⁺, H₃O⁺-এ H₂O→H⁺ এবং BF₄⁻-এ BF₃←F⁻ coordinate bond গঠনের ধারণা প্রযোজ্য। CH₄-এ সাধারণ covalent bond থাকে।",
    difficulty: "medium",
    topic: "Coordinate Covalency",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 8,
    type: "single",
    question: "একই ধরনের দুটি পরমাণুর মধ্যে bond order বাড়লে সাধারণত bond length কীভাবে পরিবর্তিত হয়?",
    options: [
      "বৃদ্ধি পায়",
      "কমে যায়",
      "অপরিবর্তিত থাকে",
      "প্রথমে বাড়ে, পরে কমে"
    ],
    correctAnswer: 1,
    explanation: "Bond order বেশি হলে nuclei-এর মধ্যে আকর্ষণ বেশি কার্যকর হয় এবং bond সাধারণত ছোট ও শক্তিশালী হয়।",
    difficulty: "easy",
    topic: "Bond Length",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 9,
    type: "single",
    question: "সাধারণভাবে নিচের কোন bond-এর bond dissociation energy সর্বাধিক?",
    options: ["C–C", "C=C", "C≡C", "C–H"],
    correctAnswer: 2,
    explanation: "C≡C-এর bond order 3 হওয়ায় এটি সাধারণত C–C ও C=C-এর তুলনায় শক্তিশালী এবং তার bond dissociation energy বেশি।",
    difficulty: "medium",
    topic: "Bond Energy",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 10,
    type: "single",
    question: "CH₄ অণুর H–C–H bond angle প্রায় কত?",
    options: ["90°", "104.5°", "109.5°", "120°"],
    correctAnswer: 2,
    explanation: "CH₄-এর tetrahedral geometry-এর কারণে bond angle প্রায় 109.5°।",
    difficulty: "easy",
    topic: "Bond Angle",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 11,
    type: "single",
    question: "VSEPR theory অনুযায়ী electron pair-গুলির মধ্যে কোন interaction সবচেয়ে বেশি?",
    options: [
      "Bond pair–bond pair",
      "Lone pair–bond pair",
      "Lone pair–lone pair",
      "সবগুলির সমান"
    ],
    correctAnswer: 2,
    explanation: "Repulsion-এর ক্রম: LP–LP > LP–BP > BP–BP।",
    difficulty: "medium",
    topic: "VSEPR Theory",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 12,
    type: "single",
    question: "NH₃ অণুর molecular shape কী?",
    options: [
      "Trigonal planar",
      "Trigonal pyramidal",
      "Tetrahedral",
      "Linear"
    ],
    correctAnswer: 1,
    explanation: "N-এর চারটি electron domain—3টি bond pair ও 1টি lone pair। Electron-pair geometry tetrahedral হলেও molecular shape trigonal pyramidal।",
    difficulty: "medium",
    topic: "Molecular Shape",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 13,
    type: "single",
    question: "H₂O-এর bond angle NH₃-এর তুলনায় কম হওয়ার প্রধান কারণ কোনটি?",
    options: [
      "O-এর atomic size বেশি",
      "H₂O-তে lone pair সংখ্যা বেশি",
      "NH₃-তে bond pair নেই",
      "O-এর electronegativity শূন্য"
    ],
    correctAnswer: 1,
    explanation: "H₂O-তে O-এর দুটি lone pair রয়েছে, যা শক্তিশালী repulsion সৃষ্টি করে। তাই H–O–H angle প্রায় 104.5°, যেখানে NH₃-তে প্রায় 107°।",
    difficulty: "medium",
    topic: "Lone Pair Effect",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 14,
    type: "single",
    question: "নিচের কোন species-এর shape linear?",
    options: ["H₂O", "NH₃", "BeCl₂", "SO₂"],
    correctAnswer: 2,
    explanation: "BeCl₂-তে কেন্দ্রীয় Be-এর চারপাশে 2টি electron domain এবং কোনো lone pair নেই। তাই geometry ও shape উভয়ই linear, bond angle 180°।",
    difficulty: "medium",
    topic: "VSEPR Application",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 15,
    type: "single",
    question: "Valence Bond Theory অনুযায়ী covalent bond গঠনের মূল ধারণা কোনটি?",
    options: [
      "সম্পূর্ণ electron transfer",
      "half-filled atomic orbitals-এর overlap এবং electron pairing",
      "nucleus-এর fusion",
      "neutron-এর আদান-প্রদান"
    ],
    correctAnswer: 1,
    explanation: "VBT-তে উপযুক্ত atomic orbital-এর overlap-এর মাধ্যমে opposite-spin electron pair গঠিত হয়ে covalent bond তৈরি করে।",
    difficulty: "medium",
    topic: "Valence Bond Theory",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 16,
    type: "single",
    question: "N₂ অণুর triple bond-এ কয়টি σ ও π bond রয়েছে?",
    options: ["3σ, 0π", "1σ, 2π", "2σ, 1π", "1σ, 1π"],
    correctAnswer: 1,
    explanation: "দুটি পরমাণুর মধ্যে প্রথম bond হলো σ; triple bond-এর বাকি দুটি হলো π। তাই N≡N = 1σ + 2π।",
    difficulty: "medium",
    topic: "Sigma and Pi Bonds",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 17,
    type: "single",
    question: "CH₄-এ carbon-এর hybridisation কী?",
    options: ["sp", "sp²", "sp³", "dsp²"],
    correctAnswer: 2,
    explanation: "Carbon চারটি equivalent σ bond তৈরি করে এবং চারটি hybrid orbital ব্যবহৃত হয়; তাই hybridisation sp³।",
    difficulty: "easy",
    topic: "Hybridisation",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 18,
    type: "single",
    question: "নিচের কোন অণুতে কেন্দ্রীয় atom-এর hybridisation sp²?",
    options: ["CH₄", "NH₃", "BF₃", "BeCl₂"],
    correctAnswer: 2,
    explanation: "BF₃-তে B-এর চারপাশে 3টি electron domain থাকে। তাই hybridisation sp² এবং shape trigonal planar।",
    difficulty: "medium",
    topic: "Hybridisation",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 19,
    type: "multiple",
    question: "নিচের কোন species-গুলিতে কেন্দ্রীয় atom-এর hybridisation sp³?",
    options: ["NH₄⁺", "H₂O", "NH₃", "BF₃"],
    correctAnswer: [0, 1, 2],
    explanation: "NH₄⁺, NH₃ ও H₂O-তে কেন্দ্রীয় atom-এর চারটি electron domain থাকায় sp³ hybridisation। BF₃ হলো sp²।",
    difficulty: "medium",
    topic: "Hybridisation",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 20,
    type: "single",
    question: "একটি কেন্দ্রীয় atom-এর চারপাশে 5টি electron domain থাকলে, simplest electron-pair geometry কোনটি?",
    options: [
      "Tetrahedral",
      "Trigonal planar",
      "Trigonal bipyramidal",
      "Octahedral"
    ],
    correctAnswer: 2,
    explanation: "5টি electron domain → trigonal bipyramidal electron geometry; ideal bond angles 90°, 120° ও 180°।",
    difficulty: "hard",
    topic: "Hybridisation and Geometry",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 21,
    type: "single",
    question: "CO₃²⁻ ion-এর resonance structure-গুলির ক্ষেত্রে কোন বক্তব্যটি সঠিক?",
    options: [
      "বাস্তবে ion ক্রমাগত structure পরিবর্তন করে",
      "একটি মাত্র structure বাস্তব",
      "বাস্তব structure হলো resonance hybrid",
      "তিনটি structure আলাদা আলাদা molecule"
    ],
    correctAnswer: 2,
    explanation: "Resonance structure-গুলি পৃথক বাস্তব অণু নয়; প্রকৃত ion হলো তাদের সমন্বিত resonance hybrid।",
    difficulty: "medium",
    topic: "Resonance",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 22,
    type: "single",
    question: "CO₃²⁻-এ তিনটি C–O bond-এর bond length সমান হওয়ার কারণ—",
    options: [
      "C–O bond সম্পূর্ণ ionic",
      "resonance-এর কারণে π-electron delocalisation",
      "oxygen-এর atomic mass একই",
      "carbon-এর কোনো valence electron নেই"
    ],
    correctAnswer: 1,
    explanation: "π-electron তিনটি C–O bond-এর মধ্যে delocalised হওয়ায় বাস্তবে তিনটি bond equivalent এবং bond order 1 ও 2-এর মধ্যবর্তী।",
    difficulty: "medium",
    topic: "Resonance and Bond Length",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 23,
    type: "single",
    question: "নিচের কোন মৌলটির electronegativity সর্বাধিক?",
    options: ["F", "Cl", "O", "N"],
    correctAnswer: 0,
    explanation: "Periodic table-এ fluorine-এর electronegativity সর্বাধিক।",
    difficulty: "easy",
    topic: "Electronegativity",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 24,
    type: "single",
    question: "Period-এ বাম থেকে ডানে গেলে সাধারণত electronegativity—",
    options: [
      "কমে",
      "বাড়ে",
      "অপরিবর্তিত থাকে",
      "প্রথমে কমে পরে বাড়ে"
    ],
    correctAnswer: 1,
    explanation: "Effective nuclear charge বৃদ্ধির ফলে atom bonding electron pair-কে বেশি আকর্ষণ করে।",
    difficulty: "medium",
    topic: "Electronegativity Trend",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 25,
    type: "single",
    question: "HCl-এ partial negative charge কোন পরমাণুর উপর থাকে?",
    options: ["H", "Cl", "উভয়ের উপর সমান", "কোনো পরমাণুর উপর নয়"],
    correctAnswer: 1,
    explanation: "Cl-এর electronegativity H-এর তুলনায় বেশি। তাই bonding electron density Cl-এর দিকে বেশি সরে যায়: Hδ+–Clδ−।",
    difficulty: "easy",
    topic: "Bond Polarity",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 26,
    type: "single",
    question: "নিচের কোন অণুর net dipole moment শূন্য?",
    options: ["H₂O", "NH₃", "CO₂", "HCl"],
    correctAnswer: 2,
    explanation: "CO₂ linear ও symmetric হওয়ায় দুই C=O bond-এর dipole moment পরস্পরকে cancel করে দেয়।",
    difficulty: "medium",
    topic: "Dipole Moment",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 27,
    type: "single",
    question: "BF₃-এ B–F bond polar হলেও BF₃-এর net dipole moment শূন্য। এর কারণ—",
    options: [
      "B–F bond non-polar",
      "অণুটি linear",
      "trigonal planar symmetric structure-এ bond dipole-গুলি vectorially cancel করে",
      "B-এর কোনো electron নেই"
    ],
    correctAnswer: 2,
    explanation: "প্রতিটি B–F bond polar, কিন্তু তিনটি সমান bond dipole 120° কোণে থাকার কারণে resultant dipole moment শূন্য।",
    difficulty: "hard",
    topic: "Dipole Moment and Shape",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 28,
    type: "single",
    question: "একটি diatomic molecule-এ charge separation q = 1.6 × 10⁻¹⁹ C এবং internuclear distance r = 1.0 × 10⁻¹⁰ m। Dipole moment কত?",
    options: [
      "1.6 × 10⁻²⁹ C m",
      "1.6 × 10⁻⁹ C m",
      "1.6 × 10⁻¹⁹ C m",
      "1.6 × 10⁻²⁹ C m⁻¹"
    ],
    correctAnswer: 0,
    explanation: "Dipole moment μ = q × r = (1.6 × 10⁻¹⁹ C)(1.0 × 10⁻¹⁰ m) = 1.6 × 10⁻²⁹ C m।",
    difficulty: "medium",
    topic: "Dipole Moment Numerical",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 29,
    type: "single",
    question: "নিচের কোন molecule-টি সাধারণত intermolecular hydrogen bonding দেখায়?",
    options: ["CH₄", "H₂O", "H₂S", "CCl₄"],
    correctAnswer: 1,
    explanation: "H₂O-তে highly electronegative O-এর সঙ্গে H যুক্ত এবং O-এর lone pair আছে, ফলে শক্তিশালী hydrogen bonding সম্ভব।",
    difficulty: "easy",
    topic: "Hydrogen Bonding",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 30,
    type: "single",
    question: "জল তরল অবস্থায় তুলনামূলকভাবে উচ্চ boiling point দেখায় প্রধানত—",
    options: [
      "H₂O-এর molecular mass খুব বেশি",
      "শক্তিশালী intermolecular hydrogen bonding-এর কারণে",
      "H₂O ionic compound বলে",
      "H₂O-তে কোনো lone pair নেই"
    ],
    correctAnswer: 1,
    explanation: "H₂O অণুগুলির মধ্যে শক্তিশালী hydrogen bond ভাঙতে অতিরিক্ত শক্তি লাগে, ফলে boiling point বৃদ্ধি পায়।",
    difficulty: "medium",
    topic: "Hydrogen Bonding",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 31,
    type: "single",
    question: "Molecular Orbital Theory অনুযায়ী atomic orbitals থেকে molecular orbitals গঠনের সময় কোন দুটি ধরনের MO সাধারণত তৈরি হয়?",
    options: [
      "Ionic ও metallic",
      "Bonding ও antibonding",
      "Acidic ও basic",
      "Polar ও non-polar"
    ],
    correctAnswer: 1,
    explanation: "Atomic orbital-এর constructive overlap থেকে bonding MO এবং destructive overlap থেকে antibonding MO তৈরি হয়।",
    difficulty: "medium",
    topic: "Molecular Orbital Theory",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 32,
    type: "single",
    question: "কোনো molecule-এ bonding molecular orbital-এ 8টি এবং antibonding molecular orbital-এ 2টি electron থাকলে bond order কত?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Bond order = (Nᵦ − Nₐ)/2 = (8 − 2)/2 = 3।",
    difficulty: "medium",
    topic: "Bond Order Numerical",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 33,
    type: "single",
    question: "O₂ molecule paramagnetic হওয়ার কারণ—",
    options: [
      "O₂-তে সব electron paired",
      "O₂-তে antibonding electron নেই",
      "O₂-এর π* antibonding molecular orbital-এ unpaired electron থাকে",
      "O₂ একটি ionic molecule"
    ],
    correctAnswer: 2,
    explanation: "MO configuration অনুযায়ী O₂-এর π* orbitals-এ দুটি unpaired electron থাকে। তাই O₂ paramagnetic।",
    difficulty: "medium",
    topic: "MO Theory and Magnetism",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 34,
    type: "single",
    question: "নিচের species-গুলির মধ্যে কোনটির bond order সর্বাধিক?",
    options: ["O₂", "O₂⁺", "O₂⁻", "O₂²⁻"],
    correctAnswer: 1,
    explanation: "O₂ থেকে একটি electron সরালে তা antibonding π* orbital থেকে বের হয়। তাই bond order বৃদ্ধি পায়। O₂: 2; O₂⁺: 2.5; O₂⁻: 1.5; O₂²⁻: 1।",
    difficulty: "hard",
    topic: "MO Theory and Bond Order",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 35,
    type: "multiple",
    question: "একটি hypothetical diatomic molecule-এর MO configuration-এ 10টি electron bonding MO-তে এবং 4টি electron antibonding MO-তে রয়েছে। কোন বক্তব্যগুলি সঠিক?",
    options: [
      "Bond order = 3",
      "Molecule-এ মোট 14টি electron রয়েছে",
      "Bond order শূন্য হলে molecule-টি আরও স্থিতিশীল হতো",
      "Bonding electron-এর সংখ্যা antibonding electron-এর চেয়ে বেশি"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Bond order = (Nᵦ − Nₐ)/2 = (10 − 4)/2 = 3। মোট electron = 10 + 4 = 14। Bonding electron বেশি হওয়ায় molecule-টি net bonding character দেখায়। Bond order শূন্য হলে স্থায়ী covalent bond থাকার সম্ভাবনা থাকে না।",
    difficulty: "hard",
    topic: "Combined Numerical and Conceptual",
    marks: 4,
    negativeMarks: 1
  }
];
export default CBT2_QUESTION_BANK;