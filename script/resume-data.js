const RESUME_PAGE = {
    header: {
        label: "Resume",
        title: "Resume",
        subtitle: "Education, projects, certifications, and experience — download the full document below.",
    },
};

const RESUME_DATA = {
    education: [
        {
            school: "James Madison University, Harrisonburg, VA",
            dates: "Fall 2022 – Spring 2026",
            bullets: [
                "B.S. in Computer Science — expected graduation May 2026",
                "NSA Cybersecurity Certificate",
                "Member of Theta Tau and club climbing",
            ],
        },
        {
            school: "Kenston Forest School, Blackstone, VA",
            dates: "Fall 2020 – Spring 2022",
            bullets: ["Graduated 2022 with a 3.7 GPA", "30 dual-credit hours toward bachelor's degree"],
        },
    ],
    projects: [
        {
            title: "DNSSEC Independent Study & Thesis",
            text: "DNSSEC testbed, OpenSSL signature verification, 80+ page thesis, and public repositories documenting research and code.",
            links: [
                { label: "Code", href: "https://github.com/Stevedorm/DNSSEC" },
                { label: "Thesis", href: "https://github.com/Stevedorm/DNSSEC-Thesis" },
            ],
        },
        {
            title: "Needham-Schroeder Protocol",
            text: "Symmetric-key protocol with KDC and documented handshake flow.",
            links: [{ label: "Repository", href: "https://github.com/Stevedorm/Needham-Schoeder-Project" }],
        },
        {
            title: "RSA Digital Signature, File Encryption, Session Key Exchange",
            text: "C-based cryptography labs covering signing, block encryption, and RSA session key distribution.",
            links: [
                { label: "RSA Signature", href: "https://github.com/Stevedorm/RSA-BasedDigitalSignature" },
                { label: "File Encryption", href: "https://github.com/Stevedorm/FileEncryption" },
                { label: "Session Key", href: "https://github.com/Stevedorm/SessionKeyExchangeUsingRSA" },
            ],
        },
        {
            title: "Terminal Spreadsheet",
            text: "Ruby + Curses TUI spreadsheet with formula support.",
            links: [{ label: "Repository", href: "https://github.com/Stevedorm/TerminalSpreadsheet" }],
        },
    ],
    certifications: [
        {
            title: "NSA Cybersecurity Certificate",
            text: "Earned through JMU coursework in Information Security, Cyber Defense, and Cryptography.",
        },
        {
            title: "CompTIA Security+ (In Progress)",
            text: "Preparing for Security+ to strengthen industry-ready security fundamentals.",
        },
    ],
    experience: [
        {
            role: "Lead / Property Inspector",
            org: "Rocktown Realty, Harrisonburg, VA",
            dates: "March 2024 – Present",
            bullets: [
                "Inspect properties and identify maintenance needs with strong attention to detail",
                "Communicate findings between supervisors and coworkers",
                "Manage time across assignments; frequently volunteer for additional work",
            ],
        },
        {
            role: "Associate",
            org: "Walmart, Harrisonburg, VA",
            dates: "February 2022 – March 2024",
            bullets: [
                "Customer service and store operations in a fast-paced retail environment",
                "Collaborated with team members to meet daily operational goals",
            ],
        },
    ],
    activities: [
        {
            title: "Boy Scouts — Eagle Scout (2020)",
            text: "Leadership roles including Senior Patrol Leader; Order of the Arrow; extensive service and high-adventure experience.",
        },
        {
            title: "Mission Trips",
            text: "Annual church trips since 2017 completing home repairs in communities across the U.S.",
        },
    ],
};
