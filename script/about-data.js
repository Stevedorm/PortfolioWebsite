const ABOUT_PAGE = {
    header: {
        label: "About",
        title: "About Me",
        subtitle:
            "Computer science student, cybersecurity researcher, and builder of hands-on security and systems projects.",
    },
};

const ABOUT_DATA = {
    intro: {
        title: "Quick Intro",
        paragraphs: [
            "I'm Steven Dormady, a senior at James Madison University pursuing a B.S. in Computer Science. I grew up in Gretna, Nebraska, and have lived in Ford, Virginia since 2020.",
            "This portfolio is built from scratch to showcase my technical work — especially cybersecurity research, systems programming, and networking. I'm passionate about understanding how secure infrastructure works in practice, not just in theory.",
        ],
    },
    education: {
        title: "Education",
        schools: [
            {
                name: "James Madison University, Harrisonburg, VA",
                dates: "Fall 2022 – Present",
                bullets: [
                    "B.S. in Computer Science — expected graduation May 2026",
                    "NSA Cybersecurity Certificate",
                    "Member of Theta Tau (professional engineering fraternity), club climbing, and Madison Welders",
                    "Theta Tau New Member Educator (2025–2026); welding instructor for Madison Welders",
                    "Relevant coursework: Operating Systems, Data Structures & Algorithms, Computer Systems I & II, Software Engineering, Cyber Defense, Cryptography, Information Security, Web Development, Discrete Structures, Applied Algorithms",
                ],
            },
            {
                name: "Kenston Forest School, Blackstone, VA",
                dates: "Fall 2020 – Spring 2022",
                bullets: [
                    "Graduated 2022 with a 3.7 GPA",
                    "Earned 30 dual-credit hours toward a bachelor's degree",
                ],
            },
            {
                name: "Gretna High School, Gretna, NE",
                dates: "Fall 2018 – Spring 2020",
                bullets: ["Attended through Summer 2020 before relocating to Virginia"],
            },
        ],
    },
    cybersecurity: {
        title: "Cybersecurity Focus",
        paragraphs: [
            "My strongest technical interest is applied security — especially DNS and DNSSEC. I completed an independent study and an 80+ page thesis building a multi-zone testbed, simulating attacks, and manually verifying RRSIG records with OpenSSL.",
            "Through JMU's NSA-aligned certificate and security coursework, I've studied cyber defense, cryptography, and information security, and I apply those concepts in lab projects and documented research.",
        ],
        tags: ["DNSSEC", "OpenSSL", "BIND9", "Cryptography", "Cyber Defense", "Wireshark"],
    },
    technical: {
        title: "Technical Interests",
        bullets: [
            "Systems programming in C — encryption, IPC, and low-level tooling",
            "Networking, DNS infrastructure, and Linux server administration",
            "Security protocols and key exchange implementations",
            "Building reproducible labs with clear documentation and README walkthroughs",
        ],
        tags: ["C", "Python", "Ruby", "Linux", "Networking", "Git"],
    },
    leadership: {
        title: "Leadership & Activities",
        items: [
            {
                name: "Theta Tau — Professional Engineering Fraternity",
                dates: "Spring 2024 – Spring 2026",
                body: "Five semesters as a member; two semesters as New Member Educator on the executive board. Mentored potential new members on fraternity operations, history, and professional development while supporting member-led events across professional development, service, and brotherhood pillars.",
            },
            {
                name: "Boy Scouts — Troop 363, Gretna, NE",
                dates: "Eagle Scout (2020)",
                body: "Senior Patrol Leader and other leadership roles in a boy-led troop. Order of the Arrow member; hundreds of service hours; high-adventure trips including the Black Hills, Colorado horseback camping, and a tall-ship expedition on Lake Superior. Eagle project: wheelchair-accessible flower boxes for a local nursing home.",
                gallery: [
                    { src: "pics/eagle1.jpeg", alt: "Eagle Scout flower box project", caption: "Eagle Scout project — accessible flower boxes" },
                    { src: "pics/eagle2.jpeg", alt: "Second flower box", caption: "Second flower box built for residents" },
                ],
            },
            {
                name: "Mission Trips",
                dates: "Summer 2017 – Present",
                body: "Annual church mission trips repairing homes in communities across the U.S., working in crews with adults and youth to complete structural and maintenance work.",
                gallery: [
                    { src: "pics/mission2017.jpeg", alt: "2017 mission trip crew", caption: "2017 — Ripley, Tennessee" },
                    { src: "pics/mission.jpeg", alt: "2023 mission trip crew", caption: "2023 — Grand Rapids, Michigan" },
                    { src: "pics/mission2024.jpeg", alt: "2024 mission trip crew", caption: "2024 — Detroit, Michigan" },
                ],
            },
        ],
    },
    personal: {
        title: "Personal Background",
        paragraphs: [
            "Studying computer science has been challenging — there were times I considered changing paths — but persistence through difficult coursework strengthened both my technical skills and problem-solving mindset.",
            "Outside of tech, I enjoy time with my German Shepherd, Roxy, and staying active through climbing and outdoor activities.",
        ],
        gallery: [
            { src: "pics/roxy2.jpeg", alt: "Roxy the dog", caption: "Roxy!" },
            { src: "pics/roxy.jpeg", alt: "Roxy", caption: "German Shepherd" },
            { src: "pics/roxy3.jpeg", alt: "Roxy", caption: "She knows she's adorable." },
        ],
    },
};
