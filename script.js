// Language Translations
const translations = {
    en: {
        'nav.about': 'About',
        'nav.achievements': 'Achievements',
        'nav.cv': 'CV',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.greeting': "Hello, I'm <span class=\"highlight\">Alex</span>",
        'hero.tagline': 'Software Engineer • Team Lead • Technical Project Lead • Test Manager • Enabler • AI & Vibe Coding Enthusiast • Culture Builder • Team Motivation Driver • <span class="ninja-visible" title="Click me!">🥷</span>',
        'hero.intro': '12 years of professional experience in automotive software development with expertise in ASPICE, ADAS, test management and team leadership.',
        'hero.viewProjects': 'View Projects',
        'hero.getInTouch': 'Get in Touch',
        'about.title': 'About Me',
        'about.para1': "I'm an experienced Software Engineer with over 12 years of professional experience, specializing in automotive series software development with a strong focus on ASPICE compliance, ADAS and Battery Management Systems. My expertise spans comprehensive test management, advanced toolchain optimization, technical project leadership, and cross-functional team coordination across multiple international locations.",
        'about.para2': "With 3 years of dedicated team leadership experience managing up to 30 engineers, I've successfully established and grown a new EDAG department and site in Berlin from the ground up.",
        'about.para3': "I'm passionate about integrating AI solutions and prompt engineering techniques into engineering workflows. I drive systematic process improvements that help teams become stronger, more efficient, and more motivated.",
        'about.para4': "Currently based in the UK as an expat, I continue to push boundaries in automotive software excellence while mentoring engineers across different countries.",
        'about.drivesMe': 'What Drives Me',
        'about.motto': '<em>Engineer at heart - always questioning assumptions and redefining constraints. Maybe the glass isn\'t half full or half empty; perhaps the glass is simply too big.</em>',
        'about.values': 'My Guiding Values',
        'about.value1Title': 'Character comes before technical skill.',
        'about.value1Text': 'I believe the right personality, attitude, and team mindset have a greater long-term impact than any specific technical ability.',
        'about.value2Title': 'Humor and positive energy build stronger teams.',
        'about.value2Text': 'A light, friendly atmosphere encourages collaboration, creativity, and resilience during challenging projects.',
        'about.value3Title': 'Every process can be improved.',
        'about.value3Text': 'I constantly look for opportunities to optimize, automate, and streamline work to increase efficiency and reduce friction.',
        'about.expertise': 'Expertise',
        'about.technicalSkills': 'Technical Skills',
        'about.languages': 'Languages',
        'about.native': 'Native',
        'about.fluent': 'Fluent',
        'about.hobbies': 'Hobbies & Interests',
        'achievements.title': 'Key Achievements',
        'achievements.team': 'Established new EDAG Berlin department and grew team from 0 to 30+ engineers across multiple international projects',
        'achievements.aspice': 'Led project transformation from ASPICE Level 0 to Level 2, implementing quality processes and successfully passing external assessments',
        'achievements.international': 'Managing cross-cultural teams across Germany, Hungary, Czech Republic, Malaysia and India in automotive software development',
        'achievements.innovation': 'AI-assisted development and toolchain optimization, reducing manual effort and minimizing potential errors through custom automation solutions',
        'achievements.technology': 'Mastered diverse tech stacks from embedded C to iOS Swift to AI-assisted development, consistently adapting to emerging technologies',
        'achievements.balance': "Applied engineering principles to parenthood with rapid prototyping, iterative improvement, and debugging, proving that professional excellence and family dedication aren't mutually exclusive",
        'cv.title': 'Curriculum Vitae',
        'cv.experience': 'Experience',
        'cv.education': 'Education',
        'cv.download': 'Download Full CV (PDF)',
        // Job 1: Software Development Expert
        'cv.job1.b1': 'Expat in the UK, working on cutting-edge automotive software projects',
        'cv.job1.b2': 'Technical lead and SPOC in automotive projects with ASPICE and ADAS focus',
        'cv.job1.b3': 'Leading team of 15 engineers to deliver high-quality software solutions',
        'cv.job1.b4': 'Management of teams from different countries and EDAG locations',
        'cv.job1.b5': 'Technical onboarding of team members',
        'cv.job1.b6': 'Distributing work and alignment with the customer',
        'cv.job1.b7': 'Technical support for tools and toolchain improvements',
        'cv.job1.b8': 'Prompt Engineer - Integrating AI into engineering workflows to optimize productivity',
        'cv.job1.b9': 'Customer acquisition for new technological fields in the UK',
        // Job 2: Team Lead
        'cv.job2.b1': 'Grew and led a Embedded Software Development team from 0 up to 30+ employees',
        'cv.job2.b2': 'Established a new department and EDAG site in Berlin',
        // Job 3: Test Manager
        'cv.job3.b1': 'Test Manager for model-based software development for software serial deployment in automotive sector with up to ASIL B',
        'cv.job3.b2': 'Resonsible for 10 software test engineers',
        'cv.job3.b3': 'Test management, test planning, test case design, test execution, test automation, test reporting, toolchain management',
        'cv.job3.b4': 'Led test management activities elevating project from ASPICE Level 0 to Level 2',
        'cv.job3.b5': 'Defined and implemented quality assurance processes aligned with ASPICE standards and OEM requirements',
        'cv.job3.b6': 'Successfully presented process improvements and results in multiple external ASPICE assessments',
        'cv.job3.b7': 'Model-based software testing with MATLAB TargetLink/Simulink (SIL) for energy management',
        'cv.job3.b8': 'Toolchain maintenance and enhancement',
        'cv.job3.b9': 'Scripting and GUIs in VBA, Python and MATLAB',
        'cv.job3.b10': 'Requirement engineering',
        // Job 4: Parental Leave
        'cv.job4.b1': 'Parental leave',
        'cv.job4.b2': 'Spearheaded a high-stakes, 24/7 project involving rapid prototyping, sleep deprivation, and real-time problem solving',
        'cv.job4.b3': 'Successfully deployed version 1.0 of a small human, ensuring stability, continuous improvement, and regular feature updates',
        'cv.job4.b4': 'Improved multitasking, patience, and negotiation skills under extreme conditions',
        // Job 5: iOS Engineer
        'cv.job5.b1': 'Freelance developing of iOS applications',
        // Job 6: BFFT/EDAG
        'cv.job6.b1': 'Validation of model-based software with MATLAB TargetLink/Simulink (MIL/SIL/PIL) in the field of energy management for Audi/VW',
        'cv.job6.b2': 'Maintenance and enhancement of toolchain using M-Script, Python and VBA',
        'cv.job6.b3': 'Custom Windows Tools written in Delphi',
        'cv.job6.b4': 'Custom C Code for replacing Simulink blocks',
        'cv.job6.b5': 'Hardware integration on testing boards and maintenance of testing boards',
        'cv.job6.b6': 'Automation using CI with Jenkins',
        'cv.job6.b7': 'Requirement management with Doors and software versioning with MKS/PTC',
        // Job 7: Siemens BMS
        'cv.job7.b1': 'Design, development, and implementation of a battery management system (BMS) for electric vehicles with smart grid integration',
        'cv.job7.b2': 'Development of state-of-charge (SOC) monitoring and estimation algorithms',
        'cv.job7.b3': 'Development of battery cell balancing strategies to optimize battery life and performance',
        'cv.job7.b4': 'Creation of SOC tracking and data logging functionality',
        'cv.job7.b5': 'Integration of CAN bus communication protocols for vehicle network integration',
        'cv.job7.b6': 'Development of dashboard visualization for real-time battery status monitoring',
        'cv.job7.b7': 'Printed circuit board (PCB) design and prototyping for BMS hardware',
        // Job 8: Siemens Dynamo Werk
        'cv.job8.b1': 'Led process optimization initiatives for the incoming goods division, implementing lean manufacturing principles',
        'cv.job8.b2': 'Applied 5S methodology, Kanban systems, Just-In-Time (JIT) delivery, and Poka-Yoke error-proofing techniques',
        'cv.job8.b3': 'Conducted value stream mapping to identify and eliminate waste in material flow processes',
        'cv.job8.b4': 'Implemented lean administration practices to improve operational efficiency',
        // Job 9: Siemens Robot Kit
        'cv.job9.b1': 'Development of a robot-kit for educational purpose in foreign countries to teach basics of mechatronics and programming',
        'cv.job9.b2': 'Programming of microcontrollers in C and assembly language',
        'cv.job9.b3': 'Hardware and electrical design of the robot-kit',
        'cv.job9.b4': 'Programming of a desktop application for easier programming of the robot (point and click programming like Scratch or Lego SPIKE)',
        'cv.job9.b5': 'Development of teaching materials and workshops',
        // Education
        'cv.edu1.thesis': '<strong>Thesis:</strong> Implementation of a battery management system in a low-power electric vehicle and development/realization of an energy management system',
        'cv.edu1.grade': 'Grade: 1.53 (German grading system) | Studies conducted in English',
        'cv.edu2.desc': 'Apprenticeship covering Mechanics, Electrical Engineering, Software Development for Embedded Systems, Business Administration, Process and Team Management',
        'cv.edu2.grade': 'Grade: 1.16 (German grading system) | Conducted in English',
        'projects.title': 'Projects',
        'projects.thesis': 'Implementation of a battery management system in a low-power electric vehicle with comprehensive energy management. Features include SOC monitoring, cell balancing, smart grid integration, and CAN bus communication with custom PCB design.',
        'projects.workshop': 'A journey into woodworking that started with small projects and grew into a full workshop. From basic hand tools to advanced machinery, every project represents learning by doing. Explore my creations, techniques, and the evolution of my craft over the years.',
        'projects.turnkeeper': 'My first complete project built entirely with AI-assisted development! A mobile-first Progressive Web App (PWA) for tracking combat initiative in tabletop RPG games like D&D, Pathfinder, and similar systems. Features intuitive turn management and works offline.',
        'projects.turborobo': 'Win32 GUI application for writing C programs for the Turbo Robo Education Kit. Features an intuitive drag-and-drop programming interface similar to Scratch or Lego SPIKE, making embedded programming accessible for educational purposes.',
        'projects.teams': 'A powerful Python utility that exports Microsoft Teams chats, group conversations, meetings, and channel messages into a single, searchable HTML file. Features embedded images, intuitive navigation, and complete conversation history preservation.',
        'projects.outlook': 'Python script that exports emails from Microsoft Outlook folders to HTML or MSG format files. Uses COM automation to connect to your local Outlook installation and saves emails with organized, timestamped filenames for easy archival.',
        'projects.clipboard': 'Windows desktop application for managing multiple clipboard snippets simultaneously. Enhances productivity by allowing quick access to previously copied text and managing a history of clipboard entries.',
        'projects.games': 'Two iOS game projects developed during my freelance period. <strong>Asteroid Blast</strong> is a classic space shooter with modern mechanics, while <strong>Sequently</strong> is an innovative music-based puzzle game. Both showcase mobile game development skills with Swift and iOS frameworks.',
        'projects.more': 'Explore my complete collection of open-source projects and utilities. Includes MATLAB/Simulink tools for automotive development, Python automation scripts, VBA macros, batch utilities, and various experimental projects across multiple languages and frameworks.',
        'contact.title': 'Get in Touch',
        'contact.intro': "I'm always interested in hearing about new opportunities and collaborations."
    },
    de: {
        'nav.about': 'Über mich',
        'nav.achievements': 'Erfolge',
        'nav.cv': 'Lebenslauf',
        'nav.projects': 'Projekte',
        'nav.contact': 'Kontakt',
        'hero.greeting': "Hallo, ich bin <span class=\"highlight\">Alex</span>",
        'hero.tagline': 'Software Engineer • Team Lead • Technical Project Lead • Test Manager • Enabler • AI & Vibe Coding Enthusiast • Culture Builder • Team Motivation Driver • <span class="ninja-visible" title="Click me!">🥷</span>',
        'hero.intro': '12 Jahre Berufserfahrung in der Automobilsoftwareentwicklung mit Expertise in ASPICE, ADAS, Testmanagement und Teamführung.',
        'hero.viewProjects': 'Projekte ansehen',
        'hero.getInTouch': 'Kontakt aufnehmen',
        'about.title': 'Über mich',
        'about.para1': 'Ich bin ein erfahrener Software Engineer mit über 12 Jahren Berufserfahrung, spezialisiert auf Automobilserien-Softwareentwicklung mit starkem Fokus auf ASPICE-Konformität, ADAS und Batteriemanagementsysteme. Meine Expertise umfasst umfassendes Testmanagement, fortschrittliche Toolchain-Optimierung, technische Projektleitung und funktionsübergreifende Teamkoordination an mehreren internationalen Standorten.',
        'about.para2': 'Mit 3 Jahren engagierter Teamleitungserfahrung und der Leitung von bis zu 30 Ingenieuren habe ich erfolgreich eine neue EDAG-Abteilung und einen neuen Standort in Berlin von Grund auf aufgebaut.',
        'about.para3': 'Ich bin leidenschaftlich daran interessiert, KI-Lösungen und Prompt-Engineering-Techniken in Engineering-Workflows zu integrieren. Ich treibe systematische Prozessverbesserungen voran, die Teams stärker, effizienter und motivierter machen.',
        'about.para4': 'Derzeit in Großbritannien als Expat ansässig, erweitere ich weiterhin die Grenzen der Automobilsoftware-Exzellenz und betreue Ingenieure in verschiedenen Ländern.',
        'about.drivesMe': 'Was mich antreibt',
        'about.motto': '<em>Ingenieur durch und durch - Stets Annahmen hinterfragen und Beschränkungen neu definieren. Vielleicht ist das Glas weder halb voll noch halb leer; vielleicht ist das Glas einfach zu groß.</em>',
        'about.values': 'Meine Leitsätze',
        'about.value1Title': 'Charakter kommt vor technischem Können.',
        'about.value1Text': 'Ich glaube, dass die richtige Persönlichkeit, Einstellung und Team-Mentalität langfristig einen größeren Einfluss haben als jede spezifische technische Fähigkeit.',
        'about.value2Title': 'Humor und positive Energie bauen stärkere Teams auf.',
        'about.value2Text': 'Eine lockere, freundliche Atmosphäre fördert Zusammenarbeit, Kreativität und Widerstandsfähigkeit bei herausfordernden Projekten.',
        'about.value3Title': 'Jeder Prozess kann verbessert werden.',
        'about.value3Text': 'Ich suche ständig nach Möglichkeiten, Arbeit zu optimieren, zu automatisieren und zu rationalisieren, um die Effizienz zu steigern und Reibungen zu reduzieren.',
        'about.expertise': 'Expertise',
        'about.technicalSkills': 'Technische Fähigkeiten',
        'about.languages': 'Sprachen',
        'about.native': 'Muttersprache',
        'about.fluent': 'Fließend',
        'about.hobbies': 'Hobbys & Interessen',
        'achievements.title': 'Wichtige Erfolge',
        'achievements.team': 'Aufbau eines neuen EDAG Standorts und Team von 0 auf 30+ Engineers, mit mehreren internationalen Projekten',
        'achievements.aspice': 'Projekttransformation von ASPICE Level 0 auf Level 2 geleitet, Qualitätsprozesse implementiert und externe Assessments erfolgreich bestanden',
        'achievements.international': 'Leitung interkultureller Teams in Deutschland, Ungarn, Tschechien, Malaysia und Indien in der Softwareentwicklung für die Automobilindustrie',
        'achievements.innovation': 'KI-gestützte Entwicklung und Toolchain-Optimierung, Reduzierung manueller Arbeit und Minimierung potenzieller Fehler durch maßgeschneiderte Automatisierungslösungen',
        'achievements.technology': 'Vielfältige Tech-Stacks von Embedded C über iOS Swift bis zur KI-gestützten Entwicklung gemeistert, konsequente Anpassung an neue Technologien',
        'achievements.balance': 'Engineering-Prinzipien auf Elternschaft angewendet mit Rapid Prototyping, iterativer Verbesserung und Debugging. Beweisend, dass berufliche Exzellenz und Familienengagement sich nicht ausschließen',
        'cv.title': 'Lebenslauf',
        'cv.experience': 'Berufserfahrung',
        'cv.education': 'Ausbildung',
        'cv.download': 'Vollständigen Lebenslauf herunterladen (PDF)',
        // Job 1: Software Development Expert
        'cv.job1.b1': 'Expat in Großbritannien, Arbeit an zukunftsweisenden Automobilsoftwareprojekten',
        'cv.job1.b2': 'Technischer Lead und SPOC in Automobilprojekten mit ASPICE- und ADAS-Fokus',
        'cv.job1.b3': 'Leitung eines Teams von 15 Ingenieuren zur Lieferung hochwertiger Softwarelösungen',
        'cv.job1.b4': 'Management von Teams aus verschiedenen Ländern und EDAG-Standorten',
        'cv.job1.b5': 'Technisches Onboarding von Teammitgliedern',
        'cv.job1.b6': 'Arbeitsverteilung und Abstimmung mit dem Kunden',
        'cv.job1.b7': 'Technischer Support für Tools und Toolchain-Verbesserungen',
        'cv.job1.b8': 'Prompt Engineer - Integration von KI in Engineering-Workflows zur Produktivitätsoptimierung',
        'cv.job1.b9': 'Kundenakquise für neue technologische Bereiche in Großbritannien',
        // Job 2: Team Lead
        'cv.job2.b1': 'Aufbau und Leitung eines Embedded-Software-Entwicklungsteams von 0 auf 30+ Mitarbeiter',
        'cv.job2.b2': 'Aufbau einer neuen Abteilung und eines EDAG-Standorts in Berlin',
        // Job 3: Test Manager
        'cv.job3.b1': 'Test Manager für modellbasierte Softwareentwicklung für Serienfreigabe im Automobilsektor bis ASIL B',
        'cv.job3.b2': 'Verantwortlich für 10 Software-Testingenieure',
        'cv.job3.b3': 'Testmanagement, Testplanung, Testfallentwurf, Testausführung, Testautomatisierung, Testreporting, Toolchain-Management',
        'cv.job3.b4': 'Leitung der Testmanagement-Aktivitäten mit Projekttransformation von ASPICE Level 0 auf Level 2',
        'cv.job3.b5': 'Definition und Implementierung von Qualitätssicherungsprozessen gemäß ASPICE-Standards und OEM-Anforderungen',
        'cv.job3.b6': 'Erfolgreiche Präsentation von Prozessverbesserungen und Ergebnissen in mehreren externen ASPICE-Assessments',
        'cv.job3.b7': 'Modellbasiertes Software-Testing mit MATLAB TargetLink/Simulink (SIL) für Energiemanagement',
        'cv.job3.b8': 'Wartung und Erweiterung der Toolchain',
        'cv.job3.b9': 'Skripting und GUIs in VBA, Python und MATLAB',
        'cv.job3.b10': 'Requirements Engineering',
        // Job 4: Parental Leave
        'cv.job4.b1': 'Elternzeit',
        'cv.job4.b2': 'Leitung eines hochriskanten 24/7-Projekts mit Rapid Prototyping, Schlafentzug und Problemlösung in Echtzeit',
        'cv.job4.b3': 'Erfolgreicher Rollout von Version 1.0 eines kleinen Menschen mit Sicherstellung von Stabilität, kontinuierlicher Verbesserung und regelmäßigen Feature-Updates',
        'cv.job4.b4': 'Verbesserung von Multitasking, Geduld und Verhandlungsgeschick unter extremen Bedingungen',
        // Job 5: iOS Engineer
        'cv.job5.b1': 'Freiberufliche Entwicklung von iOS-Anwendungen',
        // Job 6: BFFT/EDAG
        'cv.job6.b1': 'Validierung modellbasierter Software mit MATLAB TargetLink/Simulink (MIL/SIL/PIL) im Bereich Energiemanagement für Audi/VW',
        'cv.job6.b2': 'Wartung und Erweiterung der Toolchain mit M-Script, Python und VBA',
        'cv.job6.b3': 'Maßgeschneiderte Windows-Tools in Delphi entwickelt',
        'cv.job6.b4': 'Maßgeschneiderter C-Code zum Ersetzen von Simulink-Blöcken',
        'cv.job6.b5': 'Hardware-Integration auf Testboards und Wartung der Testboards',
        'cv.job6.b6': 'Automatisierung mit CI über Jenkins',
        'cv.job6.b7': 'Requirements-Management mit Doors und Versionsverwaltung mit MKS/PTC',
        // Job 7: Siemens BMS
        'cv.job7.b1': 'Design, Entwicklung und Implementierung eines Batteriemanagementsystems (BMS) für Elektrofahrzeuge mit Smart-Grid-Integration',
        'cv.job7.b2': 'Entwicklung von Ladezustandsüberwachungs- und Schätzalgorithmen (SOC)',
        'cv.job7.b3': 'Entwicklung von Batteriezellen-Balancing-Strategien zur Optimierung von Batterielebensdauer und Leistung',
        'cv.job7.b4': 'Erstellung von SOC-Tracking und Datenlogging-Funktionalität',
        'cv.job7.b5': 'Integration von CAN-Bus-Kommunikationsprotokollen für Fahrzeugnetzwerkintegration',
        'cv.job7.b6': 'Entwicklung von Dashboard-Visualisierung für Echtzeit-Batteriestatusüberwachung',
        'cv.job7.b7': 'Leiterplattenentwurf (PCB) und Prototyping für BMS-Hardware',
        // Job 8: Siemens Dynamo Werk
        'cv.job8.b1': 'Leitung von Prozessoptimierungsinitiativen für die Wareneingangsdivision mit Implementierung von Lean-Manufacturing-Prinzipien',
        'cv.job8.b2': 'Anwendung von 5S-Methodik, Kanban-Systemen, Just-In-Time (JIT) Lieferung und Poka-Yoke Fehlerverhinderungstechniken',
        'cv.job8.b3': 'Durchführung von Wertstromanalysen zur Identifizierung und Eliminierung von Verschwendung in Materialflussprozessen',
        'cv.job8.b4': 'Implementierung von Lean-Administration-Praktiken zur Verbesserung der Betriebseffizienz',
        // Job 9: Siemens Robot Kit
        'cv.job9.b1': 'Entwicklung eines Roboterbaukastens für Bildungszwecke im Ausland zur Vermittlung von Mechatronik- und Programmiergrundlagen',
        'cv.job9.b2': 'Programmierung von Mikrocontrollern in C und Assembler',
        'cv.job9.b3': 'Hardware- und Elektrodesign des Roboterbaukastens',
        'cv.job9.b4': 'Programmierung einer Desktop-Anwendung zur einfacheren Roboterprogrammierung (Point-and-Click-Programmierung wie Scratch oder Lego SPIKE)',
        'cv.job9.b5': 'Entwicklung von Lehrmaterialien und Workshops',
        // Education
        'cv.edu1.thesis': '<strong>Thesis:</strong> Implementierung eines Batteriemanagement Systems in einem Elektroauto kleiner Leistung und Entwicklung/Realisierung eines Energiemanagement Systems',
        'cv.edu1.grade': 'Note: 1,53 (deutsches Notensystem) | Studium auf Englisch',
        'cv.edu2.desc': 'Ausbildung mit Schwerpunkten auf Mechanik, Elektrotechnik, Softwareentwicklung für Embedded Systems, Betriebswirtschaft, Prozess- und Teammanagement',
        'cv.edu2.grade': 'Note: 1,16 (deutsches Notensystem) | Ausbildung auf Englisch',
        'projects.title': 'Projekte',
        'projects.thesis': 'Implementierung eines Batteriemanagementsystems in einem Niedrigenergie-Elektrofahrzeug mit umfassendem Energiemanagement. Funktionen umfassen SOC-Überwachung, Zellenbalancierung, Smart-Grid-Integration und CAN-Bus-Kommunikation mit maßgeschneidertem PCB-Design.',
        'projects.workshop': 'Eine Reise in die Holzbearbeitung, die mit kleinen Projekten begann und zu einer vollständigen Werkstatt heranwuchs. Von einfachen Handwerkzeugen bis hin zu fortschrittlichen Maschinen repräsentiert jedes Projekt Learning by Doing. Entdecken Sie meine Kreationen, Techniken und die Entwicklung meines Handwerks über die Jahre.',
        'projects.turnkeeper': 'Mein erstes vollständiges Projekt, komplett mit KI-unterstützter Entwicklung erstellt! Eine Mobile-First Progressive Web App (PWA) zur Verfolgung der Kampfinitiative in Pen-and-Paper-Rollenspielen wie D&D, Pathfinder und ähnlichen Systemen. Bietet intuitive Rundenverwaltung und funktioniert offline.',
        'projects.turborobo': 'Win32-GUI-Anwendung zum Schreiben von C-Programmen für das Turbo Robo Education Kit. Bietet eine intuitive Drag-and-Drop-Programmieroberfläche ähnlich wie Scratch oder Lego SPIKE und macht Embedded-Programmierung für Bildungszwecke zugänglich.',
        'projects.teams': 'Ein leistungsstarkes Python-Tool, das Microsoft Teams Chats, Gruppengespräche, Meetings und Kanalnachrichten in eine einzige, durchsuchbare HTML-Datei exportiert. Bietet eingebettete Bilder, intuitive Navigation und vollständige Konversationshistorie.',
        'projects.outlook': 'Python-Skript zum Exportieren von E-Mails aus Microsoft Outlook-Ordnern in HTML- oder MSG-Dateien. Verwendet COM-Automatisierung zur Verbindung mit Ihrer lokalen Outlook-Installation und speichert E-Mails mit organisierten, zeitgestempelten Dateinamen für einfache Archivierung.',
        'projects.clipboard': 'Windows-Desktop-Anwendung zur gleichzeitigen Verwaltung mehrerer Zwischenablage-Snippets. Erhöht die Produktivität durch schnellen Zugriff auf zuvor kopierten Text und Verwaltung einer Historie von Zwischenablage-Einträgen.',
        'projects.games': 'Zwei iOS-Spielprojekte, die während meiner freiberuflichen Tätigkeit entwickelt wurden. <strong>Asteroid Blast</strong> ist ein klassischer Space Shooter mit modernen Mechaniken, während <strong>Sequently</strong> ein innovatives musikbasiertes Puzzlespiel ist. Beide zeigen Fähigkeiten in der mobilen Spieleentwicklung mit Swift und iOS Frameworks.',
        'projects.more': 'Entdecken Sie meine vollständige Sammlung von Open-Source-Projekten und Tools. Beinhaltet MATLAB/Simulink-Tools für Automobilentwicklung, Python-Automatisierungsskripte, VBA-Makros, Batch-Utilities und verschiedene experimentelle Projekte in mehreren Sprachen und Frameworks.',
        'contact.title': 'Kontakt',
        'contact.intro': 'Ich bin immer an neuen Möglichkeiten und Kooperationen interessiert.'
    }
};

