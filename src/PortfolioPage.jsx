import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  SunMedium,
  Trophy,
  Workflow,
  X,
} from 'lucide-react';
import './PortfolioPage.css';

const resumeUrl = new URL('../Resume.pdf', import.meta.url).href;
const getOptimizedPhoto = (name) => new URL(`../Photos/optimized/${name}.webp`, import.meta.url).href;
const profileImage = getOptimizedPhoto('RupakPhoto');

const certificates = [
  { title: 'International Conference on Recent Trends in Artificial Intelligence', issuer: 'ICRTAI', year: '2025', category: 'Research', file: new URL('../certificates/optimized/ICRTAI.webp', import.meta.url).href },
  { title: '1st Runner-up, AI/ML Hackathon', issuer: 'Global IME Bank', year: '2025', category: 'Awards', file: new URL('../certificates/optimized/certificate.webp', import.meta.url).href },
  { title: 'Microdegree in Artificial Intelligence', issuer: 'Fusemachines', year: '2025', category: 'AI & ML', file: new URL('../certificates/optimized/Microdegree™+in+Artificial+Intelligence+2025-RUPAK+NEUPANE.webp', import.meta.url).href },
  { title: 'Quantum Computing', issuer: 'IIT-Roorkee', year: '2025', category: 'Quantum', file: new URL('../certificates/optimized/neupanerupak7@gmail.com_certificate.webp', import.meta.url).href },
  { title: 'Future AWS AI Scientist', issuer: 'Udacity', year: '2025', category: 'Cloud', file: new URL('../certificates/optimized/Future AWS AI Scientist.webp', import.meta.url).href },
  { title: 'Kathmandu Metro Idea & Innovation 2080', issuer: 'Kathmandu Metropolitan City', year: '2023', category: 'Awards', file: new URL('../certificates/optimized/KMII.webp', import.meta.url).href },
  { title: 'AI for Everyone', issuer: 'DeepLearning.AI · Coursera', year: '2022', category: 'AI & ML', file: new URL('../certificates/optimized/Coursera E7E2FW6QBVEE.webp', import.meta.url).href },
  { title: 'AI Fundamentals', issuer: 'DataCamp', year: '2024', category: 'AI & ML', file: new URL('../certificates/optimized/AIF0024951611331.webp', import.meta.url).href },
  { title: 'Data Literacy', issuer: 'DataCamp', year: '2024', category: 'Data', file: new URL('../certificates/optimized/DL0038780238200.webp', import.meta.url).href },
  { title: 'Artificial Intelligence Job Simulation', issuer: 'Cognizant · Forage', year: '2024', category: 'AI & ML', file: new URL('../certificates/optimized/AI+Job+Simulation.webp', import.meta.url).href },
  { title: 'AWS AI Practitioner Challenge', issuer: 'Udacity', year: '2026', category: 'Cloud', file: new URL('../certificates/optimized/AWS+AI+Practitioner+Challenge.webp', import.meta.url).href },
  { title: 'Introducing Generative AI with AWS', issuer: 'Udacity', year: '2025', category: 'Cloud', file: new URL('../certificates/optimized/Intro-GenerativeAIwithAWS.webp', import.meta.url).href },
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild', year: '2024', category: 'AI & ML', file: new URL('../certificates/optimized/IBMDesign20261002-20-zj0at6.webp', import.meta.url).href },
  { title: 'Introduction to Machine Learning', issuer: 'Kaggle', year: '2024', category: 'AI & ML', file: new URL('../certificates/optimized/Rupak Neupane - Intro to Machine Learning.webp', import.meta.url).href },
  { title: 'Intermediate Machine Learning', issuer: 'Kaggle', year: '2024', category: 'AI & ML', file: new URL('../certificates/optimized/Rupak Neupane - Intermediate Machine Learning.webp', import.meta.url).href },
  { title: 'Annual Nepal AI School', issuer: 'NAAMII', year: '2025', category: 'Research', file: new URL('../certificates/optimized/ANAIS.webp', import.meta.url).href, orientation: 'portrait' },
  { title: 'Introduction to Deep Learning', issuer: 'Kaggle', year: '2023', category: 'AI & ML', file: new URL('../certificates/optimized/Rupak Neupane - Intro to Deep Learning.webp', import.meta.url).href },
  { title: 'Computer Vision', issuer: 'Kaggle', year: '2024', category: 'AI & ML', file: new URL('../certificates/optimized/Rupak Neupane - Computer Vision.webp', import.meta.url).href },
];

