/**
 * Homepage content — edit this file to customize sections without touching HTML/CSS.
 * Each section maps to a renderer in home.js.
 */
const HOME_DATA = {
    hero: {
        profileImage: "pics/profpic.jpeg",
        profileAlt: "Headshot of Steven Dormady",
        headline: "Computer Science Student & Cybersecurity Enthusiast",
        intro:
            "I build and break systems to understand them — from DNSSEC research and secure infrastructure to low-level C programming, networking, and Linux administration. I enjoy turning complex security concepts into working labs, documented research, and practical tools.",
        ctas: [
            { label: "View Projects", href: "projects.html", variant: "primary" },
            { label: "Resume", href: "resume.html", variant: "secondary" },
            { label: "Contact", href: "contact.html", variant: "ghost" },
        ],
    },

    aboutPreview: {
        id: "about-preview",
        label: "About Me",
        title: "Building a foundation in security and systems",
        paragraphs: [
            "I'm Steven Dormady, a senior at James Madison University pursuing a B.S. in Computer Science with a focus on cybersecurity, networking, and systems programming.",
            "My work spans DNSSEC research and testbed development, IT troubleshooting, Linux server administration, and hands-on security labs — from protocol implementations to network analysis with Wireshark and BIND9.",
        ],
        highlights: [
            "B.S. Computer Science — James Madison University",
            "NSA Cybersecurity Certificate",
            "DNSSEC research & 80+ page thesis",
            "Linux, networking & IT troubleshooting",
        ],
        readMoreHref: "about.html",
        readMoreLabel: "Read More",
        graphic: {
            type: "stats",
            items: [
                { value: "DNSSEC", label: "Research focus" },
                { value: "C / Python / Ruby", label: "Core languages" },
                { value: "Windows", label: "Daily driver" },
            ],
        },
    },

    featuredProjects: {
        id: "featured-projects",
        label: "Featured Work",
        title: "Selected Projects",
        subtitle: "Hands-on work across security research, systems programming, and networking.",
        viewAllHref: "projects.html",
        viewAllLabel: "View All Projects",
        projects: [
            {
                title: "DNSSEC Research & Testbed",
                description:
                    "Independent study and thesis on DNSSEC — manual signature verification with OpenSSL, a multi-zone testbed, and documented attack simulations including DNS spoofing and chain-of-trust validation.",
                technologies: ["DNSSEC", "BIND9", "OpenSSL", "Linux", "Python"],
                image: "pics/projects/dnssec/poster-pic.png",
                imageAlt: "DNSSEC research poster",
                links: [
                    { label: "Code", href: "https://github.com/Stevedorm/DNSSEC", external: true },
                    { label: "Thesis", href: "https://github.com/Stevedorm/DNSSEC-Thesis", external: true },
                ],
            },
            {
                title: "Spreadsheet Interpreter",
                description:
                    "A terminal-based spreadsheet application written in Ruby with Curses — formula evaluation, cell editing, and Excel-like functionality in a TUI environment.",
                technologies: ["Ruby", "Curses", "TUI"],
                image: "pics/projects/spreadsheet-1.svg",
                imageAlt: "Terminal spreadsheet screenshot",
                links: [
                    { label: "GitHub", href: "https://github.com/Stevedorm/TerminalSpreadsheet", external: true },
                ],
            },
            {
                title: "Systems Programming Projects",
                description:
                    "Low-level C projects including file encryption with block ciphers, RSA-based digital signatures, and session key exchange over data pipes — focused on cryptography and secure communication.",
                technologies: ["C", "OpenSSL", "RSA", "Cryptography"],
                image: "pics/projects/rsa-1.svg",
                imageAlt: "RSA digital signature project",
                links: [
                    { label: "File Encryption", href: "https://github.com/Stevedorm/FileEncryption", external: true },
                    { label: "RSA Signature", href: "https://github.com/Stevedorm/RSA-BasedDigitalSignature", external: true },
                ],
            },
            {
                title: "Cybersecurity Labs",
                description:
                    "Protocol and crypto labs including Needham-Schroeder key exchange with a KDC, session key distribution, and network security exercises documented with step-by-step handshake diagrams.",
                technologies: ["Cryptography", "Networking", "Python", "Burp Suite"],
                image: "pics/projects/NeedhamSchroeder/amal-p1.png",
                imageAlt: "Needham-Schroeder protocol handshake",
                links: [
                    { label: "Needham-Schroeder", href: "https://github.com/Stevedorm/Needham-Schoeder-Project", external: true },
                    { label: "Session Key Exchange", href: "https://github.com/Stevedorm/SessionKeyExchangeUsingRSA", external: true },
                ],
            },
        ],
    },

    skills: {
        id: "skills",
        label: "Technical Skills",
        title: "Tools & Technologies",
        subtitle: "Languages, security tooling, and infrastructure I work with regularly.",
        viewAllHref: "skills.html",
        viewAllLabel: "Full Skills Page",
        categories: [
            {
                name: "Languages",
                icon: "code",
                skills: ["C", "Python", "Ruby", "Java", "JavaScript", "SQL", "Rust"],
            },
            {
                name: "Cybersecurity",
                icon: "shield",
                skills: ["DNSSEC", "Cryptography", "OpenSSL", "Burp Suite", "Wireshark"],
            },
            {
                name: "Networking",
                icon: "network",
                skills: ["DNS", "BIND9", "TCP/IP", "Network Analysis", "VMware"],
            },
            {
                name: "Tools",
                icon: "tool",
                skills: ["Git", "Linux CLI", "GDB", "Valgrind", "Wireshark"],
            },
            {
                name: "Operating Systems",
                icon: "os",
                skills: ["Linux", "Ubuntu", "Windows", "macOS"],
            },
        ],
    },

    // Rename, reorder, remove, or expand items in this array anytime.
    highlights: {
        id: "highlights",
        label: "Technical Highlights",
        title: "Experience Beyond the Classroom",
        subtitle:
            "Research, labs, documentation, and troubleshooting — the work that shaped my technical path.",
        items: [
            {
                title: "DNSSEC Independent Study & Thesis",
                period: "2024 – 2025",
                type: "Research",
                description:
                    "Built a DNSSEC testbed, implemented manual RRSIG verification with OpenSSL, and authored an 80+ page thesis documenting chain-of-trust validation and attack simulations.",
                tags: ["DNSSEC", "Research", "OpenSSL"],
            },
            {
                title: "NSA Cybersecurity Certificate",
                period: "JMU",
                type: "Certification",
                description:
                    "Completed the NSA-aligned cybersecurity certificate covering cyber defense, cryptography, and information security coursework.",
                tags: ["Cyber Defense", "Cryptography"],
            },
            {
                title: "Security & Crypto Labs",
                period: "Coursework",
                type: "Labs",
                description:
                    "Implemented Needham-Schroeder, RSA signatures, file encryption, and session key exchange — each documented with diagrams and README walkthroughs.",
                tags: ["Protocols", "C", "Ruby"],
            },
            {
                title: "Linux Server & IT Troubleshooting",
                period: "Personal & Academic",
                type: "Infrastructure",
                description:
                    "Administered Linux servers, configured DNS zones with BIND9, diagnosed network issues, and maintained secure development environments in VMware.",
                tags: ["Linux", "BIND9", "VMware"],
            },
            {
                title: "Technical Documentation",
                period: "Ongoing",
                type: "Documentation",
                description:
                    "Maintained detailed README files, lab reports, and research write-ups for repositories and coursework — prioritizing reproducible steps and clear explanations.",
                tags: ["Git", "Technical Writing"],
            },
        ],
    },

    contact: {
        id: "contact",
        label: "Get In Touch",
        title: "Let's Connect",
        subtitle:
            "Open to internships, research collaborations, and conversations about cybersecurity and systems programming.",
        links: [
            {
                label: "Email",
                value: "stevedorm2022@gmail.com",
                href: "mailto:stevedorm2022@gmail.com",
                icon: "email",
            },
            {
                label: "LinkedIn",
                value: "linkedin.com/in/steve-dormady",
                href: "https://www.linkedin.com/in/steve-dormady",
                icon: "linkedin",
                external: true,
            },
            {
                label: "GitHub",
                value: "github.com/Stevedorm",
                href: "https://github.com/Stevedorm?tab=repositories",
                icon: "github",
                external: true,
            },
            {
                label: "Resume",
                value: "View & Download",
                href: "resume.html",
                icon: "resume",
            },
        ],
        resumeDownload: {
            label: "Download Resume (DOCX)",
            href: "files/CyberResume.docx",
        },
    },

    footer: {
        copyright: `© ${new Date().getFullYear()} Steven Dormady`,
        tagline: "Built from scratch with HTML, CSS, and JavaScript.",
        links: [
            { label: "Email", href: "mailto:stevedorm2022@gmail.com" },
            { label: "GitHub", href: "https://github.com/Stevedorm?tab=repositories", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/steve-dormady", external: true },
            { label: "Resume", href: "resume.html" },
        ],
    },
};
