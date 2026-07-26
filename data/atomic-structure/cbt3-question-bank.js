const questions = [
  {
    id: 1,
    type: "single",
    question: "ক্যাথোড রশ্মি সম্পর্কে নিচের কোন বক্তব্যটি সঠিক?",
    options: [
      "ক্যাথোড রশ্মি ধনাত্মক আধানযুক্ত কণার স্রোত।",
      "ক্যাথোড রশ্মি বৈদ্যুতিক ও চৌম্বক ক্ষেত্রে বিচ্যুত হয় না।",
      "ক্যাথোড রশ্মি সকল গ্যাস ও সকল ক্যাথোডের ক্ষেত্রে একই প্রকৃতির হয়।",
      "ক্যাথোড রশ্মি শুধুমাত্র হাইড্রোজেন গ্যাসে উৎপন্ন হয়।"
    ],
    correctAnswer: 2,
    explanation: "ক্যাথোড রশ্মি ইলেকট্রনের স্রোত। গ্যাস বা ক্যাথোডের পদার্থ পরিবর্তন করলেও এর প্রকৃতি অপরিবর্তিত থাকে।",
    difficulty: "easy",
    source: "NCERT/WBCHSE"
  },
  {
    id: 2,
    type: "single",
    question: "একজন ছাত্র ক্যাথোড রশ্মি নলের মধ্যে বৈদ্যুতিক ক্ষেত্র প্রয়োগ করল। রশ্মিটি ধনাত্মক পাতের দিকে বেঁকে গেল। এর থেকে কী সিদ্ধান্ত নেওয়া যায়?",
    options: [
      "রশ্মিতে প্রোটন রয়েছে।",
      "রশ্মিতে নিরপেক্ষ কণা রয়েছে।",
      "রশ্মিতে ঋণাত্মক আধানযুক্ত কণা রয়েছে।",
      "রশ্মিটি তড়িৎচুম্বকীয় তরঙ্গ।"
    ],
    correctAnswer: 2,
    explanation: "ধনাত্মক পাতের দিকে আকৃষ্ট হওয়া মানে কণাগুলি ঋণাত্মক আধানযুক্ত, অর্থাৎ ইলেকট্রন।",
    difficulty: "medium",
    source: "NEET"
  },
  {
    id: 3,
    type: "multiple",
    question: "অ্যানোড রশ্মি (Canal Rays) সম্পর্কে নিচের কোন কোন বক্তব্য সঠিক?",
    options: [
      "এগুলি ধনাত্মক আধানযুক্ত কণা।",
      "e/m মান সব গ্যাসের জন্য একই।",
      "গ্যাস পরিবর্তন করলে কণার প্রকৃতি পরিবর্তিত হয়।",
      "এগুলি ইলেকট্রনের স্রোত।"
    ],
    correctAnswer: [0, 2],
    explanation: "অ্যানোড রশ্মি ধনাত্মক আয়নের স্রোত। ব্যবহৃত গ্যাস পরিবর্তন করলে কণার প্রকৃতি ও e/m মান পরিবর্তিত হয়।",
    difficulty: "hard",
    source: "JEE"
  },
  {
    id: 4,
    type: "single",
    question: "রাদারফোর্ডের α-কণা বিচ্ছুরণ পরীক্ষায় অধিকাংশ α-কণা সোজা চলে যায়। এর কারণ—",
    options: [
      "নিউক্লিয়াসের আয়তন খুব বড়।",
      "পরমাণুর অধিকাংশ অংশ ফাঁকা।",
      "ইলেকট্রনের ভর বেশি।",
      "α-কণা নিরপেক্ষ।"
    ],
    correctAnswer: 1,
    explanation: "পরমাণুর অধিকাংশ স্থান ফাঁকা হওয়ায় অধিকাংশ α-কণা কোনো বাধা ছাড়াই সোজা চলে যায়।",
    difficulty: "easy",
    source: "WBCHSE"
  },
  {
    id: 5,
    type: "single",
    question: "একটি α-কণার প্রায় ১টির মধ্যে ১০,০০০টি বড় কোণে বিচ্যুত হয়। যদি 5 × 10⁷ α-কণা ব্যবহার করা হয়, তবে আনুমানিক কতটি বড় কোণে বিচ্যুত হবে?",
    options: [
      "500",
      "5000",
      "50",
      "50000"
    ],
    correctAnswer: 1,
    explanation: "(5×10⁷)/(10⁴)=5×10³=5000",
    difficulty: "medium",
    source: "NEET"
  },
  {
    id: 6,
    type: "single",
    question: "একটি গতিশীল ইলেকট্রনের গতিবেগ দ্বিগুণ করা হলে তার দ্য ব্রগলি (de Broglie) তরঙ্গদৈর্ঘ্যের কী পরিবর্তন হবে?",
    options: [
      "একই থাকবে",
      "চার গুণ হবে",
      "অর্ধেক হয়ে যাবে",
      "দ্বিগুণ হবে"
    ],
    correctAnswer: 2,
    explanation: "de Broglie সমীকরণ অনুযায়ী λ = h/mv। ভর অপরিবর্তিত থাকলে বেগ দ্বিগুণ হলে তরঙ্গদৈর্ঘ্য অর্ধেক হয়ে যায়।",
    difficulty: "medium"
  },
  {
    id: 7,
    type: "single",
    question: "হাইজেনবার্গের অনিশ্চয়তা নীতি অনুযায়ী, একটি ইলেকট্রনের অবস্থানের অনিশ্চয়তা শূন্য হলে তার ভরবেগের অনিশ্চয়তা (Δp) কত হবে?",
    options: [
      "h/4π",
      "শূন্য",
      "অসীম",
      "স্থির মান"
    ],
    correctAnswer: 2,
    explanation: "হাইজেনবার্গের অনিশ্চয়তা নীতি অনুযায়ী Δx·Δp ≥ h/4π। যদি Δx → 0 হয়, তবে Δp → ∞ হবে।",
    difficulty: "hard"
  },
  {
    id: 8,
    type: "single",
    question: "n = 4 এবং l = 2 কোয়ান্টাম সংখ্যা বিশিষ্ট কক্ষকটি (Orbital) কোনটি?",
    options: [
      "4d",
      "4s",
      "4f",
      "4p"
    ],
    correctAnswer: 0,
    explanation: "l = 2 হলে d-অরবিটাল নির্দেশ করে এবং n = 4 হলে সেটি 4d অরবিটাল।",
    difficulty: "easy"
  },
  {
    id: 9,
    type: "single",
    question: "3p কক্ষকের জন্য রেডিয়াল নোড (Radial Nodes) এর সংখ্যা কত?",
    options: [
      "3",
      "1",
      "2",
      "0"
    ],
    correctAnswer: 1,
    explanation: "Radial Node = n − l − 1 = 3 − 1 − 1 = 1।",
    difficulty: "medium"
  },
  {
    id: 10,
    type: "single",
    question: "পাউলির অপবর্জন নীতি (Pauli's Exclusion Principle) অনুযায়ী নিচের কোনটি সম্ভব নয়?",
    options: [
      "একটি কক্ষকে তিনটি ইলেকট্রন থাকা",
      "হাইড্রোজেন পরমাণুর জন্য চারটি কোয়ান্টাম সংখ্যা থাকা",
      "একই কক্ষকে বিপরীত স্পিনের দুটি ইলেকট্রন থাকা",
      "একটি উপকক্ষে ছয়টি ইলেকট্রন থাকা"
    ],
    correctAnswer: 0,
    explanation: "একটি অরবিটালে সর্বাধিক দুটি বিপরীত স্পিনের ইলেকট্রন থাকতে পারে। তিনটি ইলেকট্রন থাকা অসম্ভব।",
    difficulty: "medium"
  },
  {
    id: 11,
    type: "single",
    question: "আউফবাউ (Aufbau) নীতি অনুযায়ী ইলেকট্রন প্রবেশের সঠিক ক্রম কোনটি?",
    options: [
      "3p < 3d < 4s",
      "4s < 3d < 4p",
      "3d < 4s < 4p",
      "4s < 4p < 3d"
    ],
    correctAnswer: 1,
    explanation: "Aufbau নীতি অনুযায়ী শক্তির ক্রম: 4s < 3d < 4p। তাই ইলেকট্রন প্রথমে 4s, পরে 3d এবং শেষে 4p-তে প্রবেশ করে।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 12,
    type: "single",
    question: "ক্রোমিয়াম (Cr)-এর সঠিক ইলেকট্রন বিন্যাস কোনটি?",
    options: [
      "[Ar] 3d⁵ 4s¹",
      "[Ar] 3d⁴ 4s²",
      "[Ar] 4s² 4p⁴",
      "[Ar] 3d⁶"
    ],
    correctAnswer: 0,
    explanation: "Cr অর্ধপূর্ণ (3d⁵) উপকক্ষের অতিরিক্ত স্থায়িত্বের জন্য [Ar] 3d⁵ 4s¹ বিন্যাস গ্রহণ করে।",
    difficulty: "hard",
    topic: "Atomic Structure"
  },
  {
    id: 13,
    type: "single",
    question: "হুন্ডের নিয়ম (Hund's Rule) লঙ্ঘন করা হয়েছে কোন ক্ষেত্রে?",
    options: [
      "বিপরীত স্পিনের ইলেকট্রন একই কক্ষকে থাকলে",
      "2s পূর্ণ হওয়ার পর 2p-তে ইলেকট্রন গেলে",
      "সমশক্তির কক্ষকগুলিতে এককভাবে প্রবেশের আগে জোড়বদ্ধ হলে",
      "s-কক্ষকে দুটি ইলেকট্রন থাকলে"
    ],
    correctAnswer: 2,
    explanation: "Hund-এর নিয়ম অনুযায়ী সমশক্তির কক্ষকগুলিতে প্রথমে এক একটি করে সমান্তরাল স্পিনে ইলেকট্রন প্রবেশ করবে, তারপর জোড়বদ্ধ হবে।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 14,
    type: "single",
    question: "4f ইলেকট্রনের জন্য নিচের কোন কোয়ান্টাম সংখ্যার সেটটি সঠিক?",
    options: [
      "n=4, l=4, m=+1, s=+1/2",
      "n=4, l=3, m=+1, s=+1/2",
      "n=4, l=2, m=+1, s=+1/2",
      "n=3, l=3, m=0, s=−1/2"
    ],
    correctAnswer: 1,
    explanation: "4f অরবিটালের জন্য n=4 এবং l=3 হয়। m-এর মান −3 থেকে +3 এবং spin ±1/2 হতে পারে।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 15,
    type: "single",
    question: "λ = 600 nm তরঙ্গদৈর্ঘ্যের একটি ফোটনের শক্তি কত? (h = 6.63×10⁻³⁴ Js, c = 3×10⁸ m/s)",
    options: [
      "1.1×10⁻¹⁹ J",
      "4.98×10⁻¹⁹ J",
      "3.315×10⁻²⁷ J",
      "3.315×10⁻¹⁹ J"
    ],
    correctAnswer: 3,
    explanation: "E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(600×10⁻⁹) = 3.315×10⁻¹⁹ J।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 16,
    type: "single",
    question: "নিচের কোনটি pz কক্ষকের সঠিক আকৃতি নির্দেশ করে?",
    options: [
      "ডাম্ববেল আকৃতি (Dumbbell) Z-অক্ষ বরাবর",
      "গোলকাকার (Spherical)",
      "ডাবল ডাম্ববেল (Double dumbbell)",
      "ডোনাট আকৃতি (Doughnut shape)"
    ],
    correctAnswer: 0,
    explanation: "pz অরবিটাল দুটি বিপরীতমুখী লোব নিয়ে Z-অক্ষ বরাবর বিস্তৃত থাকে এবং এর আকৃতি ডাম্ববেলের মতো।",
    difficulty: "easy",
    topic: "Atomic Orbitals"
  },
  {
    id: 17,
    type: "single",
    question: "হাইড্রোজেন পরমাণুর n = 4 স্তর থেকে n = 2 স্তরে ইলেকট্রন স্থানান্তরিত হলে নির্গত শক্তি কত?",
    options: [
      "2.55 eV",
      "3.40 eV",
      "10.2 eV",
      "12.75 eV"
    ],
    correctAnswer: 0,
    explanation: "E₄ = –0.85 eV এবং E₂ = –3.4 eV। তাই নির্গত শক্তি = 3.4 – 0.85 = 2.55 eV।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 18,
    type: "single",
    question: "বোরের পরমাণু মডেলের প্রধান সীমাবদ্ধতা কোনটি?",
    options: [
      "নিউক্লিয়াসের অস্তিত্ব ব্যাখ্যা করতে পারেনি",
      "বহু-ইলেকট্রন পরমাণুর বর্ণালী ব্যাখ্যা করতে পারেনি",
      "ইলেকট্রনের আধান ব্যাখ্যা করতে পারেনি",
      "প্রোটনের অস্তিত্ব ব্যাখ্যা করতে পারেনি"
    ],
    correctAnswer: 1,
    explanation: "বোরের মডেল শুধুমাত্র হাইড্রোজেন ও হাইড্রোজেন সদৃশ আয়নের জন্য সফল।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 19,
    type: "single",
    question: "de Broglie-এর মতে চলমান ইলেকট্রনের সঙ্গে কী যুক্ত থাকে?",
    options: [
      "শুধুমাত্র কণাধর্ম",
      "শুধুমাত্র তরঙ্গধর্ম",
      "কণা ও তরঙ্গ উভয় ধর্ম",
      "কোনোটিই নয়"
    ],
    correctAnswer: 2,
    explanation: "de Broglie পদার্থের তরঙ্গধর্ম (Matter Wave) প্রস্তাব করেন।",
    difficulty: "easy",
    topic: "Atomic Structure"
  },
  {
    id: 20,
    type: "single",
    question: "কোনো কণার ভর অপরিবর্তিত রেখে বেগ দ্বিগুণ করলে de Broglie তরঙ্গদৈর্ঘ্য কী হবে?",
    options: [
      "দ্বিগুণ হবে",
      "চারগুণ হবে",
      "অর্ধেক হবে",
      "অপরিবর্তিত থাকবে"
    ],
    correctAnswer: 2,
    explanation: "λ = h/mv, তাই বেগ দ্বিগুণ হলে λ অর্ধেক হয়ে যায়।",
    difficulty: "easy",
    topic: "Atomic Structure"
  },
  {
    id: 21,
    type: "single",
    question: "Heisenberg-এর অনিশ্চয়তা নীতি অনুযায়ী নিচের কোন বক্তব্যটি সঠিক?",
    options: [
      "অবস্থান ও ভরবেগ একই সঙ্গে নির্ভুলভাবে জানা যায়",
      "শুধু অবস্থান নির্ণয় করা যায়",
      "অবস্থান ও ভরবেগ একই সঙ্গে নির্ভুলভাবে জানা যায় না",
      "শুধু ভরবেগ নির্ণয় করা যায়"
    ],
    correctAnswer: 2,
    explanation: "Δx·Δp ≥ h/4π — অবস্থান ও ভরবেগ একসাথে নির্ভুলভাবে জানা সম্ভব নয়।",
    difficulty: "medium",
    topic: "Atomic Structure"
  },
  {
    id: 22,
    type: "single",
    question: "Hydrogen atom-এর electron যদি n = 3 থেকে n = 2 স্তরে স্থানান্তরিত হয়, তবে নির্গত বর্ণরেখাটি কোন series-এর অন্তর্গত?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 1,
    explanation: "Balmer series-এর সব transition-এর final level হলো n = 2। তাই n = 3 → n = 2 transition Balmer series-এর প্রথম রেখা (Hα)।",
    difficulty: "medium",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 23,
    type: "single",
    question: "Chromium (Z = 24)-এর সঠিক electronic configuration কোনটি?",
    options: [
      "[Ar] 3d⁴ 4s²",
      "[Ar] 3d⁵ 4s¹",
      "[Ar] 3d⁶ 4s⁰",
      "[Ar] 3d³ 4s³"
    ],
    correctAnswer: 1,
    explanation: "Chromium half-filled d-subshell (3d⁵) অধিক স্থিতিশীল হওয়ায় এর প্রকৃত electronic configuration হলো [Ar] 3d⁵ 4s¹।",
    difficulty: "hard",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 1
  }
];
  [
  { 
    id: 24,
    type: "single",
    question: "Hydrogen atom-এর electron যদি n = 3 থেকে n = 2 স্তরে স্থানান্তরিত হয়, তবে নির্গত বর্ণরেখাটি কোন series-এর অন্তর্গত?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 1,
    explanation:
      "Balmer series-এর সব transition-এর final level হলো n = 2। তাই n = 3 → n = 2 transition Balmer series-এর প্রথম রেখা (Hα)।",
    difficulty: "medium",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 25,
    type: "single",
    question: "Chromium (Z = 24)-এর সঠিক electronic configuration কোনটি?",
    options: [
      "[Ar] 3d⁴ 4s²",
      "[Ar] 3d⁵ 4s¹",
      "[Ar] 3d⁶ 4s⁰",
      "[Ar] 3d³ 4s³"
    ],
    correctAnswer: 1,
    explanation:
      "Chromium half-filled d-subshell (3d⁵) অধিক স্থিতিশীল হওয়ায় এর প্রকৃত electronic configuration হলো [Ar] 3d⁵ 4s¹।",
    difficulty: "hard",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 1
  }
]
export default CBT3_QUESTION_BANK;