const publications = [
  {
    title: 'A Solution to The Face DeepFake Detection Challenge',
    authors: 'Rupak Neupane, Srijan Gyawali, Sarjyant Shrestha, and Manish Pyakurel',
    venue: 'Proceedings of the 16th IOE Graduate Conference, Vol. 16, pp. 2023–2028',
    year: '2025',
    href: 'https://conference.ioe.edu.np/publications/ioegc16/IOEGC-16-281-PS2-19.pdf',
  },
  {
    title: 'Automating Document Workflows with ResNet-50 and Template-Based OCR',
    authors: 'Srijan Gyawali, Rupak Neupane, Sarjyant Shrestha, and Manish Pyakurel',
    venue: 'Journal of Engineering Issues and Solutions, Vol. 4, Issue 1, pp. 478–485',
    year: '2025',
    href: 'https://doi.org/10.3126/joeis.v4i1.81610',
  },
];

const projects = [
  {
    number: '01',
    name: 'Sabdhamanthan',
    field: 'NLP · Nepali language',
    description: 'A BERT-based contextual word embedding model for Nepali language understanding, designed for downstream language tasks and semantic representation.',
    href: 'https://github.com/srijangyawali04/Sabdhamanthan',
  },
  {
    number: '02',
    name: 'Facial Keypoint Detection',
    field: 'Computer vision · Deep learning',
    description: 'A modified VGG-16 pipeline that predicts 68 facial landmarks for facial analysis, alignment, and downstream vision tasks.',
    href: 'https://github.com/RupakNeupane/Facial_Key_Point_Detection',
  },
  {
    number: '03',
    name: '25 Bird Image Classification',
    field: 'Computer vision · ResNet9',
    description: 'A custom ResNet9 classifier built for 25 bird species, covering preprocessing, training, validation, and inference workflow design.',
    href: 'https://github.com/RupakNeupane/25-Bird-Image-Classification',
  },
];

const categories = ['All', 'AI & ML', 'Data', 'Cloud', 'Research', 'Awards'];

const lifeMoments = [
  {
    title: 'Quiet evening in Pokhara',
    src: getOptimizedPhoto('IMG_20221028_163325'),
  },
  {
    title: 'Sunrise reflection through the mountains',
    src: getOptimizedPhoto('IMG_20221030_070230'),
  },
  {
    title: 'Peeking through the cave',
    src: getOptimizedPhoto('IMG_20221124_160032'),
  },
  {
    title: 'Travel notes',
    src: getOptimizedPhoto('IMG_20231028_091912'),
  },
  {
    title: 'A slow afternoon',
    src: getOptimizedPhoto('IMG_20231031_115652'),
  },
  {
    title: 'Morning in the mountains',
    src: getOptimizedPhoto('IMG_20231104_084133'),
  },
  {
    title: 'Finally On the top (Larke Pass)',
    src: getOptimizedPhoto('IMG_20231104_084141'),
  },
  {
    title: 'Peace and quiet',
    src: getOptimizedPhoto('PXL_20241017_112822522'),
  },
  {
    title: 'Himlung Basecamp',
    src: getOptimizedPhoto('PXL_20241023_130822898'),
  },
  {
    title: 'Morning haze',
    src: getOptimizedPhoto('PXL_20241024_053113502.MP'),
  },
  {
    title: 'Temple meets mountains',
    src: getOptimizedPhoto('PXL_20241025_131837615'),
  },
  {
    title: 'Lake on the top',
    src: getOptimizedPhoto('PXL_20241026_091728208'),
  },
  {
    title: 'Steep downhill after the pass',
    src: getOptimizedPhoto('PXL_20241026_101621110'),
  },
  {
    title: 'Small wonders',
    src: getOptimizedPhoto('PXL_20241026_101637834'),
  },
  {
    title: 'Under the clouds',
    src: getOptimizedPhoto('PXL_20250116_152329098'),
  },
  {
    title: 'A quieter chapter',
    src: getOptimizedPhoto('PXL_20250519_053848551'),
  },
  {
    title: 'Late-summer light',
    src: getOptimizedPhoto('PXL_20250810_074715562'),
  },
  {
    title: 'Beyond the now',
    src: getOptimizedPhoto('PXL_20260509_111643838'),
  },
];

