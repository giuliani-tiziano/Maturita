/* =========================================================================
   flashcard-data.js — Tech & Digital English Flashcard Data
   window.flashcardData[key] = [ { front, back }, ... ]
   ========================================================================= */

window.flashcardData = {};

window.flashcardData.hardware = [
  { front: "CPU", back: "Central Processing Unit — the 'brain' of the computer that executes program instructions. Measured in GHz (clock speed)." },
  { front: "RAM", back: "Random Access Memory — fast, volatile (temporary) memory used by running programs. Lost when power is off." },
  { front: "ROM", back: "Read-Only Memory — non-volatile permanent memory. Contains firmware (e.g., BIOS). Cannot be changed during normal use." },
  { front: "SSD vs HDD", back: "SSD (Solid State Drive): fast, silent, no moving parts, flash memory. HDD (Hard Disk Drive): slower, cheaper per GB, mechanical spinning disk." },
  { front: "Moore's Law", back: "Gordon Moore's 1965 observation: the number of transistors on a chip doubles approximately every 2 years, driving exponential performance growth." },
  { front: "Cache memory", back: "Ultra-fast memory between the CPU and RAM. Stores frequently accessed data to reduce access time. L1/L2/L3 cache hierarchy." },
  { front: "Von Neumann architecture", back: "Computer design where program instructions and data share the same memory. Basis of most modern computers." },
  { front: "Bus", back: "A communication pathway that transfers data between computer components (CPU, RAM, I/O devices). Address bus, data bus, control bus." }
];

window.flashcardData.os = [
  { front: "Kernel", back: "The core of an OS — manages hardware resources, mediates between hardware and software. Types: monolithic, microkernel, hybrid." },
  { front: "Process vs Thread", back: "Process: a running program with its own memory space. Thread: smallest unit of execution within a process; threads share the process's memory." },
  { front: "Virtual memory", back: "Disk space used as an extension of RAM when physical RAM is full. Allows larger programs to run; slower than real RAM (page swapping)." },
  { front: "Deadlock", back: "When two or more processes each wait for resources held by the other — all are blocked permanently. Prevention: resource ordering, preemption." },
  { front: "File system", back: "The structure an OS uses to organise and manage data on storage. Examples: NTFS (Windows), ext4 (Linux), APFS (macOS)." },
  { front: "BIOS / UEFI", back: "Firmware that initialises hardware during startup before the OS loads. BIOS: older, 16-bit. UEFI: modern, faster, supports larger disks." }
];

window.flashcardData.networks = [
  { front: "LAN vs WAN", back: "LAN (Local Area Network): limited area (home, office). WAN (Wide Area Network): large geographic area. The internet is the largest WAN." },
  { front: "OSI Model — 7 layers", back: "1 Physical | 2 Data Link | 3 Network | 4 Transport | 5 Session | 6 Presentation | 7 Application. Remember: Please Do Not Throw Sausage Pizza Away." },
  { front: "IP address", back: "Numerical label identifying a device on a network. IPv4: 32-bit (e.g., 192.168.1.1). IPv6: 128-bit (e.g., 2001:db8::1). IPv6 needed due to IPv4 exhaustion." },
  { front: "TCP vs UDP", back: "TCP: reliable, ordered, connection-oriented (HTTP, email). UDP: fast, unreliable, connectionless (video streaming, gaming, DNS)." },
  { front: "DNS", back: "Domain Name System — translates domain names (google.com) into IP addresses (142.250.185.78). The 'phonebook of the internet'." },
  { front: "Router vs Switch", back: "Router: forwards packets between different networks (connects your home to the internet). Switch: connects devices within the same network (connects computers in an office)." },
  { front: "MAC address", back: "Media Access Control address — a unique hardware identifier for each network interface card. Used at the Data Link layer (layer 2). Format: 6 pairs of hex digits." },
  { front: "Bandwidth vs Latency", back: "Bandwidth: maximum data transfer rate (Mbps/Gbps). Latency: delay before data starts transferring (ms). High bandwidth ≠ low latency." }
];

