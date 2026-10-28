const questions = [
    {
        id: "cbt1-q1",
        type: "single",
        question: "Which type of bond is formed by the transfer of electrons from one atom to another? / এক পরমাণু থেকে অন্য পরমাণুতে ইলেকট্রন স্থানান্তরের মাধ্যমে কোন বন্ধন গঠিত হয়?",
        options: [
            "Covalent bond / সমযোজী বন্ধন",
            "Ionic bond / আয়নিক বন্ধন",
            "Hydrogen bond / হাইড্রোজেন বন্ধন",
            "Metallic bond / ধাতব বন্ধন"
        ],
        correctAnswer: 1,
        explanation: "An ionic bond results from electron transfer and the electrostatic attraction between oppositely charged ions. / ইলেকট্রন স্থানান্তর এবং বিপরীত আধানযুক্ত আয়নের মধ্যে তড়িৎস্থির আকর্ষণে আয়নিক বন্ধন গঠিত হয়।",
        difficulty: "easy",
        topic: "Ionic Bonding",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q2",
        type: "single",
        question: "How many valence electrons does an oxygen atom have? / অক্সিজেন পরমাণুর যোজ্যতা স্তরে কতটি ইলেকট্রন থাকে?",
        options: [
            "4",
            "5",
            "6",
            "8"
        ],
        correctAnswer: 2,
        explanation: "Oxygen has atomic number 8 and electronic configuration 1s² 2s² 2p⁴, giving six valence electrons. / অক্সিজেনের পারমাণবিক সংখ্যা ৮ এবং ইলেকট্রন বিন্যাস 1s² 2s² 2p⁴; তাই যোজ্যতা স্তরে ৬টি ইলেকট্রন থাকে।",
        difficulty: "easy",
        topic: "Valence Electrons",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q3",
        type: "single",
        question: "Which molecule contains a nonpolar covalent bond? / কোন অণুতে অপোলার সমযোজী বন্ধন রয়েছে?",
        options: [
            "HCl",
            "HF",
            "Cl₂",
            "H₂O"
        ],
        correctAnswer: 2,
        explanation: "In Cl₂, both atoms have identical electronegativity, so the shared electron pair is distributed equally. / Cl₂ অণুতে উভয় ক্লোরিন পরমাণুর তড়িৎঋণাত্মকতা সমান, তাই বন্ধন ইলেকট্রন যুগল সমানভাবে ভাগ হয়।",
        difficulty: "easy",
        topic: "Covalent Bonding",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q4",
        type: "single",
        question: "According to the octet rule, how many electrons are generally present in the valence shell of a stable main-group atom? / অক্টেট নিয়ম অনুযায়ী, একটি স্থিতিশীল প্রধান-গোষ্ঠীর পরমাণুর যোজ্যতা স্তরে সাধারণত কতটি ইলেকট্রন থাকে?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        correctAnswer: 3,
        explanation: "The octet rule describes the tendency of many atoms to attain eight valence electrons, although there are important exceptions. / অনেক পরমাণুর যোজ্যতা স্তরে আটটি ইলেকট্রন অর্জনের প্রবণতাকে অক্টেট নিয়ম বলে, যদিও এর গুরুত্বপূর্ণ ব্যতিক্রম রয়েছে।",
        difficulty: "easy",
        topic: "Octet Rule",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q5",
        type: "single",
        question: "What is the shape of a methane (CH₄) molecule? / মিথেন (CH₄) অণুর আকৃতি কী?",
        options: [
            "Trigonal planar / ত্রিকোণীয় সমতল",
            "Tetrahedral / চতুস্তলকীয়",
            "Trigonal pyramidal / ত্রিকোণীয় পিরামিডীয়",
            "Bent / বাঁকানো"
        ],
        correctAnswer: 1,
        explanation: "Carbon has four bonding pairs and no lone pairs in CH₄, giving a tetrahedral shape with bond angles of approximately 109.5°. / CH₄-এ কার্বনের চারটি বন্ধন ইলেকট্রন যুগল ও কোনো নিঃসঙ্গ যুগল নেই; তাই অণুটি প্রায় 109.5° বন্ধন কোণবিশিষ্ট চতুস্তলকীয়।",
        difficulty: "easy",
        topic: "VSEPR Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q6",
        type: "single",
        question: "What is the bond order of N₂ according to molecular orbital theory? / আণবিক অরবিটাল তত্ত্ব অনুযায়ী N₂ অণুর বন্ধনক্রম কত?",
        options: [
            "1",
            "1.5",
            "2",
            "3"
        ],
        correctAnswer: 3,
        explanation: "N₂ has 10 bonding and 4 antibonding valence electrons, so its bond order is (10 − 4)/2 = 3. / N₂-তে ১০টি বন্ধনকারী ও ৪টি প্রতিবন্ধনকারী যোজ্যতা ইলেকট্রন থাকে; তাই বন্ধনক্রম (10 − 4)/2 = 3।",
        difficulty: "medium",
        topic: "Molecular Orbital Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q7",
        type: "single",
        question: "Which molecule has a bent molecular shape? / কোন অণুর আকৃতি বাঁকানো?",
        options: [
            "CO₂",
            "BeCl₂",
            "H₂O",
            "BF₃"
        ],
        correctAnswer: 2,
        explanation: "Oxygen in H₂O has two bonding pairs and two lone pairs. Lone-pair repulsions produce a bent molecular shape. / H₂O-তে অক্সিজেনের দুটি বন্ধন যুগল ও দুটি নিঃসঙ্গ যুগল থাকে। নিঃসঙ্গ যুগলের বিকর্ষণে অণুটি বাঁকানো হয়।",
        difficulty: "easy",
        topic: "Molecular Geometry",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q8",
        type: "single",
        question: "Which of the following molecules is nonpolar despite having polar bonds? / কোন অণুতে পোলার বন্ধন থাকা সত্ত্বেও অণুটি অপোলার?",
        options: [
            "H₂O",
            "NH₃",
            "SO₂",
            "CO₂"
        ],
        correctAnswer: 3,
        explanation: "CO₂ is linear and symmetrical, so its two C=O bond dipoles cancel each other. / CO₂ অণু সরলরৈখিক ও প্রতিসম; তাই দুটি C=O বন্ধনের দ্বিমেরু ভ্রামক পরস্পরকে বাতিল করে।",
        difficulty: "medium",
        topic: "Dipole Moment",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q9",
        type: "single",
        question: "What is the hybridisation of the central carbon atom in CO₂? / CO₂ অণুতে কেন্দ্রীয় কার্বন পরমাণুর সংকরায়ন কী?",
        options: [
            "sp",
            "sp²",
            "sp³",
            "dsp²"
        ],
        correctAnswer: 0,
        explanation: "Carbon has two regions of electron density around it in CO₂, giving sp hybridisation and a linear arrangement. / CO₂-তে কার্বনের চারপাশে দুটি ইলেকট্রন ঘনত্বের অঞ্চল থাকে; তাই sp সংকরায়ন ও সরলরৈখিক বিন্যাস হয়।",
        difficulty: "medium",
        topic: "Hybridisation",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q10",
        type: "single",
        question: "Which species has an incomplete octet around its central atom? / কোন প্রজাতিতে কেন্দ্রীয় পরমাণুর অক্টেট অসম্পূর্ণ থাকে?",
        options: [
            "CH₄",
            "NH₃",
            "BF₃",
            "H₂O"
        ],
        correctAnswer: 2,
        explanation: "In BF₃, boron forms three bonds and has only six electrons around it. / BF₃-তে বোরন তিনটি বন্ধন গঠন করে এবং তার চারপাশে মাত্র ছয়টি ইলেকট্রন থাকে।",
        difficulty: "medium",
        topic: "Octet Rule Exceptions",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q11",
        type: "single",
        question: "Which molecule has a trigonal pyramidal shape? / কোন অণুর আকৃতি ত্রিকোণীয় পিরামিডীয়?",
        options: [
            "BF₃",
            "NH₃",
            "CO₂",
            "CH₄"
        ],
        correctAnswer: 1,
        explanation: "NH₃ has three N–H bonds and one lone pair on nitrogen. Its electron-pair geometry is tetrahedral, but its molecular shape is trigonal pyramidal. / NH₃-তে নাইট্রোজেনের তিনটি N–H বন্ধন ও একটি নিঃসঙ্গ যুগল থাকে। ইলেকট্রন যুগলের জ্যামিতি চতুস্তলকীয় হলেও অণুর আকৃতি ত্রিকোণীয় পিরামিডীয়।",
        difficulty: "easy",
        topic: "VSEPR Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q12",
        type: "single",
        question: "Which intermolecular interaction is especially important in liquid water? / তরল জলে কোন আন্তঃআণবিক আকর্ষণ বিশেষ গুরুত্বপূর্ণ?",
        options: [
            "Hydrogen bonding / হাইড্রোজেন বন্ধন",
            "Metallic bonding / ধাতব বন্ধন",
            "Ionic bonding between water molecules / জলের অণুগুলির মধ্যে আয়নিক বন্ধন",
            "Covalent bonding between separate water molecules / পৃথক জলের অণুর মধ্যে সমযোজী বন্ধন"
        ],
        correctAnswer: 0,
        explanation: "Water molecules form hydrogen bonds because hydrogen is bonded to highly electronegative oxygen. / হাইড্রোজেন উচ্চ তড়িৎঋণাত্মক অক্সিজেনের সঙ্গে যুক্ত থাকায় জলের অণুগুলির মধ্যে হাইড্রোজেন বন্ধন গঠিত হয়।",
        difficulty: "easy",
        topic: "Hydrogen Bonding",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q13",
        type: "single",
        question: "What is the formal charge on nitrogen in NH₄⁺? / NH₄⁺-এ নাইট্রোজেনের ফরমাল চার্জ কত?",
        options: [
            "−1",
            "0",
            "+1",
            "+2"
        ],
        correctAnswer: 2,
        explanation: "Formal charge = 5 − 0 − (8/2) = +1 for nitrogen in NH₄⁺. / নাইট্রোজেনের ফরমাল চার্জ = ৫ − ০ − (৮/২) = +১।",
        difficulty: "medium",
        topic: "Formal Charge",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q14",
        type: "single",
        question: "Which species has the highest bond order? / কোন প্রজাতির বন্ধনক্রম সর্বাধিক?",
        options: [
            "O₂",
            "O₂⁺",
            "O₂⁻",
            "O₂²⁻"
        ],
        correctAnswer: 1,
        explanation: "O₂ has bond order 2. Removing an electron from an antibonding orbital gives O₂⁺ bond order 2.5; adding electrons to antibonding orbitals lowers the bond order. / O₂-এর বন্ধনক্রম ২। প্রতিবন্ধনকারী অরবিটাল থেকে একটি ইলেকট্রন অপসারণে O₂⁺-এর বন্ধনক্রম ২.৫ হয়; প্রতিবন্ধনকারী অরবিটালে ইলেকট্রন যোগ হলে বন্ধনক্রম কমে।",
        difficulty: "hard",
        topic: "Bond Order",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q15",
        type: "single",
        question: "According to VSEPR theory, which electron-pair repulsion is generally strongest? / VSEPR তত্ত্ব অনুযায়ী কোন ইলেকট্রন যুগলের বিকর্ষণ সাধারণত সবচেয়ে বেশি?",
        options: [
            "Bond pair–bond pair / বন্ধন যুগল–বন্ধন যুগল",
            "Lone pair–bond pair / নিঃসঙ্গ যুগল–বন্ধন যুগল",
            "Lone pair–lone pair / নিঃসঙ্গ যুগল–নিঃসঙ্গ যুগল",
            "All repulsions are equal / সব বিকর্ষণ সমান"
        ],
        correctAnswer: 2,
        explanation: "The general order is lone pair–lone pair > lone pair–bond pair > bond pair–bond pair. / সাধারণ ক্রম: নিঃসঙ্গ যুগল–নিঃসঙ্গ যুগল > নিঃসঙ্গ যুগল–বন্ধন যুগল > বন্ধন যুগল–বন্ধন যুগল।",
        difficulty: "medium",
        topic: "VSEPR Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q16",
        type: "single",
        question: "Which molecule has zero dipole moment because of its symmetrical tetrahedral geometry? / প্রতিসম চতুস্তলকীয় জ্যামিতির কারণে কোন অণুর দ্বিমেরু ভ্রামক শূন্য?",
        options: [
            "CH₃Cl",
            "CH₂Cl₂",
            "CCl₄",
            "CHCl₃"
        ],
        correctAnswer: 2,
        explanation: "In CCl₄, the four identical C–Cl bond dipoles cancel because of the symmetrical tetrahedral arrangement. / CCl₄-তে প্রতিসম চতুস্তলকীয় বিন্যাসের কারণে চারটি অভিন্ন C–Cl বন্ধনের দ্বিমেরু ভ্রামক পরস্পরকে বাতিল করে।",
        difficulty: "medium",
        topic: "Dipole Moment",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q17",
        type: "single",
        question: "What is the bond order of O₂⁺ according to molecular orbital theory? / আণবিক অরবিটাল তত্ত্ব অনুযায়ী O₂⁺-এর বন্ধনক্রম কত?",
        options: [
            "1.5",
            "2",
            "2.5",
            "3"
        ],
        correctAnswer: 2,
        explanation: "Neutral O₂ has bond order 2. Removing one electron from an antibonding π* orbital increases the bond order to 2.5. / নিরপেক্ষ O₂-এর বন্ধনক্রম ২। প্রতিবন্ধনকারী π* অরবিটাল থেকে একটি ইলেকট্রন অপসারণে বন্ধনক্রম ২.৫ হয়।",
        difficulty: "hard",
        topic: "Molecular Orbital Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q18",
        type: "single",
        question: "Which of the following is a Lewis acid? / নিচের কোনটি লুইস অ্যাসিড?",
        options: [
            "NH₃",
            "OH⁻",
            "BF₃",
            "H₂O"
        ],
        correctAnswer: 2,
        explanation: "BF₃ is electron-deficient and can accept an electron pair, so it acts as a Lewis acid. / BF₃ ইলেকট্রন-ঘাটতিযুক্ত এবং ইলেকট্রন যুগল গ্রহণ করতে পারে; তাই এটি লুইস অ্যাসিড।",
        difficulty: "medium",
        topic: "Lewis Acid–Base Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q19",
        type: "single",
        question: "How many sigma (σ) and pi (π) bonds are present in an ethene (C₂H₄) molecule? / ইথিন (C₂H₄) অণুতে কতটি সিগমা (σ) ও পাই (π) বন্ধন থাকে?",
        options: [
            "4 σ and 1 π",
            "5 σ and 1 π",
            "5 σ and 2 π",
            "6 σ and 1 π"
        ],
        correctAnswer: 1,
        explanation: "Ethene has four C–H sigma bonds and one C–C sigma bond, plus one pi bond in the C=C double bond. / ইথিনে চারটি C–H সিগমা বন্ধন ও একটি C–C সিগমা বন্ধন রয়েছে; C=C দ্বিবন্ধনে আরও একটি পাই বন্ধন থাকে।",
        difficulty: "medium",
        topic: "Sigma and Pi Bonds",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q20",
        type: "single",
        question: "Which species has the shortest bond among the following? / নিচের কোন প্রজাতির বন্ধন সবচেয়ে ছোট?",
        options: [
            "N₂",
            "N₂⁺",
            "N₂⁻",
            "N₂²⁻"
        ],
        correctAnswer: 0,
        explanation: "N₂ has bond order 3. Removing an electron from its bonding orbital or adding electrons to antibonding orbitals lowers the bond order, generally lengthening the bond. / N₂-এর বন্ধনক্রম ৩। বন্ধনকারী অরবিটাল থেকে ইলেকট্রন অপসারণ বা প্রতিবন্ধনকারী অরবিটালে ইলেকট্রন যোগে বন্ধনক্রম কমে এবং সাধারণত বন্ধনের দৈর্ঘ্য বাড়ে।",
        difficulty: "hard",
        topic: "Bond Length and Bond Order",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q21",
        type: "single",
        question: "What is the electron-pair geometry around sulfur in SF₄? / SF₄-এ সালফারের চারপাশে ইলেকট্রন যুগলের জ্যামিতি কী?",
        options: [
            "Tetrahedral / চতুস্তলকীয়",
            "Trigonal bipyramidal / ত্রিকোণীয় দ্বিপিরামিডীয়",
            "Octahedral / অষ্টতলকীয়",
            "Square planar / বর্গাকার সমতল"
        ],
        correctAnswer: 1,
        explanation: "SF₄ has four bonding pairs and one lone pair around sulfur, giving five electron domains with trigonal bipyramidal electron-pair geometry. / SF₄-এ সালফারের চারপাশে চারটি বন্ধন যুগল ও একটি নিঃসঙ্গ যুগল থাকে; তাই পাঁচটি ইলেকট্রন অঞ্চল এবং ত্রিকোণীয় দ্বিপিরামিডীয় ইলেকট্রন-যুগল জ্যামিতি হয়।",
        difficulty: "hard",
        topic: "VSEPR Theory",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q22",
        type: "single",
        question: "Which statement about resonance is correct? / রেজোন্যান্স সম্পর্কে কোন বক্তব্যটি সঠিক?",
        options: [
            "The molecule rapidly switches between structures. / অণুটি দ্রুত বিভিন্ন গঠনের মধ্যে পরিবর্তিত হয়।",
            "The actual structure is a resonance hybrid. / প্রকৃত গঠন একটি রেজোন্যান্স হাইব্রিড।",
            "Only one resonance structure exists at a time. / এক সময়ে কেবল একটি রেজোন্যান্স গঠন থাকে।",
            "Resonance changes the positions of nuclei. / রেজোন্যান্সে নিউক্লিয়াসের অবস্থান পরিবর্তিত হয়।"
        ],
        correctAnswer: 1,
        explanation: "Resonance structures are alternative electron arrangements; the actual molecule is described by a resonance hybrid, not by switching between structures. / রেজোন্যান্স গঠনগুলি ইলেকট্রনের বিকল্প বিন্যাস বোঝায়; প্রকৃত অণুকে রেজোন্যান্স হাইব্রিড দিয়ে বর্ণনা করা হয়, গঠনগুলির মধ্যে দ্রুত পরিবর্তন হিসেবে নয়।",
        difficulty: "medium",
        topic: "Resonance",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q23",
        type: "single",
        question: "Which molecule has a square planar molecular geometry? / কোন অণুর আণবিক জ্যামিতি বর্গাকার সমতল?",
        options: [
            "CH₄",
            "XeF₄",
            "SF₄",
            "NH₃"
        ],
        correctAnswer: 1,
        explanation: "XeF₄ has six electron domains around xenon: four bonding pairs and two opposite lone pairs. The molecular shape is square planar. / XeF₄-এ জেননের চারপাশে ছয়টি ইলেকট্রন অঞ্চল থাকে: চারটি বন্ধন যুগল ও বিপরীত দিকে দুটি নিঃসঙ্গ যুগল। তাই আণবিক আকৃতি বর্গাকার সমতল।",
        difficulty: "hard",
        topic: "Molecular Geometry",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q24",
        type: "single",
        question: "Which statement correctly describes a coordinate covalent bond? / কোন বক্তব্যটি সন্নিবেশ সমযোজী বন্ধনকে সঠিকভাবে বর্ণনা করে?",
        options: [
            "Each atom contributes one electron to the shared pair. / প্রতিটি পরমাণু একটি করে ইলেকট্রন দেয়।",
            "Both shared electrons are donated by one atom. / বন্ধন যুগলের উভয় ইলেকট্রন একটি পরমাণু দেয়।",
            "Electrons are completely transferred to form ions. / ইলেকট্রন সম্পূর্ণ স্থানান্তরিত হয়ে আয়ন গঠিত হয়।",
            "The bond contains no shared electrons. / বন্ধনে কোনো যৌথ ইলেকট্রন থাকে না।"
        ],
        correctAnswer: 1,
        explanation: "In a coordinate covalent bond, both electrons in the shared pair originate from the donor atom. / সন্নিবেশ সমযোজী বন্ধনে যৌথ ইলেকট্রন যুগলের উভয় ইলেকট্রন দাতা পরমাণু থেকে আসে।",
        difficulty: "medium",
        topic: "Coordinate Bonding",
        marks: 4,
        negativeMarks: 1
    },
    {
        id: "cbt1-q25",
        type: "single",
        question: "Which species is paramagnetic according to molecular orbital theory? / আণবিক অরবিটাল তত্ত্ব অনুযায়ী কোন প্রজাতি প্যারাম্যাগনেটিক?",
        options: [
            "N₂",
            "O₂",
            "CO",
            "CN⁻"
        ],
        correctAnswer: 1,
        explanation: "O₂ has two unpaired electrons in its degenerate antibonding π* orbitals, making it paramagnetic. / O₂-এর সমশক্তিসম্পন্ন প্রতিবন্ধনকারী π* অরবিটালে দুটি অযুগ্ম ইলেকট্রন থাকে; তাই এটি প্যারাম্যাগনেটিক।",
        difficulty: "medium",
        topic: "Magnetic Properties",
        marks: 4,
        negativeMarks: 1
    }
];
export default questions;