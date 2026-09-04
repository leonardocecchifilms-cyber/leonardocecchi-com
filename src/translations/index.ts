export type Lang = "en" | "it";

export const t = {
  en: {
    nav: {
      about: "About",
      showreel: "Showreel",
      reels: "Reels",
      gallery: "Gallery",
      resume: "Resume",
      instagram: "Instagram",
      inquiries: "Inquiries",
      selfProduced: "Original Work",
      contact: "Contact",
    },
    hero: {
      subtitle: "Actor\u00a0\u00a0·\u00a0\u00a0Filmmaker\u00a0\u00a0·\u00a0\u00a0Model",
      scroll: "Scroll",
    },
    studios: {
      label: "As Seen On",
    },
    about: {
      label: "About",
      heading: "Film & Stage Actor",
      representedBy: "Represented by",
      bio: [
        "Leonardo Cecchi is an Italian-American actor working across film, television, and theater, known for bringing emotional depth and nuance to complex, character-driven roles. From leading Disney's Alex & Co. to portraying a resentful teenager in A Christmas Mystery (HBO Max), and the visionary engineer Gian Paolo Dallara in Lamborghini: The Man Behind the Legend (Lionsgate), he continues to build a diverse and compelling body of work.",
        "Born in Minneapolis to an Italian father and an American mother, Leonardo was raised between cultures and discovered his passion for performance at a young age. He trained in stage acting, diction, jazz dance, and musical theater at a performing arts high school in Turin, where he was discovered by a Disney casting director, launching him into four seasons of Alex & Co., two Disney Channel films, and a successful publishing run with two books.",
        "After relocating to Los Angeles in 2018, Leonardo continued to refine his craft, training at The Chubbuck Acting Studio and the Sanford Meisner Center. In 2020 he wrote, directed, and starred in the award-winning short film Louie's Emotions, earning Best Actor at the LA Top Shorts Film Festival, and more recently co-wrote and starred in Call It All Love, an Official Selection at HollyShorts Film Festival.",
        "He is the founder of Still Moving Pictures, through which he has since produced three short films, and is now producing his first feature film, Escape to Italy, a romantic comedy already drawing significant interest from his 800K+ social audience.",
      ],
      stats: [
        { num: "7", label: "Feature Films", subtitle: "incl. Lionsgate & HBO Max" },
        { num: "5", label: "TV Credits", subtitle: "incl. Ryan Murphy & Disney" },
        { num: "3", label: "Stage Roles", subtitle: "incl. Arcimboldi Milan" },
      ],
    },
    showreel: {
      label: "Watch",
      heading: "Demo Reel",
      caption: "Film · Television · Theater",
    },
    reels: {
      label: "Work",
      heading: "Reels",
      comingSoon: "Coming Soon",
      close: "Close",
    },
    pressAwards: {
      label: "Recognition",
      heading: "Press & Awards",
      awardBadge: "Award",
      nominationBadge: "Nomination",
      bestActor: "Best Actor",
      festival: "LA Top Shorts Film Festival",
      film: "Louie's Emotions",
      pressHeading: "Press",
      pressPlaceholder: "Press mention coming soon.",
      pressPlaceholderSource: "Publication",
    },
    gallery: {
      label: "Portfolio",
      heading: "Gallery",
      count: (n: number) => `${n} images`,
      headshots: "Headshots",
      editorial: "Editorial · On Set",
      lightboxDownload: "Download",
    },
    resume: {
      label: "Credits",
      heading: "Resume",
      download: "Download PDF",
      resumeUrl: "/resume.pdf",
      resumeFilename: "Leonardo_Cecchi_Resume.pdf",
      filmSection: "Feature Film",
      tvSection: "Television",
      theaterSection: "Theater",
      languages: "Languages",
      training: "Training",
      skills: "Special Skills",
      languagesText: [
        "American (Standard, Southern & Italian accent)",
        "Italian (fluent)",
        "Spanish (intermediate)",
        "French (intermediate)",
      ],
      trainingText: [
        "Sanford Meisner Center (2 years)",
        "Ivana Chubbuck Acting Studio (4 years)",
        "Cinematic Martial Arts — J.A.M LA (2 years)",
        "Boxing (13 months)",
        "Comedy Acting — The Young Actor's Workspace",
      ],
      skillsText: ["11 variations of a backflip"],
    },
    instagramGrid: {
      label: "Follow Along",
      heading: "Life & Work",
      subline: "@leonardodcecchi on Instagram",
    },
    instagram: {
      label: "Follow Along",
      heading: "Behind the Scenes",
      text: [
        "Life on set, behind the camera, and everything in between.",
        "Follow for updates on current projects and daily inspiration.",
      ],
    },
    inquiries: {
      label: "Business Inquiries",
      heading: "Get In Touch",
      body: "For business inquiries, collaborations, and general questions, reach out directly.",
      buttonLabel: "LeonardoCecchifilms@gmail.com",
    },
    contact: {
      label: "Get in Touch",
      heading: "Contact",
      agencyLabel: "Talent Agency",
      managementLabel: "Management",
      italyLabel: "Italy",
      copyright: "All rights reserved.",
    },
    callItAllLove: {
      hero: {
        shortFilmLabel: "Short Film — Proof of Concept",
      },
      logline: "When a privileged college athlete kills his ex-girlfriend in a blackout rage, the trial that follows exposes the system that built him: his father, his class, a culture that ignored the signs. What remains after the verdict is not justice. It is silence — and a young man who must decide if what's left of his life is worth living.",
      series: {
        label: "Overview",
        heading: "The Series",
        body1: "Call It All Love is a limited drama series of 6–8 episodes, told across a non-linear timeline spanning from George Huguely V's freshman year at the University of Virginia through his sentencing in 2012. Based on documented public record and court testimony, dramatized with creative liberties.",
        body2: "The series is not a procedural. It is not a whodunit. The audience knows from the first frame what George did and how it ends. What the series asks is harder: how do you build a man capable of this? What systems — family, class, institution — enable his becoming?",
      },
      whyThisStory: {
        label: "Why This Story",
        heading: "Why This Story. Why Now.",
        cards: [
          {
            heading: "The Cultural Moment",
            body: "We are in the middle of a cultural reckoning with what we taught men to be — with how we raised them, who we held accountable, and who paid the price. The conversation around domestic violence and intimate partner abuse has never been more urgent, or more mainstream.",
          },
          {
            heading: "The Gap No One Has Filled",
            body: "No prestige limited series has centered the formation of an abuser — not his psychology alone, but the full social and familial system that produced him, while simultaneously holding the victim as a full human being, not a narrative function. Call It All Love fills that gap.",
          },
          {
            heading: "The Partnership",
            body: "Yeardley Love's death in 2010 inspired the founding of the One Love Foundation, which has spent fifteen years educating over 5 million young people about the warning signs of abusive relationships. This series is a natural creative partner for that mission — not as an afterschool special, but as prestige drama that puts a human face on data One Love has spent years trying to make people feel.",
          },
        ],
      },
      characters: {
        label: "The People",
        heading: "Characters",
        items: [
          {
            name: "George Huguely V",
            role: "Protagonist",
            description: "Handsome, magnetic, emotionally intelligent enough to be charming — and completely incapable of using those gifts in service of anyone but himself. His arc is not redemption. It is survival.",
          },
          {
            name: "Yeardley Love",
            role: "Moral Center",
            description: "Warm, grounded, sharply intelligent. She sees George more accurately than anyone around her — which is precisely why she stays as long as she does. The series insists on her fullness. Her absence is the series' final argument.",
          },
          {
            name: "George Huguely IV",
            role: "The Father",
            description: "Wealth-polished, socially fluent, emotionally evacuated. He treats fatherhood the way he treats membership in an institution: a status to maintain, not a relationship to inhabit.",
          },
        ],
      },
      comparables: {
        label: "Positioning",
        heading: "In the Company Of",
      },
      partnership: {
        label: "Partnership",
        heading: "One Love Foundation",
        body: "Call It All Love is being developed in formal partnership with the One Love Foundation — the organization founded directly from Yeardley Love's death in 2010, which has spent fifteen years educating over 5 million young people about the warning signs of abusive relationships. This is not a charity arrangement. It is a creative and commercial alignment: the series gives One Love's data a face, and One Love gives the series institutional credibility and audience pipeline.",
      },
      creator: {
        label: "From the Creator",
        quote: "\u201cI did not make this to explain George Huguely. I made it because I believe the most dangerous stories are the ones we think we already understand. Call It All Love is the story of what a man is made of when everything that made him is stripped away. It is not a comfortable story. It does not end well. But I believe it is a necessary one \u2014 and I believe, if we tell it right, it might change how a young person recognizes the beginning of something dangerous before it reaches its end. That is worth making. That is what this is.\u201d",
        attribution: "\u2014 Leonardo Cecchi, Writer \u00b7 Creator \u00b7 Producer",
      },
      cta: {
        label: "Inquiries",
        body: "Call It All Love is currently in active development and pitching. For producer, distribution, or partnership inquiries:",
        downloadLabel: "Download Show Bible",
      },
    },
  },

  it: {
    nav: {
      about: "Chi Sono",
      showreel: "Showreel",
      reels: "Clip",
      gallery: "Galleria",
      resume: "Curriculum",
      instagram: "Instagram",
      inquiries: "Richieste",
      selfProduced: "Progetti",
      contact: "Contatti",
    },
    hero: {
      subtitle: "Attore\u00a0\u00a0·\u00a0\u00a0Regista\u00a0\u00a0·\u00a0\u00a0Modello",
      scroll: "Scorri",
    },
    studios: {
      label: "Come Visto Su",
    },
    about: {
      label: "Bio",
      heading: "Attore di Cinema e Teatro",
      representedBy: "Rappresentato da",
      bio: [
        "Leonardo Cecchi è un attore italiano-statunitense che lavora nel cinema, in televisione e a teatro. Formatosi alla scuola di recitazione del Teatro Nuovo di Torino (2013–2017), è stato scoperto da un casting director Disney che lo ha lanciato nel ruolo da protagonista nella serie Alex & Co. (Disney Channel, 2015–2017), dandogli popolarità internazionale tra il pubblico giovane. Ha in seguito frequentato l'Ivana Chubbuck Studio (2019–2023) e attualmente studia al Sanford Meisner Center di Los Angeles (2024–2026).",
        "Nato a Minneapolis da padre italiano e madre americana, è cresciuto tra due culture sviluppando una presenza scenica capace di muoversi con naturalezza tra contesti italiani e internazionali. Ha recitato nel biopic Lamborghini: The Man Behind the Legend diretto da B. Moresco (Lionsgate, 2022), in A Christmas Mystery per Warner Bros./HBO Max, e nella serie antologica American Horror Stories (FX, 2021). In teatro ha interpretato i ruoli da protagonista in Peter Pan e Aladdin di M. Colombi (2023–2024), con repliche al Teatro Arcimboldi di Milano e al Brancaccio di Roma.",
        "Ha scritto, diretto e interpretato il cortometraggio Louie's Emotions, vincendo il premio come Miglior Attore al LA Top Shorts Film Festival, e ha fondato la casa di produzione Still Moving Pictures, attraverso cui sviluppa e produce progetti originali.",
      ],
      stats: [
        { num: "7", label: "Lungometraggi", subtitle: "incl. Lionsgate & HBO Max" },
        { num: "5", label: "Televisione", subtitle: "incl. Ryan Murphy & Disney" },
        { num: "3", label: "Teatro", subtitle: "incl. Arcimboldi Milan" },
      ],
    },
    showreel: {
      label: "Guarda",
      heading: "Demo Reel",
      caption: "Cinema · Televisione · Teatro",
    },
    reels: {
      label: "Lavori",
      heading: "Clip",
      comingSoon: "Prossimamente",
      close: "Chiudi",
    },
    pressAwards: {
      label: "Riconoscimenti",
      heading: "Premi & Stampa",
      awardBadge: "Premio",
      nominationBadge: "Candidatura",
      bestActor: "Miglior Attore",
      festival: "LA Top Shorts Film Festival",
      film: "Louie's Emotions",
      pressHeading: "Stampa",
      pressPlaceholder: "Citazione stampa in arrivo.",
      pressPlaceholderSource: "Pubblicazione",
    },
    gallery: {
      label: "Portfolio",
      heading: "Galleria",
      count: (n: number) => `${n} immagini`,
      headshots: "Headshot",
      editorial: "Editoriale · Set",
      lightboxDownload: "Scarica",
    },
    resume: {
      label: "Crediti",
      heading: "Curriculum",
      download: "Scarica PDF",
      resumeUrl: "/curriculum-it.pdf",
      resumeFilename: "Leonardo_Cecchi_Curriculum.pdf",
      filmSection: "Lungometraggi",
      tvSection: "Televisione",
      theaterSection: "Teatro",
      languages: "Lingue",
      training: "Formazione",
      skills: "Abilità Speciali",
      languagesText: [
        "Inglese americano (Standard, Southern & accento italiano)",
        "Italiano (madrelingua)",
        "Spagnolo (intermedio)",
        "Francese (intermedio)",
      ],
      trainingText: [
        "Sanford Meisner Center (2 anni)",
        "Ivana Chubbuck Acting Studio (4 anni)",
        "Arti Marziali Cinematografiche — J.A.M LA (2 anni)",
        "Boxe (13 mesi)",
        "Recitazione Comica — The Young Actor's Workspace",
      ],
      skillsText: ["11 varianti di un backflip"],
      dialetti: "Dialetti",
      dialettiText: [
        "Piemontese (leggero)",
        "Lombardo",
        "Romanesco",
      ],
    },
    instagramGrid: {
      label: "Seguimi",
      heading: "Vita & Lavoro",
      subline: "@leonardodcecchi su Instagram",
    },
    instagram: {
      label: "Seguimi",
      heading: "Dietro le Quinte",
      text: [
        "La vita sul set, dietro la macchina da presa, e tutto il resto.",
        "Seguimi per aggiornamenti sui progetti in corso e ispirazione quotidiana.",
      ],
    },
    inquiries: {
      label: "Contatti Diretti",
      heading: "Scrivimi",
      body: "Per collaborazioni, progetti e domande generali, scrivimi direttamente.",
      buttonLabel: "LeonardoCecchifilms@gmail.com",
    },
    contact: {
      label: "Contatti",
      heading: "Contatti",
      agencyLabel: "Agenzia Artistica",
      managementLabel: "Management",
      italyLabel: "Italia",
      copyright: "Tutti i diritti riservati.",
    },
    callItAllLove: {
      hero: {
        shortFilmLabel: "Cortometraggio \u2014 Prova del Concetto",
      },
      logline: "Quando un atleta universitario privilegiato uccide la sua ex ragazza in un raptus di rabbia, il processo che ne segue rivela il sistema che lo ha costruito: suo padre, la sua classe sociale, una cultura che ha ignorato i segnali. Ci\u00f2 che rimane dopo il verdetto non \u00e8 giustizia. \u00c8 silenzio \u2014 e un giovane uomo che deve decidere se vale la pena vivere ci\u00f2 che resta della sua vita.",
      series: {
        label: "La Serie",
        heading: "La Serie",
        body1: "Call It All Love \u00e8 una serie drama limitata di 6\u20138 episodi, raccontata su una linea temporale non lineare che va dal primo anno di George Huguely V all\u2019Universit\u00e0 della Virginia fino alla sua condanna nel 2012. Basata su documenti pubblici e testimonianze processuali, con libert\u00e0 creative.",
        body2: "La serie non \u00e8 un procedurale. Non \u00e8 un giallo. Il pubblico sa dal primo fotogramma cosa ha fatto George e come va a finire. La domanda che la serie pone \u00e8 pi\u00f9 difficile: come si costruisce un uomo capace di questo?",
      },
      whyThisStory: {
        label: "Perch\u00e9 Questa Storia",
        heading: "Perch\u00e9 Questa Storia. Perch\u00e9 Ora.",
        cards: [
          {
            heading: "Il Momento Culturale",
            body: "Siamo nel mezzo di una resa dei conti culturale su ci\u00f2 che abbiamo insegnato agli uomini a essere \u2014 su come li abbiamo cresciuti, chi abbiamo ritenuto responsabile e chi ha pagato il prezzo. La conversazione sulla violenza domestica e gli abusi nei rapporti intimi non \u00e8 mai stata cos\u00ec urgente, n\u00e9 cos\u00ec mainstream.",
          },
          {
            heading: "Il Vuoto che Nessuno Ha Colmato",
            body: "Nessuna serie drama di prestigio ha mai messo al centro la formazione di un uomo violento \u2014 non solo la sua psicologia, ma l\u2019intero sistema sociale e familiare che lo ha prodotto, mantenendo al tempo stesso la vittima come essere umano completo. Call It All Love colma quel vuoto.",
          },
          {
            heading: "La Partnership",
            body: "La morte di Yeardley Love nel 2010 ha ispirato la fondazione della One Love Foundation, che da quindici anni educa oltre 5 milioni di giovani sui segnali d\u2019allarme delle relazioni abusive. Questa serie \u00e8 un partner creativo naturale per quella missione \u2014 non come un documentario didattico, ma come drama di prestigio che d\u00e0 un volto umano ai dati che One Love ha trascorso anni a cercare di far sentire.",
          },
        ],
      },
      characters: {
        label: "Personaggi",
        heading: "I Personaggi",
        items: [
          {
            name: "George Huguely V",
            role: "Protagonista",
            description: "Affascinante, magnetico nel modo in cui il denaro e la sicurezza producono. Il suo arco narrativo non \u00e8 di redenzione. \u00c8 di sopravvivenza.",
          },
          {
            name: "Yeardley Love",
            role: "Centro Morale",
            description: "Calorosa, concreta, acutamente intelligente. La serie insiste sulla sua completezza. La sua assenza \u00e8 l\u2019argomento finale della serie.",
          },
          {
            name: "George Huguely IV",
            role: "Il Padre",
            description: "Levigato dalla ricchezza, fluente socialmente, emotivamente evacuato. Tratta la paternit\u00e0 come una membership istituzionale: uno status da mantenere, non una relazione da abitare.",
          },
        ],
      },
      comparables: {
        label: "Posizionamento",
        heading: "In Buona Compagnia",
      },
      partnership: {
        label: "Partnership",
        heading: "One Love Foundation",
        body: "Call It All Love viene sviluppata in partnership formale con la One Love Foundation. Questa non \u00e8 un\u2019iniziativa benefica. \u00c8 un allineamento creativo e commerciale: la serie d\u00e0 un volto ai dati di One Love, e One Love offre alla serie credibilit\u00e0 istituzionale e un pubblico gi\u00e0 formato.",
      },
      creator: {
        label: "Dal Creatore",
        quote: "\u201cNon ho fatto questo per spiegare George Huguely. L\u2019ho fatto perch\u00e9 credo che le storie pi\u00f9 pericolose siano quelle che pensiamo di capire gi\u00e0. Call It All Love \u00e8 la storia di cosa \u00e8 fatto un uomo quando tutto ci\u00f2 che lo ha formato viene strappato via. Non \u00e8 una storia confortante. Non finisce bene. Ma credo che sia necessaria \u2014 e credo che, se la raccontiamo bene, potrebbe cambiare il modo in cui un giovane riconosce l\u2019inizio di qualcosa di pericoloso prima che raggiunga la sua fine. Vale la pena farla. \u00c8 questo.\u201d",
        attribution: "\u2014 Leonardo Cecchi, Scrittore \u00b7 Creatore \u00b7 Produttore",
      },
      cta: {
        label: "Richieste",
        body: "Call It All Love \u00e8 attualmente in sviluppo attivo e in fase di pitch. Per richieste di produzione, distribuzione o partnership:",
        downloadLabel: "Scarica il Series Bible",
      },
    },
  },
} as const;