window.flashcardData.cybersecurity = [
  { front: "CIA Triad", back: "Confidentiality: only authorised access. Integrity: data unchanged. Availability: accessible when needed. The three pillars of information security." },
  { front: "Malware types", back: "Virus: attaches to files, requires user action. Worm: self-replicates across networks. Trojan: disguised as legitimate software. Ransomware: encrypts data for ransom. Spyware: monitors user activity." },
  { front: "Phishing", back: "Social engineering attack using fake emails or websites to steal credentials. Spear phishing: targeted at specific individuals. Whaling: targeting executives." },
  { front: "Symmetric vs Asymmetric encryption", back: "Symmetric: same key for encryption and decryption (AES — fast, shared secret). Asymmetric: public key encrypts, private key decrypts (RSA — secure key exchange)." },
  { front: "Firewall", back: "Filters network traffic based on predefined rules. Blocks unauthorised access. Types: packet filtering, stateful inspection, application-layer (WAF)." },
  { front: "Two-Factor Authentication (2FA)", back: "Security requiring two verification forms: something you know (password) + something you have (phone/token) or something you are (biometric)." },
  { front: "DDoS attack", back: "Distributed Denial of Service — flooding a server with requests from many compromised machines, making it unavailable to legitimate users." },
  { front: "Hashing", back: "A one-way function producing a fixed-length 'fingerprint' of data. SHA-256 produces 256-bit hashes. Used for passwords and data integrity. Not reversible." }
];

window.flashcardData.ai = [
  { front: "Artificial Intelligence (AI)", back: "Machines that simulate human intelligence: problem-solving, learning, decision-making, language understanding. Narrow AI: specific tasks. General AI: theoretical." },
  { front: "Machine Learning (ML)", back: "A subset of AI where systems learn from data without being explicitly programmed. Types: supervised, unsupervised, reinforcement learning." },
  { front: "Supervised learning", back: "Training on labelled data with known correct outputs. Model learns to map inputs to outputs. Examples: image classification, spam detection." },
  { front: "Neural network", back: "Computational model inspired by the brain — layers of interconnected nodes (neurons). Input → hidden layers → output. Deep learning: many hidden layers." },
  { front: "Algorithm bias", back: "Systematic errors in AI output due to biased training data. AI reflects and amplifies existing inequalities. Example: facial recognition less accurate for darker skin." },
  { front: "Turing Test", back: "Proposed by Alan Turing (1950): a test of machine intelligence. If a machine can converse indistinguishably from a human, it passes. Still debated as a definition of intelligence." },
  { front: "NLP", back: "Natural Language Processing — AI that understands and generates human language. Applications: chatbots, translation, sentiment analysis, text summarisation." },
  { front: "Overfitting vs Underfitting", back: "Overfitting: model memorises training data but fails on new data (too complex). Underfitting: model too simple to capture patterns. Balance = generalisation." }
];

window.flashcardData.cloud = [
  { front: "Cloud computing", back: "IT resources (servers, storage, software) delivered over the internet on demand. Benefits: cost savings, scalability, availability. Risks: internet dependency, vendor lock-in." },
  { front: "IaaS / PaaS / SaaS", back: "IaaS: virtual infrastructure (AWS EC2). PaaS: development platform (Heroku). SaaS: ready-to-use apps (Gmail, Office 365). More 'as-a-service' = less you manage." },
  { front: "Scalability vs Elasticity", back: "Scalability: ability to handle increased workload. Elasticity: automatically scaling up and down dynamically to match current demand." },
  { front: "Virtualisation", back: "Running multiple virtual machines on one physical server using a hypervisor (VMware, KVM). Maximises hardware utilisation. Foundation of cloud computing." },
  { front: "Container (Docker)", back: "Lightweight, portable unit packaging application + dependencies. Runs consistently on any system. Faster/lighter than VMs. Orchestration: Kubernetes." }
];