// Language Toggle - Initialize immediately
const htmlElement = document.documentElement;
const currentLang = localStorage.getItem('language') || 'en';
htmlElement.setAttribute('lang', currentLang);

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
    htmlElement.setAttribute('lang', lang);
}

// Dark Mode Toggle - Initialize immediately to prevent flash
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Set up toggles once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    setLanguage(currentLang);
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? '🇬🇧' : '🇩🇪';
        
        langToggle.addEventListener('click', () => {
            const newLang = htmlElement.getAttribute('lang') === 'en' ? 'de' : 'en';
            setLanguage(newLang);
            langToggle.textContent = newLang === 'en' ? '🇬🇧' : '🇩🇪';
        });
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        
        themeToggle.addEventListener('click', () => {
            const theme = htmlElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and CV items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .cv-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Impressum Modal
const impressumModal = document.getElementById('impressum-modal');
const impressumLink = document.getElementById('impressum-link');
const closeModal = document.querySelector('.close');

impressumLink.addEventListener('click', (e) => {
    e.preventDefault();
    impressumModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    impressumModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === impressumModal) {
        impressumModal.style.display = 'none';
    }
});

// Scroll to Top Button
const scrollTopButton = document.getElementById('scroll-to-top');

if (scrollTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Achievement System
const achievements = {
    profile: {
        id: 'profile',
        icon: '🎮',
        title: 'Secret Developer',
        description: 'Found the hidden developer!',
        hint: 'Try to find the me',
        points: 10,
        unlocked: false
    },
    scrollTop: {
        id: 'scrollTop',
        icon: '⬆️',
        title: 'Back to the Top',
        description: 'Used the scroll button',
        hint: 'Scroll down and look for a way back up',
        points: 10,
        unlocked: false
    },
    darkMode: {
        id: 'darkMode',
        icon: '🌙',
        title: 'Night Owl',
        description: 'Toggled dark mode',
        hint: 'Come to the dark side',
        points: 10,
        unlocked: false
    },
    fortytwo: {
        id: 'fortytwo',
        icon: '🔢',
        title: 'Answer to Everything',
        description: 'Found the ultimate answer',
        hint: 'Find the answer to life, the universe and everything',
        points: 10,
        unlocked: false
    },
    coffee: {
        id: 'coffee',
        icon: '☕',
        title: 'Caffeinated',
        description: 'Powered up with coffee',
        hint: 'Coffee is essential for developers',
        points: 10,
        unlocked: false
    },
    ninja: {
        id: 'ninja',
        icon: '🥷',
        title: 'Ninja Hunter',
        description: 'Found all hidden ninjas!',
        hint: 'Find all 5 hidden ninjas on the page',
        points: 10,
        unlocked: false,
        ninjasFound: 0,
        totalNinjas: 5
    }
};

let coffeeClicks = 0;
let ninjasFound = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
let typedText = '';

// Load achievements from localStorage
function loadAchievements() {
    const saved = localStorage.getItem('achievements');
    if (saved) {
        const savedData = JSON.parse(saved);
        Object.keys(savedData).forEach(key => {
            if (achievements[key]) {
                achievements[key].unlocked = savedData[key].unlocked;
                if (key === 'ninja' && savedData[key].ninjasFound !== undefined) {
                    achievements[key].ninjasFound = savedData[key].ninjasFound;
                }
            }
        });
    }
    const savedNinjas = localStorage.getItem('ninjasFound');
    if (savedNinjas) {
        ninjasFound = JSON.parse(savedNinjas);
    }
    updateTracker();
}

// Save achievements to localStorage
function saveAchievements() {
    localStorage.setItem('achievements', JSON.stringify(achievements));
}

// Show achievement notification
function showAchievement(achievement) {
    const modal = document.getElementById('achievement-modal');
    const icon = document.getElementById('achievement-icon');
    const title = document.getElementById('achievement-title');
    const description = document.getElementById('achievement-description');
    const points = document.getElementById('achievement-points');
    
    icon.textContent = achievement.icon;
    title.textContent = 'Achievement Unlocked!';
    description.textContent = achievement.title;
    points.textContent = `+${achievement.points} points`;
    
    modal.classList.add('show');
    
    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
    
    updateTracker();
    checkAllUnlocked();
}

// Unlock achievement
function unlockAchievement(id) {
    if (!achievements[id].unlocked) {
        achievements[id].unlocked = true;
        saveAchievements();
        showAchievement(achievements[id]);
    }
}

// Update tracker button
function updateTracker() {
    const unlockedCount = Object.values(achievements).filter(a => a.unlocked).length;
    const totalCount = Object.keys(achievements).length;
    const progress = document.getElementById('tracker-progress');
    if (progress) {
        progress.textContent = `${unlockedCount}/${totalCount}`;
    }
}

// Check if all achievements unlocked
function checkAllUnlocked() {
    const allUnlocked = Object.values(achievements).every(a => a.unlocked);
    if (allUnlocked) {
        setTimeout(() => {
            const modal = document.getElementById('achievement-modal');
            const icon = document.getElementById('achievement-icon');
            const title = document.getElementById('achievement-title');
            const description = document.getElementById('achievement-description');
            const points = document.getElementById('achievement-points');
            
            icon.textContent = '🎉';
            title.textContent = 'CONGRATULATIONS!';
            description.textContent = 'You unlocked a new Software Engineer for your company!';
            points.textContent = '🏆 MASTER ACHIEVER 🏆';
            
            modal.classList.add('show');
            
            // Show fireworks
            showFireworks();
            
            setTimeout(() => {
                modal.classList.remove('show');
            }, 6000);
        }, 3500);
    }
}

// Fireworks animation
function showFireworks() {
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const particles = [];
    const colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#45b7d1', '#f06292', '#ba68c8', '#7bed9f'];
    
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            };
            this.alpha = 1;
            this.decay = Math.random() * 0.03 + 0.02;
        }
        
        update() {
            this.velocity.y += 0.1;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= this.decay;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    function createFirework(x, y) {
        const particleCount = 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(x, y, color));
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            }
        });
        
        if (particles.length > 0 || Date.now() - startTime < 3000) {
            requestAnimationFrame(animate);
        } else {
            document.body.removeChild(canvas);
        }
    }
    
    const startTime = Date.now();
    
    // Create fireworks at random intervals
    const fireworkInterval = setInterval(() => {
        if (Date.now() - startTime > 3000) {
            clearInterval(fireworkInterval);
            return;
        }
        
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6;
        createFirework(x, y);
    }, 400);
    
    // Initial burst
    createFirework(canvas.width / 2, canvas.height / 3);
    
    animate();
}

