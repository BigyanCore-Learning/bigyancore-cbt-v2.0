const questions = [

{
    id: 1,

    chapter: "Atomic Structure",

    topic: "Atomic Structure Basics",

    difficulty: "Easy",

    type: "single",

    question:
    "যদি একটি পরমাণুর নিউক্লিয়াসে প্রোটন সংখ্যা Z এবং ভরসংখ্যা A হয়, তবে নিউক্লিয়াসের মোট আধান এবং নিউট্রন সংখ্যার অনুপাত কত হবে? (e = ইলেকট্রনের আধানের পরম মান)",

    options:[
        "A. Z/(A−Z)",
        "B. Ze/(A−Z)",
        "C. Ae/Z",
        "D. (Z−A)/Ze"
    ],

    answer:["B"],

    hint:
    "নিউক্লিয়াসের আধান শুধুমাত্র প্রোটনের জন্য হয়।",

    explanation:
    "মোট নিউক্লীয় আধান = Ze এবং নিউট্রন সংখ্যা = A−Z। তাই অনুপাত = Ze/(A−Z)।"
},

{
    id: 2,

    chapter: "Atomic Structure",

    topic: "Matter Waves",

    difficulty: "Medium",

    type: "single",

    question:
    "একটি α-কণা এবং একটি প্রোটনকে একই বিভবপ্রভেদ দ্বারা ত্বরান্বিত করা হলো। তাদের de Broglie তরঙ্গদৈর্ঘ্যের অনুপাত (λα : λp) কত?",

    options:[
        "A. 1 : 2√2",
        "B. 2√2 : 1",
        "C. 1 : 2",
        "D. 2 : 1"
    ],

    answer:["A"],

    hint:
    "λ ∝ 1/√(mqV) ব্যবহার করো।",

    explanation:
    "একই বিভবপ্রভেদে λ = h/√(2mqV)। α-কণার জন্য m≈4mp এবং q=2e। তাই λα:λp = 1:2√2।"
},

{
    id: 3,

    chapter: "Atomic Structure",

    topic: "Bohr Model",

    difficulty: "Hard",

    type: "numerical",

    question:
    "হাইড্রোজেন পরমাণুর n = 3 কক্ষপথে ইলেকট্রনের শক্তি কত (eV)?",

    options:[
        "A. −13.6 eV",
        "B. −3.4 eV",
        "C. −1.51 eV",
        "D. −0.85 eV"
    ],

    answer:["C"],

    hint:
    "Bohr-এর সূত্র: En = −13.6/n² eV",

    explanation:
    "n = 3 হলে E = −13.6/9 = −1.51 eV।"
},

{
    id: 4,

    chapter: "Atomic Structure",

    topic: "Bohr Model",

    difficulty: "Hard",

    type: "multiple",

    question:
    "Bohr মডেল সম্পর্কে নিচের কোন বক্তব্যগুলি সঠিক?",

    options:[
        "A. n স্থির থাকলে ব্যাসার্ধ Z-এর ব্যস্তানুপাতিক।",
        "B. Z স্থির থাকলে গতিশক্তি n²-এর ব্যস্তানুপাতিক।",
        "C. স্থিতিশক্তি ও মোট শক্তির অনুপাত সবসময় 2:1।",
        "D. ইলেকট্রনের বেগ Z²-এর সমানুপাতিক।"
    ],

    answer:["A","B"],

    hint:
    "rn ∝ n²/Z, KE ∝ Z²/n² এবং v ∝ Z/n মনে করো।",

    explanation:
    "A ও B সঠিক। D ভুল কারণ v ∝ Z/n। C-তে চিহ্নের দিক বিবেচনা করলে বক্তব্যটি গ্রহণযোগ্য নয়।"
},

{
    id: 5,

    chapter: "Atomic Structure",

    topic: "Thomson Atomic Model",

    difficulty: "Easy",

    type: "single",

    question:
    "থমসনের Plum Pudding Model নিচের কোন ঘটনাটি সফলভাবে ব্যাখ্যা করতে পেরেছিল?",

    options:[
        "A. α-কণার বৃহৎ কোণে বিচ্ছুরণ",
        "B. পরমাণুর সামগ্রিক তড়িৎ-নিরপেক্ষতা",
        "C. রেখা বর্ণালী",
        "D. নিউক্লিয়াসের অস্তিত্ব"
    ],

    answer:["B"],

    hint:
    "থমসনের মডেলে ধনাত্মক আধান সমভাবে ছড়িয়ে থাকে।",

    explanation:
    "থমসনের মডেল পরমাণুর সামগ্রিক তড়িৎ-নিরপেক্ষতা ব্যাখ্যা করতে পারলেও α-কণার বিচ্ছুরণ বা রেখা বর্ণালী ব্যাখ্যা করতে পারেনি।"
},
{
    id: 6,

    chapter: "Atomic Structure",

    topic: "Rutherford Atomic Model",

    difficulty: "Medium",

    type: "single",

    question:
    "রাদারফোর্ডের α-কণা বিচ্ছুরণ পরীক্ষার কোন পর্যবেক্ষণটি পরমাণুর অধিকাংশ অংশ ফাঁকা থাকার ধারণাকে সমর্থন করে?",

    options:[
        "A. অধিকাংশ α-কণা সোজা চলে যায়",
        "B. কিছু α-কণা সামান্য বেঁকে যায়",
        "C. খুব অল্প α-কণা ফিরে আসে",
        "D. সব α-কণা শোষিত হয়"
    ],

    answer:["A"],

    hint:
    "অধিকাংশ কণা বাধাহীনভাবে অতিক্রম করেছিল।",

    explanation:
    "রাদারফোর্ড লক্ষ্য করেন যে অধিকাংশ α-কণা কোনো বিচ্যুতি ছাড়াই সোজা চলে যায়। এটি প্রমাণ করে যে পরমাণুর অধিকাংশ অংশ ফাঁকা।"
},
{
    id: 7,

    chapter: "Atomic Structure",

    topic: "Photoelectric Effect",

    difficulty: "Medium",

    type: "single",

    question:
    "ফটোইলেকট্রিক ক্রিয়ায় আলোর তীব্রতা বাড়ালে, কিন্তু কম্পাঙ্ক অপরিবর্তিত রাখলে কী ঘটে?",

    options:[
        "A. নির্গত ইলেকট্রনের সর্বাধিক গতিশক্তি বৃদ্ধি পায়",
        "B. নির্গত ইলেকট্রনের সংখ্যা বৃদ্ধি পায়",
        "C. থ্রেশহোল্ড ফ্রিকোয়েন্সি পরিবর্তিত হয়",
        "D. কাজের ফাংশন পরিবর্তিত হয়"
    ],

    answer:["B"],

    hint:
    "তীব্রতা ফোটনের সংখ্যা বাড়ায়, শক্তি নয়।",

    explanation:
    "আলোর তীব্রতা বৃদ্ধি করলে প্রতি সেকেন্ডে বেশি ফোটন আপতিত হয়। ফলে নির্গত ইলেকট্রনের সংখ্যা বাড়ে, কিন্তু তাদের সর্বাধিক গতিশক্তি অপরিবর্তিত থাকে।"
},
{
    id: 8,

    chapter: "Atomic Structure",

    topic: "Matter Waves",

    difficulty: "Medium",

    type: "single",

    question:
    "ডি ব্রগলি তরঙ্গদৈর্ঘ্য কোন রাশির ব্যস্তানুপাতিক?",

    options:[
        "A. ভরবেগ",
        "B. ভর",
        "C. চার্জ",
        "D. বিভব"
    ],

    answer:["A"],

    hint:
    "λ = h/p",

    explanation:
    "ডি ব্রগলি সমীকরণ অনুযায়ী λ = h/p। অর্থাৎ তরঙ্গদৈর্ঘ্য ভরবেগের ব্যস্তানুপাতিক।"
},


{
    id: 9,

    chapter : "Atomic Structure",

    topic: "Hydrogen Spectrum",

    difficulty: "Hard",

    type: "single",

    question:
    "লাইম্যান (Lyman) সিরিজের সকল বর্ণরেখা কোন অঞ্চলে দেখা যায়?",

    options:[
        "A. দৃশ্যমান",
        "B. অবলোহিত",
        "C. অতিবেগুনি",
        "D. এক্স-রশ্মি"
    ],

    answer:["C"],

    hint:
    "n = 1 স্তরে পতনের কথা মনে করো।",

    explanation:
    "লাইম্যান সিরিজের সব ট্রানজিশন n = 1 স্তরে শেষ হয় এবং এদের তরঙ্গদৈর্ঘ্য অতিবেগুনি অঞ্চলে থাকে।"
},
{
    id: 10,

    chapter: "Atomic Structure",

    topic: "Quantum Theory",

    difficulty: "Easy",

    type: "single",

    question:
    "প্ল্যাঙ্কের কোয়ান্টাম তত্ত্ব অনুযায়ী এক একটি আলোক কণার শক্তি কত?",

    options:[
        "A. E = mc²",
        "B. E = hν",
        "C. E = pv",
        "D. E = RT"
    ],

    answer:["B"],

    hint:
    "Planck Constant (h) এবং Frequency (ν) মনে করো।",

    explanation:
    "প্ল্যাঙ্কের মতে শক্তি বিচ্ছিন্ন প্যাকেট বা কোয়ান্টা আকারে নির্গত বা শোষিত হয় এবং প্রতিটি ফোটনের শক্তি E = hν।"
},
{
    id: 11,

    chapter: "Atomic Structure",

    topic: "Quantum Numbers",

    difficulty: "Medium",

    source: "NEET",

    type: "single",

    question:
    "একটি পরমাণুর বাইরের কক্ষে থাকা একটি ইলেকট্রনের কোয়ান্টাম সংখ্যার সেটটি হলো: n = 4, l = 1, m = 0, s = +1/2। ইলেকট্রনটি কোন উপকক্ষে অবস্থান করছে?",

    options:[
        "A. 4s",
        "B. 4p",
        "C. 4d",
        "D. 3p"
    ],

    answer:["B"],

    hint:
    "l = 0 → s, l = 1 → p, l = 2 → d, l = 3 → f",

    explanation:
    "এখানে n = 4 নির্দেশ করে চতুর্থ শক্তিস্তর এবং l = 1 নির্দেশ করে p-উপকক্ষ। তাই ইলেকট্রনটি 4p উপকক্ষে অবস্থান করছে।"
},

{
    id: 12,

    chapter: "Atomic Structure",

    topic: "Quantum Numbers",

    difficulty: "Hard",

    source: "JEE",

    type: "multiple",

    question:
    "নিচের কোন কোয়ান্টাম সংখ্যার সেটগুলি একটি পরমাণুর ক্ষেত্রে অসম্ভব (Not Allowed)?",

    options:[
        "A. n = 3, l = 3, m = 0, s = -1/2",
        "B. n = 2, l = 1, m = -2, s = +1/2",
        "C. n = 1, l = 0, m = 0, s = -1/2",
        "D. n = 4, l = 2, m = -1, s = 0"
    ],

    answer:["A","B","D"],

    hint:
    "মনে রাখো:\nl < n\nm = -l থেকে +l\nSpin = ±1/2",

    explanation:
    "A-তে l = n দেওয়া হয়েছে, যা অসম্ভব। B-তে l = 1 হলেও m = -2 দেওয়া হয়েছে, যা গ্রহণযোগ্য নয়। D-তে spin = 0 দেওয়া হয়েছে, কিন্তু spin সর্বদা ±1/2 হয়। C-টি সম্পূর্ণ সঠিক।"
},

{
    id: 13,

    chapter: "Atomic Structure",

    topic: "Hund's Rule",

    difficulty: "Easy",

    source: "NCERT",

    type: "single",

    question:
    "হুন্ডের বহুত্ব নীতি (Hund's Rule of Maximum Multiplicity) প্রথম কোন উপকক্ষের ইলেকট্রন বিন্যাসের ক্ষেত্রে কার্যকর হয়?",

    options:[
        "A. s",
        "B. p",
        "C. d",
        "D. f"
    ],

    answer:["B"],

    hint:
    "যেখানে একাধিক সমশক্তির অরবিটাল থাকে, সেখানেই Hund's Rule প্রযোজ্য।",

    explanation:
    "s-উপকক্ষে মাত্র একটি অরবিটাল থাকে। p-উপকক্ষে তিনটি সমশক্তির অরবিটাল থাকায় এখান থেকেই Hund's Rule কার্যকর হয়।"
},

{
    id: 14,

    chapter: "Atomic Structure",

    topic: "Pauli Exclusion Principle",

    difficulty: "Medium",

    source: "WBCHSE",

    type: "single",

    question:
    "পাউলির অপবর্জন নীতি (Pauli's Exclusion Principle) লঙ্ঘিত হয়েছে নিচের কোন ইলেকট্রন বিন্যাসটিতে?",

    options:[
        "A. ↑   ↑   ↑",
        "B. ↑↓   ↑",
        "C. ↑↑",
        "D. ↓   ↓   ↓"
    ],

    answer:["C"],

    hint:
    "একই অরবিটালে দুটি ইলেকট্রনের spin কখনোই একই হতে পারে না।",

    explanation:
    "একটি অরবিটালে দুটি ইলেকট্রনের spin অবশ্যই বিপরীত (+1/2 ও -1/2) হতে হবে। C-তে একই অরবিটালে ↑↑ থাকায় Pauli's Exclusion Principle লঙ্ঘিত হয়েছে।"
},

{
    id: 15,

    chapter: "Atomic Structure",

    topic: "Electronic Configuration",

    difficulty: "Medium",

    source: "NEET",

    type: "single",

    question:
    "একটি লোহা (Fe, Z = 26) পরমাণুর ভূমিস্তরে মোট কতটি ইলেকট্রনের জন্য গৌণ কোয়ান্টাম সংখ্যা l = 2 হবে?",

    options:[
        "A. 6",
        "B. 2",
        "C. 10",
        "D. 0"
    ],

    answer:["A"],

    hint:
    "l = 2 নির্দেশ করে d-উপকক্ষকে।",

    explanation:
    "Fe-এর ইলেকট্রন বিন্যাস হলো 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²। এখানে শুধুমাত্র 3d উপকক্ষে 6টি ইলেকট্রন রয়েছে। তাই l = 2 বিশিষ্ট ইলেকট্রনের সংখ্যা = 6।"
},
{
    id: 16,

    chapter: "Atomic Structure",

    topic: "Aufbau Principle",

    difficulty: "Hard",

    source: "JEE Main",

    type: "single",

    question:
    "আউফবাউ নীতি (Aufbau Principle) অনুযায়ী, একটি ইলেকট্রন পরমাণুর খালি অরবিটালগুলিতে প্রবেশ করার সময় নিচের কোন ক্রমটি সঠিকভাবে মেনে চলবে?",

    options:[
        "A. 4s < 3d < 4p < 5s",
        "B. 3d < 4s < 4p < 5s",
        "C. 4s < 4p < 3d < 5s",
        "D. 3d < 4p < 4s < 5s"
    ],

    answer:["A"],

    hint:
    "(n+l) নিয়ম প্রয়োগ করো। (n+l) সমান হলে যার n কম, তার শক্তি কম।",

    explanation:
    "Aufbau Principle অনুযায়ী ইলেকট্রন সর্বনিম্ন শক্তির অরবিটাল আগে পূরণ করে। (n+l) নিয়ম অনুসারে শক্তির সঠিক ক্রম: 4s < 3d < 4p < 5s।"
},

{
    id: 17,

    chapter: "Atomic Structure",

    topic: "Electronic Configuration",

    difficulty: "Medium",

    source: "WBCHSE",

    type: "single",

    question:
    "তামা (Cu, Z = 29) পরমাণুর ক্ষেত্রে সর্ববহিঃস্থ কক্ষের ইলেকট্রন বিন্যাস [Ar] 3d¹⁰ 4s¹ হওয়ার আসল কারণ কী?",

    options:[
        "A. নিউক্লীয় আধান বৃদ্ধি পাওয়া",
        "B. প্রতিসাম্য জনিত স্থায়িত্ব এবং Exchange Energy",
        "C. Aufbau নীতির কঠোর অনুসরণ",
        "D. ইলেকট্রনগুলির মধ্যে বিকর্ষণ হ্রাস পাওয়া"
    ],

    answer:["B"],

    hint:
    "পূর্ণ d-উপকক্ষ অতিরিক্ত স্থিতিশীল হয়।",

    explanation:
    "সম্পূর্ণ পূর্ণ d¹⁰ উপকক্ষ অধিক প্রতিসম (symmetrical) এবং সর্বাধিক exchange energy লাভ করে, ফলে এটি অতিরিক্ত স্থায়িত্ব অর্জন করে।"
},

{
    id: 18,

    chapter: "Atomic Structure",

    topic: "Isotopes and Isobars",

    difficulty: "Easy",

    source: "NCERT",

    type: "single",

    question:
    "আইসোবার (Isobar) জোড় সম্বলিত বিকল্পটি চিহ্নিত করুন।",

    options:[
        "A. ¹⁴₆C এবং ¹⁴₇N",
        "B. ¹²₆C এবং ¹³₆C",
        "C. ⁴⁰₁₈Ar এবং ³⁹₁₉K",
        "D. ¹₁H এবং ²₁H"
    ],

    answer:["A"],

    hint:
    "Isobar → একই ভরসংখ্যা (A), ভিন্ন পারমাণবিক সংখ্যা (Z)।",

    explanation:
    "আইসোবারের ক্ষেত্রে ভরসংখ্যা একই কিন্তু পারমাণবিক সংখ্যা ভিন্ন হয়। ¹⁴₆C ও ¹⁴₇N এই শর্ত পূরণ করে।"
},

{
    id: 19,

    chapter: "Atomic Structure",

    topic: "Shapes of Orbitals",

    difficulty: "Medium",

    source: "NEET",

    type: "single",

    question:
    "d(z²) অরবিটালের আকৃতি সম্পর্কিত নিচের কোন তথ্যটি সঠিক?",

    options:[
        "A. এটি সম্পূর্ণ গোলাকার অরবিটাল",
        "B. দুটি লোব z-অক্ষ বরাবর এবং মাঝখানে একটি doughnut আকৃতির বলয় থাকে",
        "C. এর নোডাল তল xy তলে অবস্থিত",
        "D. এটি তিনটি নোডাল রেখা দ্বারা বিভক্ত"
    ],

    answer:["B"],

    hint:
    "d(z²) অন্যান্য d-অরবিটালের মতো নয়।",

    explanation:
    "d(z²) অরবিটালে z-অক্ষ বরাবর দুটি লোব থাকে এবং কেন্দ্রে একটি doughnut-আকৃতির ইলেকট্রন ঘনত্ব দেখা যায়।"
},

{
    id: 20,

    chapter: "Atomic Structure",

    topic: "Wave-Particle Duality",

    difficulty: "Hard",

    source: "JEE Advanced",

    type: "multiple",

    question:
    "কোয়ান্টাম মেকানিক্যাল মডেল অনুযায়ী নিচের কোন বক্তব্যগুলি সঠিক?",

    options:[
        "A. কৃষ্ণবস্তু বিকিরণ শুধুমাত্র তরঙ্গ তত্ত্ব দিয়ে ব্যাখ্যা করা যায় না।",
        "B. ফোটনের স্থির ভর নেই, কিন্তু ভরবেগ আছে।",
        "C. ম্যাক্রোস্কোপিক বস্তুর de Broglie তরঙ্গদৈর্ঘ্য সহজে পরিমাপ করা যায়।",
        "D. আলোক-তড়িৎ ক্রিয়ায় সর্বাধিক গতিশক্তি আলোর তীব্রতার ওপর নির্ভর করে না।"
    ],

    answer:["A","B","D"],

    hint:
    "Black Body, Photoelectric Effect এবং de Broglie ধারণাগুলি একসাথে মনে করো।",

    explanation:
    "Black Body Radiation এবং Photoelectric Effect কণা ধর্ম দিয়ে ব্যাখ্যা করা হয়। ফোটনের স্থির ভর নেই কিন্তু ভরবেগ আছে। ম্যাক্রোস্কোপিক বস্তুর de Broglie তরঙ্গদৈর্ঘ্য অত্যন্ত ক্ষুদ্র হওয়ায় তা পরিমাপ করা যায় না।"
},
{
    id: 21,

    chapter: "Atomic Structure",

    topic: "Electronic Configuration",

    difficulty: "Medium",

    source: "NEET",

    type: "single",

    question:
    "Cr³⁺ (Z = 24) আয়নে উপস্থিত অযুগ্ম (Unpaired) ইলেকট্রনের সংখ্যা কত?",

    options:[
        "A. 6",
        "B. 3",
        "C. 4",
        "D. 5"
    ],

    answer:["B"],

    hint:
    "প্রথমে Cr-এর ইলেকট্রন বিন্যাস লিখে তারপর 3টি ইলেকট্রন অপসারণ করো।",

    explanation:
    "Cr = [Ar] 3d⁵4s¹। Cr³⁺ গঠনের সময় প্রথমে 4s থেকে ১টি এবং পরে 3d থেকে ২টি ইলেকট্রন বেরিয়ে যায়। ফলে বিন্যাস হয় [Ar]3d³, যেখানে ৩টি অযুগ্ম ইলেকট্রন থাকে।"
},

{
    id: 22,

    chapter: "Atomic Structure",

    topic: "Bohr Model",

    difficulty: "Easy",

    source: "WBCHSE",

    type: "single",

    question:
    "রাদারফোর্ডের পরমাণু মডেলের ত্রুটি দূর করার জন্য নীলস বোর কোন বিখ্যাত তত্ত্বের সাহায্য নিয়েছিলেন?",

    options:[
        "A. আইনস্টাইনের আপেক্ষিকতাবাদ তত্ত্ব",
        "B. প্লাঙ্কের কোয়ান্টাম তত্ত্ব",
        "C. নিউটনের গতিসূত্র",
        "D. হাইজেনবার্গের অনিশ্চয়তা নীতি"
    ],

    answer:["B"],

    hint:
    "E = hν",

    explanation:
    "বোর প্লাঙ্কের Quantum Theory ব্যবহার করে দেখান যে ইলেকট্রন নির্দিষ্ট শক্তিস্তরে অবস্থান করে এবং শক্তি শোষণ বা বিকিরণ করলে এক কক্ষপথ থেকে অন্য কক্ষপথে যায়।"
},

{
    id: 23,

    chapter: "Atomic Structure",

    topic: "Hydrogen Spectrum",

    difficulty: "Hard",

    source: "JEE Main",

    type: "single",

    question:
    "হাইড্রোজেন পরমাণুর একটি ইলেকট্রন উচ্চতর শক্তিস্তর থেকে n = 3 স্তরে নেমে এলে কোন সিরিজ পাওয়া যায় এবং এটি বোর মডেলের কোন সীমাবদ্ধতা নির্দেশ করে?",

    options:[
        "A. Lyman; Zeeman effect ব্যাখ্যা করতে পারে না",
        "B. Paschen; Fine structure ব্যাখ্যা করতে পারে না",
        "C. Brackett; Electron charge ব্যাখ্যা করতে পারে না",
        "D. Balmer; Doppler effect ব্যাখ্যা করতে পারে না"
    ],

    answer:["B"],

    hint:
    "n = 3 → Paschen Series",

    explanation:
    "n = 3 স্তরে সমাপ্ত সকল ট্রানজিশন Paschen Series-এর অন্তর্গত। বোর মডেল স্পেকট্রামের Fine Structure ব্যাখ্যা করতে পারে না।"
},

{
    id: 24,

    chapter: "Atomic Structure",

    topic: "Quantum Numbers",

    difficulty: "Medium",

    source: "NCERT",

    type: "numerical",

    question:
    "একটি g-উপকক্ষের (l = 4) সর্বাধিক ইলেকট্রন ধারণ ক্ষমতা কত?",

    answer:["18"],

    hint:
    "সূত্র: 2(2l + 1)",

    explanation:
    "l = 4 হলে সর্বাধিক ইলেকট্রন = 2(2×4 + 1) = 18।"
},

{
    id: 25,

    chapter: "Atomic Structure",

    topic: "Quantum Mechanical Model",

    difficulty: "Hard",

    source: "JEE Advanced",

    type: "assertion",

    question:
    "Assertion (A): 2s অরবিটালে নিউক্লিয়াসের কাছে ইলেকট্রন পাওয়ার সম্ভাবনা প্রথমে সর্বাধিক, পরে শূন্য হয় এবং আবার বৃদ্ধি পায়.\n\nReason (R): 2s অরবিটালে একটি Radial Node থাকে।",

    options:[
        "A. A এবং R উভয়ই সত্য এবং R হলো A-এর সঠিক ব্যাখ্যা",
        "B. A এবং R উভয়ই সত্য কিন্তু R সঠিক ব্যাখ্যা নয়",
        "C. A সত্য কিন্তু R মিথ্যা",
        "D. A মিথ্যা কিন্তু R সত্য"
    ],

    answer:["A"],

    hint:
    "Radial node = n − l − 1",

    explanation:
    "2s অরবিটালের একটি radial node থাকে। নোডে ইলেকট্রন পাওয়ার সম্ভাবনা শূন্য হওয়ায় সম্ভাবনা প্রথমে বেশি, পরে শূন্য এবং তারপর আবার বৃদ্ধি পায়।"
},
]
questions.forEach((question, index) => {
    question.id = index + 1;
});

export default questions;