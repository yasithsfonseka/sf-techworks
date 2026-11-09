import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  GraduationCap,
  Headphones,
  Layers3,
  LifeBuoy,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  MoveRight,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Wrench,
} from "lucide-react";

const WHATSAPP_NUMBER = "94772872795";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "yasithsfonsekaw@gmail.com";

const servicePackages = [
  {
    number: "01",
    icon: Code2,
    title: "Business website launch",
    description: "A sharp, conversion-ready website for a business that has outgrown social media alone.",
    includes: ["Responsive pages and content structure", "WhatsApp enquiry flow", "Domain, hosting and deployment help", "Basic search and analytics setup"],
    price: "From LKR 75,000",
    note: "7–14 days for a focused scope",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Workflow system",
    description: "Replace manual spreadsheets and scattered messages with one focused internal system.",
    includes: ["Requirement workshop", "Secure login and roles", "One workflow: bookings, attendance, inventory or approvals", "Dashboard and reports"],
    price: "From LKR 150,000",
    note: "Quote after a paid discovery session",
    featured: true,
  },
  {
    number: "03",
    icon: Server,
    title: "Infrastructure health check",
    description: "A practical review of your Linux server, database, backups and deployment path.",
    includes: ["Server and configuration review", "Database performance checks", "Backup and recovery review", "Prioritized written action plan"],
    price: "From LKR 25,000",
    note: "Assessment delivered in 3–5 working days",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Monthly technical support",
    description: "Reliable maintenance and small improvements without hiring a full-time technical team.",
    includes: ["Bug fixes and maintenance", "Backup and monitoring checks", "Small product improvements", "Clear monthly support boundary"],
    price: "From LKR 40,000 / month",
    note: "Retainers are scoped to response expectations",
  },
];

const pilots = [
  {
    kicker: "Ceylon IT Academy",
    icon: GraduationCap,
    title: "Practical coding for the next generation.",
    description: "A small paid pilot for students who want more than theory: hands-on ICT, Python, web development and guided lab work with practicing engineers.",
    points: ["Grades 6–11 and beginner coders", "1:1 workstation model", "Sinhala and English support", "Weekend cohort or one-to-one mentoring"],
    cta: "Ask about the next cohort",
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi SF Techworks, I would like to ask about the next Ceylon IT Academy pilot cohort.")}`,
    tone: "lime",
  },
  {
    kicker: "Sadeepa Astroveda",
    icon: Sparkles,
    title: "Traditional guidance, delivered digitally.",
    description: "Paid astrology and numerology reports or consultations, packaged with a clear booking flow and responsible expectations.",
    points: ["Digital birth-chart reports", "Numerology and relationship readings", "Private online consultation", "Sinhala and English delivery"],
    cta: "Ask about a report",
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi SF Techworks, I would like to ask about a Sadeepa Astroveda report or consultation.")}`,
    tone: "gold",
  },
  {
    kicker: "SmartSriLanka.lk",
    icon: Wrench,
    title: "Reliable IT help, at home.",
    description: "A narrow pilot connecting households and small businesses with verified technicians for practical technology tasks.",
    points: ["Wi-Fi and router setup", "CCTV and device coordination", "Computer and printer support", "Manual booking while the network is validated"],
    cta: "Join the pilot waitlist",
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi SF Techworks, I want to join or use the SmartSriLanka IT home-support pilot.")}`,
    tone: "blue",
  },
];