window.flashcardData.internet = [
  { front: "HTTP vs HTTPS", back: "HTTP: HyperText Transfer Protocol — unencrypted. HTTPS: HTTP + TLS/SSL encryption. HTTPS protects data in transit; required for any site handling personal data." },
  { front: "URL structure", back: "https://www.example.com:443/path?query=value — Protocol://subdomain.domain:port/path?parameters. Port 80=HTTP, 443=HTTPS, 21=FTP, 25=SMTP." },
  { front: "Cookie", back: "Small text file stored by a website on the user's device. Uses: session management (login), personalisation, tracking. GDPR requires consent for non-essential cookies." },
  { front: "REST API", back: "Representational State Transfer — architectural style for web APIs. Uses HTTP methods: GET (read), POST (create), PUT (update), DELETE. Stateless, scalable." },
  { front: "HTML / CSS / JavaScript", back: "HTML: page structure (content). CSS: visual presentation (styling). JavaScript: behaviour (interactivity). The three core technologies of the web." }
];

window.flashcardData.privacy = [
  { front: "GDPR", back: "General Data Protection Regulation — EU law (May 2018) governing personal data. Key rights: access, erasure, portability, objection. Fines up to 4% of global turnover." },
  { front: "Personal data (GDPR)", back: "Any information relating to an identifiable living person — name, email, IP address, location, cookie ID, biometric data." },
  { front: "Right to erasure", back: "GDPR Article 17 — the 'right to be forgotten': individuals can request deletion of their personal data under certain conditions." },
  { front: "Data breach (GDPR)", back: "Any security incident compromising personal data. Must notify the supervisory authority within 72 hours. If high risk to individuals, notify them directly." },
  { front: "Net neutrality", back: "The principle that ISPs must treat all internet traffic equally — no blocking, throttling or paid prioritisation. Repealed in USA 2017; protected in EU." }
];

window.flashcardData.employment = [
  { front: "CV vs Cover letter", back: "CV: structured document of education, skills, experience. Cover letter: personal letter accompanying the CV, explaining motivation and fit for a specific role." },
  { front: "Technical interview", back: "Job interview assessing technical skills — may include: coding challenges, algorithmic problems, system design questions, debugging exercises." },
  { front: "Full-stack developer", back: "Developer competent in both front-end (HTML, CSS, JS, UI) and back-end (server, database, API) development. Can build complete web applications independently." },
  { front: "Agile / Scrum", back: "Agile: iterative development methodology. Scrum: a framework with sprints (1-4 weeks), daily stand-ups, product backlog, sprint review and retrospective." },
  { front: "Soft skills vs Hard skills", back: "Hard skills: technical, measurable (Python, SQL, networking). Soft skills: interpersonal, behavioural (communication, teamwork, adaptability, problem-solving)." }
];

window.flashcardData.emerging = [
  { front: "Blockchain", back: "Distributed, immutable ledger of transactions shared across a peer-to-peer network. Blocks cryptographically linked. Used for cryptocurrency, supply chain, smart contracts." },
  { front: "Smart contract", back: "Self-executing code stored on a blockchain that automatically enforces contract terms when conditions are met — no intermediary required." },
  { front: "VR vs AR vs MR", back: "VR (Virtual Reality): fully immersive digital environment. AR (Augmented Reality): digital overlays on real world. MR (Mixed Reality): digital and physical interact." },
  { front: "Quantum computing", back: "Uses qubits (superposition: 0 and 1 simultaneously) for computation. Can solve certain problems exponentially faster. Threat to current encryption (Shor's algorithm)." },
  { front: "5G", back: "Fifth generation mobile network — speeds up to 10 Gbps, latency <1ms. Enables IoT at scale, autonomous vehicles, remote surgery, smart cities." }
];
