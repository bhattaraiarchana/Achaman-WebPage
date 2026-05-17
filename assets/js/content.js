// assets/js/content.js
// Static bilingual content used by the public website.
// Future Sanity CMS integration should replace this file with read-only fetches
// from published Sanity content. Do not ship write access values here.

const ACHAMAN_CONTENT_VERSION = 2;

const defaultContent = {
  version: ACHAMAN_CONTENT_VERSION,
  site: {
    logo: "assets/img/logo.png",
    brandNe: "आचमन",
    brandEn: "CREATIVE SOLUTIONS",
    organizationName: "Achaman Creative Solutions Pvt. Ltd.",
    tagline: {
      en: "Education Development • Research • Training",
      np: "शिक्षा विकास • अनुसन्धान • तालिम"
    },
    contact: {
      email: "arcbhattarai11@gmail.com",
      phone: "+977 9848023682",
      phoneRaw: "9848023682",
      location: { en: "Kathmandu, Nepal", np: "काठमाडौं, नेपाल" },
      address: {
        en: "Kathmandu, Nepal. Collaboration programs can be designed for local governments, schools and education partners across Nepal.",
        np: "काठमाडौं, नेपाल। स्थानीय सरकार, विद्यालय र शिक्षा साझेदारका लागि नेपालभर सहकार्य कार्यक्रम डिजाइन गर्न सकिन्छ।"
      }
    },
    socials: {
      facebook: "https://facebook.com",
      whatsapp: "9848023682"
    }
  },
  pages: {
    home: {
      badge: { en: "Education-development and academic support", np: "शिक्षा विकास र शैक्षिक सहयोग" },
      title: {
        en: "Strengthening education through teacher training, research, proposal writing, and collaborative learning programs across Nepal.",
        np: "नेपालभर शिक्षक तालिम, अनुसन्धान, प्रस्ताव लेखन र सहकार्यमा आधारित सिकाइ कार्यक्रममार्फत शिक्षा सुदृढीकरण।"
      },
      subtitle: {
        en: "Achaman Creative Solutions partners with local governments, NGOs, INGOs, schools, teachers, researchers, and education stakeholders to design and deliver practical education-development programs.",
        np: "आचमन क्रियटिभ सोलुसन्सले स्थानीय सरकार, गैरसरकारी संस्था, अन्तर्राष्ट्रिय गैरसरकारी संस्था, विद्यालय, शिक्षक, अनुसन्धानकर्ता र शिक्षा सरोकारवालासँग व्यवहारिक शिक्षा-विकास कार्यक्रम डिजाइन र सञ्चालनमा सहकार्य गर्छ।"
      },
      primaryCta: { en: "Explore Programs", np: "कार्यक्रमहरू हेर्नुहोस्" },
      secondaryCta: { en: "Request Collaboration", np: "सहकार्य अनुरोध गर्नुहोस्" },
      tertiaryCta: { en: "View Latest Notices", np: "नवीनतम सूचना हेर्नुहोस्" },
      noticeTitle: { en: "Important Notice", np: "महत्त्वपूर्ण सूचना" },
      noticeText: {
        en: "Upcoming teacher training, proposal-writing support and collaborative program announcements will be published here.",
        np: "आगामी शिक्षक तालिम, प्रस्ताव लेखन सहयोग र सहकार्य कार्यक्रमसम्बन्धी सूचना यहाँ प्रकाशित गरिनेछ।"
      },
      whoTitle: { en: "Who We Work With", np: "हामी कोसँग सहकार्य गर्छौं" },
      whoSubtitle: {
        en: "Achaman works with institutions and learners who are committed to practical education improvement.",
        np: "आचमन व्यवहारिक शिक्षा सुधारमा प्रतिबद्ध संस्था र सिकाइ समुदायसँग काम गर्छ।"
      },
      serviceTitle: { en: "Core Services", np: "मुख्य सेवाहरू" },
      serviceSubtitle: {
        en: "Focused support for education-development programs, academic work and collaborative implementation.",
        np: "शिक्षा-विकास कार्यक्रम, शैक्षिक कार्य र सहकार्यात्मक कार्यान्वयनका लागि केन्द्रित सहयोग।"
      },
      processTitle: { en: "Collaboration Process", np: "सहकार्य प्रक्रिया" },
      processSubtitle: {
        en: "A clear process from initial discussion to implementation, documentation and follow-up.",
        np: "प्रारम्भिक छलफलदेखि कार्यान्वयन, दस्तावेजीकरण र फलोअपसम्म स्पष्ट प्रक्रिया।"
      },
      programsTitle: { en: "Featured Programs", np: "प्रमुख कार्यक्रमहरू" },
      programsSubtitle: { en: "Public placeholders for upcoming collaborative programs.", np: "आगामी सहकार्य कार्यक्रमका सार्वजनिक स्थानधारकहरू।" },
      galleryTitle: { en: "Gallery Preview", np: "ग्यालरी झलक" },
      gallerySubtitle: { en: "Photos from trainings, workshops and field-based learning activities will appear here.", np: "तालिम, कार्यशाला र क्षेत्रगत सिकाइ गतिविधिका तस्बिरहरू यहाँ देखिनेछन्।" },
      latestNoticesTitle: { en: "Latest Notices", np: "नवीनतम सूचनाहरू" },
      latestNoticesSubtitle: { en: "Program updates and announcements for partners and learners.", np: "साझेदार र सिकाइकर्ताका लागि कार्यक्रम अपडेट र घोषणा।" },
      contactTitle: { en: "Plan a collaboration with Achaman", np: "आचमनसँग सहकार्य योजना बनाउनुहोस्" },
      contactText: {
        en: "NGOs, INGOs, municipalities, gaupalikas, schools and education stakeholders can contact us to discuss training, research, proposal-writing and learning programs.",
        np: "गैरसरकारी संस्था, अन्तर्राष्ट्रिय गैरसरकारी संस्था, नगरपालिका, गाउँपालिका, विद्यालय र शिक्षा सरोकारवालाले तालिम, अनुसन्धान, प्रस्ताव लेखन र सिकाइ कार्यक्रमबारे छलफल गर्न हामीलाई सम्पर्क गर्न सक्नुहुन्छ।"
      },
      partnerTitle: { en: "Education-development partner", np: "शिक्षा-विकास साझेदार" },
      partnerText: {
        en: "Teacher training, research, proposal writing, documentation and collaborative learning support for education stakeholders across Nepal.",
        np: "नेपालभर शिक्षा सरोकारवालाका लागि शिक्षक तालिम, अनुसन्धान, प्रस्ताव लेखन, दस्तावेजीकरण र सहकार्यात्मक सिकाइ सहयोग।"
      }
    },
    about: {
      title: { en: "About Achaman Creative Solutions", np: "आचमन क्रियटिभ सोलुसन्सको परिचय" },
      intro: {
        en: "Achaman Creative Solutions Pvt. Ltd. is an education-development and academic-support organization based in Nepal.",
        np: "आचमन क्रियटिभ सोलुसन्स प्रा. लि. नेपालमा आधारित शिक्षा-विकास र शैक्षिक सहयोग संस्था हो।"
      },
      missionTitle: { en: "Mission", np: "उद्देश्य" },
      missionText: {
        en: "To support stronger education systems through teacher training, research, proposal writing, documentation and collaborative learning programs.",
        np: "शिक्षक तालिम, अनुसन्धान, प्रस्ताव लेखन, दस्तावेजीकरण र सहकार्यात्मक सिकाइ कार्यक्रममार्फत शिक्षा प्रणालीलाई सुदृढ बनाउन सहयोग गर्नु।"
      },
      objectivesTitle: { en: "Core objectives", np: "मुख्य उद्देश्यहरू" },
      objectives: [
        { en: "Design and facilitate teacher training and capacity-building programs.", np: "शिक्षक तालिम र क्षमता विकास कार्यक्रम डिजाइन तथा सहजीकरण गर्नु।" },
        { en: "Collaborate with NGOs, INGOs, local governments, schools and education stakeholders.", np: "गैरसरकारी संस्था, अन्तर्राष्ट्रिय गैरसरकारी संस्था, स्थानीय सरकार, विद्यालय र शिक्षा सरोकारवालासँग सहकार्य गर्नु।" },
        { en: "Support research, proposal writing, documentation and academic programs.", np: "अनुसन्धान, प्रस्ताव लेखन, दस्तावेजीकरण र शैक्षिक कार्यक्रममा सहयोग गर्नु।" },
        { en: "Provide learner-focused Shikshak Sewa Aayog preparation as a sub-program.", np: "सिकाइकर्ता केन्द्रित शिक्षक सेवा आयोग तयारीलाई उप-कार्यक्रमका रूपमा सञ्चालन गर्नु।" }
      ]
    },
    services: {
      title: { en: "Services", np: "सेवाहरू" },
      subtitle: {
        en: "Practical services for education development, institutional collaboration and academic support.",
        np: "शिक्षा विकास, संस्थागत सहकार्य र शैक्षिक सहयोगका लागि व्यवहारिक सेवाहरू।"
      }
    },
    research: {
      title: { en: "Research & Proposals", np: "अनुसन्धान र प्रस्तावहरू" },
      subtitle: {
        en: "Support for research design, field-based studies, proposal writing, documentation and reporting.",
        np: "अनुसन्धान डिजाइन, क्षेत्रगत अध्ययन, प्रस्ताव लेखन, दस्तावेजीकरण र प्रतिवेदनका लागि सहयोग।"
      },
      projectsTitle: { en: "Proposal and documentation support", np: "प्रस्ताव र दस्तावेजीकरण सहयोग" },
      projectsSubtitle: { en: "Examples of future research, proposal and documentation work can be listed here.", np: "भविष्यका अनुसन्धान, प्रस्ताव र दस्तावेजीकरण कार्यका उदाहरणहरू यहाँ राख्न सकिन्छ।" }
    },
    exam: {
      title: { en: "Programs", np: "कार्यक्रमहरू" },
      subtitle: {
        en: "Collaborative education-development programs and learner-focused academic support.",
        np: "सहकार्यात्मक शिक्षा-विकास कार्यक्रम र सिकाइकर्ता केन्द्रित शैक्षिक सहयोग।"
      }
    },
    team: {
      title: { en: "Team", np: "टिम" },
      subtitle: { en: "Academic and education-development professionals supporting Achaman programs.", np: "आचमनका कार्यक्रमलाई सहयोग गर्ने शैक्षिक तथा शिक्षा-विकास पेशाकर्मीहरू।" },
      coreTitle: { en: "Core Team", np: "मुख्य टिम" },
      advisorsTitle: { en: "Advisors", np: "सल्लाहकारहरू" }
    },
    contact: {
      title: { en: "Contact", np: "सम्पर्क" },
      subtitle: { en: "Request collaboration for teacher training, research, proposal writing or academic programs.", np: "शिक्षक तालिम, अनुसन्धान, प्रस्ताव लेखन वा शैक्षिक कार्यक्रमका लागि सहकार्य अनुरोध गर्नुहोस्।" },
      orgTitle: { en: "Organization details", np: "संस्थागत विवरण" },
      note: { en: "You can also reach us via the WhatsApp button on the bottom right.", np: "तल दायाँपट्टिको WhatsApp बटनबाट पनि सम्पर्क गर्न सक्नुहुन्छ।" }
    },
    notices: {
      title: { en: "Notices", np: "सूचनाहरू" },
      subtitle: { en: "Public announcements for programs, trainings and collaboration opportunities.", np: "कार्यक्रम, तालिम र सहकार्य अवसरसम्बन्धी सार्वजनिक सूचनाहरू।" }
    },
    gallery: {
      title: { en: "Gallery", np: "ग्यालरी" },
      subtitle: { en: "A public gallery for trainings, workshops and collaborative learning activities.", np: "तालिम, कार्यशाला र सहकार्यात्मक सिकाइ गतिविधिका लागि सार्वजनिक ग्यालरी।" }
    }
  },
  whoWeWorkWith: [
    { title: { en: "NGOs / INGOs", np: "गैरसरकारी / अन्तर्राष्ट्रिय गैरसरकारी संस्था" }, text: { en: "Program design, training delivery, field documentation and education-development support.", np: "कार्यक्रम डिजाइन, तालिम सञ्चालन, क्षेत्रगत दस्तावेजीकरण र शिक्षा-विकास सहयोग।" } },
    { title: { en: "Gaupalikas / Municipalities", np: "गाउँपालिका / नगरपालिका" }, text: { en: "Local education plans, teacher capacity building and school-support programs.", np: "स्थानीय शिक्षा योजना, शिक्षक क्षमता विकास र विद्यालय सहयोग कार्यक्रम।" } },
    { title: { en: "Schools", np: "विद्यालयहरू" }, text: { en: "Workshops, classroom improvement initiatives and academic support activities.", np: "कार्यशाला, कक्षाकोठा सुधार पहल र शैक्षिक सहयोग गतिविधि।" } },
    { title: { en: "Teachers", np: "शिक्षकहरू" }, text: { en: "Professional development, pedagogy, assessment and reflective teaching practice.", np: "पेशागत विकास, शिक्षण विधि, मूल्याङ्कन र प्रतिविम्बात्मक शिक्षण अभ्यास।" } },
    { title: { en: "Researchers", np: "अनुसन्धानकर्ताहरू" }, text: { en: "Research design, tools, documentation, reporting and academic collaboration.", np: "अनुसन्धान डिजाइन, उपकरण, दस्तावेजीकरण, प्रतिवेदन र शैक्षिक सहकार्य।" } },
    { title: { en: "Students / Shikshak Sewa candidates", np: "विद्यार्थी / शिक्षक सेवा अभ्यर्थी" }, text: { en: "Learner-focused academic support and preparation as one sub-program.", np: "एक उप-कार्यक्रमका रूपमा सिकाइकर्ता केन्द्रित शैक्षिक सहयोग र तयारी।" } }
  ],
  services: [
    { title: { en: "Teacher Training & Capacity Building", np: "शिक्षक तालिम र क्षमता विकास" }, text: { en: "Practical training for teachers, school leaders and education facilitators.", np: "शिक्षक, विद्यालय नेतृत्व र शिक्षा सहजकर्ताका लागि व्यवहारिक तालिम।" } },
    { title: { en: "Research Support", np: "अनुसन्धान सहयोग" }, text: { en: "Study design, tools, data collection support, analysis assistance and reporting.", np: "अध्ययन डिजाइन, उपकरण, तथ्याङ्क सङ्कलन सहयोग, विश्लेषण सहयोग र प्रतिवेदन।" } },
    { title: { en: "Proposal Writing & Documentation", np: "प्रस्ताव लेखन र दस्तावेजीकरण" }, text: { en: "Concept notes, project proposals, program documentation and learning reports.", np: "अवधारणा पत्र, परियोजना प्रस्ताव, कार्यक्रम दस्तावेजीकरण र सिकाइ प्रतिवेदन।" } },
    { title: { en: "Educational Program Design", np: "शैक्षिक कार्यक्रम डिजाइन" }, text: { en: "Collaborative design of training, school-support and education-development programs.", np: "तालिम, विद्यालय सहयोग र शिक्षा-विकास कार्यक्रमको सहकार्यात्मक डिजाइन।" } },
    { title: { en: "Workshops & Academic Programs", np: "कार्यशाला र शैक्षिक कार्यक्रम" }, text: { en: "Short courses, seminars, workshops and academic-support sessions.", np: "छोटो पाठ्यक्रम, सेमिनार, कार्यशाला र शैक्षिक सहयोग सत्र।" } },
    { title: { en: "Shikshak Sewa Aayog Preparation", np: "शिक्षक सेवा आयोग तयारी" }, text: { en: "Learner-focused preparation support as a sub-program, not the main identity of Achaman.", np: "आचमनको मुख्य पहिचान नभई उप-कार्यक्रमका रूपमा सिकाइकर्ता केन्द्रित तयारी सहयोग।" } }
  ],
  processSteps: [
    { title: { en: "Need assessment / discussion", np: "आवश्यकता पहिचान / छलफल" }, text: { en: "We begin with a practical conversation about needs, context and expected outcomes.", np: "आवश्यकता, सन्दर्भ र अपेक्षित नतिजाबारे व्यवहारिक छलफलबाट सुरु गर्छौं।" } },
    { title: { en: "Program or proposal design", np: "कार्यक्रम वा प्रस्ताव डिजाइन" }, text: { en: "A suitable training, research or proposal framework is prepared with partners.", np: "साझेदारसँग मिलेर उपयुक्त तालिम, अनुसन्धान वा प्रस्ताव ढाँचा तयार गरिन्छ।" } },
    { title: { en: "Training/research implementation", np: "तालिम / अनुसन्धान कार्यान्वयन" }, text: { en: "Activities are delivered through field-sensitive and learner-centered methods.", np: "गतिविधिहरू क्षेत्र-संवेदनशील र सिकाइकर्ता केन्द्रित विधिबाट सञ्चालन गरिन्छ।" } },
    { title: { en: "Documentation and reporting", np: "दस्तावेजीकरण र प्रतिवेदन" }, text: { en: "Outputs, learning and recommendations are documented for institutional use.", np: "उपलब्धि, सिकाइ र सुझावहरू संस्थागत प्रयोगका लागि दस्तावेजीकरण गरिन्छ।" } },
    { title: { en: "Follow-up support", np: "फलोअप सहयोग" }, text: { en: "Follow-up conversations help partners continue improvement after the program.", np: "कार्यक्रमपछि सुधार निरन्तर राख्न फलोअप छलफलले सहयोग गर्छ।" } }
  ],
  featuredPrograms: [
    { title: { en: "Teacher professional development series", np: "शिक्षक पेशागत विकास श्रृंखला" }, text: { en: "Placeholder for upcoming training programs with schools and local governments.", np: "विद्यालय र स्थानीय सरकारसँग हुने आगामी तालिम कार्यक्रमका लागि स्थानधारक।" } },
    { title: { en: "Proposal writing clinic", np: "प्रस्ताव लेखन क्लिनिक" }, text: { en: "Placeholder for practical proposal support sessions for education partners.", np: "शिक्षा साझेदारका लागि व्यवहारिक प्रस्ताव सहयोग सत्रको स्थानधारक।" } },
    { title: { en: "Research and documentation support", np: "अनुसन्धान र दस्तावेजीकरण सहयोग" }, text: { en: "Placeholder for collaborative research, reporting and documentation work.", np: "सहकार्यात्मक अनुसन्धान, प्रतिवेदन र दस्तावेजीकरण कार्यको स्थानधारक।" } }
  ],
  galleryPreview: [
    { title: { en: "Training moments", np: "तालिमका क्षणहरू" }, text: { en: "Image placeholder", np: "तस्बिर स्थानधारक" } },
    { title: { en: "Workshop activities", np: "कार्यशाला गतिविधि" }, text: { en: "Image placeholder", np: "तस्बिर स्थानधारक" } },
    { title: { en: "Field collaboration", np: "क्षेत्रगत सहकार्य" }, text: { en: "Image placeholder", np: "तस्बिर स्थानधारक" } }
  ],
  notices: [
    { title: { en: "Notice placeholder", np: "सूचना स्थानधारक" }, text: { en: "Program announcements and training schedules will be listed here.", np: "कार्यक्रम घोषणा र तालिम तालिका यहाँ राखिनेछ।" } },
    { title: { en: "Collaboration update", np: "सहकार्य अपडेट" }, text: { en: "Future collaboration opportunities for municipalities, schools and NGOs will appear here.", np: "नगरपालिका, विद्यालय र गैरसरकारी संस्थाका लागि भविष्यका सहकार्य अवसरहरू यहाँ देखिनेछन्।" } },
    { title: { en: "Learning program notice", np: "सिकाइ कार्यक्रम सूचना" }, text: { en: "Upcoming learner-focused academic support notices will be published here.", np: "आगामी सिकाइकर्ता केन्द्रित शैक्षिक सहयोग सूचना यहाँ प्रकाशित गरिनेछ।" } }
  ],
  researchBlocks: [
    { title: { en: "Research design and tools", np: "अनुसन्धान डिजाइन र उपकरण" }, text: { en: "Support for study design, instruments, field planning and education-focused inquiry.", np: "अध्ययन डिजाइन, उपकरण, क्षेत्र योजना र शिक्षा केन्द्रित खोजका लागि सहयोग।" } },
    { title: { en: "Proposal development", np: "प्रस्ताव विकास" }, text: { en: "Assistance with concept notes, project logic, activities, indicators and budgets.", np: "अवधारणा पत्र, परियोजना तर्क, गतिविधि, सूचक र बजेटमा सहयोग।" } },
    { title: { en: "Documentation and reporting", np: "दस्तावेजीकरण र प्रतिवेदन" }, text: { en: "Clear documentation of training, research and collaborative program outcomes.", np: "तालिम, अनुसन्धान र सहकार्य कार्यक्रमका नतिजाको स्पष्ट दस्तावेजीकरण।" } }
  ],
  projects: [
    { title: { en: "Future research portfolio", np: "भविष्यको अनुसन्धान पोर्टफोलियो" }, text: { en: "Completed studies, proposals, reports and partner collaborations can be presented here later.", np: "सम्पन्न अध्ययन, प्रस्ताव, प्रतिवेदन र साझेदार सहकार्य पछि यहाँ प्रस्तुत गर्न सकिन्छ।" } }
  ],
  exams: [
    {
      label: "Training",
      title: { en: "Teacher Training & Capacity Building", np: "शिक्षक तालिम र क्षमता विकास" },
      subtitle: { en: "Programs designed with schools, municipalities, gaupalikas and education partners.", np: "विद्यालय, नगरपालिका, गाउँपालिका र शिक्षा साझेदारसँग डिजाइन गरिने कार्यक्रम।" },
      overviewTitle: { en: "Program overview", np: "कार्यक्रम परिचय" },
      overview: { en: "Training programs focus on practical classroom strategies, assessment, inclusive practice and school-level improvement.", np: "तालिम कार्यक्रम व्यवहारिक कक्षाकोठा रणनीति, मूल्याङ्कन, समावेशी अभ्यास र विद्यालयस्तर सुधारमा केन्द्रित हुन्छ।" },
      featuresTitle: { en: "Focus areas", np: "मुख्य क्षेत्रहरू" },
      features: [
        { en: "Pedagogy and classroom practice", np: "शिक्षण विधि र कक्षाकोठा अभ्यास" },
        { en: "Assessment and learner support", np: "मूल्याङ्कन र सिकाइकर्ता सहयोग" },
        { en: "Inclusive and child-friendly learning", np: "समावेशी र बालमैत्री सिकाइ" },
        { en: "Reflection and school-based action planning", np: "प्रतिविम्ब र विद्यालय-आधारित कार्ययोजना" }
      ],
      batchTitle: { en: "Possible partners", np: "सम्भावित साझेदारहरू" },
      batches: [
        { en: "Municipalities and gaupalikas", np: "नगरपालिका र गाउँपालिका" },
        { en: "Schools and teacher groups", np: "विद्यालय र शिक्षक समूह" },
        { en: "NGOs and INGOs", np: "गैरसरकारी र अन्तर्राष्ट्रिय गैरसरकारी संस्था" },
        { en: "Education networks and stakeholders", np: "शिक्षा सञ्जाल र सरोकारवाला" }
      ]
    },
    {
      label: "Academic Support",
      title: { en: "Shikshak Sewa Aayog Preparation", np: "शिक्षक सेवा आयोग तयारी" },
      subtitle: { en: "A learner-focused sub-program for candidates preparing for teaching service examinations.", np: "शिक्षक सेवा परीक्षाका अभ्यर्थीका लागि सिकाइकर्ता केन्द्रित उप-कार्यक्रम।" },
      overviewTitle: { en: "Program overview", np: "कार्यक्रम परिचय" },
      overview: { en: "This preparation support is one part of Achaman's academic-support work and is not the organization's main identity.", np: "यो तयारी सहयोग आचमनको शैक्षिक सहयोग कार्यको एक भाग हो; संस्थाको मुख्य पहिचान होइन।" },
      featuresTitle: { en: "Support areas", np: "सहयोग क्षेत्रहरू" },
      features: [
        { en: "Concept clarity and study planning", np: "अवधारणा स्पष्टता र अध्ययन योजना" },
        { en: "Pedagogy and education-policy discussion", np: "शिक्षण विधि र शिक्षा नीति छलफल" },
        { en: "Practice questions and feedback", np: "अभ्यास प्रश्न र प्रतिक्रिया" },
        { en: "Motivation and learner guidance", np: "प्रेरणा र सिकाइकर्ता मार्गदर्शन" }
      ],
      batchTitle: { en: "Program notes", np: "कार्यक्रम टिप्पणी" },
      batches: [
        { en: "Learner-focused support", np: "सिकाइकर्ता केन्द्रित सहयोग" },
        { en: "Small-group sessions when available", np: "उपलब्ध हुँदा साना समूह सत्र" },
        { en: "Connected with broader education practice", np: "विस्तृत शैक्षिक अभ्याससँग जोडिएको" },
        { en: "Not a coaching-center-only identity", np: "कोचिङ सेन्टर मात्रको पहिचान होइन" }
      ]
    }
  ],
  team: [
    { group: "core", name: "Atma Ram Bhattarai", role: { en: "Executive Director / Lead Researcher", np: "कार्यकारी निर्देशक / प्रमुख अनुसन्धानकर्ता" }, qualification: { en: "MPhil in Education / PhD Scholar", np: "शिक्षामा एमफिल / पीएचडी शोधार्थी" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
    { group: "core", name: "Girman Thapa", role: { en: "Professional Development Support / Researcher", np: "पेशागत विकास सहयोग / अनुसन्धानकर्ता" }, qualification: { en: "MPhil in Education", np: "शिक्षामा एमफिल" }, phone: "9848023682", email: "arcbhattarai11@gmail.com", image: "" },
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
  // Public pages currently render static checked-in content only.
  // Future Sanity CMS integration should fetch published content here.
  return cloneContent(defaultContent);
}

function saveStoredContent(content) {
  // Intentionally does not persist in localStorage: browser storage is not a CMS.
  // Future Sanity CMS writes must happen through a secure backend/CMS studio.
  const nextContent = deepMerge(cloneContent(defaultContent), content || {});
  nextContent.version = ACHAMAN_CONTENT_VERSION;
  return nextContent;
}

function resetStoredContent() {
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