// Achievement 1: Profile Click
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('click', () => {
        unlockAchievement('profile');
    });
}

// Achievement 2: Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        unlockAchievement('scrollTop');
    });
}

// Achievement 3: Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        unlockAchievement('darkMode');
    });
}

// Achievement 4: Click on the flashing "42"
const easterEgg42 = document.querySelector('.easter-egg-42');
if (easterEgg42) {
    easterEgg42.style.cursor = 'pointer';
    const unlock42 = () => {
        unlockAchievement('fortytwo');
    };
    easterEgg42.addEventListener('click', unlock42);
    easterEgg42.addEventListener('touchend', (e) => {
        e.preventDefault();
        unlock42();
    });
}

// Achievement 5: Click coffee emoji once
const copyrightEgg = document.querySelector('.copyright-easter-egg');
if (copyrightEgg) {
    copyrightEgg.addEventListener('click', () => {
        unlockAchievement('coffee');
    });
}

// Achievement 6: Find all ninjas
function setupNinjas() {
    const ninjas = document.querySelectorAll('.ninja-hidden, .ninja-visible');
    ninjas.forEach((ninja, index) => {
        ninja.addEventListener('click', (e) => {
            e.stopPropagation();
            const ninjaId = `ninja-${index}`;
            
            if (!ninjasFound.includes(ninjaId)) {
                ninjasFound.push(ninjaId);
                localStorage.setItem('ninjasFound', JSON.stringify(ninjasFound));
                
                // Visual feedback
                ninja.style.opacity = '0.3';
                ninja.style.transform = 'scale(1.5) rotate(360deg)';
                
                achievements.ninja.ninjasFound = ninjasFound.length;
                saveAchievements();
                
                // Check if all ninjas found
                if (ninjasFound.length >= achievements.ninja.totalNinjas) {
                    unlockAchievement('ninja');
                } else {
                    // Show progress notification
                    const modal = document.getElementById('achievement-modal');
                    const icon = document.getElementById('achievement-icon');
                    const title = document.getElementById('achievement-title');
                    const description = document.getElementById('achievement-description');
                    const points = document.getElementById('achievement-points');
                    
                    icon.textContent = '🥷';
                    title.textContent = 'Ninja Found!';
                    description.textContent = `Found ${ninjasFound.length}/${achievements.ninja.totalNinjas} ninjas`;
                    points.textContent = '🔍 Keep searching!';
                    
                    modal.classList.add('show');
                    setTimeout(() => {
                        modal.classList.remove('show');
                    }, 3000);
                }
                
                updateTracker();
            }
        });
        
        // Mark already found ninjas
        if (ninjasFound.includes(`ninja-${index}`)) {
            ninja.style.opacity = '0.3';
        }
    });
}

