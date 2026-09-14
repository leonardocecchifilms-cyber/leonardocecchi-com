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
      subtitle: "Actor  ·  Filmmaker  ·  Model",
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
      managementLabel: "Self",
      italyLabel: "Italy",
      copyright: "All rights reserved.",
    },
    originalWork: {
      label: "Original Work",
      heading: "Original Work",
      intro: "Writing, producing, and starring in stories I care about — currently in active development and pitching.",
      backLabel: "All Original Work",
      cards: [
        {
          title: "Escape to Italy",
          tag: "Feature Film · In Development",
          blurb: "A romantic comedy about an Italian-American banker who has one week to save his late grandmother's house, and finds the life he's been running from.",
          cta: "View Project",
          href: "/original-work/escape-to-italy",
          image: "/images/escape-to-italy-card.jpg",
          imagePosition: "center",
        },
        {
          title: "Call It All Love",
          tag: "Limited Series · In Development",
          blurb: "A limited drama series based on the George Huguely V case, co-written and produced with director David Mazouz. Official Selection, HollyShorts Film Festival.",
          cta: "View Project",
          href: "/original-work/call-it-all-love",
          image: "/images/cial-poster.png",
          imagePosition: "10% center",
        },
      ],
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
        quote: "“I did not make this to explain George Huguely. I made it because I believe the most dangerous stories are the ones we think we already understand. Call It All Love is the story of what a man is made of when everything that made him is stripped away. It is not a comfortable story. It does not end well. But I believe it is a necessary one — and I believe, if we tell it right, it might change how a young person recognizes the beginning of something dangerous before it reaches its end. That is worth making. That is what this is.”",
        attribution: "— Leonardo Cecchi, Writer · Creator · Producer",
      },
      cta: {
        label: "Inquiries",
        body: "Call It All Love is currently in active development and pitching. For producer, distribution, or partnership inquiries:",
        downloadLabel: "Download Show Bible",
      },
    },
    escapeToItaly: {
      quickFacts: {
        genreLabel: "Genre",
        genre: "Romantic Comedy",
        settingLabel: "Setting",
        setting: "Los Angeles & Piemonte, Italy",
        toneLabel: "Tone",
        tone: "Warm, funny, quietly devastating",
      },
      logline: "Mike, an emotionally shut-down Italian-American banker, has one week to save his late grandmother's house, but between a Nonna he keeps alive in his mind rather than say goodbye to, an old friend dragging him into reckless Italian nightlife, and an old flame he's too guarded to let in, the deadline slips past him. He loses the house. What he finds instead is the life, and the heart, he's spent years running from.",
      story: {
        label: "Overview",
        heading: "The Story",
        body1: "Mike, an Italian-American banker in LA, deflects everything real with charm and jokes, until the same week he's denied a promotion, his girlfriend leaves him (“I hope you learn to feel things before it's too late”), and his stepmother reveals he has one week to save his late grandmother's house from seizure. Mike goes to Italy.",
        body2: "At the house, he finds Nonna: warm, present, exactly as he remembers her. It isn't real, and Mike knows it, but he can't let her go. He reconnects with Riccardo, a fellow avoider hiding his own grief, and falls back into an easy rhythm with his childhood pen pal Sara, until she pushes him to actually show up for her, not deflect, and he starts to believe he could be different.",
        closingLine: "“His heart was never too big for this world. He'd just been making himself small enough to fit in it.”",
      },
      whyThisStory: {
        label: "Why This Story",
        heading: "Why This Story. Why Now.",
        cards: [
          {
            heading: "A Genre Gap Worth Filling",
            body: "Every Italy rom-com sells the postcard: an outsider healed by the scenery. This one sells the cost of it: what it actually means to have one foot in each world, told by an Italian-American who lived it.",
          },
          {
            heading: "A Real Conversation About Masculinity",
            body: "Like most men, Mike and Riccardo were never taught what to do with pain; this film watches them find another path to avoidance, and back. Timely, but earned through comedy and heart, not a lecture.",
          },
        ],
      },
      characters: {
        label: "The People",
        heading: "Characters",
        items: [
          {
            name: "Mike (Michele) Giusti",
            role: "Protagonist",
            description: "Early 20s. An Italian-American junior bank employee in LA who has built his entire personality around not feeling things. Big-hearted, and about to learn to let it show.",
          },
          {
            name: "Sara Mancuso",
            role: "The One Who Sees Him",
            description: "Early 20s. Mike's Italian childhood pen pal, back in Piemonte from Milan to help run her family's bank. Quietly torn between chasing her own dream and staying for a father who's running out of time.",
          },
          {
            name: "Riccardo Costa",
            role: "Mike's Dark Mirror",
            description: "Early 20s. Mike's childhood best friend and a magnetic fixture of Turin nightlife, who teaches Mike his “rules” for confidence and not overthinking anything, all while avoiding his own grief exactly the way Mike is.",
          },
          {
            name: "Nonna Giusti",
            role: "The One Who Never Let Him Hide",
            description: "Late 60s–70s. Mike's grandmother, who passed away six months before the story begins. Mike interacts with a half-imagined, half-remembered version of her he's built to keep her close: the one person who always told him the truth.",
          },
        ],
      },
      comparables: {
        label: "Tone & Positioning",
        heading: "In the Company Of",
        items: [
          {
            title: "About Time",
            info: "2013",
            note: "The comedy grows naturally out of flawed, lovable characters rather than punchlines; the laughs make the emotional moments land harder.",
          },
          {
            title: "Call Me By Your Name",
            info: "Sony Pictures Classics, 2017",
            note: "Sun-drenched Italian cinematography and a sense of longing baked into every frame.",
          },
          {
            title: "La Dolce Villa",
            info: "Netflix, 2024",
            note: "A reluctant trip to Italy becomes the place someone finally exhales, falls in love, and finds the life they didn't know they were looking for.",
          },
        ],
      },
      socialTraction: {
        label: "Marketing Advantage",
        heading: "A Built-In Audience",
        body1: "Leonardo brings a social following of 800,000+ across TikTok and Instagram directly to this project, built on years of sharing his own story as an Italian-American navigating both worlds, the exact terrain Escape to Italy dramatizes.",
        stats: [
          { num: "4.08M", label: "Combined Following", subtitle: "Leonardo & Eleonora, Instagram + TikTok" },
          { num: "2.2M", label: "Eleonora's TikTok", subtitle: "Alone, built on Alex & Co. and Out of My League" },
        ],
        body2: "Fans already ask for more of that story. A reply to a comment asking for an Alex & Co. reunion is one small example: proof this audience isn't just watching, it's invested in what Leonardo does next.",
        body3: "That combined reach puts real marketing weight behind Escape to Italy before a single frame is shot.",
        videoCaption: "Replying to a fan asking for an Alex & Co. reunion",
        watchLabel: "Watch on TikTok",
      },
      team: {
        label: "The Team",
        heading: "Cast & Creators",
        members: [
          {
            name: "Leonardo Cecchi",
            role: "Writer · Producer · Mike",
            bio: "Leonardo grew up between the US and Italy, and his own Italian grandmother passed away several years ago, and he knows firsthand both the place this film lives in and how a home can hold grief and love at once. He carried Disney's Alex & Co. for four seasons, a hit that aired across the UK, Ireland, the Middle East, and Europe.",
          },
          {
            name: "Eleonora Gaggero",
            role: "Co-Star, Sara · Attached",
            bio: "Eleonora's own novel, Sul più bello, became the Netflix trilogy Out of My League, in which she also starred: author-to-screen proof, and the only person to contribute as both. She and Leonardo co-led Disney's Alex & Co. for four seasons.",
          },
        ],
      },
      creator: {
        label: "From the Writer",
        quote: "“Escape to Italy is a comedy because life keeps being funny even when it's falling apart. But underneath it is a simple, urgent idea: avoidance is the easiest way to move through life, and the most dangerous. The people we love, the moments that matter: they don't wait forever for us to be ready. This film is for anyone who has ever known exactly what they were avoiding and told themselves there was still time. I hope it's a reminder to stop waiting.”",
        attribution: "Leonardo Cecchi, Writer · Creator · Producer",
      },
      cta: {
        label: "Inquiries",
        body: "Escape to Italy is currently in development: script complete, casting and financing underway. For producer, financing, or distribution inquiries:",
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
      subtitle: "Attore  ·  Regista  ·  Modello",
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
        "Ha scritto, diretto e interpretato il cortometraggio Louie's Emotions, vincendo il premio come Miglior Attore al LA Top Shorts Film Festival, e più recentemente ha co-scritto e interpretato Call It All Love, Selezione Ufficiale al HollyShorts Film Festival.",
        "È il fondatore della casa di produzione Still Moving Pictures, attraverso cui ha finora prodotto tre cortometraggi ed è ora al lavoro sul suo primo lungometraggio, Escape to Italy, una commedia romantica che sta già suscitando grande interesse tra il suo pubblico social di oltre 800.000 follower.",
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
      managementLabel: "Contatto Diretto",
      italyLabel: "Italia",
      copyright: "Tutti i diritti riservati.",
    },
    originalWork: {
      label: "Progetti",
      heading: "Progetti Originali",
      intro: "Scrivo, produco e interpreto storie a cui tengo — attualmente in sviluppo attivo e in fase di pitch.",
      backLabel: "Tutti i Progetti",
      cards: [
        {
          title: "Escape to Italy",
          tag: "Lungometraggio · In Sviluppo",
          blurb: "Una commedia romantica su un banchiere italoamericano che ha una settimana per salvare la casa della nonna defunta, e trova la vita da cui stava scappando.",
          cta: "Vedi il Progetto",
          href: "/original-work/escape-to-italy",
          image: "/images/escape-to-italy-card.jpg",
          imagePosition: "center",
        },
        {
          title: "Call It All Love",
          tag: "Serie Limitata · In Sviluppo",
          blurb: "Una serie drammatica limitata basata sul caso di George Huguely V, co-scritta e prodotta con il regista David Mazouz. Selezione Ufficiale, HollyShorts Film Festival.",
          cta: "Vedi il Progetto",
          href: "/original-work/call-it-all-love",
          image: "/images/cial-poster.png",
          imagePosition: "10% center",
        },
      ],
    },
    callItAllLove: {
      hero: {
        shortFilmLabel: "Cortometraggio — Prova del Concetto",
      },
      logline: "Quando un atleta universitario privilegiato uccide la sua ex ragazza in un raptus di rabbia, il processo che ne segue rivela il sistema che lo ha costruito: suo padre, la sua classe sociale, una cultura che ha ignorato i segnali. Ciò che rimane dopo il verdetto non è giustizia. È silenzio — e un giovane uomo che deve decidere se vale la pena vivere ciò che resta della sua vita.",
      series: {
        label: "La Serie",
        heading: "La Serie",
        body1: "Call It All Love è una serie drama limitata di 6–8 episodi, raccontata su una linea temporale non lineare che va dal primo anno di George Huguely V all’Università della Virginia fino alla sua condanna nel 2012. Basata su documenti pubblici e testimonianze processuali, con libertà creative.",
        body2: "La serie non è un procedurale. Non è un giallo. Il pubblico sa dal primo fotogramma cosa ha fatto George e come va a finire. La domanda che la serie pone è più difficile: come si costruisce un uomo capace di questo?",
      },
      whyThisStory: {
        label: "Perché Questa Storia",
        heading: "Perché Questa Storia. Perché Ora.",
        cards: [
          {
            heading: "Il Momento Culturale",
            body: "Siamo nel mezzo di una resa dei conti culturale su ciò che abbiamo insegnato agli uomini a essere — su come li abbiamo cresciuti, chi abbiamo ritenuto responsabile e chi ha pagato il prezzo. La conversazione sulla violenza domestica e gli abusi nei rapporti intimi non è mai stata così urgente, né così mainstream.",
          },
          {
            heading: "Il Vuoto che Nessuno Ha Colmato",
            body: "Nessuna serie drama di prestigio ha mai messo al centro la formazione di un uomo violento — non solo la sua psicologia, ma l’intero sistema sociale e familiare che lo ha prodotto, mantenendo al tempo stesso la vittima come essere umano completo. Call It All Love colma quel vuoto.",
          },
          {
            heading: "La Partnership",
            body: "La morte di Yeardley Love nel 2010 ha ispirato la fondazione della One Love Foundation, che da quindici anni educa oltre 5 milioni di giovani sui segnali d’allarme delle relazioni abusive. Questa serie è un partner creativo naturale per quella missione — non come un documentario didattico, ma come drama di prestigio che dà un volto umano ai dati che One Love ha trascorso anni a cercare di far sentire.",
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
            description: "Affascinante, magnetico nel modo in cui il denaro e la sicurezza producono. Il suo arco narrativo non è di redenzione. È di sopravvivenza.",
          },
          {
            name: "Yeardley Love",
            role: "Centro Morale",
            description: "Calorosa, concreta, acutamente intelligente. La serie insiste sulla sua completezza. La sua assenza è l’argomento finale della serie.",
          },
          {
            name: "George Huguely IV",
            role: "Il Padre",
            description: "Levigato dalla ricchezza, fluente socialmente, emotivamente evacuato. Tratta la paternità come una membership istituzionale: uno status da mantenere, non una relazione da abitare.",
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
        body: "Call It All Love viene sviluppata in partnership formale con la One Love Foundation. Questa non è un’iniziativa benefica. È un allineamento creativo e commerciale: la serie dà un volto ai dati di One Love, e One Love offre alla serie credibilità istituzionale e un pubblico già formato.",
      },
      creator: {
        label: "Dal Creatore",
        quote: "“Non ho fatto questo per spiegare George Huguely. L’ho fatto perché credo che le storie più pericolose siano quelle che pensiamo di capire già. Call It All Love è la storia di cosa è fatto un uomo quando tutto ciò che lo ha formato viene strappato via. Non è una storia confortante. Non finisce bene. Ma credo che sia necessaria — e credo che, se la raccontiamo bene, potrebbe cambiare il modo in cui un giovane riconosce l’inizio di qualcosa di pericoloso prima che raggiunga la sua fine. Vale la pena farla. È questo.”",
        attribution: "— Leonardo Cecchi, Scrittore · Creatore · Produttore",
      },
      cta: {
        label: "Richieste",
        body: "Call It All Love è attualmente in sviluppo attivo e in fase di pitch. Per richieste di produzione, distribuzione o partnership:",
        downloadLabel: "Scarica il Series Bible",
      },
    },
    escapeToItaly: {
      quickFacts: {
        genreLabel: "Genere",
        genre: "Commedia Romantica",
        settingLabel: "Ambientazione",
        setting: "Los Angeles e Piemonte, Italia",
        toneLabel: "Tono",
        tone: "Calda, divertente, silenziosamente struggente",
      },
      logline: "Mike, un banchiere italoamericano emotivamente chiuso, ha una settimana per salvare la casa della nonna appena scomparsa, ma tra una Nonna che tiene viva nella propria mente pur di non doverle dire addio, un vecchio amico che lo trascina nella vita notturna italiana, e un vecchio amore a cui è troppo guardingo per aprirsi, la scadenza gli sfugge. Perde la casa. Ciò che trova al suo posto è la vita, e il cuore, da cui è scappato per anni.",
      story: {
        label: "Panoramica",
        heading: "La Storia",
        body1: "Mike, un banchiere italoamericano a Los Angeles, devia ogni cosa reale con fascino e battute, finché, nella stessa settimana, gli viene negata una promozione, la sua ragazza lo lascia (“Spero che tu impari a sentire le cose prima che sia troppo tardi”), e sua madrina gli rivela che ha una settimana per salvare la casa della nonna defunta da un sequestro. Mike parte per l’Italia.",
        body2: "Alla casa, trova la Nonna: calda, presente, esattamente come la ricorda. Non è reale, e Mike lo sa, ma non riesce a lasciarla andare. Si riavvicina a Riccardo, un altro che evita, nascondendo il proprio lutto, e ritrova un ritmo naturale con la sua amica di penna d’infanzia Sara, finché lei non lo spinge a esserci davvero per lei, non a schivare, e lui comincia a credere di poter essere diverso.",
        closingLine: "“Il suo cuore non è mai stato troppo grande per questo mondo. Si era solo reso piccolo abbastanza per starci dentro.”",
      },
      whyThisStory: {
        label: "Perché Questa Storia",
        heading: "Perché Questa Storia. Perché Ora.",
        cards: [
          {
            heading: "Un Vuoto di Genere da Colmare",
            body: "Ogni commedia romantica ambientata in Italia vende la cartolina: un forestiero guarito dal paesaggio. Questa vende il prezzo di tutto ciò: cosa significa davvero avere un piede in ciascun mondo, raccontato da un italoamericano che lo ha vissuto.",
          },
          {
            heading: "Una Vera Conversazione sulla Mascolinità",
            body: "Come molti uomini, a Mike e Riccardo non è mai stato insegnato cosa fare con il dolore; questo film li guarda trovare un’altra via di fuga, e poi tornare indietro. Attuale, ma guadagnato attraverso la commedia e il cuore, non una lezione.",
          },
        ],
      },
      characters: {
        label: "I Personaggi",
        heading: "Personaggi",
        items: [
          {
            name: "Mike (Michele) Giusti",
            role: "Protagonista",
            description: "Primi anni ’20. Un impiegato bancario italoamericano a Los Angeles che ha costruito tutta la sua personalità sul non sentire le cose. Di cuore grande, e sul punto di imparare a farlo vedere.",
          },
          {
            name: "Sara Mancuso",
            role: "Colei Che Lo Vede Davvero",
            description: "Primi anni ’20. L’amica di penna d’infanzia di Mike, tornata in Piemonte da Milano per aiutare a gestire la banca di famiglia. Divisa in silenzio tra inseguire il proprio sogno e restare per un padre a cui il tempo sta per scadere.",
          },
          {
            name: "Riccardo Costa",
            role: "Lo Specchio Oscuro di Mike",
            description: "Primi anni ’20. Il migliore amico d’infanzia di Mike, figura magnetica della vita notturna torinese, che gli insegna le sue “regole” per la sicurezza e per non pensarci troppo, mentre evita il proprio lutto esattamente come fa Mike.",
          },
          {
            name: "Nonna Giusti",
            role: "Colei Che Non Lo Ha Mai Lasciato Nascondere",
            description: "Fine anni ’60 – ’70. La nonna di Mike, scomparsa sei mesi prima dell’inizio della storia. Mike interagisce con una versione per metà immaginata e per metà ricordata di lei, costruita per tenerla vicina: l’unica persona che gli ha sempre detto la verità.",
          },
        ],
      },
      comparables: {
        label: "Tono e Posizionamento",
        heading: "In Buona Compagnia",
        items: [
          {
            title: "About Time",
            info: "2013",
            note: "La commedia nasce naturalmente da personaggi imperfetti e amabili, non dalle battute; le risate rendono i momenti emotivi ancora più forti.",
          },
          {
            title: "Call Me By Your Name",
            info: "Sony Pictures Classics, 2017",
            note: "Una fotografia italiana assolata e un senso di desiderio in ogni inquadratura.",
          },
          {
            title: "La Dolce Villa",
            info: "Netflix, 2024",
            note: "Un viaggio in Italia fatto controvoglia diventa il luogo dove qualcuno finalmente respira, si innamora e trova la vita che non sapeva di cercare.",
          },
        ],
      },
      socialTraction: {
        label: "Vantaggio di Marketing",
        heading: "Un Pubblico Già Pronto",
        body1: "Leonardo porta a questo progetto un seguito social di oltre 800.000 persone tra TikTok e Instagram, costruito raccontando per anni la propria storia di italoamericano in bilico tra due mondi, lo stesso territorio raccontato in Escape to Italy.",
        stats: [
          { num: "4,08M", label: "Seguito Combinato", subtitle: "Leonardo ed Eleonora, Instagram + TikTok" },
          { num: "2,2M", label: "TikTok di Eleonora", subtitle: "Da sola, costruito con Alex & Co. e Out of My League" },
        ],
        body2: "I fan chiedono già altro di questa storia. Una risposta a un commento che chiedeva una reunion di Alex & Co. ne è un piccolo esempio: la prova che questo pubblico non si limita a guardare, è coinvolto in ciò che Leonardo farà dopo.",
        body3: "Questo seguito combinato porta un vero peso di marketing a Escape to Italy prima ancora di girare un solo fotogramma.",
        videoCaption: "Risponde a un fan che chiede una reunion di Alex & Co.",
        watchLabel: "Guarda su TikTok",
      },
      team: {
        label: "Il Team",
        heading: "Cast e Creatori",
        members: [
          {
            name: "Leonardo Cecchi",
            role: "Sceneggiatore · Produttore · Mike",
            bio: "Leonardo è cresciuto tra Stati Uniti e Italia, e la sua nonna italiana è scomparsa alcuni anni fa, e conosce in prima persona sia il luogo in cui vive questo film, sia il modo in cui una casa può custodire insieme il dolore e l’amore. Ha sostenuto Alex & Co. per Disney per quattro stagioni, un successo trasmesso in UK, Irlanda, Medio Oriente ed Europa.",
          },
          {
            name: "Eleonora Gaggero",
            role: "Co-protagonista, Sara · Confermata",
            bio: "Il romanzo di Eleonora, Sul più bello, è diventato la trilogia Netflix Out of My League, in cui ha anche recitato: una rara prova di autrice diventata interprete, e l’unica persona ad aver contribuito in entrambi i ruoli. Ha co-condotto Alex & Co. con Leonardo per quattro stagioni.",
          },
        ],
      },
      creator: {
        label: "Dallo Sceneggiatore",
        quote: "“Escape to Italy è una commedia perché la vita continua a essere divertente anche quando sta andando in pezzi. Ma sotto c’è un’idea semplice e urgente: evitare è il modo più facile per attraversare la vita, ed è anche il più pericoloso. Le persone che amiamo, i momenti che contano: non aspettano per sempre che siamo pronti. Questo film è per chiunque abbia mai saputo esattamente cosa stava evitando e si sia detto che c’era ancora tempo. Spero sia un promemoria per smettere di aspettare.”",
        attribution: "Leonardo Cecchi, Sceneggiatore · Ideatore · Produttore",
      },
      cta: {
        label: "Richieste",
        body: "Escape to Italy è attualmente in sviluppo: sceneggiatura completata, casting e finanziamento in corso. Per richieste di produzione, finanziamento o distribuzione:",
      },
    },
  },
} as const;
