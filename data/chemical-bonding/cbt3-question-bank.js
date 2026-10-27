
const CBT3_QUESTION_BANK = [
  {
    id: 1,
    type: "single",
    difficulty: "easy",
    topic: "Molecular Orbital Theory",
    question: "আণুবর্তীয় কক্ষক তত্ত্ব (MOT)-এর মূল ভিত্তি কী?",
    options: [
      "পারমাণবিক কক্ষকগুলো পরস্পরকে আঘাত করে আণুবর্তীয় কক্ষক তৈরি করে।",
      "পারমাণবিক কক্ষকগুলোর রৈখিক সংমিশ্রণ (LCAO) দ্বারা আণুবর্তীয় কক্ষক তৈরি হয়।",
      "ইলেকট্রনগুলো পরমাণুর বাইরে ঘুরে বেড়ায়।",
      "পরমাণুগুলো ইলেকট্রন ভাগ করে নেয়।"
    ],
    correctAnswer: 1,
    explanation: "MOT অনুযায়ী, atomic orbitals-এর linear combination (LCAO) থেকে molecular orbitals (MOs) গঠিত হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 2,
    type: "single",
    difficulty: "easy",
    topic: "Molecular Orbital Theory",
    question: "দুটি পারমাণবিক কক্ষকের সংমিশ্রণে কয়টি আণুবর্তীয় কক্ষক তৈরি হয়?",
    options: ["১টি", "২টি", "৩টি", "৪টি"],
    correctAnswer: 1,
    explanation: "দুটি atomic orbital-এর সংমিশ্রণে সাধারণত একটি bonding এবং একটি antibonding molecular orbital তৈরি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 3,
    type: "single",
    difficulty: "easy",
    topic: "Molecular Orbital Theory",
    question: "বন্ধনকারী আণুবর্তীয় কক্ষকের শক্তি কীরূপ হয়?",
    options: [
      "পারমাণবিক কক্ষকের চেয়ে বেশি",
      "পারমাণবিক কক্ষকের চেয়ে কম",
      "পারমাণবিক কক্ষকের সমান",
      "বন্ধনবিঘটনকারী কক্ষকের সমান"
    ],
    correctAnswer: 1,
    explanation: "Bonding molecular orbital-এর শক্তি সংশ্লিষ্ট atomic orbital-এর তুলনায় কম হয়; এতে অণুর স্থিতিশীলতা বাড়ে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 4,
    type: "single",
    difficulty: "easy",
    topic: "Molecular Orbital Theory",
    question: "বন্ধনবিঘটনকারী আণুবর্তীয় কক্ষকের শক্তি কীরূপ হয়?",
    options: [
      "পারমাণবিক কক্ষকের চেয়ে কম",
      "পারমাণবিক কক্ষকের চেয়ে বেশি",
      "বন্ধনকারী কক্ষকের চেয়ে কম",
      "পারমাণবিক কক্ষকের সমান"
    ],
    correctAnswer: 1,
    explanation: "Antibonding molecular orbital-এর শক্তি সংশ্লিষ্ট atomic orbital-এর তুলনায় বেশি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 5,
    type: "single",
    difficulty: "easy",
    topic: "Sigma and Pi Molecular Orbitals",
    question: "কোন ধরনের overlapping দ্বারা σ (সিগমা) molecular orbital তৈরি হয়?",
    options: [
      "পার্শ্বীয় overlapping",
      "কেন্দ্রস্থিত অক্ষ বরাবর সামনে-সামনি (head-on) overlapping",
      "কোনো overlapping ঘটে না",
      "ইচ্ছাকৃত overlapping"
    ],
    correctAnswer: 1,
    explanation: "Internuclear axis বরাবর head-on বা axial overlapping-এর ফলে σ molecular orbital তৈরি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 6,
    type: "single",
    difficulty: "easy",
    topic: "Sigma and Pi Molecular Orbitals",
    question: "π (পাই) molecular orbital কীভাবে তৈরি হয়?",
    options: [
      "সমমিতিক overlapping দ্বারা",
      "পার্শ্বীয় বা সমান্তরাল overlapping দ্বারা",
      "কেন্দ্রস্থিত অক্ষের পেছনে overlapping দ্বারা",
      "কোনো overlapping ছাড়াই"
    ],
    correctAnswer: 1,
    explanation: "সমান্তরাল p-orbital-এর lateral বা sideways overlapping-এর ফলে π molecular orbital তৈরি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 7,
    type: "single",
    difficulty: "moderate",
    topic: "LCAO Conditions",
    question: "পারমাণবিক কক্ষকের রৈখিক সংমিশ্রণের (LCAO) শর্ত নয় কোনটি?",
    options: [
      "সংমিশ্রিত কক্ষকগুলোর শক্তি সামঞ্জস্যপূর্ণ হতে হবে।",
      "কক্ষকগুলোর overlapping সর্বাধিক হওয়া উচিত।",
      "কক্ষকগুলোর symmetry মিল থাকতে হবে।",
      "কক্ষকগুলোর আকার সমান হতে হবে।"
    ],
    correctAnswer: 3,
    explanation: "কার্যকর LCAO-এর জন্য orbital energies কাছাকাছি, symmetry সামঞ্জস্যপূর্ণ এবং overlap যথেষ্ট হওয়া দরকার; আকার এক হওয়া বাধ্যতামূলক নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 8,
    type: "single",
    difficulty: "moderate",
    topic: "LCAO Conditions",
    question: "1s এবং 2s orbital-এর মধ্যে কার্যকর molecular orbital গঠন সীমিত হওয়ার প্রধান কারণ কী?",
    options: [
      "আকার ভিন্ন",
      "শক্তিতে ব্যাপক পার্থক্য",
      "symmetry ভিন্ন",
      "overlapping শূন্য"
    ],
    correctAnswer: 1,
    explanation: "1s ও 2s orbital-এর শক্তির পার্থক্য অনেক বেশি; তাই তাদের মিশ্রণ কার্যকর নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 9,
    type: "single",
    difficulty: "easy",
    topic: "Bonding Molecular Orbitals",
    question: "নিচের কোনটি bonding molecular orbital-এর বৈশিষ্ট্য?",
    options: [
      "internuclear region-এ nodal plane থাকে",
      "শক্তি বেশি হয়",
      "internuclear region-এ electron density বৃদ্ধি পায়",
      "অণুকে অস্থিতিশীল করে"
    ],
    correctAnswer: 2,
    explanation: "Bonding molecular orbital-এ internuclear region-এ electron density বৃদ্ধি পায় এবং শক্তি কমে, ফলে অণু স্থিতিশীল হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 10,
    type: "single",
    difficulty: "easy",
    topic: "Antibonding Molecular Orbitals",
    question: "Antibonding molecular orbital-এ electron probability density কোথায় শূন্য থাকে?",
    options: [
      "পরমাণুর কেন্দ্রে",
      "দুটি নিউক্লিয়াসের মাঝের nodal plane-এ",
      "পরমাণুর বাইরে",
      "কোথাও নয়"
    ],
    correctAnswer: 1,
    explanation: "Antibonding orbital-এর দুই নিউক্লিয়াসের মাঝখানে nodal plane থাকে, যেখানে wavefunction এবং electron probability density শূন্য।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 11,
    type: "single",
    difficulty: "moderate",
    topic: "Molecular Orbital Energy",
    question: "সমজাতীয় দ্বিপরমাণুক অণুতে bonding ও antibonding orbital-এর শক্তি সম্পর্কে কোনটি সঠিক?",
    options: [
      "bonding orbital-এর শক্তি সবসময় antibonding orbital-এর চেয়ে বেশি",
      "bonding orbital-এর শক্তি antibonding orbital-এর চেয়ে কম",
      "উভয় orbital-এর শক্তি সমান",
      "কোনো নির্দিষ্ট সম্পর্ক নেই"
    ],
    correctAnswer: 1,
    explanation: "একই orbital interaction থেকে গঠিত bonding MO-এর শক্তি কম এবং antibonding MO-এর শক্তি বেশি হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 12,
    type: "single",
    difficulty: "hard",
    topic: "Molecular Orbital Energy Order",
    question: "B₂, C₂ এবং N₂ অণুগুলোর valence molecular orbital শক্তির সঠিক ক্রম কোনটি?",
    options: [
      "σ2s < σ*2s < σ2p < π2p < π*2p < σ*2p",
      "σ2s < σ*2s < π2p < σ2p < π*2p < σ*2p",
      "σ2s < σ*2s < π2p < σ2p < σ*2p < π*2p",
      "σ2s < σ*2s < σ2p < π2p < σ*2p < π*2p"
    ],
    correctAnswer: 1,
    explanation: "B₂, C₂ ও N₂-এর ক্ষেত্রে s–p mixing-এর কারণে π2p orbital-এর শক্তি σ2p orbital-এর চেয়ে কম হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 13,
    type: "single",
    difficulty: "hard",
    topic: "Molecular Orbital Energy Order",
    question: "O₂, F₂ এবং Ne₂-এর valence molecular orbital শক্তির সঠিক ক্রম কোনটি?",
    options: [
      "σ2s < σ*2s < π2p < σ2p < π*2p < σ*2p",
      "σ2s < σ*2s < σ2p < π2p < π*2p < σ*2p",
      "σ2s < σ*2s < π2p < σ2p < σ*2p < π*2p",
      "σ2s < σ*2s < σ2p < π2p < σ*2p < π*2p"
    ],
    correctAnswer: 1,
    explanation: "O₂ ও F₂-এর ক্ষেত্রে s–p mixing তুলনামূলকভাবে নগণ্য; তাই σ2p orbital-এর শক্তি π2p orbital-এর চেয়ে কম।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 14,
    type: "single",
    difficulty: "easy",
    topic: "Molecular Orbital Electron Filling",
    question: "Molecular orbital-এ electron filling-এর ক্ষেত্রে কোন নীতিটি সরাসরি অনুসরণ করা হয় না?",
    options: [
      "Aufbau principle",
      "Hund's rule",
      "Pauli exclusion principle",
      "Heisenberg uncertainty principle"
    ],
    correctAnswer: 3,
    explanation: "MO electron configuration-এ Aufbau principle, Pauli exclusion principle এবং Hund's rule প্রয়োগ করা হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 15,
    type: "multiple",
    difficulty: "moderate",
    topic: "LCAO Conditions",
    question: "LCAO পদ্ধতিতে কার্যকর molecular orbital গঠনের শর্তগুলো নির্বাচন করো।",
    options: [
      "সংমিশ্রিত orbital-এর শক্তি অবশ্যই সমান হতে হবে",
      "orbital-গুলোর overlap যথেষ্ট/সর্বাধিক হতে হবে",
      "orbital-গুলোর symmetry সামঞ্জস্যপূর্ণ হতে হবে",
      "orbital-গুলোর আকার সমান হতে হবে"
    ],
    correctAnswer: [1, 2],
    explanation: "কার্যকর LCAO-এর জন্য শক্তি কাছাকাছি হওয়া, যথেষ্ট overlap এবং symmetry সামঞ্জস্যপূর্ণ হওয়া গুরুত্বপূর্ণ। শক্তি হুবহু সমান বা আকার সমান হওয়া বাধ্যতামূলক নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 16,
    type: "single",
    difficulty: "easy",
    topic: "Hund's Rule",
    question: "Molecular orbital-এ electron filling-এর ক্ষেত্রে Hund's rule কী নির্দেশ করে?",
    options: [
      "ইলেকট্রন প্রথমে সর্বোচ্চ শক্তির orbital-এ বসে",
      "সমশক্তির orbital-এ electron-গুলো প্রথমে এককভাবে সমান্তরাল spin-সহ বসে",
      "সব electron প্রথমে জোড়া হয়ে বসে",
      "কোনো নিয়ম অনুসরণ করা হয় না"
    ],
    correctAnswer: 1,
    explanation: "Hund's rule অনুযায়ী, সমশক্তির orbital-এ pairing-এর আগে electron-গুলো এককভাবে সমান্তরাল spin-সহ অবস্থান করে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 17,
    type: "single",
    difficulty: "easy",
    topic: "Pauli Exclusion Principle",
    question: "Pauli exclusion principle অনুযায়ী একটি molecular orbital-এ সর্বোচ্চ কয়টি electron থাকতে পারে?",
    options: ["১টি", "২টি", "৩টি", "৪টি"],
    correctAnswer: 1,
    explanation: "একটি orbital-এ সর্বোচ্চ দুইটি electron থাকতে পারে এবং তাদের spin বিপরীত হতে হবে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 18,
    type: "single",
    difficulty: "easy",
    topic: "Bond Order",
    question: "Molecular orbital theory অনুযায়ী bond order-এর সূত্র কোনটি?",
    options: [
      "(Nᵦ + Nₐ) / 2",
      "(Nᵦ − Nₐ) / 2",
      "(Nᵦ × Nₐ) / 2",
      "(Nᵦ − Nₐ) × 2"
    ],
    correctAnswer: 1,
    explanation: "Bond order = (bonding MO-তে electron সংখ্যা − antibonding MO-তে electron সংখ্যা) / 2।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 19,
    type: "multiple",
    difficulty: "moderate",
    topic: "Bond Order",
    question: "Bond order সম্পর্কে সঠিক বক্তব্যগুলো নির্বাচন করো।",
    options: [
      "bond order বাড়লে সাধারণত bond length কমে",
      "bond order শূন্য হলে সাধারণত স্থিতিশীল bond থাকে না",
      "bond order ভগ্নাংশ হতে পারে",
      "bond order ঋণাত্মক হতে পারে"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Bond order বাড়লে bond strength সাধারণত বাড়ে এবং bond length কমে। Bond order ভগ্নাংশ হতে পারে; ঋণাত্মক bond order-কে সাধারণত স্থিতিশীল bond হিসেবে ধরা হয় না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 20,
    type: "single",
    difficulty: "easy",
    topic: "Bond Order Calculation",
    question: "একটি molecular orbital configuration-এ bonding orbital-এ ৮টি এবং antibonding orbital-এ ৪টি electron থাকলে bond order কত?",
    options: ["২", "৩", "৪", "৬"],
    correctAnswer: 0,
    explanation: "Bond order = (8 − 4) / 2 = 2।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 21,
    type: "single",
    difficulty: "easy",
    topic: "Bond Order and Stability",
    question: "Molecular Orbital Theory অনুযায়ী কোন bond order-এ net bond থাকে না?",
    options: ["0", "0.5", "1", "1.5"],
    correctAnswer: 0,
    explanation: "Bond order = 0 হলে bonding ও antibonding electron-এর প্রভাব পরস্পরকে বাতিল করে; তাই net bond থাকে না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 22,
    type: "single",
    difficulty: "moderate",
    topic: "Magnetic Properties",
    question: "নিচের কোন অণুটি paramagnetic?",
    options: ["N₂", "O₂", "H₂", "He₂"],
    correctAnswer: 1,
    explanation: "O₂-এর π*2p molecular orbitals-এ দুটি unpaired electron থাকে, তাই O₂ paramagnetic।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 23,
    type: "single",
    difficulty: "moderate",
    topic: "Magnetic Properties",
    question: "নিচের কোন অণুটি diamagnetic?",
    options: ["B₂", "O₂", "N₂", "O₂⁻"],
    correctAnswer: 2,
    explanation: "N₂-এর সব electron paired থাকে, তাই এটি diamagnetic।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 24,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order and Stability",
    question: "Molecular orbital theory অনুযায়ী He₂ অণুটি অস্থিতিশীল কেন?",
    options: [
      "এতে কোনো electron নেই",
      "এতে bonding orbital-এ electron নেই",
      "bonding ও antibonding orbital-এ সমান সংখ্যক electron আছে",
      "এতে শুধু antibonding orbital আছে"
    ],
    correctAnswer: 2,
    explanation: "He₂-এ σ1s-এ ২টি এবং σ*1s-এ ২টি electron থাকে। Bond order = (2 − 2) / 2 = 0, তাই net bond গঠিত হয় না।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 25,
    type: "multiple",
    difficulty: "easy",
    topic: "Homonuclear and Heteronuclear Diatomic Molecules",
    question: "নিচের কোনগুলো homonuclear diatomic molecule?",
    options: ["O₂", "N₂", "CO", "H₂"],
    correctAnswer: [0, 1, 3],
    explanation: "Homonuclear diatomic molecule-এ একই মৌলের দুটি atom থাকে। CO-তে দুটি ভিন্ন মৌলের atom আছে।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 26,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order Calculation",
    question: "O₂⁺ আয়নের bond order কত?",
    options: ["2.0", "2.5", "3.0", "1.5"],
    correctAnswer: 1,
    explanation: "O₂⁺ থেকে O₂-এর একটি electron সরানো হয় antibonding π*2p orbital থেকে; bond order 2 থেকে বেড়ে 2.5 হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 27,
    type: "single",
    difficulty: "easy",
    topic: "Bond Order Calculation",
    question: "N₂ অণুর bond order কত?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "N₂-এর MO configuration অনুযায়ী bond order = 3।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 28,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order Calculation",
    question: "N₂⁺ আয়নের bond order কত?",
    options: ["2.5", "3", "2", "3.5"],
    correctAnswer: 0,
    explanation: "N₂ থেকে একটি electron bonding σ2p orbital থেকে সরালে bond order 3 থেকে 2.5 হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 29,
    type: "multiple",
    difficulty: "hard",
    topic: "Magnetic Properties",
    question: "নিচের কোন অণু বা আয়নগুলো paramagnetic?",
    options: ["O₂", "B₂", "O₂⁻", "N₂"],
    correctAnswer: [0, 1, 2],
    explanation: "O₂ ও B₂-তে দুটি করে unpaired electron এবং O₂⁻-এ একটি unpaired electron থাকে। N₂-এ সব electron paired।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 30,
    type: "single",
    difficulty: "hard",
    topic: "Bond Length and Bond Order",
    question: "O₂, O₂⁺ এবং O₂⁻-এর bond length-এর সঠিক ক্রম কোনটি?",
    options: [
      "O₂⁺ < O₂ < O₂⁻",
      "O₂⁻ < O₂ < O₂⁺",
      "O₂ < O₂⁺ < O₂⁻",
      "O₂⁺ < O₂⁻ < O₂"
    ],
    correctAnswer: 0,
    explanation: "Bond order: O₂⁺ = 2.5, O₂ = 2, O₂⁻ = 1.5। Bond order বেশি হলে bond length কম হয়; তাই O₂⁺ < O₂ < O₂⁻।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 31,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order Calculation",
    question: "O₂⁻ আয়নের bond order কত?",
    options: ["1.0", "1.5", "2.0", "2.5"],
    correctAnswer: 1,
    explanation: "O₂⁻-এ O₂-এর তুলনায় একটি অতিরিক্ত electron antibonding π*2p orbital-এ যায়; bond order 2 থেকে 1.5 হয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 32,
    type: "multiple",
    difficulty: "hard",
    topic: "Magnetic Properties",
    question: "নিচের কোন বক্তব্যগুলো সঠিক?",
    options: [
      "B₂ অণুটি paramagnetic",
      "C₂ অণুটি diamagnetic",
      "O₂ অণুটি diamagnetic",
      "N₂⁺ আয়নটি paramagnetic"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "B₂ paramagnetic, C₂ diamagnetic এবং N₂⁺-এ একটি unpaired electron থাকায় এটি paramagnetic। O₂ paramagnetic, diamagnetic নয়।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 33,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order Calculation",
    question: "একটি অণুর bond order 3 এবং bonding MO-তে electron সংখ্যা 10। Antibonding MO-তে electron সংখ্যা কত?",
    options: ["2", "4", "6", "8"],
    correctAnswer: 1,
    explanation: "3 = (10 − Nₐ) / 2; তাই 6 = 10 − Nₐ এবং Nₐ = 4।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 34,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order Calculation",
    question: "Molecular Orbital Theory অনুযায়ী Li₂ এবং Li₂⁻-এর bond order কত? (Li-এর atomic number 3)",
    options: [
      "Li₂ = 0.5; Li₂⁻ = 1",
      "Li₂ = 1; Li₂⁻ = 0.5",
      "Li₂ = 0; Li₂⁻ = 1",
      "Li₂ = 1; Li₂⁻ = 0"
    ],
    correctAnswer: 1,
    explanation: "Li₂-এর bond order 1 এবং Li₂⁻-এর bond order 1.5 নয়, 0.5।",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 35,
    type: "single",
    difficulty: "moderate",
    topic: "Bond Order Comparison",
    question: "নিচের কোন species-এর bond order সর্বোচ্চ?",
    options: ["O₂⁺", "N₂⁺", "O₂⁻", "N₂"],
    correctAnswer: 3,
    explanation: "N₂-এর bond order 3; O₂⁺ ও N₂⁺-এর 2.5 এবং O₂⁻-এর 1.5। তাই N₂-এর bond order সর্বোচ্চ।",
    marks: 4,
    negativeMarks: 1
  }
];

export default CBT3_QUESTION_BANK;