function SectionHeading({ index, eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <article className="certificate-item">
      <a
        className={`certificate-preview${certificate.orientation === 'portrait' ? ' is-portrait' : ''}`}
        href={certificate.file}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${certificate.title} certificate`}
      >
        <img
          src={certificate.file}
          alt={`${certificate.title} certificate`}
          loading="lazy"
          decoding="async"
        />
        <span className="preview-open"><ArrowUpRight size={16} aria-hidden="true" /></span>
      </a>
      <div className="certificate-meta">
        <div>
          <p className="certificate-issuer">
            {certificate.issuer} <span>·</span> {certificate.year}
          </p>
          <h3>{certificate.title}</h3>
        </div>
        <span className="certificate-category">{certificate.category}</span>
      </div>
    </article>
  );
}

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const visibleCertificates = useMemo(
    () => certificates.filter((certificate) => activeCategory === 'All' || certificate.category === activeCategory),
    [activeCategory],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell" data-theme={theme}>
      <header className="site-header content-width">
        <a className="wordmark" href="#top" aria-label="Rupak Neupane home" onClick={closeMenu}>
          <span className="wordmark-mark">RN</span>
          <span>Rupak Neupane</span>
        </a>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certificates" onClick={closeMenu}>Certificates</a>
          <a href="#life" onClick={closeMenu}>Life</a>
          <a href="#contact" onClick={closeMenu} className="nav-contact">
            Contact <ArrowUpRight size={14} />
          </a>
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={15} /> : <SunMedium size={15} />}
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero content-width">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> AI engineer · researcher · builder
            </p>
            <h1>
              Rupak
              <span>Neupane.</span>
            </h1>
            <p className="hero-description">
              I design and deploy AI systems for language, document intelligence, and computer vision,
              with a focus on practical research and real-world problem solving.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={resumeUrl} target="_blank" rel="noreferrer">
                <Download size={16} /> Resume
              </a>
              <a className="button button-secondary" href="#projects">
                Explore work <ArrowDown size={15} />
              </a>
            </div>

            <ul className="hero-meta">
              <li>
                <MapPin size={14} /> Bhaktapur, Nepal
              </li>
              <li>
                <Mail size={14} /> neupanerupak7@gmail.com
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <a href={profileImage} target="_blank" rel="noreferrer" aria-label="Open portrait image">
                <img
                  src={profileImage}
                  alt="Rupak Neupane portrait"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={720}
                  height={900}
                />
              </a>
            </div>
            <div className="mini-panel panel-top">
              <Sparkles size={14} />
              <span>Applied AI</span>
            </div>
            <div className="mini-panel panel-bottom">
              <Workflow size={14} />
              <span>NLP + Computer Vision</span>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="content-width stats-grid">
            <div className="stat-card">
              <strong>2</strong>
              <span>Peer-reviewed publications</span>
            </div>
            <div className="stat-card">
              <strong>80.32%</strong>
              <span>B.E. final percentage</span>
            </div>
            <div className="stat-card">
              <strong>2025</strong>
              <span>AI engineer at Global IME Bank</span>
            </div>
            <div className="stat-card">
              <strong>AI</strong>
              <span>Research, document intelligence, and vision systems</span>
            </div>
          </div>
        </section>

        <section className="section content-width" id="research">
          <SectionHeading
            index="01"
            eyebrow="Research focus"
            title="AI for language, vision, and knowledge systems"
            note="My work sits at the intersection of machine learning, document intelligence, computer vision, and applied research."
          />

          <div className="research-summary">
            <div className="research-copy">
              <p>
                I am a computer engineering graduate and AI-focused builder working on systems that
                transform unstructured data into actionable intelligence. My current work includes computer
                vision, multilingual document extraction, and retrieval-augmented systems for internal
                institutional knowledge access.
              </p>
            </div>
            <div className="focus-list">
              <div>
                <Code2 size={16} />
                <span>Python, PyTorch, TensorFlow</span>
              </div>
              <div>
                <Workflow size={16} />
                <span>RAG, VLMs, NLP, CV</span>
              </div>
              <div>
                <Sparkles size={16} />
                <span>Applied research & experimentation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section content-width" id="experience">
          <SectionHeading
            index="02"
            eyebrow="Experience"
            title="Applied work in AI"
            note="Selected professional and academic experience that shaped my research and engineering practice."
          />

          <div className="experience-wrap">
            <article className="experience-item">
              <div className="timeline-badge">
                <BriefcaseBusiness size={16} />
              </div>
              <div className="experience-content">
                <p className="eyebrow">Oct 2025 — Jan 2026</p>
                <h3>Artificial Intelligence Engineer</h3>
                <p className="company">Global IME Bank</p>
                <p>
                  Developed multilingual Nepali/English invoice extraction using vision-language models and
                  reinforcement fine-tuning, and designed a retrieval-augmented document query system for
                  internal knowledge access.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="timeline-badge">
                <GraduationCap size={16} />
              </div>
              <div className="experience-content">
                <p className="eyebrow">2021 — 2025</p>
                <h3>Bachelor of Computer Engineering</h3>
                <p className="company">Khwopa College of Engineering, Tribhuvan University</p>
                <p>
                  Completed a degree focused on software, systems, AI, and data-driven engineering, with an
                  overall percentage of 80.32% and a full scholarship from the university entrance top ranker program.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section content-width" id="projects">
          <SectionHeading
            index="03"
            eyebrow="Selected projects"
            title="Practical systems and prototypes"
            note="A few examples of the applied AI and ML work I have built and refined."
          />

          <div className="project-list">
            {projects.map((project) => (
              <a
                key={project.number}
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} project`}
              >
                <div className="project-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-field">{project.field}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-link-row">
                  View project <ArrowUpRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section content-width" id="publications">
          <SectionHeading
            index="04"
            eyebrow="Publications"
            title="Research writing"
            note="Peer-reviewed work focused on computer vision and intelligent document workflows."
          />

          <div className="publication-list">
            {publications.map((paper) => (
              <a
                key={paper.title}
                className="publication-item"
                href={paper.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read ${paper.title}`}
              >
                <div className="publication-year">{paper.year}</div>
                <div className="publication-body">
                  <h3>{paper.title}</h3>
                  <p className="publication-authors">{paper.authors}</p>
                  <p className="publication-venue">{paper.venue}</p>
                </div>
                <span className="publication-action">
                  Read paper <ArrowUpRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="certificate-band" id="certificates">
          <div className="content-width section certificate-section">
            <SectionHeading
              index="05"
              eyebrow="Learning track"
              title="Certificates & credentials"
              note="AI, machine learning, cloud, and research credentials acquired through coursework and applied learning."
            />

            <div className="certificate-toolbar" role="group" aria-label="Filter certificates by subject">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? 'filter-button is-active' : 'filter-button'}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  {category === 'All' ? <span>{certificates.length}</span> : null}
                </button>
              ))}
            </div>

            <div className="certificate-grid" aria-live="polite">
              {visibleCertificates.map((certificate) => (
                <CertificateCard key={certificate.title} certificate={certificate} />
              ))}
            </div>
          </div>
        </section>

        <section className="section content-width" id="life">
          <SectionHeading
            index="06"
            eyebrow="Beyond the resume"
            title="Life beyond the resume"
            note="A few moments from the road, the mountains, and the quieter chapters that keep me grounded while I build and learn."
          />

          <div className="life-gallery" aria-label="Life beyond the resume gallery">
            {lifeMoments.map((moment, index) => (
              <figure key={moment.title} className={`life-card life-card--${index % 3}`}>
                <a href={moment.src} target="_blank" rel="noreferrer" aria-label={`Open ${moment.title} photo`}>
                  <img
                    src={moment.src}
                    alt={moment.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                  />
                </a>
                <figcaption>{moment.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact-section content-width" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Available for collaboration</p>
            <h2>
              Let&apos;s build useful
              <span>AI systems.</span>
            </h2>
          </div>

          <div className="contact-bottom">
            <a className="button button-primary" href="mailto:neupanerupak7@gmail.com">
              <Mail size={16} /> Get in touch
            </a>

            <div className="social-links">
              <a href="https://github.com/RupakNeupane" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a href="https://linkedin.com/in/rupakneupane007" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href="https://rupakneupane.com.np" target="_blank" rel="noreferrer">
                <BookOpen size={16} /> Website <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer content-width">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark">RN</span>
          <span>Rupak Neupane</span>
        </a>
        <span>Bhaktapur, Nepal · © {new Date().getFullYear()}</span>
        <a href="#top" className="back-to-top">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
    </div>
  );
}

export default PortfolioPage;