const faqs = [
  {
    question: "Do you only build large custom software systems?",
    answer: "No. The best first engagement is usually a focused outcome: a website, one workflow, a health check, or a support retainer. If the problem is larger, we can start with a paid discovery phase and define the next step properly.",
  },
  {
    question: "How do you decide the final price?",
    answer: "The published figures are starting points for common scopes. Final pricing depends on the number of users, integrations, data migration, design depth, hosting, security expectations and support. You receive a written scope before work begins.",
  },
  {
    question: "How quickly can a project start?",
    answer: "Small assessments and website projects can usually be scheduled faster than multi-week systems. Share your target date and constraints in the enquiry form; the first conversation will clarify fit and availability.",
  },
  {
    question: "Can you support a system after launch?",
    answer: "Yes. Monthly support can cover maintenance, backup checks, bug fixes, monitoring and small improvements. Support is defined by response expectations and included hours, so there are no vague unlimited promises.",
  },
  {
    question: "Are the education and astrology services separate from engineering work?",
    answer: "Yes. Ceylon IT Academy and Sadeepa Astroveda have separate offers and enquiry paths. SF Techworks is the dedicated engineering brand, led by Yasith Fonseka.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Business website launch");

  const handleNav = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 20);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const contact = String(form.get("contact") ?? "");
    const details = String(form.get("details") ?? "");
    const message = `Hi SF Techworks, I am ${name}. I am interested in: ${selectedService}. Contact: ${contact}. Project details: ${details}`;
    setSubmitted(true);
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <div className="top-line" />
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="wordmark" onClick={() => handleNav("top")} aria-label="Back to top">
            <span className="wordmark-mark">YF</span>
            <span>
              <strong>SF Techworks</strong>
              <small>software / infrastructure / automation</small>
            </span>
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <button onClick={() => handleNav("services")}>Services</button>
            <button onClick={() => handleNav("pilots")}>Projects in motion</button>
            <button onClick={() => handleNav("about")}>Why SF Techworks</button>
            <button onClick={() => handleNav("contact")} className="nav-cta">Start a conversation <ArrowUpRight size={15} /></button>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Available for focused engagements · Colombo / remote</div>
              <h1>Turn technical friction into an <em>operating advantage.</em></h1>
              <p className="hero-lede">Web systems, infrastructure and practical technology training for people who need things to work — reliably, clearly and without unnecessary complexity.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => handleNav("contact")}>Tell me what needs fixing <ArrowUpRight size={17} /></button>
                <button className="text-link" onClick={() => handleNav("services")}>Explore service packages <MoveRight size={17} /></button>
              </div>
              <div className="hero-proof">
                <span><strong>4+</strong> years active</span>
                <span><strong>10+</strong> production systems</span>
                <span><strong>99.9%</strong> reliability mindset</span>
              </div>
            </div>
            <div className="signal-card" aria-label="SF Techworks capability snapshot">
              <div className="signal-head"><span>CAPABILITY / 2026</span><span className="signal-live"><i /> live</span></div>
              <div className="signal-title">Systems that hold up<br /><span>under real use.</span></div>
              <div className="terminal-window">
                <div className="terminal-top"><span className="terminal-dot red" /><span className="terminal-dot yellow" /><span className="terminal-dot green" /><span className="terminal-name">sftechworks@build:~</span></div>
                <div className="terminal-body">
                  <p><span className="terminal-prompt">$</span> map --your-next-system</p>
                  <p className="terminal-muted">understand the problem first</p>
                  <p><span className="terminal-prompt">$</span> build --focused-scope</p>
                  <p className="terminal-muted">ship the smallest useful version</p>
                  <p><span className="terminal-prompt">$</span> support --after-launch</p>
                  <p className="terminal-success">✓ keep the operation moving</p>
                </div>
              </div>
              <div className="signal-footer"><span><ShieldCheck size={15} /> Secure by design</span><span><Network size={15} /> Built to scale</span></div>
            </div>
          </div>
          <div className="hero-river" aria-hidden="true"><span>SCROLL TO FIND YOUR NEXT MOVE</span><ArrowDownRight size={17} /></div>
        </section>

        <section className="intro-strip">
          <div className="container intro-grid">
            <p className="section-label">01 / The point</p>
            <div>
              <h2>Not another vague technology vendor.</h2>
              <p className="intro-text">You get a senior technical partner who can move from the business problem to the system, the server and the next iteration. Every engagement starts with a clear scope and ends with something your team can use.</p>
            </div>
            <div className="intro-aside"><span className="aside-line" /><p>Software engineering<br />Systems & infrastructure<br />Data science<br />Technology education</p></div>
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <div className="section-heading heading-split">
              <div><p className="section-label">02 / Work with SF Techworks</p><h2>Choose the outcome.<br /><span>Keep the scope clear.</span></h2></div>
              <p>Start small, make the result measurable, and build from evidence. These packages are designed for businesses that need a capable technical partner without adding a full-time team.</p>
            </div>
            <div className="services-list">
              {servicePackages.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className={`service-row ${service.featured ? "is-featured" : ""}`}>
                    <div className="service-number">{service.number}</div>
                    <div className="service-icon"><Icon size={24} strokeWidth={1.6} /></div>
                    <div className="service-main"><h3>{service.title}</h3><p>{service.description}</p><div className="service-includes">{service.includes.map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div></div>
                    <div className="service-aside"><strong>{service.price}</strong><small>{service.note}</small><button onClick={() => { setSelectedService(service.title); handleNav("contact"); }}>Discuss this package <ArrowUpRight size={15} /></button></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pilots" className="section section-dark">
          <div className="container">
            <div className="section-heading heading-split dark-heading">
              <div><p className="section-label">03 / Projects in motion</p><h2>Three focused pilots.<br /><span>Real people, real use.</span></h2></div>
              <p>Alongside client work, Yasith is validating three practical ventures. Each has a separate purpose, a smaller first step and a clear way to join.</p>
            </div>
            <div className="pilot-grid">
              {pilots.map((pilot) => {
                const Icon = pilot.icon;
                return <article key={pilot.kicker} className={`pilot-card tone-${pilot.tone}`}><div className="pilot-top"><span>{pilot.kicker}</span><Icon size={24} /></div><h3>{pilot.title}</h3><p>{pilot.description}</p><ul>{pilot.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul><a href={pilot.href} target="_blank" rel="noreferrer">{pilot.cta} <ArrowUpRight size={16} /></a></article>;
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section section-paper">
          <div className="container about-grid">
            <div className="about-statement"><p className="section-label">04 / Why SF Techworks</p><h2>Discipline builds character. <em>Knowledge creates possibilities.</em></h2><p>SF Techworks combines Yasith Fonseka's software engineering, systems administration, military leadership, data-science research and entrepreneurial thinking. You get a technical partner who is structured enough to be dependable and curious enough to find a better way.</p><a className="text-link dark-link" href="https://yasithsfonseka.web.app/" target="_blank" rel="noreferrer">View the full professional profile <ArrowUpRight size={16} /></a></div>
            <div className="credential-stack">
              <div className="credential"><div className="credential-icon"><Terminal size={20} /></div><div><strong>Software engineering</strong><span>Laravel · Angular · React · Spring Boot · APIs</span></div></div>
              <div className="credential"><div className="credential-icon"><MonitorCog size={20} /></div><div><strong>Systems & infrastructure</strong><span>RHEL · Linux operations · Oracle · CI/CD · HA</span></div></div>
              <div className="credential"><div className="credential-icon"><Database size={20} /></div><div><strong>Data science in progress</strong><span>M.Sc. Data Science · AI · predictive analytics</span></div></div>
              <div className="credential"><div className="credential-icon"><LifeBuoy size={20} /></div><div><strong>Founder-led delivery</strong><span>SF Techworks · Ceylon IT Academy · Sadeepa Astroveda</span></div></div>
            </div>
          </div>
        </section>

        <section className="section section-light process-section">
          <div className="container">
            <div className="section-heading"><p className="section-label">05 / How it works</p><h2>A calm process for<br /><span>complicated work.</span></h2></div>
            <div className="process-grid">
              {[{n:"01",title:"Enquire",copy:"Tell me what is slowing down the business, the team or the customer experience."},{n:"02",title:"Clarify",copy:"We discuss users, constraints, priorities, timeline and what success should look like."},{n:"03",title:"Scope",copy:"You receive a written scope, starting price and a practical next step — no mystery work."},{n:"04",title:"Move",copy:"We build, review and support the result with clear communication from start to handover."}].map((item) => <div className="process-step" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section section-paper faq-section">
          <div className="container faq-grid">
            <div><p className="section-label">06 / Good to know</p><h2>Questions before<br /><span>we start?</span></h2><p className="faq-intro">A useful first conversation does not require a perfect brief. The clearer the constraint, the better the next decision.</p><button className="button button-dark" onClick={() => handleNav("contact")}>Ask your question <ArrowUpRight size={16} /></button></div>
            <div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{faq.answer}</p>}</div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy"><p className="section-label">07 / Start here</p><h2>Make the next<br /><em>technical move.</em></h2><p>Tell me what you are trying to improve. A short message is enough to begin; I will reply with the most sensible next step.</p><div className="direct-contact"><a href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi SF Techworks, I would like to discuss a technology project.")}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp <ArrowUpRight size={14} /></a><a href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL} <ArrowUpRight size={14} /></a></div><div className="contact-note"><ShieldCheck size={17} /><span>Your details are used only to understand your enquiry and respond.</span></div></div>
            <form className="enquiry-form" onSubmit={handleSubmit}><div className="form-header"><span>QUALIFIED ENQUIRY</span><span>01—04</span></div><label>Your name<input name="name" required placeholder="e.g. Nimal Perera" /></label><label>WhatsApp or email<input name="contact" required placeholder="How should I reach you?" /></label><label>What can I help with?<select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}><option>Business website launch</option><option>Workflow system</option><option>Infrastructure health check</option><option>Monthly technical support</option><option>Ceylon IT Academy</option><option>Sadeepa Astroveda</option><option>SmartSriLanka IT home-support</option><option>Not sure yet</option></select></label><label>Give me the short version<textarea name="details" required placeholder="What are you trying to improve, and when would you like to start?" rows={4} /></label><button className="button button-primary form-submit" type="submit">Start the WhatsApp conversation <ArrowUpRight size={17} /></button>{submitted && <p className="form-success"><Check size={16} /> Your message is ready in WhatsApp. Send it there to complete the enquiry.</p>}</form>
          </div>
        </section>
      </main>

      <a className="floating-whatsapp" href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi SF Techworks, I would like to discuss a technology project.")}`} target="_blank" rel="noreferrer" aria-label="Chat with SF Techworks on WhatsApp">
        <MessageCircle size={18} />
        <span>Chat with SF Techworks</span>
      </a>

      <footer className="site-footer"><div className="container footer-grid"><div><div className="footer-brand"><span className="wordmark-mark">YF</span><strong>SF Techworks</strong></div><p>Software, infrastructure and intelligent digital products for growing businesses.</p></div><div className="footer-links"><span>Explore</span><button onClick={() => handleNav("services")}>Services</button><button onClick={() => handleNav("pilots")}>Projects in motion</button><button onClick={() => handleNav("contact")}>Contact</button></div><div className="footer-links"><span>Elsewhere</span><a href="https://yasithsfonseka.web.app/" target="_blank" rel="noreferrer">Professional profile</a><a href="https://yasithsfonseka.web.app/" target="_blank" rel="noreferrer">Founder profile</a><a href="https://wa.me/94772872795" target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="container footer-bottom"><span>© 2026 SF Techworks</span><span>Built for clear conversations.</span></div></footer>
    </div>
  );
}
