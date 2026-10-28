// Atomic Structure — CBT6 Question Bank
// 58 questions: 32 normalized from the uploaded Bengali quiz + 26 additional questions.
// Single-answer correctAnswer is a zero-based index; multiple-answer correctAnswer is an array of zero-based indexes.
export const questions = [
  {
    "id": 1,
    "type": "single",
    "question": "ক্যাথোড রশ্মি নল নিয়ে পরীক্ষা করে ইলেকট্রন আবিষ্কার করেন এবং তার আধান/ভর (e/m) অনুপাত নির্ণয় করেন কে?",
    "options": [
      "জে. জে. থমসন",
      "আর্নেস্ট রাদারফোর্ড",
      "জেমস চ্যাডউইক",
      "গোল্ডস্টাইন"
    ],
    "correctAnswer": 0,
    "explanation": "১৮৯৭ সালে জে. জে. থমসন ক্যাথোড রশ্মি নলে তড়িৎ ও চৌম্বক ক্ষেত্রের প্রভাব পর্যবেক্ষণ করে ইলেকট্রনের e/m অনুপাত নির্ণয় করেন এবং প্রমাণ করেন এটি সকল পদার্থের একটি সর্বজনীন উপাদান।",
    "difficulty": "easy",
    "topic": "আবিষ্কার",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 2,
    "type": "single",
    "question": "চ্যাডউইক বেরিলিয়াম পাতে আলফা কণা দিয়ে আঘাত করলে যে অতি ভেদনক্ষম বিকিরণ নির্গত হয়, তার ভর প্রায় প্রোটনের সমান হলেও এর তড়িৎ আধান কেমন ছিল?",
    "options": [
      "শূন্য (আধানহীন)",
      "ধনাত্মক",
      "ঋণাত্মক",
      "প্রোটনের দ্বিগুণ ধনাত্মক"
    ],
    "correctAnswer": 0,
    "explanation": "এই কণাটির কোনো আধান ছিল না অথচ ভর প্রোটনের প্রায় সমান — একেই নিউট্রন নামকরণ করা হয় (ভর ≈ ১.৬৭৫×১০⁻²⁷ kg)।",
    "difficulty": "medium",
    "topic": "আবিষ্কার",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 3,
    "type": "single",
    "question": "₁₇Cl-35 এবং ₁₇Cl-37 — এই দুটি পরমাণুর মধ্যে সম্পর্ক কী প্রকৃতির?",
    "options": [
      "আইসোটোপ",
      "আইসোবার",
      "আইসোটোন",
      "আইসোইলেকট্রনিক প্রজাতি"
    ],
    "correctAnswer": 0,
    "explanation": "একই পারমাণবিক সংখ্যা (Z=17) কিন্তু ভিন্ন ভরসংখ্যা (35 ও 37) থাকায় এরা একে অপরের আইসোটোপ — নিউক্লিয়াসে নিউট্রন সংখ্যা ভিন্ন (18 ও 20)।",
    "difficulty": "easy",
    "topic": "পারমাণবিক সংখ্যা / আইসোটোপ",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 4,
    "type": "single",
    "question": "₆C-14 এবং ₇N-14 — এই জোড়াটি কী প্রকৃতির?",
    "options": [
      "আইসোবার",
      "আইসোটোপ",
      "আইসোটোন",
      "একই মৌলের দুই রূপ"
    ],
    "correctAnswer": 0,
    "explanation": "দুটি পরমাণুর ভরসংখ্যা সমান (A=14) কিন্তু পারমাণবিক সংখ্যা ভিন্ন (6 ও 7) — তাই এরা আইসোবার। (নিউট্রন সংখ্যা যথাক্রমে 8 ও 7, তাই আইসোটোন নয়।)",
    "difficulty": "medium",
    "topic": "পারমাণবিক সংখ্যা / আইসোটোপ",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 5,
    "type": "single",
    "question": "₁₇Cl মৌলের একটি আইসোটোপের ভরসংখ্যা 37 হলে, ওই পরমাণুতে নিউট্রন সংখ্যা কত?",
    "options": [
      "20",
      "17",
      "18",
      "37"
    ],
    "correctAnswer": 0,
    "explanation": "নিউট্রন সংখ্যা = ভরসংখ্যা (A) − পারমাণবিক সংখ্যা (Z) = 37 − 17 = 20।",
    "difficulty": "medium",
    "topic": "পারমাণবিক সংখ্যা / আইসোটোপ",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 6,
    "type": "single",
    "question": "রাদারফোর্ডের আলফা কণা বিক্ষেপণ পরীক্ষায় অধিকাংশ আলফা কণা সোনার পাতের ভেতর দিয়ে বাধাহীনভাবে সরাসরি চলে যাওয়ার প্রধান কারণ কী ছিল?",
    "options": [
      "পরমাণুর অভ্যন্তরে অধিকাংশ স্থান ফাঁকা",
      "ইলেকট্রনগুলি খুব ভারী",
      "নিউক্লিয়াস ঋণাত্মক আধানযুক্ত",
      "আলফা কণা পরমাণুর সঙ্গে বিক্রিয়া করে না"
    ],
    "correctAnswer": 0,
    "explanation": "পরমাণুর প্রায় সম্পূর্ণ ভর ও ধনাত্মক আধান একটি অতি ক্ষুদ্র কেন্দ্রে (নিউক্লিয়াস) কেন্দ্রীভূত, বাকি স্থান মূলত ফাঁকা — তাই বেশিরভাগ আলফা কণা বিনা বাধায় চলে যায়।",
    "difficulty": "easy",
    "topic": "রাদারফোর্ড মডেল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 7,
    "type": "single",
    "question": "রাদারফোর্ডের মডেল অনুযায়ী ইলেকট্রন নিউক্লিয়াসের চারদিকে বৃত্তাকার পথে ঘুরলে ক্লাসিক্যাল তড়িৎগতিবিদ্যা অনুসারে যে ঘটনা ঘটার কথা অথচ বাস্তবে ঘটে না, সেটি কী?",
    "options": [
      "ইলেকট্রন ক্রমাগত শক্তি বিকিরণ করে সর্পিল পথে নিউক্লিয়াসে পতিত হবে",
      "ইলেকট্রন নিউক্লিয়াস থেকে দূরে সরে যাবে",
      "নিউক্লিয়াস ভেঙে যাবে",
      "পরমাণু চৌম্বক ধর্ম হারাবে"
    ],
    "correctAnswer": 0,
    "explanation": "ত্বরিত গতিসম্পন্ন আধানযুক্ত কণা ক্রমাগত শক্তি বিকিরণ করে বলে ক্লাসিক্যাল তত্ত্ব অনুযায়ী ইলেকট্রনের শক্তি ক্রমশ কমে সর্পিল পথে নিউক্লিয়াসে পতিত হওয়া উচিত ছিল — এতে পরমাণু অস্থিত হয়ে পড়ত, যা বাস্তবে ঘটে না। এটিই রাদারফোর্ড মডেলের প্রধান সীমাবদ্ধতা।",
    "difficulty": "medium",
    "topic": "রাদারফোর্ড মডেল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 8,
    "type": "single",
    "question": "বোরের মডেল অনুযায়ী ইলেকট্রন কোন ধরনের কক্ষপথে ঘুরলে শক্তি বিকিরণ করে না?",
    "options": [
      "নির্দিষ্ট শক্তিসম্পন্ন স্থির কক্ষপথে (stationary states)",
      "যেকোনো ব্যাসার্ধের কক্ষপথে",
      "নিউক্লিয়াসের গায়ে অবস্থান করলে",
      "কেবল সর্ববহিঃস্থ কক্ষপথে"
    ],
    "correctAnswer": 0,
    "explanation": "বোরের অনুমান অনুযায়ী ইলেকট্রন কেবল সেইসব নির্দিষ্ট কক্ষপথে ঘুরতে পারে যেখানে কৌণিক ভরবেগ nh/2π-এর পূর্ণসংখ্যা গুণিতক — এই স্থির কক্ষপথে থাকাকালীন শক্তি বিকিরণ হয় না।",
    "difficulty": "easy",
    "topic": "বোর মডেল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 9,
    "type": "single",
    "question": "বোর মডেল অনুযায়ী হাইড্রোজেন পরমাণুর n=2 কক্ষপথে ইলেকট্রনের কৌণিক ভরবেগ কত? (h = প্ল্যাঙ্ক ধ্রুবক)",
    "options": [
      "h/π",
      "h/2π",
      "2h/π",
      "h/4π"
    ],
    "correctAnswer": 0,
    "explanation": "বোরের অনুমান: কৌণিক ভরবেগ L = nh/2π। n=2 বসালে L = 2h/2π = h/π।",
    "difficulty": "medium",
    "topic": "বোর মডেল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 10,
    "type": "multiple",
    "question": "নিচের কোনগুলি বোরের পরমাণু মডেলের প্রকৃত সীমাবদ্ধতা? (একটির বেশি উত্তর সঠিক হতে পারে)",
    "options": [
      "এটি বহু-ইলেকট্রনযুক্ত পরমাণুর বর্ণালী সঠিকভাবে ব্যাখ্যা করতে ব্যর্থ",
      "এটি চৌম্বক ক্ষেত্রে বর্ণালী রেখার বিভাজন (জিম্যান প্রভাব) ব্যাখ্যা করতে পারে না",
      "এটি হাইড্রোজেনের বর্ণালী রেখার (Balmer, Lyman ইত্যাদি) অবস্থান একেবারেই ব্যাখ্যা করতে পারেনি",
      "এটি ইলেকট্রনের তরঙ্গ-ধর্ম (dual nature) বিবেচনায় নেয়নি"
    ],
    "correctAnswer": [
      0,
      1,
      3
    ],
    "explanation": "বোর মডেল প্রকৃতপক্ষে হাইড্রোজেনের মতো এক-ইলেকট্রন প্রজাতির বর্ণালী রেখা সফলভাবে ব্যাখ্যা করেছিল — তাই তৃতীয় বিকল্পটি ভুল। কিন্তু এটি বহু-ইলেকট্রন পরমাণুর বর্ণালী, জিম্যান/স্টার্ক প্রভাব ব্যাখ্যা করতে ব্যর্থ হয় এবং ইলেকট্রনের তরঙ্গ-কণা দ্বৈততা ও হাইজেনবার্গের নীতিকে উপেক্ষা করেছিল।",
    "difficulty": "hard",
    "topic": "বোর মডেলের সীমাবদ্ধতা",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 11,
    "type": "single",
    "question": "প্রধান শক্তিস্তর n=3-তে মোট কয়টি উপশক্তিস্তর (subshell) থাকতে পারে?",
    "options": [
      "3 (s, p, d)",
      "2 (s, p)",
      "4 (s, p, d, f)",
      "1 (শুধু s)"
    ],
    "correctAnswer": 0,
    "explanation": "একটি প্রধান শক্তিস্তর n-এ উপশক্তিস্তরের সংখ্যা n-এর সমান। n=3-এর জন্য l = 0, 1, 2 অর্থাৎ 3s, 3p, 3d — মোট ৩টি উপশক্তিস্তর।",
    "difficulty": "easy",
    "topic": "শেল ও সাবশেল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 12,
    "type": "single",
    "question": "আলোর ফটো-তড়িৎ ক্রিয়া (photoelectric effect) আলোর কোন ধর্মকে সমর্থন করে?",
    "options": [
      "কণা ধর্ম (photon)",
      "তরঙ্গ ধর্ম",
      "চৌম্বক ধর্ম",
      "কোনোটিই নয়"
    ],
    "correctAnswer": 0,
    "explanation": "ফটো-তড়িৎ ক্রিয়ায় আলো পৃথক শক্তি-প্যাকেট বা ফোটন হিসেবে আচরণ করে ধাতুর পৃষ্ঠ থেকে ইলেকট্রন নির্গত করে — এটি আলোর কণা-ধর্মের প্রমাণ, যা তরঙ্গ তত্ত্ব দিয়ে ব্যাখ্যা করা যায় না।",
    "difficulty": "easy",
    "topic": "দ্বৈত প্রকৃতি",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 13,
    "type": "single",
    "question": "ডেভিসন-জার্মার পরীক্ষায় ইলেকট্রন রশ্মি নিকেল স্ফটিক দ্বারা বিচ্ছুরিত হয়ে যে ব্যতিচার (diffraction) প্যাটার্ন দেখায়, তা ইলেকট্রনের কোন ধর্ম প্রমাণ করে?",
    "options": [
      "তরঙ্গ ধর্ম",
      "কণা ধর্ম",
      "স্থির আধান",
      "পারমাণবিক ভর"
    ],
    "correctAnswer": 0,
    "explanation": "শুধু তরঙ্গই ব্যতিচার ও বিচ্ছুরণ দেখাতে পারে। ইলেকট্রন রশ্মিতে এই প্যাটার্ন পাওয়ায় প্রমাণিত হয় ইলেকট্রনেরও তরঙ্গ-ধর্ম আছে — যা ডি ব্রগলির প্রস্তাবনাকে সমর্থন করে।",
    "difficulty": "medium",
    "topic": "দ্বৈত প্রকৃতি",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 14,
    "type": "single",
    "question": "150 V বিভবপার্থক্য দ্বারা ত্বরিত একটি ইলেকট্রনের ডি ব্রগলি তরঙ্গদৈর্ঘ্য আনুমানিক কত? [সূত্র: λ(Å) = 12.27/√V]",
    "options": [
      "≈ 1 Å",
      "≈ 10 Å",
      "≈ 0.1 Å",
      "≈ 100 Å"
    ],
    "correctAnswer": 0,
    "explanation": "λ = 12.27/√150 Å ≈ 1.00 Å।",
    "difficulty": "medium",
    "topic": "দ্বৈত প্রকৃতি",
    "marks": 4,
    "negativeMarks": 1
  },
    {
    "id": 15,
    "type": "multiple",
    "question": "নিচের কোনগুলি s-অরবিটাল সম্পর্কে সঠিক বক্তব্য? সব সঠিক উত্তর নির্বাচন করো।",
    "options": [
      "s-অরবিটালের গোলীয় প্রতিসাম্য আছে",
      "সব s-অরবিটালে নোডের সংখ্যা শূন্য",
      "s-অরবিটালের নির্দিষ্ট দিকনির্দেশ নেই",
      "একই ধরনের অরবিটালে প্রধান কোয়ান্টাম সংখ্যা বাড়লে সাধারণত আকার বাড়ে"
    ],
    "correctAnswer": [0, 2, 3],
    "explanation": "s-অরবিটাল গোলীয়-প্রতিসম এবং এর নির্দিষ্ট দিকনির্দেশ নেই। n-তম s-অরবিটালে মোট রেডিয়াল নোডের সংখ্যা n−1; তাই সব s-অরবিটালে নোডের সংখ্যা শূন্য নয়।",
    "difficulty": "medium",
    "topic": "অরবিটাল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 16,
    "type": "single",
    "question": "Sc (Z = 21)-এর ভূমিস্তর ইলেকট্রন বিন্যাসে শেষ ইলেকট্রন কোন উপকক্ষে প্রবেশ করে?",
    "options": ["4s", "3d", "4p", "3p"],
    "correctAnswer": 1,
    "explanation": "Sc-এর ভূমিস্তর ইলেকট্রন বিন্যাস [Ar] 3d¹ 4s²। তাই শেষ ইলেকট্রন 3d উপকক্ষে থাকে।",
    "difficulty": "medium",
    "topic": "আউফবাউ নীতি",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 17,
    "type": "single",
    "question": "পাউলির বর্জন নীতি অনুযায়ী একটি অরবিটালে সর্বোচ্চ কতটি ইলেকট্রন থাকতে পারে?",
    "options": ["1", "2", "4", "6"],
    "correctAnswer": 1,
    "explanation": "একটি অরবিটালে সর্বোচ্চ দুটি ইলেকট্রন থাকতে পারে এবং তাদের স্পিন বিপরীত হতে হয়।",
    "difficulty": "easy",
    "topic": "পাউলির বর্জন নীতি",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 18,
    "type": "single",
    "question": "হুন্ডের নিয়ম অনুযায়ী কার্বনের 2p² ইলেকট্রন বিন্যাস কোনটি? প্রতিটি তীর একটি ইলেকট্রন বোঝায়।",
    "options": [
      "↑  ↑  _",
      "↑↓  _  _",
      "↑↓  ↑↓  _",
      "↑  ↓  _"
    ],
    "correctAnswer": 0,
    "explanation": "সমশক্তির তিনটি p-অরবিটালে ইলেকট্রন প্রথমে পৃথক অরবিটালে সমান্তরাল স্পিনে বসে। তাই 2p²-এর জন্য ↑ ↑ _ সঠিক।",
    "difficulty": "medium",
    "topic": "হুন্ডের নিয়ম",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 19,
    "type": "single",
    "question": "Fe (Z = 26)-এর ভূমিস্তর ইলেকট্রন বিন্যাস কোনটি?",
    "options": [
      "[Ar] 3d⁶ 4s²",
      "[Ar] 3d⁵ 4s²",
      "[Ar] 3d⁷ 4s¹",
      "[Ar] 3d⁸"
    ],
    "correctAnswer": 0,
    "explanation": "Fe-এর পারমাণবিক সংখ্যা 26। এর ভূমিস্তর বিন্যাস [Ar] 3d⁶ 4s²।",
    "difficulty": "medium",
    "topic": "ইলেকট্রন বিন্যাস",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 20,
    "type": "single",
    "question": "Cr (Z = 24)-এর ভূমিস্তর ইলেকট্রন বিন্যাস [Ar] 3d⁵ 4s¹ হওয়ার প্রধান কারণ কী?",
    "options": [
      "পারমাণবিক আকার ছোট",
      "অর্ধপূর্ণ 3d উপকক্ষের অতিরিক্ত স্থায়িত্ব",
      "তড়িৎঋণাত্মকতা সর্বাধিক",
      "4s উপকক্ষে ইলেকট্রন থাকা অসম্ভব"
    ],
    "correctAnswer": 1,
    "explanation": "Cr-এর ক্ষেত্রে 3d⁵ 4s¹ বিন্যাস তুলনামূলকভাবে অনুকূল। অর্ধপূর্ণ d-উপকক্ষের স্থায়িত্ব একটি সরল ব্যাখ্যা; প্রকৃত কারণ শক্তির সূক্ষ্ম ভারসাম্যের সঙ্গে যুক্ত।",
    "difficulty": "medium",
    "topic": "ব্যতিক্রমী ইলেকট্রন বিন্যাস",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 21,
    "type": "single",
    "question": "P³⁻ আয়নে মোট কতটি ইলেকট্রন আছে? ফসফরাসের পারমাণবিক সংখ্যা 15।",
    "options": ["12", "15", "18", "21"],
    "correctAnswer": 2,
    "explanation": "নিরপেক্ষ P পরমাণুতে 15টি ইলেকট্রন থাকে। 3− আধানের অর্থ তিনটি ইলেকট্রন অতিরিক্ত, তাই মোট ইলেকট্রন = 15 + 3 = 18।",
    "difficulty": "easy",
    "topic": "আয়নের ইলেকট্রন সংখ্যা",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 22,
    "type": "multiple",
    "question": "নিচের কোন আয়নগুলির ইলেকট্রন বিন্যাস Ne-এর মতো? সব সঠিক উত্তর নির্বাচন করো।",
    "options": ["N³⁻", "O⁻", "F⁻", "Na⁺"],
    "correctAnswer": [0, 2, 3],
    "explanation": "Ne-এর 10টি ইলেকট্রন আছে। N³⁻-এ 10, F⁻-এ 10 এবং Na⁺-এ 10টি ইলেকট্রন। O⁻-এ 9টি ইলেকট্রন, তাই তার বিন্যাস Ne-এর মতো নয়।",
    "difficulty": "hard",
    "topic": "ইলেকট্রন বিন্যাস ও আয়ন",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 23,
    "type": "single",
    "question": "সাধারণ Aufbau ভরাট-ক্রম অনুযায়ী 4s ও 3d-এর মধ্যে কোন উপকক্ষটি আগে ভরাট হয়?",
    "options": [
      "3d",
      "4s",
      "দুটিই সব সময় একই সঙ্গে",
      "সব মৌলের ক্ষেত্রে 3d আগে"
    ],
    "correctAnswer": 1,
    "explanation": "সাধারণ Aufbau ভরাট-ক্রমে 4s আগে পূর্ণ হয়। তবে ইলেকট্রন বিন্যাস ও আয়নীকরণের সময় শক্তির ক্রমে সূক্ষ্ম পরিবর্তন হতে পারে।",
    "difficulty": "medium",
    "topic": "উপকক্ষের শক্তি",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 24,
    "type": "single",
    "question": "একটি ইলেকট্রনের n = 4 ও l = 1 হলে তার magnetic quantum number mₗ-এর কতটি সম্ভাব্য মান আছে?",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 2,
    "explanation": "mₗ-এর মান −l থেকে +l পর্যন্ত পূর্ণসংখ্যা। l = 1 হলে মানগুলি −1, 0, +1; মোট 3টি।",
    "difficulty": "hard",
    "topic": "কোয়ান্টাম সংখ্যা",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 25,
    "type": "single",
    "question": "একটি অরবিটালকে সাধারণত এমন ত্রিমাত্রিক অঞ্চল হিসেবে সংজ্ঞায়িত করা হয় যেখানে ইলেকট্রনকে পাওয়ার সম্ভাবনা বেশি। এই ধারণাটি কোন মডেলের সঙ্গে যুক্ত?",
    "options": [
      "বোরের নির্দিষ্ট কক্ষপথ",
      "কোয়ান্টাম-যান্ত্রিক অরবিটাল",
      "রাদারফোর্ডের গ্রহীয় মডেল",
      "প্ল্যাঙ্কের কৃষ্ণবস্তু বিকিরণ তত্ত্ব"
    ],
    "correctAnswer": 1,
    "explanation": "কোয়ান্টাম-যান্ত্রিক মডেলে অরবিটাল হলো ইলেকট্রন পাওয়ার সম্ভাবনা-ঘনত্ব দিয়ে বর্ণিত অঞ্চল।",
    "difficulty": "easy",
    "topic": "অরবিটাল",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "id": 26,
    "type": "single",
    "question": "কম্পাঙ্ক 6.0 × 10¹⁴ Hz-এর একটি ফোটনের শক্তি কত? h = 6.626 × 10⁻³⁴ J s।",
    "options": [
      "3.98 × 10⁻¹⁹ J",
      "1.10 × 10⁻¹⁹ J",
      "3.98 × 10⁻²⁰ J",
      "6.63 × 10⁻¹⁹ J"
    ],
    "correctAnswer": 0,
    "explanation": "E = hν = (6.626 × 10⁻³⁴)(6.0 × 10¹⁴) ≈ 3.98 × 10⁻¹⁹ J।",
    "difficulty": "medium",
    "topic": "ফোটনের শক্তি",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    id: 27,
    type: "single",
    question: "কোন কোয়ান্টাম সংখ্যাটি অরবিটালের আকৃতি নির্ধারণ করে?",
    options: ["প্রধান কোয়ান্টাম সংখ্যা (n)", "সহকারী কোয়ান্টাম সংখ্যা (l)", "চৌম্বকীয় কোয়ান্টাম সংখ্যা (mₗ)", "স্পিন কোয়ান্টাম সংখ্যা (mₛ)"],
    correctAnswer: 1,
    explanation: "সহকারী কোয়ান্টাম সংখ্যা l অরবিটালের আকৃতি নির্ধারণ করে।",
    difficulty: "medium",
    topic: "Quantum Numbers",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 28,
    type: "single",
    question: "একটি p-উপস্তরে সর্বাধিক কতটি ইলেকট্রন থাকতে পারে?",
    options: ["2", "4", "6", "10"],
    correctAnswer: 2,
    explanation: "p-উপস্তরে তিনটি অরবিটাল থাকে; প্রতিটিতে 2টি করে, মোট 6টি ইলেকট্রন থাকতে পারে।",
    difficulty: "easy",
    topic: "Subshells",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 29,
    type: "single",
    question: "d-উপস্তরে মোট কয়টি অরবিটাল থাকে?",
    options: ["3", "5", "7", "10"],
    correctAnswer: 1,
    explanation: "d-উপস্তরের জন্য l = 2; তাই mₗ-এর মান −2 থেকে +2, মোট পাঁচটি।",
    difficulty: "easy",
    topic: "Subshells",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 30,
    type: "single",
    question: "একটি f-উপস্তরে সর্বাধিক কতটি ইলেকট্রন থাকতে পারে?",
    options: ["6", "10", "14", "18"],
    correctAnswer: 2,
    explanation: "f-উপস্তরে 7টি অরবিটাল থাকে; প্রতিটিতে 2টি করে মোট 14টি ইলেকট্রন।",
    difficulty: "medium",
    topic: "Subshells",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 31,
    type: "single",
    question: "কোন অরবিটালের আকৃতি সাধারণত গোলাকার?",
    options: ["s", "p", "d", "f"],
    correctAnswer: 0,
    explanation: "s-অরবিটালের ইলেকট্রন ঘনত্ব গোলীয় প্রতিসম।",
    difficulty: "easy",
    topic: "Orbital Shapes",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 32,
    type: "single",
    question: "p-অরবিটালের সাধারণ আকৃতি কেমন?",
    options: ["গোলাকার", "ডাম্বেল-আকৃতির", "দুটি সমকেন্দ্রিক গোলক", "ঘনকাকার"],
    correctAnswer: 1,
    explanation: "p-অরবিটালের সাধারণ আকৃতি ডাম্বেল-আকৃতির।",
    difficulty: "easy",
    topic: "Orbital Shapes",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 33,
    type: "single",
    question: "প্রধান কোয়ান্টাম সংখ্যা n = 4 হলে মোট কয়টি উপস্তর থাকে?",
    options: ["2", "3", "4", "8"],
    correctAnswer: 2,
    explanation: "একটি প্রধান শক্তিস্তরে উপস্তরের সংখ্যা n-এর সমান।",
    difficulty: "medium",
    topic: "Shells and Subshells",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 34,
    type: "single",
    question: "n = 3 শক্তিস্তরে সর্বাধিক কতটি ইলেকট্রন থাকতে পারে?",
    options: ["8", "18", "32", "9"],
    correctAnswer: 1,
    explanation: "একটি শক্তিস্তরের সর্বাধিক ইলেকট্রন সংখ্যা 2n²; n = 3 হলে 18।",
    difficulty: "medium",
    topic: "Electron Shells",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 35,
    type: "single",
    question: "কোন কোয়ান্টাম সংখ্যাটি অরবিটালের অভিমুখ নির্দেশ করে?",
    options: ["n", "l", "mₗ", "mₛ"],
    correctAnswer: 2,
    explanation: "চৌম্বকীয় কোয়ান্টাম সংখ্যা mₗ অরবিটালের অভিমুখ নির্দেশ করে।",
    difficulty: "medium",
    topic: "Quantum Numbers",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 36,
    type: "single",
    question: "ইলেকট্রনের স্পিন কোয়ান্টাম সংখ্যার সম্ভাব্য মান কোনটি?",
    options: ["0 এবং 1", "+1 এবং −1", "+½ এবং −½", "−2 থেকে +2"],
    correctAnswer: 2,
    explanation: "ইলেকট্রনের স্পিন কোয়ান্টাম সংখ্যা +½ অথবা −½ হতে পারে।",
    difficulty: "easy",
    topic: "Quantum Numbers",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 37,
    type: "single",
    question: "কোন নীতির সাহায্যে ইলেকট্রন অরবিটালে প্রবেশের ক্রম নির্ধারণ করা হয়?",
    options: ["হুন্ডের নীতি", "আউফবাউ নীতি", "পাউলির বর্জন নীতি", "হাইজেনবার্গের অনিশ্চয়তা নীতি"],
    correctAnswer: 1,
    explanation: "আউফবাউ নীতি অনুসারে ইলেকট্রন প্রথমে নিম্ন শক্তির অরবিটাল পূরণ করে।",
    difficulty: "easy",
    topic: "Electronic Configuration",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 38,
    type: "single",
    question: "হুন্ডের নীতি অনুযায়ী সমশক্তিসম্পন্ন অরবিটালে ইলেকট্রন কীভাবে বিন্যস্ত হয়?",
    options: ["প্রথমে জোড়া গঠন করে", "প্রথমে এককভাবে সমান্তরাল স্পিনে বসে", "সব ইলেকট্রনের স্পিন বিপরীত হয়", "সব অরবিটাল খালি থাকে"],
    correctAnswer: 1,
    explanation: "সমশক্তিসম্পন্ন অরবিটালে জোড়া গঠনের আগে ইলেকট্রন এককভাবে সমান্তরাল স্পিনে বসে।",
    difficulty: "medium",
    topic: "Hund's Rule",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 39,
    type: "single",
    question: "একটি অরবিটালে থাকা দুটি ইলেকট্রনের স্পিন কেমন হয়?",
    options: ["একই", "বিপরীত", "দুটিই শূন্য", "নির্দিষ্ট নয় এবং একই হতে পারে না এমন কোনো নিয়ম নেই"],
    correctAnswer: 1,
    explanation: "পাউলির বর্জন নীতি অনুযায়ী একই অরবিটালে দুটি ইলেকট্রনের স্পিন বিপরীত হতে হবে।",
    difficulty: "medium",
    topic: "Pauli Exclusion Principle",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 40,
    type: "single",
    question: "নিচের কোনটি ক্রোমিয়ামের (Cr, Z = 24) স্বাভাবিক ইলেকট্রন বিন্যাস?",
    options: ["[Ar] 3d⁴ 4s²", "[Ar] 3d⁵ 4s¹", "[Ar] 3d⁶", "[Ar] 3d³ 4s³"],
    correctAnswer: 1,
    explanation: "ক্রোমিয়ামের স্থিতিশীল বিন্যাস [Ar] 3d⁵ 4s¹; অর্ধপূর্ণ 3d উপস্তর অতিরিক্ত স্থিতিশীলতা দেয়।",
    difficulty: "medium",
    topic: "Electronic Configuration",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 41,
    type: "single",
    question: "নিচের কোনটি তামার (Cu, Z = 29) স্বাভাবিক ইলেকট্রন বিন্যাস?",
    options: ["[Ar] 3d⁹ 4s²", "[Ar] 3d⁸ 4s³", "[Ar] 3d¹⁰ 4s¹", "[Ar] 3d¹⁰ 4s²"],
    correctAnswer: 2,
    explanation: "তামার স্থিতিশীল বিন্যাস [Ar] 3d¹⁰ 4s¹; পূর্ণ 3d উপস্তর অতিরিক্ত স্থিতিশীলতা দেয়।",
    difficulty: "medium",
    topic: "Electronic Configuration",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 42,
    type: "single",
    question: "হাইজেনবার্গের অনিশ্চয়তা নীতি অনুযায়ী কোন দুটি রাশির অবস্থান ও ভরবেগ একই সঙ্গে সম্পূর্ণ নির্ভুলভাবে জানা যায় না?",
    options: ["ভর ও আধান", "অবস্থান ও ভরবেগ", "শক্তি ও আধান", "ভর ও স্পিন"],
    correctAnswer: 1,
    explanation: "একটি ইলেকট্রনের অবস্থান ও ভরবেগ একই সঙ্গে ইচ্ছামতো নির্ভুলভাবে নির্ণয় করা যায় না।",
    difficulty: "medium",
    topic: "Uncertainty Principle",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 43,
    type: "single",
    question: "ডি-ব্রগলি সম্পর্ক অনুযায়ী কোনো কণার তরঙ্গদৈর্ঘ্য কোনটির সমানুপাতিক?",
    options: ["ভরবেগের", "ভরবেগের ব্যস্তানুপাতিক", "গতিশক্তির", "আধানের"],
    correctAnswer: 1,
    explanation: "ডি-ব্রগলি সম্পর্ক λ = h/p; তাই তরঙ্গদৈর্ঘ্য ভরবেগের ব্যস্তানুপাতিক।",
    difficulty: "medium",
    topic: "Matter Waves",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 44,
    type: "single",
    question: "ইলেকট্রনের তরঙ্গধর্ম পরীক্ষামূলকভাবে কোন পরীক্ষায় প্রমাণিত হয়?",
    options: ["মিলিকানের তেলবিন্দু পরীক্ষা", "ডেভিসন–জার্মার পরীক্ষা", "রাদারফোর্ডের স্বর্ণপাত পরীক্ষা", "চ্যাডউইকের পরীক্ষা"],
    correctAnswer: 1,
    explanation: "ডেভিসন–জার্মার পরীক্ষায় ইলেকট্রনের বিবর্তন পর্যবেক্ষণ করে তার তরঙ্গধর্ম প্রমাণিত হয়।",
    difficulty: "medium",
    topic: "Matter Waves",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 45,
    type: "single",
    question: "কোনো কণার ভরবেগ দ্বিগুণ হলে তার ডি-ব্রগলি তরঙ্গদৈর্ঘ্য কত হবে?",
    options: ["দ্বিগুণ", "অর্ধেক", "চারগুণ", "অপরিবর্তিত"],
    correctAnswer: 1,
    explanation: "λ = h/p; ভরবেগ দ্বিগুণ হলে তরঙ্গদৈর্ঘ্য অর্ধেক হয়।",
    difficulty: "medium",
    topic: "Matter Waves",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 46,
    type: "single",
    question: "বোরের মডেলে ইলেকট্রনের কৌণিক ভরবেগের অনুমোদিত মান কোনটি?",
    options: ["nh", "nh/2π", "h/n", "2πnh"],
    correctAnswer: 1,
    explanation: "বোরের কৌণিক ভরবেগের শর্ত mvr = nh/(2π), যেখানে n একটি ধনাত্মক পূর্ণসংখ্যা।",
    difficulty: "medium",
    topic: "Bohr Model",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 47,
    type: "single",
    question: "হাইড্রোজেন পরমাণুর বোর মডেলে n = 1 স্তরকে কী বলা হয়?",
    options: ["উত্তেজিত অবস্থা", "ভিত্তি অবস্থা", "আয়নিত অবস্থা", "অস্থিতিশীল অবস্থা"],
    correctAnswer: 1,
    explanation: "n = 1 হলো হাইড্রোজেন পরমাণুর সর্বনিম্ন শক্তির ভিত্তি অবস্থা।",
    difficulty: "easy",
    topic: "Bohr Model",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 48,
    type: "single",
    question: "হাইড্রোজেন পরমাণুর বোর মডেলে শক্তিস্তর n বাড়লে শক্তির মান কী হয়?",
    options: ["আরও ঋণাত্মক হয়", "শূন্যের দিকে বাড়ে", "সর্বদা শূন্য থাকে", "প্রথমে বাড়ে পরে কমে"],
    correctAnswer: 1,
    explanation: "হাইড্রোজেনের শক্তিস্তরের শক্তি n বাড়লে বৃদ্ধি পায় এবং শূন্যের দিকে এগোয়।",
    difficulty: "medium",
    topic: "Bohr Model",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 49,
    type: "single",
    question: "একটি ফোটনের শক্তি কোন সূত্রে প্রকাশ করা হয়?",
    options: ["E = mc²", "E = hν", "E = mv²", "E = p²/2m"],
    correctAnswer: 1,
    explanation: "ফোটনের শক্তি E = hν, যেখানে h প্ল্যাঙ্ক ধ্রুবক এবং ν কম্পাঙ্ক।",
    difficulty: "easy",
    topic: "Quantum Theory",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 50,
    type: "single",
    question: "ফটোইলেকট্রিক প্রভাবে আলোর কম্পাঙ্ক প্রান্তিক কম্পাঙ্কের চেয়ে কম হলে কী ঘটে?",
    options: ["আলোর তীব্রতা বাড়ালেই ইলেকট্রন নির্গত হয়", "কোনো ফটোইলেকট্রন নির্গত হয় না", "নির্গত ইলেকট্রনের গতিশক্তি অসীম হয়", "ধাতুর কাজ-ফাংশন শূন্য হয়"],
    correctAnswer: 1,
    explanation: "প্রান্তিক কম্পাঙ্কের নিচে ফোটনের শক্তি কাজ-ফাংশনের চেয়ে কম, তাই ফটোইলেকট্রন নির্গত হয় না।",
    difficulty: "medium",
    topic: "Photoelectric Effect",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 51,
    type: "single",
    question: "একটি নিরপেক্ষ পরমাণুর পারমাণবিক সংখ্যা Z হলে তার ইলেকট্রনের সংখ্যা কত?",
    options: ["Z", "Z + 1", "Z − 1", "2Z"],
    correctAnswer: 0,
    explanation: "নিরপেক্ষ পরমাণুতে প্রোটন ও ইলেকট্রনের সংখ্যা সমান; উভয়ই Z।",
    difficulty: "easy",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 52,
    type: "single",
    question: "একটি পরমাণুর ভরসংখ্যা A এবং পারমাণবিক সংখ্যা Z হলে নিউট্রনের সংখ্যা কত?",
    options: ["A + Z", "A − Z", "Z − A", "A × Z"],
    correctAnswer: 1,
    explanation: "ভরসংখ্যা = প্রোটন + নিউট্রন; তাই নিউট্রনের সংখ্যা A − Z।",
    difficulty: "easy",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 53,
    type: "single",
    question: "সমস্থানিক (isotopes) পরমাণুর মধ্যে কোনটি একই থাকে?",
    options: ["নিউট্রনের সংখ্যা", "ভরসংখ্যা", "পারমাণবিক সংখ্যা", "নিউক্লিয়নের মোট সংখ্যা"],
    correctAnswer: 2,
    explanation: "সমস্থানিকের পারমাণবিক সংখ্যা একই থাকে, কিন্তু নিউট্রন ও ভরসংখ্যা ভিন্ন হতে পারে।",
    difficulty: "easy",
    topic: "Isotopes",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 54,
    type: "single",
    question: "সমভর (isobars) পরমাণুর মধ্যে কোনটি একই থাকে?",
    options: ["পারমাণবিক সংখ্যা", "নিউট্রনের সংখ্যা", "ভরসংখ্যা", "প্রোটনের সংখ্যা"],
    correctAnswer: 2,
    explanation: "সমভর পরমাণুর ভরসংখ্যা একই, কিন্তু পারমাণবিক সংখ্যা আলাদা।",
    difficulty: "easy",
    topic: "Isobars",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 55,
    type: "single",
    question: "রাদারফোর্ডের α-কণা বিচ্ছুরণ পরীক্ষায় অধিকাংশ α-কণা সোজা চলে যায় কেন?",
    options: ["পরমাণুর অধিকাংশ স্থান ফাঁকা", "নিউক্লিয়াস ঋণাত্মক", "ইলেকট্রন খুব ভারী", "সব α-কণা নিউক্লিয়াসে শোষিত হয়"],
    correctAnswer: 0,
    explanation: "পরমাণুর অধিকাংশ আয়তন ফাঁকা স্থান হওয়ায় অধিকাংশ α-কণা উল্লেখযোগ্য বিচ্যুতি ছাড়াই চলে যায়।",
    difficulty: "easy",
    topic: "Rutherford Model",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 56,
    type: "single",
    question: "একটি অরবিটালে সর্বাধিক কতটি ইলেকট্রন থাকতে পারে?",
    options: ["1", "2", "6", "10"],
    correctAnswer: 1,
    explanation: "পাউলির বর্জন নীতি অনুযায়ী একটি অরবিটালে বিপরীত স্পিনের সর্বাধিক দুটি ইলেকট্রন থাকতে পারে।",
    difficulty: "easy",
    topic: "Orbitals",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 57,
    type: "single",
    question: "n = 2 শক্তিস্তরে কোন কোন উপস্তর থাকে?",
    options: ["শুধু 2s", "2s ও 2p", "2s, 2p ও 2d", "2p ও 2d"],
    correctAnswer: 1,
    explanation: "n = 2 হলে l-এর মান 0 ও 1 হতে পারে; তাই 2s ও 2p উপস্তর থাকে।",
    difficulty: "medium",
    topic: "Shells and Subshells",
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 58,
    type: "single",
    question: "একটি p-উপস্তরের তিনটি অরবিটালের প্রতিটিতে একটি করে ইলেকট্রন বসার প্রবণতা কোন নীতির সঙ্গে সম্পর্কিত?",
    options: ["আউফবাউ নীতি", "পাউলির বর্জন নীতি", "হুন্ডের নীতি", "বোরের নীতি"],
    correctAnswer: 2,
    explanation: "হুন্ডের নীতি অনুযায়ী সমশক্তিসম্পন্ন অরবিটালে জোড়া গঠনের আগে ইলেকট্রন এককভাবে বসে।",
    difficulty: "medium",
    topic: "Hund's Rule",
    marks: 4,
    negativeMarks: 1
  }
];
export default questions;