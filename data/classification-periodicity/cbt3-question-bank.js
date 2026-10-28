const questions = [
  {
    id: "cbt3-q1",
    type: "single",
    question: "নিউল্যান্ডসের অক্টেভ সূত্র ক্যালসিয়ামের পরে ব্যর্থ হওয়ার প্রধান কারণ কোনটি?",
    options: [
      "হালকা মৌলগুলির ক্ষেত্রে ধর্মের পুনরাবৃত্তি ঘটে না",
      "ভারী মৌলগুলির ক্ষেত্রে নবম মৌলটির ধর্ম প্রথম মৌলের মতো হয় না",
      "ক্যালসিয়ামের পরে ট্রানজিশন মৌল আসায় ধর্মের পুনরাবৃত্তি আর নির্ভরযোগ্য থাকে না",
      "নিউল্যান্ডস শুধুমাত্র হালকা মৌল তৈরি করতে পেরেছিলেন"
    ],
    correctAnswer: 2,
    explanation: "অক্টেভ সূত্রে প্রতি অষ্টম মৌলে ধর্মের পুনরাবৃত্তি আশা করা হয়েছিল। ক্যালসিয়ামের পরের মৌলগুলির ক্ষেত্রে এই নিয়ম নির্ভরযোগ্যভাবে কাজ করেনি।",
    difficulty: "medium",
    topic: "Historical Periodic Classification",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q2",
    type: "single",
    question: "ডোবেরাইনারের ট্রায়াডে তিনটি মৌলের পারমাণবিক ভর 7, x ও 39 হলে x-এর আনুমানিক মান কত?",
    options: ["14", "23", "46", "32"],
    correctAnswer: 1,
    explanation: "মাঝের মৌলের ভর প্রায় অন্য দুটি মৌলের ভরের গড়। x = (7 + 39) / 2 = 23।",
    difficulty: "easy",
    topic: "Dobereiner's Triads",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q3",
    type: "single",
    question: "মেন্ডেলিফের ইকা-অ্যালুমিনিয়াম বর্তমানে কোন মৌল নামে পরিচিত?",
    options: [
      "স্ক্যান্ডিয়াম (Sc)",
      "জার্মেনিয়াম (Ge)",
      "গ্যালিয়াম (Ga)",
      "টেকনেশিয়াম (Tc)"
    ],
    correctAnswer: 2,
    explanation: "মেন্ডেলিফের ইকা-অ্যালুমিনিয়ামের পূর্বাভাসের সঙ্গে পরে আবিষ্কৃত গ্যালিয়ামের ধর্মের মিল পাওয়া যায়।",
    difficulty: "easy",
    topic: "Mendeleev's Periodic Table",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q4",
    type: "single",
    question: "মেন্ডেলিফের পর্যায় সারণির একটি গুরুত্বপূর্ণ অসঙ্গতি কোনটি?",
    options: [
      "সমান পারমাণবিক ভরের সব মৌলকে একই গ্রুপে রাখা",
      "কিছু ক্ষেত্রে বেশি পারমাণবিক ভরের মৌলকে কম ভরের মৌলের আগে রাখা",
      "নিষ্ক্রিয় গ্যাসগুলিকে আবিষ্কারের পরেও সারণিতে স্থান না দেওয়া",
      "কোনো অধাতুকে সারণিতে স্থান না দেওয়া"
    ],
    correctAnswer: 1,
    explanation: "মৌলের ধর্মের মিল বজায় রাখতে মেন্ডেলিফ কিছু ক্ষেত্রে পারমাণবিক ভরের ক্রম থেকে সরে এসেছিলেন। যেমন, Ar-কে K-এর আগে রাখা হয়েছিল।",
    difficulty: "medium",
    topic: "Mendeleev's Periodic Table",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q5",
    type: "single",
    question: "আধুনিক পর্যায় সূত্রের ভিত্তি প্রতিষ্ঠায় কোন বিজ্ঞানীর X-ray spectroscopy পরীক্ষা গুরুত্বপূর্ণ ছিল?",
    options: [
      "নীলস বোর",
      "হেনরি মোজলে",
      "আর্নেস্ট রাদারফোর্ড",
      "লথার মেয়ার"
    ],
    correctAnswer: 1,
    explanation: "হেনরি মোজলে 1913 সালে X-ray বর্ণালির গবেষণার মাধ্যমে পারমাণবিক সংখ্যা ও মৌলের পরিচয়ের সম্পর্ক প্রতিষ্ঠায় গুরুত্বপূর্ণ ভূমিকা রাখেন।",
    difficulty: "easy",
    topic: "Modern Periodic Law",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q6",
    type: "single",
    question: "আধুনিক পর্যায় সারণির ষষ্ঠ পর্যায়ে মোট কতটি মৌল রয়েছে?",
    options: ["18", "8", "32", "14"],
    correctAnswer: 2,
    explanation: "ষষ্ঠ পর্যায়ে 6s, 4f, 5d ও 6p উপস্তর পূর্ণ হয়। মোট মৌল = 2 + 14 + 10 + 6 = 32।",
    difficulty: "easy",
    topic: "Modern Periodic Table",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q7",
    type: "single",
    question: "ইলেকট্রন বিন্যাস [Kr] 4d¹⁰ 5s¹-যুক্ত মৌলটি কোন ব্লকের অন্তর্গত?",
    options: ["s-ব্লক", "p-ব্লক", "d-ব্লক", "f-ব্লক"],
    correctAnswer: 2,
    explanation: "এটি Ag-এর ইলেকট্রন বিন্যাস। মৌলটি d-ব্লকের অন্তর্গত।",
    difficulty: "medium",
    topic: "Classification into Blocks",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q8",
    type: "single",
    question: "অ্যাক্টিনাইড সারি পর্যায় সারণির কোন পর্যায়ের সঙ্গে সম্পর্কিত?",
    options: [
      "গ্রুপ 3, পর্যায় 6",
      "গ্রুপ 3, পর্যায় 7",
      "গ্রুপ 4, পর্যায় 7",
      "গ্রুপ 2, পর্যায় 6"
    ],
    correctAnswer: 1,
    explanation: "অ্যাক্টিনাইডগুলি সপ্তম পর্যায়ের f-ব্লক সিরিজ। প্রচলিত দীর্ঘ পর্যায় সারণিতে এদের গ্রুপ 3-এর সঙ্গে সম্পর্কিত করে দেখানো হয়।",
    difficulty: "medium",
    topic: "Actinides",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q9",
    type: "single",
    question: "একটি d-ব্লক মৌলের বহিঃস্থ ইলেকট্রন বিন্যাস (n−1)d⁵ ns¹ হলে তার গ্রুপ নম্বর কত?",
    options: ["5", "6", "11", "15"],
    correctAnswer: 1,
    explanation: "d-ব্লকের ক্ষেত্রে গ্রুপ নম্বর সাধারণত (n−1)d ও ns ইলেকট্রনের মোট সংখ্যা। এখানে 5 + 1 = 6।",
    difficulty: "medium",
    topic: "Outer Electronic Configuration",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q10",
    type: "single",
    question: "বহিঃস্থ ইলেকট্রন বিন্যাস ns² np⁴ হলে মৌলটি কোন গ্রুপের?",
    options: ["গ্রুপ 14", "গ্রুপ 15", "গ্রুপ 16", "গ্রুপ 17"],
    correctAnswer: 2,
    explanation: "p-ব্লকের ক্ষেত্রে এই বিন্যাসে মোট বহিঃস্থ ইলেকট্রন 2 + 4 = 6। তাই মৌলটি গ্রুপ 16-এর।",
    difficulty: "easy",
    topic: "Outer Electronic Configuration",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q11",
    type: "single",
    question: "পারমাণবিক সংখ্যা 29-যুক্ত মৌলটির পর্যায় ও গ্রুপ কোনটি?",
    options: [
      "পর্যায় 4, গ্রুপ 11",
      "পর্যায় 4, গ্রুপ 1",
      "পর্যায় 3, গ্রুপ 11",
      "পর্যায় 4, গ্রুপ 2"
    ],
    correctAnswer: 0,
    explanation: "Z = 29 হলো Cu। এর ইলেকট্রন বিন্যাস [Ar] 3d¹⁰ 4s¹। সর্বোচ্চ প্রধান কোয়ান্টাম সংখ্যা 4 এবং গ্রুপ নম্বর 11।",
    difficulty: "medium",
    topic: "Determination of Position",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q12",
    type: "single",
    question: "X³⁺ আয়নের ইলেকট্রন বিন্যাস [Ar] 3d⁵ হলে নিরপেক্ষ X মৌলটির পর্যায় ও গ্রুপ কোনটি?",
    options: [
      "পর্যায় 4, গ্রুপ 7",
      "পর্যায় 4, গ্রুপ 8",
      "পর্যায় 3, গ্রুপ 5",
      "পর্যায় 4, গ্রুপ 3"
    ],
    correctAnswer: 1,
    explanation: "X³⁺-এ 23টি ইলেকট্রন। নিরপেক্ষ X-এ 26টি ইলেকট্রন, তাই X হলো Fe। এর অবস্থান পর্যায় 4, গ্রুপ 8।",
    difficulty: "hard",
    topic: "Determination of Position",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q13",
    type: "single",
    question: "পুরোনো অস্থায়ী IUPAC পদ্ধতিতে পারমাণবিক সংখ্যা 114-এর নাম ও প্রতীক কী ছিল?",
    options: [
      "Ununbium (Uub)",
      "Ununtrium (Uut)",
      "Ununquadium (Uuq)",
      "Ununhexium (Uuh)"
    ],
    correctAnswer: 2,
    explanation: "পুরোনো অস্থায়ী নামকরণে 1 = un, 1 = un এবং 4 = quad; তাই Ununquadium (Uuq)। বর্তমানে মৌলটির নাম ফ্লেরোভিয়াম (Fl)।",
    difficulty: "medium",
    topic: "IUPAC Nomenclature",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q14",
    type: "single",
    question: "পুরোনো অস্থায়ী IUPAC নাম Unnilpentium কোন পারমাণবিক সংখ্যার জন্য ব্যবহৃত হয়েছিল?",
    options: ["105", "150", "115", "106"],
    correctAnswer: 0,
    explanation: "Un = 1, nil = 0 এবং pent = 5; তাই পারমাণবিক সংখ্যা 105। এই মৌলটির বর্তমান নাম ডুবনিয়াম (Db)।",
    difficulty: "medium",
    topic: "IUPAC Nomenclature",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q15",
    type: "single",
    question: "N, O ও F-এর পারমাণবিক ব্যাসার্ধের সঠিক ঊর্ধ্বক্রম কোনটি?",
    options: [
      "O < F < N",
      "F < O < N",
      "N < O < F",
      "F < N < O"
    ],
    correctAnswer: 1,
    explanation: "একই পর্যায়ে বাম থেকে ডানে কার্যকর নিউক্লীয় আকর্ষণ বাড়ে এবং পারমাণবিক ব্যাসার্ধ সাধারণত কমে। তাই F < O < N।",
    difficulty: "easy",
    topic: "Atomic Radius",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q16",
    type: "single",
    question: "Na⁺, Mg²⁺, F⁻ ও O²⁻-এর ব্যাসার্ধের সঠিক ঊর্ধ্বক্রম কোনটি?",
    options: [
      "O²⁻ < F⁻ < Na⁺ < Mg²⁺",
      "Mg²⁺ < Na⁺ < F⁻ < O²⁻",
      "F⁻ < O²⁻ < Mg²⁺ < Na⁺",
      "Na⁺ < Mg²⁺ < O²⁻ < F⁻"
    ],
    correctAnswer: 1,
    explanation: "এই চারটি আয়নই সম-ইলেকট্রনীয় এবং প্রত্যেকটির 10টি ইলেকট্রন রয়েছে। প্রোটন সংখ্যা যত বেশি, ইলেকট্রনের ওপর আকর্ষণ তত বেশি ও ব্যাসার্ধ তত ছোট।",
    difficulty: "medium",
    topic: "Ionic Radius",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q17",
    type: "single",
    question: "B, Be, C, O ও N-এর প্রথম আয়নন এনথালপির সঠিক ঊর্ধ্বক্রম কোনটি?",
    options: [
      "B < Be < C < N < O",
      "B < Be < C < O < N",
      "Be < B < C < N < O",
      "B < C < Be < O < N"
    ],
    correctAnswer: 1,
    explanation: "Be-এর পূর্ণ 2s² উপস্তর এবং N-এর অর্ধপূর্ণ 2p³ উপস্তর তুলনামূলক স্থিতিশীল। তাই Be-এর আয়নন এনথালপি B-এর চেয়ে এবং N-এরটি O-এর চেয়ে বেশি।",
    difficulty: "hard",
    topic: "Ionization Enthalpy",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q18",
    type: "single",
    question: "F, Cl, Br ও I-এর মধ্যে কার ইলেকট্রন গ্রহণ এনথালপি সবচেয়ে বেশি ঋণাত্মক?",
    options: ["F", "Cl", "Br", "I"],
    correctAnswer: 1,
    explanation: "Cl-এর ইলেকট্রন গ্রহণ এনথালপি F-এর চেয়ে বেশি ঋণাত্মক। F-এর ছোট 2p উপস্তরে আগত ইলেকট্রনের সঙ্গে বিকর্ষণ তুলনামূলক বেশি।",
    difficulty: "medium",
    topic: "Electron Gain Enthalpy",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q19",
    type: "single",
    question: "পলিং স্কেল অনুযায়ী F, O, N ও C-এর তড়িৎঋণাত্মকতার সঠিক ক্রম কোনটি?",
    options: [
      "F > O > N > C",
      "F > N > O > C",
      "O > F > N > C",
      "F > O > C > N"
    ],
    correctAnswer: 0,
    explanation: "পলিং স্কেলে আনুমানিক তড়িৎঋণাত্মকতার মান F = 3.98, O = 3.44, N = 3.04 ও C = 2.55। তাই F > O > N > C।",
    difficulty: "easy",
    topic: "Electronegativity",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q20",
    type: "single",
    question: "নিচের কোনটি উভধর্মী অক্সাইড?",
    options: ["Na₂O", "SO₂", "Al₂O₃", "CaO"],
    correctAnswer: 2,
    explanation: "Al₂O₃ অ্যাসিড ও ক্ষার উভয়ের সঙ্গে বিক্রিয়া করতে পারে। Na₂O ও CaO ক্ষারীয় এবং SO₂ অম্লীয় অক্সাইড।",
    difficulty: "easy",
    topic: "Periodic Trends in Oxides",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q21",
    type: "single",
    question: "লিথিয়াম (Li)-এর সঙ্গে কর্ণ সম্পর্ক প্রদর্শন করে কোন মৌল?",
    options: ["Mg", "Al", "Be", "Na"],
    correctAnswer: 0,
    explanation: "দ্বিতীয় পর্যায়ের Li তৃতীয় পর্যায়ের Mg-এর সঙ্গে কর্ণ সম্পর্কে অবস্থিত এবং কয়েকটি রাসায়নিক ধর্মে সাদৃশ্য দেখায়।",
    difficulty: "easy",
    topic: "Diagonal Relationship",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q22",
    type: "single",
    question: "Be ও Al-এর কর্ণ সম্পর্কের একটি গুরুত্বপূর্ণ কারণ কোনটি?",
    options: [
      "তাদের একই ইলেকট্রন বিন্যাস রয়েছে",
      "তাদের আয়নের চার্জ-ব্যাসার্ধ অনুপাত তুলনামূলকভাবে কাছাকাছি",
      "তারা একই গ্রুপে অবস্থিত",
      "তারা উভয়ই তরল ধাতু"
    ],
    correctAnswer: 1,
    explanation: "Be²⁺ ও Al³⁺-এর চার্জ-ব্যাসার্ধ অনুপাত এবং পোলারাইজিং ক্ষমতার সাদৃশ্য তাদের কিছু ধর্মে মিল সৃষ্টি করে।",
    difficulty: "medium",
    topic: "Diagonal Relationship",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q23",
    type: "single",
    question: "হাইড্রোজেনের সঙ্গে হ্যালোজেনের একটি গুরুত্বপূর্ণ সাদৃশ্য কোনটি?",
    options: [
      "দ্বিপারমাণবিক অণু গঠন",
      "এটি একটি ধাতু",
      "এটি সহজেই কেবল ক্যাটায়ন তৈরি করে",
      "জলের সঙ্গে বিক্রিয়ায় হাইড্রোজেন গ্যাস দেয়"
    ],
    correctAnswer: 0,
    explanation: "হাইড্রোজেন H₂ এবং হ্যালোজেনগুলি সাধারণত X₂ ধরনের দ্বিপারমাণবিক অণু গঠন করে।",
    difficulty: "easy",
    topic: "Position of Hydrogen",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q24",
    type: "single",
    question: "নিষ্ক্রিয় গ্যাসের ব্যাসার্ধ একই পর্যায়ের হ্যালোজেনের চেয়ে বড় দেখানোর প্রধান কারণ কী?",
    options: [
      "এদের ক্ষেত্রে সমযোজী ব্যাসার্ধ মাপা হয়",
      "এদের ক্ষেত্রে ভ্যান ডার ওয়ালস ব্যাসার্ধ বিবেচনা করা হয়",
      "এদের অর্বিট্যাল খালি থাকে",
      "এদের প্রোটন সংখ্যা কম"
    ],
    correctAnswer: 1,
    explanation: "নিষ্ক্রিয় গ্যাসের ক্ষেত্রে সাধারণত ভ্যান ডার ওয়ালস ব্যাসার্ধ ব্যবহৃত হয়, যা সমযোজী ব্যাসার্ধের চেয়ে বড় হতে পারে।",
    difficulty: "medium",
    topic: "Atomic Radius of Noble Gases",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: "cbt3-q25",
    type: "single",
    question: "আধুনিক পর্যায় সারণিতে জেনন (Xe)-এর অবস্থান কোথায়?",
    options: [
      "পর্যায় 4, গ্রুপ 18",
      "পর্যায় 5, গ্রুপ 18",
      "পর্যায় 5, গ্রুপ 17",
      "পর্যায় 6, গ্রুপ 18"
    ],
    correctAnswer: 1,
    explanation: "Xe-এর পারমাণবিক সংখ্যা 54 এবং ইলেকট্রন বিন্যাস [Kr] 4d¹⁰ 5s² 5p⁶। তাই এটি পর্যায় 5, গ্রুপ 18-এ অবস্থিত।",
    difficulty: "easy",
    topic: "Determination of Position",
    marks: 4,
    negativeMarks: 1
  }
];
export default questions;