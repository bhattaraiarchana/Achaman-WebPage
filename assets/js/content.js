// assets/js/content.js
// A lightweight client-side CMS store. It lets the admin dashboard update
// bilingual content, images and site settings without editing HTML files.

const ACHAMAN_CONTENT_VERSION = 1;
const ACHAMAN_CONTENT_KEY = "achamanContent";

const defaultContent = {
  version: ACHAMAN_CONTENT_VERSION,
  site: {
    logo: "assets/img/logo.png",
    brandNe: "आचमन",
    brandEn: "CREATIVE SOLUTIONS",
    organizationName: "Achaman Creative Solutions Pvt. Ltd.",
    tagline: {
      en: "Research • Innovation • Pedagogy",
      np: "अनुसन्धान • नवप्रवर्तन • शिक्षाशास्त्र"
    },
    contact: {
      email: "arcbhattarai11@gmail.com",
      phone: "+977 9848023682",
      phoneRaw: "9848023682",
      location: {
        en: "Kathmandu, Nepal",
        np: "काठमाडौं, नेपाल"
      },
      address: {
        en: "Kathmandu, Nepal (exact address can be updated here).",
        np: "काठमाडौं, नेपाल (ठ्याक्कै ठेगाना यहाँ अद्यावधिक गर्न सकिन्छ)।"
      }
    },
    socials: {
      facebook: "https://facebook.com",
      whatsapp: "9848023682"
    }
  },
  pages: {
    home: {
      badge: { en: "Education • Research • Consultancy", np: "शिक्षा • अनुसन्धान • परामर्श" },
      title: {
        en: "Advancing research, innovation and pedagogical excellence.",
        np: "अनुसन्धान, नवप्रवर्तन र शैक्षिक उत्कृष्टतामा समर्पित संस्था।"
      },
      subtitle: {
        en: "Achaman Creative Solutions bridges academic rigor and practical implementation through research, consultancy and exam-focused preparation classes.",
        np: "आचमन क्रियटिभ सोलुसन्सले अनुसन्धान, परामर्श र तयारी कक्षामार्फत शैक्षिक क्षेत्रमा ज्ञान र व्यवहारबीचको दूरी घटाउने लक्ष्य राखेको छ।"
      },
      primaryCta: { en: "Explore services", np: "सेवाहरू हेर्नुहोस्" },
      secondaryCta: { en: "Exam preparation classes", np: "तयारी कक्षामा जानुहोस्" },
      stats: [
        { value: "10+", label: { en: "Years of experience", np: "वर्षको अनुभव" } },
        { value: "20+", label: { en: "Completed collaborations", np: "लगानी/सहकार्यहरू" } },
        { value: "5+", label: { en: "Education-focused services", np: "शिक्षा केन्द्रित सेवाहरू" } }
      ],
      featureTitle: {
        en: "Research-driven solutions for schools, universities and development partners.",
        np: "विद्यालय, कलेज, विश्वविद्यालय र विकास साझेदारका लागि अनुसन्धान आधारित सेवा।"
      },
      featureText: {
        en: "From project design and evaluation to capacity building and technology integration, we support institutions to design evidence-based programs.",
        np: "आफ्नो परियोजना र कार्यक्रमलाई प्रमाणमा आधारित बनाउन चाहने संस्थाहरूका लागि डिजाइन, अनुसन्धान, मूल्याङ्कन र तालिमसम्बन्धी सहयोग।"
      },
      sectionTitle: { en: "Why Achaman?", np: "किन आचमन?" },
      sectionSubtitle: {
        en: "An academic space grounded in research, innovation and classroom realities.",
        np: "अनुसन्धान र कक्षाकोठाको अनुभवबाट जोडिएको शैक्षिक अभ्यासको साझा थलो।"
      },
      highlights: [
        {
          title: { en: "Research-informed", np: "अनुसन्धानमा आधारित" },
          text: { en: "We design and implement studies, evaluations and documentation that speak to real policy and classroom needs.", np: "नीति र कक्षाकोठा दुबैलाई सम्बोधन गर्ने अध्ययन, मूल्याङ्कन र दस्तावेजीकरण।" }
        },
        {
          title: { en: "Innovation & pedagogy", np: "नवप्रवर्तन र शिक्षण विधि" },
          text: { en: "We experiment with pedagogical approaches, digital tools and assessment practices that work for Nepali learners.", np: "शिक्षण–शिकाइ प्रक्रिया, डिजिटल उपकरण र मूल्याङ्कनका नयाँ अभ्यासमा प्रयोग।" }
        },
        {
          title: { en: "Guidance for aspirants", np: "अभ्यर्थीका लागि सहजीकरण" },
          text: { en: "Structured preparation support for Loksewa and Sikshak Sewa aspirants with a focus on concept clarity and practice.", np: "लोक सेवा र शिक्षक सेवा अभ्यर्थीलाई सुदृढ योजना, अवधारणा स्पष्टता र अभ्यासमा ध्यान।" }
        }
      ]
    },
    about: {
      title: { en: "About Achaman Creative Solutions", np: "आचमन क्रियटिभ सोलुसन्सको परिचय" },
      intro: { en: "Achaman Creative Solutions Pvt. Ltd. is an education-focused research, consulting and training organization based in Nepal.", np: "आचमन क्रियटिभ सोलुसन्स प्रा. लि. शिक्षा क्षेत्रमा केन्द्रित अनुसन्धान, परामर्श र तालिममा काम गर्ने संस्था हो।" },
      missionTitle: { en: "Mission", np: "उद्देश्य" },
      missionText: { en: "To contribute to a progressive educational ecosystem through research, evidence-based consultancy, and creative learning solutions.", np: "अनुसन्धान, प्रमाणमा आधारित परामर्श र सिर्जनात्मक सिकाइ समाधानमार्फत प्रगतिशील शैक्षिक परिवेश निर्माणमा योगदान पुर्‍याउनु।" },
      objectivesTitle: { en: "Core objectives", np: "मुख्य उद्देश्यहरू" },
      objectives: [
        { en: "Design and implement education and development-related research and evaluations.", np: "शिक्षा तथा विकाससम्बन्धी अध्ययन, अनुसन्धान र मूल्याङ्कन कार्य गर्नु।" },
        { en: "Support institutions in policy formulation, program design and governance strengthening.", np: "नीति निर्माण, कार्यक्रम डिजाइन र संस्थागत सशक्तिकरणमा प्राविधिक सहयोग पुर्‍याउनु।" },
        { en: "Offer capacity development and professional learning opportunities for teachers and education professionals.", np: "शिक्षक तथा शिक्षा पेशाकर्मीका लागि क्षमता विकास र पेशागत सिकाइका अवसर उपलब्ध गराउनु।" },
        { en: "Provide structured exam preparation and academic support for aspiring education professionals.", np: "शिक्षा पेशामा प्रवेश गर्न चाहने अभ्यर्थीका लागि संरचित तयारी र शैक्षिक सहयोग प्रदान गर्नु।" }
      ]
    },
    services: {
      title: { en: "Services", np: "सेवाहरू" },
      subtitle: { en: "Integrated services that combine research, pedagogy, innovation and capacity development.", np: "अनुसन्धान, शिक्षाशास्त्र, नवप्रवर्तन र क्षमता विकासलाई जोड्ने समग्र सेवाहरू।" }
    },
    research: {
      title: { en: "Research & Innovation", np: "अनुसन्धान र नवप्रवर्तन" },
      subtitle: { en: "From classroom to policy – connecting research, practice and innovation.", np: "कक्षाकोठादेखि नीतिसम्म — अनुसन्धान, अभ्यास र नवप्रवर्तनलाई जोड्दै।" },
      projectsTitle: { en: "Projects & collaborations", np: "परियोजना र सहकार्यहरू" },
      projectsSubtitle: { en: "Admin can publish major research projects, partner organizations and publications here.", np: "एडमिनले यहाँ प्रमुख अनुसन्धान परियोजना, साझेदार संस्था र प्रकाशनहरू राख्न सक्छन्।" }
    },
    exam: {
      title: { en: "Exam Preparation", np: "तयारी कक्षा" },
      subtitle: { en: "Structured preparation space for Loksewa and Sikshak Sewa aspirants.", np: "लोक सेवा र शिक्षक सेवा अभ्यर्थीका लागि संरचित तयारीको स्थान।" }
    },
    team: {
      title: { en: "Contact Persons & Team", np: "सम्पर्क व्यक्ति र टिम" },
      subtitle: { en: "Academic team involved in research, training and preparation programs.", np: "अनुसन्धान, प्रशिक्षण र तयारी कार्यक्रममा संलग्न शैक्षिक टिम।" },
      coreTitle: { en: "Core Team", np: "मुख्य टिम" },
      advisorsTitle: { en: "Advisors", np: "सल्लाहकारहरू" }
    },
    contact: {
      title: { en: "Contact", np: "सम्पर्क" },
      subtitle: { en: "Reach out for research collaboration, consultancy or exam preparation inquiries.", np: "अनुसन्धान, परामर्श तथा तयारी कक्षासम्बन्धी जानकारीका लागि सम्पर्क गर्नुहोस्।" },
      orgTitle: { en: "Organization details", np: "संस्थागत विवरण" },
      note: { en: "You can also reach us via the WhatsApp button on the bottom right.", np: "तल दायाँपट्टिको WhatsApp बटनबाट पनि सम्पर्क गर्न सक्नुहुन्छ।" }
    }
  },
  services: [
    { title: { en: "Research & evaluation", np: "अनुसन्धान र मूल्याङ्कन" }, text: { en: "Designing and executing research, baseline–endline surveys, evaluations and documentation for education and development programs.", np: "शिक्षा तथा विकास कार्यक्रमका लागि अनुसन्धान, बेसलाइन–एन्डलाइन सर्वेक्षण, मूल्याङ्कन र दस्तावेजीकरण।" } },
    { title: { en: "Project & proposal design", np: "परियोजना र प्रस्तावना डिजाइन" }, text: { en: "Supporting organizations to conceptualize, design and write contextually grounded, evidence-based project proposals.", np: "सन्दर्भअनुकूल र प्रमाणमा आधारित परियोजना प्रस्तावना अवधारणा, डिजाइन र लेखनमा सहयोग।" } },
    { title: { en: "Policy & governance support", np: "नीति र सुशासन सहयोग" }, text: { en: "Technical support for policy formulation, institutional development and governance strengthening in the education sector.", np: "शिक्षा क्षेत्रमा नीति निर्माण, संस्थागत विकास र सुशासन सुदृढीकरणका लागि प्राविधिक सहयोग।" } },
    { title: { en: "Capacity building & training", np: "क्षमता विकास र तालिम" }, text: { en: "Designing and facilitating workshops, teacher professional development, and leadership programs.", np: "कार्यशाला, शिक्षक पेशागत विकास र नेतृत्व कार्यक्रमको डिजाइन तथा सहजीकरण।" } },
    { title: { en: "Innovation & technology", np: "नवप्रवर्तन र प्रविधि" }, text: { en: "Exploring and integrating digital tools, learning platforms and innovative pedagogies in teaching-learning.", np: "शिक्षण–सिकाइमा डिजिटल उपकरण, सिकाइ प्लेटफर्म र नवीन शिक्षण विधिको प्रयोग।" } },
    { title: { en: "Exam preparation programs", np: "परीक्षा तयारी कार्यक्रम" }, text: { en: "Structured preparation support for Loksewa and Sikshak Sewa aspirants, combining content, strategy and practice.", np: "लोक सेवा र शिक्षक सेवा अभ्यर्थीका लागि सामग्री, रणनीति र अभ्यास जोडिएको संरचित तयारी सहयोग।" } }
  ],
  researchBlocks: [
    { title: { en: "Research & studies", np: "अनुसन्धान र अध्ययन" }, text: { en: "Achaman and its team members have engaged in diverse education and development-focused research, including needs assessments, baseline studies and program evaluations.", np: "आचमन र यसको टिमले आवश्यकता पहिचान, बेसलाइन अध्ययन र कार्यक्रम मूल्याङ्कनसहित शिक्षा तथा विकास केन्द्रित विविध अनुसन्धानमा संलग्नता राखेको छ।" } },
    { title: { en: "Innovation spaces", np: "नवप्रवर्तनका अभ्यास क्षेत्र" }, text: { en: "We create spaces where teachers, students and institutions can experiment with new pedagogical ideas, tools and assessment practices.", np: "शिक्षक, विद्यार्थी र संस्थाले नयाँ शिक्षण विचार, उपकरण र मूल्याङ्कन अभ्यास परीक्षण गर्न सक्ने वातावरण बनाउँछौं।" } },
    { title: { en: "Partnerships", np: "साझेदारी" }, text: { en: "We collaborate with academic institutions, NGOs and education stakeholders to co-create contextually relevant knowledge.", np: "सन्दर्भअनुकूल ज्ञान सह-निर्माणका लागि शैक्षिक संस्था, गैरसरकारी संस्था र शिक्षा सरोकारवालासँग सहकार्य गर्छौं।" } }
  ],
  projects: [
    { title: { en: "Research portfolio coming soon", np: "अनुसन्धान पोर्टफोलियो छिट्टै आउनेछ" }, text: { en: "Use the admin dashboard to add completed projects, partners, reports and publications.", np: "सम्पन्न परियोजना, साझेदार, प्रतिवेदन र प्रकाशन थप्न एडमिन ड्यासबोर्ड प्रयोग गर्नुहोस्।" } }
  ],
  exams: [
    {
      label: "Loksewa",
      title: { en: "Loksewa Preparation Classes", np: "लोक सेवा तयारी कक्षा" },
      subtitle: { en: "Content, strategy and regular practice for public service aspirants.", np: "लोक सेवा अभ्यर्थीका लागि सामग्री, रणनीति र नियमित अभ्यास।" },
      overviewTitle: { en: "Program overview", np: "कार्यक्रमको संक्षिप्त विवरण" },
      overview: { en: "Achaman plans preparation programs for Loksewa aspirants with content coverage, exam strategy and regular test practice.", np: "आचमनले लोक सेवा अभ्यर्थीका लागि सामग्री, रणनीति र नियमित परीक्षा अभ्यास समेटिएको तयारी कार्यक्रम सञ्चालन गर्ने योजना बनाएको छ।" },
      featuresTitle: { en: "Key features", np: "मुख्य विशेषताहरू" },
      features: [
        { en: "Concept-based classes and clear explanation.", np: "अवधारणामा आधारित कक्षा र स्पष्ट व्याख्या।" },
        { en: "Regular practice tests and feedback.", np: "नियमित अभ्यास परीक्षा र फिडब्याक।" },
        { en: "Self-study planning and guidance.", np: "स्वअध्ययनका लागि योजना र मार्गदर्शन।" },
        { en: "Interactive classes in small groups.", np: "साना समूहमा अन्तर्क्रियात्मक कक्षा।" }
      ],
      batchTitle: { en: "Sample batch structure", np: "नमूना ब्याच संरचना" },
      batches: [
        { en: "Orientation class and initial assessment.", np: "ओरिएन्टेसन कक्षा र प्रारम्भिक मूल्याङ्कन।" },
        { en: "Detailed content coverage.", np: "पाठ्य–वस्तुको विस्तृत आवरण।" },
        { en: "Revision and model-question practice.", np: "पुनरावृत्ति र नमूना प्रश्न अभ्यास।" },
        { en: "Final mock test and counselling.", np: "अन्तिम मोक परीक्षा र परामर्श।" }
      ]
    },
    {
      label: "Sikshak Sewa",
      title: { en: "Sikshak Sewa Preparation Classes", np: "शिक्षक सेवा तयारी कक्षा" },
      subtitle: { en: "Preparation that connects exam success with educational understanding.", np: "अभ्यर्थीको शैक्षिक दृष्टिकोण र परीक्षात्मक तयारिमा एकै साथ ध्यान।" },
      overviewTitle: { en: "Program overview", np: "कार्यक्रमको संक्षिप्त विवरण" },
      overview: { en: "The Sikshak Sewa program focuses on examination needs as well as a deeper understanding of teaching-learning processes.", np: "शिक्षक सेवा तयारी कार्यक्रमले परीक्षाको आवश्यकता मात्र होइन, शिक्षण–शिकाइ प्रक्रियाको गहिरो बुझाइमा पनि जोड दिन्छ।" },
      featuresTitle: { en: "Key features", np: "मुख्य विशेषताहरू" },
      features: [
        { en: "Focus on content and pedagogy according to syllabus.", np: "पाठ्यक्रम अनुसार विषयवस्तु र शिक्षण–शिकाइ दुवै पक्षमा जोड।" },
        { en: "Discussion based on policy and education documents.", np: "नीति र शैक्षिक दस्तावेजमा आधारित छलफल।" },
        { en: "Model questions and answer-writing practice.", np: "नमूना प्रश्न र उत्तर लेखन अभ्यास।" },
        { en: "Guidance for long-term professional development.", np: "दीर्घकालीन पेशागत विकासमा मार्गदर्शन।" }
      ],
      batchTitle: { en: "Sample focus areas", np: "नमूना फोकस क्षेत्रहरू" },
      batches: [
        { en: "Subject knowledge and foundational concepts.", np: "विषयगत ज्ञान र आधारभूत अवधारणा।" },
        { en: "Teaching theories and methods.", np: "शिक्षण सिद्धान्त र विधिहरू।" },
        { en: "Assessment and classroom management.", np: "मूल्याङ्कन र कक्षा व्यवस्थापन।" },
        { en: "Mock exams and interview preparation.", np: "मोक परीक्षा र इन्टरभ्यु तयारी।" }
      ]
    }
  ],
  team: [
    { group: "core", name: "Atma Ram Bhattarai", role: { en: "Executive Director / Lead Researcher", np: "कार्यकारी निर्देशक / प्रमुख अनुसन्धानकर्ता" }, qualification: { en: "MPhil in Education / PhD Scholar", np: "शिक्षामा एमफिल / पीएचडी शोधार्थी" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "core", name: "Girman Thapa", role: { en: "Lead – Professional Development Support / Researcher", np: "पेशागत विकास सहयोग प्रमुख / अनुसन्धानकर्ता" }, qualification: { en: "MPhil in Education", np: "शिक्षामा एमफिल" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "core", name: "Pitambar Acharya", role: { en: "Researcher", np: "अनुसन्धानकर्ता" }, qualification: { en: "MPhil in Population Studies", np: "जनसंख्या अध्ययनमा एमफिल" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "core", name: "Jitlal Dhakal", role: { en: "Inclusion Expert", np: "समावेशीकरण विज्ञ" }, qualification: { en: "MSW", np: "एमएसडब्ल्यू" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "core", name: "Sushila Pokharel", role: { en: "Public Health Practitioner", np: "जनस्वास्थ्य व्यवसायी" }, qualification: { en: "BPH / MPH Student", np: "बीपीएच / एमपीएच विद्यार्थी" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "core", name: "Archana Bhattarai", role: { en: "IT Practitioner", np: "आईटी व्यवसायी" }, qualification: { en: "BE – Computer Engineering", np: "बीई – कम्प्युटर इन्जिनियरिङ" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "advisor", name: "Dr. Bhojraj Sharma Kafle", role: { en: "Advisor / Quantitative Research Expert", np: "सल्लाहकार / परिमाणात्मक अनुसन्धान विज्ञ" }, qualification: { en: "PhD", np: "पीएचडी" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "advisor", name: "Dr. Divya Dawadi", role: { en: "Advisor – Inclusive Education", np: "सल्लाहकार – समावेशी शिक्षा" }, qualification: { en: "PhD", np: "पीएचडी" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" }
  ]
};

function deepMerge(target, source) {
  if (!source || typeof source !== "object") return target;
  Object.keys(source).forEach((key) => {
    if (Array.isArray(source[key])) {
      target[key] = source[key];
    } else if (source[key] && typeof source[key] === "object") {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

function cloneContent(value) {
  return JSON.parse(JSON.stringify(value));
}

function getStoredContent() {
  try {
    const stored = localStorage.getItem(ACHAMAN_CONTENT_KEY);
    if (!stored) return cloneContent(defaultContent);
    return deepMerge(cloneContent(defaultContent), JSON.parse(stored));
  } catch (error) {
    console.warn("Could not load saved Achaman content.", error);
    return cloneContent(defaultContent);
  }
}

function saveStoredContent(content) {
  const nextContent = deepMerge(cloneContent(defaultContent), content || {});
  nextContent.version = ACHAMAN_CONTENT_VERSION;
  localStorage.setItem(ACHAMAN_CONTENT_KEY, JSON.stringify(nextContent));
  return nextContent;
}

function resetStoredContent() {
  localStorage.removeItem(ACHAMAN_CONTENT_KEY);
  return cloneContent(defaultContent);
}

function currentLang() {
  return localStorage.getItem("lang") === "np" ? "np" : "en";
}

function localize(value, lang = currentLang()) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || value.en || value.np || "";
  }
  return value || "";
}
