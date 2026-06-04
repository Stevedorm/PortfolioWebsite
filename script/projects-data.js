const PROJECTS_PAGE = {
    header: {
        label: "Projects",
        title: "Projects",
        subtitle:
            "Cybersecurity research, systems programming, and security labs — with code repositories and documented takeaways.",
    },
};

const PROJECTS_DATA = [
    {
        title: "DNSSEC Independent Study",
        summary:
            "An independent study on DNSSEC culminating in a thesis and code repository. Includes a manual implementation of the signing process using OpenSSL — generating and verifying signatures against signed DNS responses.",
        technologies: ["DNSSEC", "OpenSSL", "BIND9", "Linux", "Python"],
        takeaways: [
            "Built a multi-zone DNSSEC testbed from the ground up",
            "Understood RRSIG structure and manual signature verification",
            "Documented attack scenarios and validation workflows",
        ],
        slides: [
            { src: "pics/projects/dnssec/poster-pic.png", alt: "DNSSEC research poster" },
            { src: "pics/projects/dnssec/env.png", alt: "DNSSEC environment setup" },
            { src: "pics/projects/dnssec/zones.png", alt: "DNS zone configuration" },
            { src: "pics/projects/dnssec/dns-hijack.png", alt: "DNS hijack simulation" },
            { src: "pics/projects/dnssec/successful-injection.png", alt: "Successful injection test" },
            { src: "pics/projects/dnssec/rrsig_abs.png", alt: "RRSIG record example" },
            { src: "pics/projects/dnssec/dnskey_q.png", alt: "DNSKEY query" },
        ],
        links: [{ label: "Code Repository", href: "https://github.com/Stevedorm/DNSSEC" }],
    },
    {
        title: "DNSSEC Thesis",
        summary:
            "An 80+ page research write-up documenting DNSSEC theory, testbed architecture, attack simulations, and chain-of-trust validation with detailed diagrams and pseudocode.",
        technologies: ["DNSSEC", "Research", "Technical Writing", "BIND9"],
        takeaways: [
            "Produced publication-style documentation of a full research project",
            "Explained chain of trust and query flows with original diagrams",
            "Simulated spoofing and validation scenarios in a controlled lab",
        ],
        slides: [
            { src: "pics/projects/dnssec-thesis/dns-spoof.png", alt: "DNS spoofing attack simulation" },
            { src: "pics/projects/dnssec-thesis/final-chain.png", alt: "Chain of trust diagram" },
            { src: "pics/projects/dnssec-thesis/a_dnssec_query.png", alt: "DNSSEC-enabled A record query diagram" },
            { src: "pics/projects/dnssec-thesis/rrsig-metadata.png", alt: "RRSIG metadata ordering diagram" },
            { src: "pics/projects/dnssec-thesis/gen-sig-psuedo.png", alt: "Signature generation pseudocode" },
        ],
        links: [{ label: "Thesis Repository", href: "https://github.com/Stevedorm/DNSSEC-Thesis" }],
    },
    {
        title: "Needham-Schroeder Protocol",
        summary:
            "Implementation of a symmetric-key authentication protocol with a trusted KDC generating session keys. Includes a step-by-step handshake walkthrough in the repository README.",
        technologies: ["Cryptography", "Protocols", "Python"],
        takeaways: [
            "Mapped protocol messages to a working multi-party simulation",
            "Practiced trusted-third-party key distribution concepts",
            "Documented each handshake stage with screenshots",
        ],
        slides: [
            { src: "pics/projects/NeedhamSchroeder/amal-p1.png", alt: "Amal prepares message for KDC" },
            { src: "pics/projects/NeedhamSchroeder/kdc-p1.png", alt: "KDC receives message" },
            { src: "pics/projects/NeedhamSchroeder/kdc-p2.png", alt: "KDC prepares response" },
            { src: "pics/projects/NeedhamSchroeder/amal-p2.png", alt: "Amal receives response" },
            { src: "pics/projects/NeedhamSchroeder/amal-p3.png", alt: "Amal sends message to Basim" },
            { src: "pics/projects/NeedhamSchroeder/basim-p1.png", alt: "Basim receives message" },
            { src: "pics/projects/NeedhamSchroeder/basim-p2.png", alt: "Basim replies to Amal" },
            { src: "pics/projects/NeedhamSchroeder/amal-p4.png", alt: "Amal final message" },
            { src: "pics/projects/NeedhamSchroeder/basim-last.png", alt: "Basim receives final message" },
        ],
        links: [{ label: "Repository", href: "https://github.com/Stevedorm/Needham-Schoeder-Project" }],
    },
    {
        title: "RSA Digital Signature",
        summary:
            "RSA key generation plus signing and verification to prove message authenticity — with pseudocode documenting the sign and verify flows.",
        technologies: ["RSA", "OpenSSL", "C", "Cryptography"],
        takeaways: [
            "Implemented asymmetric signing and verification end-to-end",
            "Connected mathematical RSA operations to practical message integrity",
        ],
        slides: [
            { src: "pics/projects/rsa-digi-sign/rsa-sign-psuedo.png", alt: "RSA signing pseudocode" },
            { src: "pics/projects/rsa-digi-sign/rsa-verfiy-psuedo.png", alt: "RSA verification pseudocode" },
        ],
        links: [{ label: "Repository", href: "https://github.com/Stevedorm/RSA-BasedDigitalSignature" }],
    },
    {
        title: "File Encryption",
        summary:
            "Encrypts and decrypts entire files in blocks using a symmetric key — demonstrating block cipher usage at the file level.",
        technologies: ["C", "Cryptography", "OpenSSL"],
        takeaways: [
            "Handled file I/O with block-aligned encryption/decryption",
            "Reinforced key management and padding considerations",
        ],
        slides: [{ src: "pics/projects/file-encryption.png", alt: "File encryption project output" }],
        links: [{ label: "Repository", href: "https://github.com/Stevedorm/FileEncryption" }],
    },
    {
        title: "Session Key Exchange Using RSA",
        summary:
            "Generates a random session key with RSA and exchanges it through a data pipe between processes.",
        technologies: ["RSA", "C", "IPC", "Cryptography"],
        takeaways: [
            "Combined public-key exchange with symmetric session keys",
            "Practiced inter-process communication for secure handoff",
        ],
        slides: [{ src: "pics/projects/session-key.png", alt: "Session key exchange terminal output" }],
        links: [{ label: "Repository", href: "https://github.com/Stevedorm/SessionKeyExchangeUsingRSA" }],
    },
    {
        title: "Terminal Spreadsheet",
        summary:
            "An Excel-like terminal spreadsheet built with Ruby and Curses — cell editing, formulas, and TUI navigation.",
        technologies: ["Ruby", "Curses", "TUI"],
        takeaways: [
            "Designed a usable terminal UI with structured cell data",
            "Implemented formula evaluation similar to spreadsheet tools",
        ],
        slides: [
            { src: "pics/projects/spreadsheet-1.svg", alt: "Terminal spreadsheet screenshot 1" },
            { src: "pics/projects/spreadsheet-2.svg", alt: "Terminal spreadsheet screenshot 2" },
        ],
        links: [{ label: "Repository", href: "https://github.com/Stevedorm/TerminalSpreadsheet" }],
    },
];
