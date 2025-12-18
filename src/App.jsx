import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Shield, Code, Database, Globe, Share2, Award, BookOpen, MessageSquare, CornerDownLeft, X, Loader, ChevronUp, ChevronDown, Minus, Maximize2, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';

// --- Comprehensive CV Data (Knowledge Base) ---
const cvData = {
    name: "Rupak Neupane",
    role: "AI Engineer | Computer Engineering Student",
    location: "Bhaktapur, Nepal",
    contact: {
        email: "neupanerupak7@gmail.com",
        phone: "(+977) 9865442388",
        website: "https://rupakneupane.com.np",
        github: "https://github.com/RupakNeupane",
        linkedin: "https://linkedin.com/in/rupakneupane007"
    },
    education: [
        {
            degree: "Bachelor of Computer Engineering",
            institution: "Khwopa College of Engineering, TU",
            year: "2021 - 2025",
            details: "Entrance Top Ranker Scholarship 2077. Final Grade: 80.32%. Core: Theory of Computation, DSA, OS, DBMS, AI."
        },
        {
            degree: "GCE A Levels",
            institution: "Budhanilkantha School",
            year: "2018 - 2020",
            details: "Physics (A+), Chemistry (A*), CS (A+), Math (A+), English (D)."
        }
    ],
    experience: [
        {
            role: "Artificial Intelligence Engineer",
            company: "Global IME Bank",
            year: "Aug 2025 - Current",
            details: "Developing internal AI tools for improving efficiency of various banking workflows.",
            link: "https://www.globalimebank.com"
        }
    ],
    publications: [
        {
            title: "Automating Document Workflows with ResNet-50 and Template-Based OCR",
            authors: "Srijan Gyawali, Rupak Neupane, Sarjyant Shrestha, and Manish Pyakurel",
            journal: "Journal of Engineering Issues and Solutions (JoEIS)",
            volume: "Vol 4, Issue 1, p478-485",
            year: "2024",
            link: "https://www.nepjol.info/index.php/joeis/article/view/81610"
        }
    ],
    projects: [
        {
            name: "Sabdhamanthan",
            desc: "Nepali Word-Embedding using BERT architecture for context-dependent embeddings.",
            tech: "BERT, NLP, PyTorch",
            link: "https://github.com/srijangyawali04/Sabdhamanthan"
        },
        {
            name: "DeepFake Detection",
            desc: "Residual networks model to distinguish fake faces from real ones.",
            tech: "ResNet, CV, Deep Learning",
            link: "https://github.com/SarjyantShrestha/Deepfake-Image-Detection"
        },
        {
            name: "Bird Classification",
            desc: "Custom ResNet9 architecture to classify 25 bird species.",
            tech: "ResNet9, Image Processing",
            link: "https://github.com/RupakNeupane/25-Bird-Image-Classification"
        }
    ],
    skills: {
        technical: ["Python", "PyTorch", "TensorFlow", "Keras", "SQL", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LaTeX", "DBMS", "Computer Networks"],
        soft: ["Problem Solving", "Leadership", "Teamwork", "Critical Thinking"]
    },
    awards: [
        "1st Runner-up, Global IME AI/ML Hackathon",
        "Best Technical Implementation Award, Software Competition",
        "Top 50 Qualifiers, Kathmandu Metro Idea 2080"
    ],
    certifications: [
        { name: "OCI 2024 GenAI Certified Professional", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E48EB518C6A64B9ED267C49D37AC2C639ED" },
        { name: "AI Fundamentals (DataCamp)", link: "https://www.datacamp.com/skill-verification/AIF0024951611331" },
        { name: "Data Literacy (DataCamp)", link: "https://www.datacamp.com/skill-verification/DL0038780238200" },
        { name: "AI For Everyone (Coursera)", link: "https://www.coursera.org/account/accomplishments/certificate/E7E2FW6QBVEE" },
        { name: "Introducing GenAI with AWS (Udacity)", link: "https://www.udacity.com" },
        { name: "AI Job Simulation (Cognizant/Forage)", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cogniza%20nt_8K7Q2H6NefkWyhd9j_1721645889041_completion_certificate.pdf" }
    ]
};

const ASCII_BOX = {
    top: (title) => `┌─── ${title} ──────────────────────────────────────┐`,
    bottom: `└─────────────────────────────────────────────────────┘`,
};

const getKnowledgeResponse = (query) => {
    const q = query.toLowerCase().trim();
    
    if (q === 'ls' || q === 'dir') {
        return "AVAILABLE_TOPICS:\n- skills\n- experience\n- education\n- projects\n- publications\n- contact\n- certifications\n- awards";
    }
    if (q === 'help') {
        return "USER_MANUAL:\nType any topic from 'ls' to view data.\nCommands:\n- clear: Purge terminal buffer\n- ls: List bio-database sectors\n- whoami: User session details\n- exit: Close terminal link";
    }
    if (q === 'whoami') {
        return `USER: guest_0x${Math.floor(Math.random()*10000)}\nROLE: Observer\nKERNEL: Neupane_v2.5.0\nSTATUS: AUTH_OK`;
    }

    if (q.includes('skill')) return `TECH: ${cvData.skills.technical.join(', ')}\nSOFT: ${cvData.skills.soft.join(', ')}`;
    if (q.includes('work') || q.includes('exp')) {
        const exp = cvData.experience[0];
        return `ROLE: ${exp.role}\nORG: ${exp.company}\nMISSION: ${exp.details}`;
    }
    if (q.includes('pub') || q.includes('research') || q.includes('paper')) {
        return cvData.publications.map(p => `[TITLE] ${p.title}\n[AUTHORS] ${p.authors}\n[JOURNAL] ${p.journal}\n[URL] ${p.link}`).join('\n\n');
    }
    if (q.includes('education')) return cvData.education.map(e => `[DEG] ${e.degree}\n[SITE] ${e.institution}\n[INTEL] ${e.details}`).join('\n\n');
    if (q.includes('project')) return cvData.projects.map(p => `ID: ${p.name}\nTECH: ${p.tech}\nDESC: ${p.desc}`).join('\n\n');
    if (q.includes('cert')) return cvData.certifications.map(c => `- ${c.name}`).join('\n');
    if (q.includes('contact')) return `EMAIL: ${cvData.contact.email}\nGITHUB: ${cvData.contact.github}\nLINKEDIN: ${cvData.contact.linkedin}`;
    
    return `COMMAND_NOT_FOUND: '${q}'. Use 'ls' for a list of sectors.`;
};

const AsciiSection = ({ title, children, icon: Icon }) => (
    <div className="mb-8 font-mono group">
        <div className="text-green-500 opacity-40 text-xs mb-1 flex items-center gap-2 group-hover:opacity-100 transition-opacity">
            <Icon size={14} /> {ASCII_BOX.top(title)}
        </div>
        <div className="border-l border-green-900 ml-4 pl-4 py-2 text-green-400">
            {children}
        </div>
        <div className="text-green-500 opacity-40 text-xs mt-1 ml-4 group-hover:opacity-100 transition-opacity">
            {ASCII_BOX.bottom}
        </div>
    </div>
);

const Chatbot = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [history, setHistory] = useState([{ type: 'bot', text: 'BIO_DATABASE_ACCESS_GRANTED. READY FOR INPUT. TYPE "HELP" FOR COMMANDS.' }]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        if (isExpanded) scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, isExpanded]);

    const handleSend = () => {
        const userText = input.trim();
        if (!userText) return;

        setHistory(prev => [...prev, { type: 'user', text: userText }]);
        setInput('');

        if (userText.toLowerCase() === 'clear' || userText.toLowerCase() === 'cls') {
            setHistory([{ type: 'bot', text: 'SYSTEM_BUFFER_PURGED. SESSION_RELOADED.' }]);
            return;
        }

        if (userText.toLowerCase() === 'exit') {
            setIsExpanded(false);
            return;
        }
        
        setTimeout(() => {
            const response = getKnowledgeResponse(userText);
            setHistory(prev => [...prev, { type: 'bot', text: response }]);
        }, 300);
    };

    return (
        <div className={`fixed bottom-0 right-6 w-80 md:w-96 bg-black border border-green-800 shadow-[0_-10px_40px_rgba(0,0,0,0.9)] rounded-t-sm flex flex-col font-mono z-[100] transition-all duration-300 ${isExpanded ? 'h-[450px]' : 'h-10'}`}>
            <div 
                className="bg-green-900/20 p-2 border-b border-green-800 flex justify-between items-center text-[10px] cursor-pointer hover:bg-green-900/40"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="flex items-center gap-2 text-green-400 font-bold tracking-widest uppercase">
                    <Cpu size={12} className={isExpanded ? 'animate-pulse' : ''}/> 
                    KERNEL_SHELL {isExpanded ? '[ACTIVE]' : '[CLOSED]'}
                </span>
                <div className="flex gap-2">
                    {isExpanded ? <Minus size={14} className="text-green-700" /> : <ChevronUp size={14} className="text-green-400" />}
                </div>
            </div>

            {isExpanded && (
                <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[11px] scrollbar-hide bg-black/80">
                        {history.map((h, i) => (
                            <div key={i} className={h.type === 'user' ? 'text-blue-400' : 'text-green-500'}>
                                <span className="opacity-40">{h.type === 'user' ? 'guest@rupak:~$' : 'sys@root:#'} </span>
                                <span className="whitespace-pre-wrap">{h.text}</span>
                            </div>
                        ))}
                        <div ref={scrollRef} />
                    </div>
                    <div className="p-2 border-t border-green-900 flex items-center gap-2 bg-black">
                        <span className="text-green-700 text-xs animate-pulse font-bold">{'>'}</span>
                        <input 
                            className="bg-transparent outline-none flex-1 text-green-400 text-xs placeholder:text-green-900" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type command..."
                            autoFocus
                        />
                    </div>
                </>
            )}
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10 selection:bg-green-900 selection:text-white relative overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,2px_100%] z-[200]" />
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] z-10" />

            <header className="relative z-20 mb-16 border-b border-green-900/50 pb-8">
                <pre className="text-[6px] md:text-xs leading-none text-green-700 mb-6 select-none opacity-60 overflow-hidden">
{`██████╗ ██╗   ██╗██████╗  █████╗ ██╗  ██╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗██║ ██╔╝
██████╔╝██║   ██║██████╔╝███████║█████╔╝ 
██╔══██╗██║   ██║██╔═══╝ ██╔══██║██╔═██╗ 
██║  ██║╚██████╔╝██║     ██║  ██║██║  ██╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝`}
                </pre>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tighter uppercase text-green-100">{cvData.name}</h1>
                        <p className="text-green-600 text-sm mt-1 tracking-widest font-bold">STATION: {cvData.role}</p>
                    </div>
                    <div className="text-[10px] text-green-800 space-y-1 text-right">
                        <div>LOC: {cvData.location.toUpperCase()}</div>
                        <div className="flex items-center gap-2 justify-end uppercase">
                            <span className="text-green-400 animate-pulse">●</span> STATUS: ESTABLISHED
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <section className="space-y-2">
                    <AsciiSection title="LOG_MISSION_EXPERIENCE" icon={Shield}>
                        {cvData.experience.map((e, i) => (
                            <div key={i} className="mb-6">
                                <div className="text-green-100 font-bold text-sm">{e.role}</div>
                                <div className="text-green-700 text-[10px] uppercase font-bold flex items-center gap-2">
                                    {e.company} // {e.year} 
                                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><ExternalLink size={10} /></a>
                                </div>
                                <p className="text-green-500/80 text-xs mt-2 leading-relaxed max-w-prose">{e.details}</p>
                            </div>
                        ))}
                    </AsciiSection>

                    {/* MOVED: Academic History is now above Published Research */}
                    <AsciiSection title="ACADEMIC_HISTORY" icon={BookOpen}>
                        {cvData.education.map((e, i) => (
                            <div key={i} className="mb-4">
                                <div className="text-green-100 font-bold text-sm">{e.degree}</div>
                                <div className="text-green-700 text-[10px] font-bold uppercase">{e.institution} | {e.year}</div>
                                <p className="text-green-600 text-[10px] mt-1 opacity-70 italic">{e.details}</p>
                            </div>
                        ))}
                    </AsciiSection>

                    <AsciiSection title="PUBLISHED_RESEARCH" icon={BookOpen}>
                        {cvData.publications.map((p, i) => (
                            <div key={i} className="mb-4">
                                <div className="text-green-100 font-bold text-xs uppercase tracking-tight">{p.title}</div>
                                <div className="text-green-800 text-[9px] mt-1 font-bold italic">{p.authors}</div>
                                <div className="text-green-700 text-[10px] font-bold mt-1">{p.journal} // {p.volume} // {p.year}</div>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-[10px] border border-green-900 px-3 py-1 hover:bg-green-900 hover:text-white transition-all flex items-center w-fit gap-2">
                                    <Globe size={12} /> RETRIEVE_FROM_NEPJOL
                                </a>
                            </div>
                        ))}
                    </AsciiSection>

                    {/* MOVED: Certifications brought to the left column */}
                    <AsciiSection title="VERIFIED_CERTIFICATIONS" icon={Award}>
                        <div className="grid grid-cols-1 gap-3">
                            {cvData.certifications.map((cert, i) => (
                                <a 
                                    key={i} 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-[11px] flex items-center gap-2 hover:text-green-100 transition-colors group"
                                >
                                    <span className="text-green-900">[{i+1}]</span>
                                    <span className="text-green-400 opacity-80 group-hover:opacity-100">{cert.name}</span>
                                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-40" />
                                </a>
                            ))}
                        </div>
                    </AsciiSection>
                </section>

                <section className="space-y-2">
                    <AsciiSection title="SKILL_PROTOCOL_MATRIX" icon={Code}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-[11px]">
                            {cvData.skills.technical.map(s => (
                                <div key={s} className="flex items-center gap-2 group cursor-crosshair">
                                    <div className="w-1.5 h-1.5 bg-green-900 group-hover:bg-green-400 transition-colors" />
                                    <span className="group-hover:text-green-100">{s}</span>
                                </div>
                            ))}
                        </div>
                    </AsciiSection>

                    <AsciiSection title="PROJECT_REPOSITORY" icon={Terminal}>
                        <div className="space-y-4">
                            {cvData.projects.map((p, i) => (
                                <div key={i} className="border border-green-900/40 p-3 hover:bg-green-950/20 transition-all hover:border-green-600 group">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-green-100 font-bold text-xs uppercase">{p.name}</span>
                                        <span className="text-[10px] text-green-700 font-bold">{p.tech}</span>
                                    </div>
                                    <p className="text-[11px] text-green-500 opacity-70 mb-2">{p.desc}</p>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-[9px] text-green-800 group-hover:text-green-400 flex items-center gap-1 uppercase font-bold">
                                        <Github size={10} /> GIT_LINK: {p.link.split('/').pop()}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </AsciiSection>

                    <AsciiSection title="SOCIAL_NODE_LINKS" icon={Share2}>
                        <div className="text-[11px] space-y-3">
                            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="flex justify-between border-b border-green-900/30 pb-1 hover:text-white group">
                                <span className="text-green-800 font-bold flex items-center gap-2 tracking-widest"><Github size={14}/> GITHUB</span>
                                <span className="opacity-60 group-hover:opacity-100">RupakNeupane</span>
                            </a>
                            <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-between border-b border-green-900/30 pb-1 hover:text-white group">
                                <span className="text-green-800 font-bold flex items-center gap-2 tracking-widest"><Linkedin size={14}/> LINKEDIN</span>
                                <span className="opacity-60 group-hover:opacity-100">rupakneupane007</span>
                            </a>
                            <a href={`mailto:${cvData.contact.email}`} className="flex justify-between border-b border-green-900/30 pb-1 hover:text-white group">
                                <span className="text-green-800 font-bold flex items-center gap-2 tracking-widest"><Mail size={14}/> SMTP_MAIL</span>
                                <span className="opacity-60 group-hover:opacity-100">{cvData.contact.email}</span>
                            </a>
                        </div>
                    </AsciiSection>
                </section>
            </main>

            <Chatbot />
            
            <footer className="relative z-20 mt-20 border-t border-green-900/50 pt-6 text-[9px] text-green-900 flex flex-col md:flex-row justify-between gap-4 uppercase tracking-[0.4em] font-bold">
                <div className="flex items-center gap-4">
                    <span>NEUPANE_OS_v2.5.0</span>
                    <span className="animate-pulse">● SIGNAL_ESTABLISHED</span>
                </div>
                <span>&copy; 2024 TERMINAL_SYSTEMS. ALL_LOGS_SAVED.</span>
            </footer>

            <style>{`
                ::-webkit-scrollbar { display: none; }
                input::placeholder { color: #052e16; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                a { cursor: pointer; text-decoration: none; color: inherit; }
            `}</style>
        </div>
    );
};

export default Portfolio;