setupNinjas();

// Tracker Modal
const trackerBtn = document.getElementById('achievement-tracker');
const trackerModal = document.getElementById('tracker-modal');
const trackerClose = document.querySelector('.tracker-close');

if (trackerBtn && trackerModal) {
    trackerBtn.addEventListener('click', () => {
        updateAchievementsList();
        trackerModal.style.display = 'block';
    });
}

if (trackerClose) {
    trackerClose.addEventListener('click', () => {
        trackerModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === trackerModal) {
        trackerModal.style.display = 'none';
    }
});

// Update achievements list in modal
function updateAchievementsList() {
    const list = document.getElementById('achievements-list');
    const totalScore = document.getElementById('total-score');
    
    if (list) {
        list.innerHTML = '';
        let score = 0;
        
        Object.values(achievements).forEach(achievement => {
            if (achievement.unlocked) {
                score += achievement.points;
            }
            
            const item = document.createElement('div');
            item.className = `achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`;
            
            let descriptionText = achievement.unlocked ? achievement.description : achievement.hint;
            if (achievement.id === 'ninja') {
                const found = achievement.ninjasFound || ninjasFound.length;
                descriptionText += ` (${found}/${achievement.totalNinjas})`;
            }
            
            item.innerHTML = `
                <div class="achievement-item-icon">${achievement.unlocked ? achievement.icon : '🔒'}</div>
                <div class="achievement-item-text">
                    <h4>${achievement.unlocked ? achievement.title : '???'}</h4>
                    <p>${descriptionText}</p>
                </div>
                <div class="achievement-item-points">${achievement.unlocked ? `+${achievement.points}` : '???'}</div>
            `;
            list.appendChild(item);
        });
        
        if (totalScore) {
            totalScore.textContent = score;
        }
    }
}

// Reset Achievements Button
const resetBtn = document.getElementById('reset-achievements');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all achievements? This cannot be undone!')) {
            // Reset all achievements
            Object.keys(achievements).forEach(key => {
                achievements[key].unlocked = false;
                if (key === 'ninja') {
                    achievements[key].ninjasFound = 0;
                }
            });
            coffeeClicks = 0;
            ninjasFound = [];
            localStorage.removeItem('ninjasFound');
            
            // Reset ninja visuals
            document.querySelectorAll('.ninja-hidden').forEach(ninja => {
                ninja.style.opacity = '';
                ninja.style.transform = '';
            });
            
            saveAchievements();
            updateTracker();
            updateAchievementsList();
            
            // Show confirmation
            alert('✅ All achievements have been reset!');
        }
    });
}

// Initialize
loadAchievements();
updateAchievementsList();

// Mobile menu toggle (if you want to add a hamburger menu later)
// This is a placeholder for future enhancement
const createMobileMenu = () => {
    // Add mobile menu functionality here if needed
};
