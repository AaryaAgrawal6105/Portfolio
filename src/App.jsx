import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowUp, Menu, X, Briefcase, Trophy, CheckCircle2, Send, Heart, ExternalLink, Users } from 'lucide-react';
import profilePic from './assets/Porfolio_Image.jpg';

// --- Professional Tech Logos ---
const JavaScriptLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#F7DF1E" d="M0 0h256v256H0z"/><path d="M68.35 189.9c2.86 5.8 8.01 9.08 15.82 9.08c7.1 0 12.04-2.73 12.04-13.62V93.53h22.6v95.8c0 21.5-12.03 32.1-32.55 32.1c-15.6 0-26.23-8.86-30.82-19.7zM151.72 217c-17.5 0-29.27-9.3-34.58-21.16l19.8-11.2c2.86 6.64 8.7 10.96 15.62 10.96c6.43 0 10.38-2.5 10.38-8.86c0-6.17-3.95-8.5-11.08-12.04l-3.95-1.97c-10.37-5.2-17.3-11.43-17.3-24.18c0-12.04 9.5-21.36 24.82-21.36c11.2 0 19.35 4.5 24.81 15.4l-19.16 11.63c-2.7-4.5-5.96-6.8-9.7-6.8c-4.14 0-6.8 2.3-6.8 6.1c0 4.5 2.5 6.43 7.53 9.08l3.95 1.97c12.24 6.1 19.36 12.24 19.36 25.8c0 14.9-10.74 23.9-28.02 23.9z"/></svg>;
const ReactLogo = (props) => <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
const NodeLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#339933" d="M128 0a128 128 0 1 0 0 256A128 128 0 0 0 128 0Z"/><path fill="#215732" d="m139.8 178.6-23.6-40.8-11.8 20.4 11.8 20.4z"/><path fill="#FFFFFF" d="M139.8 178.6c1.1 0 2.2-.5 2.8-1.4l24-41.5c.6-.9.6-2.1 0-3.1l-11.8-20.4c-.6-.9-1.7-1.4-2.8-1.4H90c-1.1 0-2.2.5-2.8 1.4L63.1 154c-.6.9-.6 2.1 0 3.1l12 20.4c.6 1 1.7 1.5 2.8 1.5h61.9zM92.2 114.7h59.8l-12 20.5H80.2l12-20.5zm-11.7 61.1L69 155.3h106.3l11.7 20.5H80.5z"/></svg>;
const PythonLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#3776AB" d="M128 0C57.3 0 0 57.3 0 128h128v128c70.7 0 128-57.3 128-128S198.7 0 128 0z" /><path fill="#FFD43B" d="M128 256c70.7 0 128-57.3 128-128H128V0C57.3 0 0 57.3 0 128s57.3 128 128 128z" /><circle fill="#fff" cx="84" cy="74" r="12" /><circle fill="#fff" cx="172" cy="182" r="12" /></svg>;
const MongoDbLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#4DB33D" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-1.1 231.5c-42.5 0-77-34.5-77-77s34.5-77 77-77 77 34.5 77 77-34.5 77-77 77z" /><path fill="#fff" d="M126.9 77.5c-27.6 0-50 22.4-50 50s22.4 50 50 50V77.5z" /></svg>;
const MySqlLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#00758F" d="M0 0h256v256H0z" /><path fill="#F29111" d="M192.5 160.1s-10.4-30.8-31.5-47.5c-21.1-16.7-47.5-20.9-47.5-20.9s-26.4 4.2-47.5 20.9-31.5 47.5-31.5 47.5l-4.2-12.6s10.4-30.8 31.5-47.5c21.1-16.7 47.5-20.9 47.5-20.9s26.4 4.2 47.5 20.9 31.5 47.5 31.5 47.5z" /><path fill="#fff" d="M128 128s-4.2-26.4-20.9-31.5c-16.7-5.3-36 4.2-36 4.2v50.3s19.2-9.5 36-4.2c16.7 5.3 20.9 31.5 20.9 31.5s4.2 26.4 20.9 31.5c16.7 5.3 36-4.2 36-4.2v-50.3s-19.2 9.5-36 4.2c-16.7-5.2-20.9-31.5-20.9-31.5z" /></svg>;
const GitLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#F05033" d="M228.3 103.7L152.3 27.7a20 20 0 0 0-28.3 0l-21.1 21.1a8.3 8.3 0 0 0 0 11.8l27.1 27.1-47.8 47.8a8.3 8.3 0 0 0 0 11.8l14.6 14.6a8.4 8.4 0 0 0 11.8 0l47.8-47.8 27.1 27.1a8.3 8.3 0 0 0 11.8 0l21.1-21.1a20.1 20.1 0 0 0 0-28.4zM103.7 30a8.3 8.3 0 0 0-11.8 0l-67.8 67.8a41.7 41.7 0 0 0 0 59l67.8 67.8a8.3 8.3 0 0 0 11.8 0l67.8-67.8a8.3 8.3 0 0 0 0-11.8L103.7 30z" /><circle fill="#fff" cx="150" cy="106" r="10" /><circle fill="#fff" cx="106" cy="150" r="10" /><circle fill="#fff" cx="106" cy="106" r="10" /></svg>;
const ExpressLogo = (props) => <svg viewBox="0 0 1080 1080" {...props}><rect width="1080" height="1080" fill="#303030" /><path fill="white" d="M104.17,165.42H952.5V300H574.58l22.92,57.08H962.5V414.17H618.75l25,59.58H968.33V599.17H664.58l26.25,65.42H980.42V795.83H104.17V660.42h403.75l-23.75-62.92H104.17V465.42H442.5l-23.75-59.58H104.17V265.42h314.58L395.83,300H104.17V165.42ZM533.33,548.33l-25-67.92-23.75,67.92Z" /></svg>;
const VercelLogo = (props) => <svg viewBox="0 0 256 256" {...props}><path fill="#FFF" d="M128 35.5L23.5 220.5h209z"/></svg>;


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        return element && element.getBoundingClientRect().top <= 100 && element.getBoundingClientRect().bottom >= 100;
      });
      if (current) setActiveSection(current);
      setShowScrollTop(window.scrollY > 400);
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) setIsVisible(prev => ({ ...prev, [id]: element.getBoundingClientRect().top <= window.innerHeight * 0.75 }));
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault(); setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false); setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aarya_Agrawal_Resume.pdf';
    link.setAttribute('download', 'Aarya_Agrawal_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };
  
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // --- Reusable Components ---
  const AnimatedSection = ({ children, id, className = "" }) => <section id={id} className={`py-24 sm:py-32 transition-all duration-1000 ease-out ${className} ${ isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</section>;
  const SectionHeader = ({ title }) => <div className="text-center mb-20"><h2 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h2><div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full mt-6" /></div>;
  const Badge = ({ children }) => <span className="bg-sky-500/10 text-sky-300 text-sm font-medium px-3 py-1.5 rounded-full border border-sky-500/20">{children}</span>;

  const techStack = [
    { name: 'JavaScript', icon: JavaScriptLogo }, { name: 'React', icon: ReactLogo }, { name: 'Node.js', icon: NodeLogo },
    { name: 'Express', icon: ExpressLogo }, { name: 'Python', icon: PythonLogo }, { name: 'MongoDB', icon: MongoDbLogo },
    { name: 'MySQL', icon: MySqlLogo }, { name: 'Git', icon: GitLogo }, { name: 'Vercel', icon: VercelLogo }
  ];
  
  const projects = [
    { title: "TripHub", subtitle: "Collaborative Travel Platform", tech: ["MERN", "WebSockets", "GroqAI"], description: "A collaborative trip planning platform featuring shared itineraries, real-time chat, budget management, and AI-driven recommendations.", features: ["Shared itineraries & real-time chat", "Budget management & expense splitting", "AI-driven travel recommendations"] },
    { title: "Flight Booking Backend", subtitle: "Enterprise Microservices", tech: ["Node.js", "MySQL", "RabbitMQ"], description: "A scalable microservices backend for flight bookings supporting 1,000+ concurrent users, with dedicated services for flights, auth, and notifications.", features: ["High-performance microservices", "Supports 1,000+ concurrent users", "Automated notifications"] },
    { title: "QuickChat", subtitle: "Real-time Communication App", tech: ["MERN", "Socket.IO", "Cloudinary"], description: "A real-time chat application with online presence indicators, secure image sharing, and extensive theme customization.", features: ["Real-time messaging & presence", "Secure image sharing", "30+ dynamic themes"] }
  ];

  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-lg font-bold text-white tracking-wide">Aarya Agrawal</span>
            <div className="hidden lg:flex items-center space-x-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${ activeSection === item ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white' }`}>
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <button onClick={handleResumeDownload} className="hidden sm:inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white focus:ring-slate-500 px-4 py-2 text-sm rounded-lg font-semibold transition-colors">
                  <Download size={16} /><span>Resume</span>
              </button>
              <div className="lg:hidden ml-2"><button onClick={() => setMobileMenuOpen(true)} aria-label="Open menu" className="p-2 rounded-md hover:bg-slate-800"><Menu size={20} /></button></div>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <AnimatedSection id="home" className="min-h-screen flex items-center pt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative w-36 h-36 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/50 to-sky-600/50 blur-lg" />
              <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-br from-sky-400 to-indigo-500">
                <img src={profilePic} alt="Aarya Agrawal" className="w-full h-full object-cover rounded-full bg-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">Aarya Piyush Agrawal</h1>
            <p className="text-xl md:text-2xl text-sky-400 font-medium mb-8">Full Stack Developer & Creative Problem Solver</p>
            <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed mb-12">I build scalable, efficient, and beautiful web applications. Currently pursuing my B.E. in Information Technology at PICT, Pune.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:aarya6105@gmail.com" className="font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white shadow-lg focus:ring-sky-500 px-6 py-3 text-lg rounded-xl"><Mail size={18} /> Get In Touch</a>
              <button onClick={handleResumeDownload} className="font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 inline-flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white focus:ring-slate-500 px-6 py-3 text-lg rounded-xl"><Download size={18} /> Download Resume</button>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection id="about">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader title="About Me" />
            <blockquote className="relative text-2xl sm:text-3xl font-medium text-white mb-12 border-l-4 border-sky-500 pl-8">
              "I transform complex problems into beautiful and intuitive digital experiences."
            </blockquote>
            <div className="space-y-6 text-slate-300 text-lg leading-loose">
              <p>As a dedicated Full Stack Developer, I'm driven by a passion for not just writing code, but building solutions that are a joy to use. My journey in technology, currently centered at the <span className="text-sky-400 font-semibold">Pune Institute of Computer Technology</span>, is defined by a relentless pursuit of knowledge and excellence, reflected in my <Badge>9.75 CGPA</Badge>.</p>
              <p>I specialize in the <Badge>MERN Stack</Badge> and architecting <Badge>Microservices</Badge>, focusing on creating systems that are as scalable and robust as they are user-friendly. Beyond the screen, my time on the cricket field and volunteering at tech festivals has taught me the value of teamwork, discipline, and community—principles I bring to every project I undertake.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="bg-slate-900/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader title="Technical Toolkit" />
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
                  {techStack.map(tech => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={tech.name} className="group flex flex-col items-center gap-3 text-center w-28">
                          <div className="w-24 h-24 p-4 bg-slate-800 border border-slate-700 rounded-full group-hover:border-sky-500/50 group-hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center"><IconComponent className="w-full h-full object-contain" /></div>
                          <span className="text-slate-400 group-hover:text-white font-medium transition-colors duration-300">{tech.name}</span>
                      </div>
                    );
                  })}
              </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection id="projects">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Featured Projects" />
            <div className="grid lg:grid-cols-1 gap-16">
              {projects.map((project, index) => (
                <div key={project.title} className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <p className="text-xl text-sky-400 font-medium">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2">{project.tech.map(t => <Badge key={t}>{t}</Badge>)}</div>
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    <div className="flex gap-4 pt-2">
                      <a href="#" className="font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white shadow-lg focus:ring-sky-500 px-5 py-2.5 text-base rounded-lg"><ExternalLink size={16} /> Live Demo</a>
                      <a href="#" className="font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 inline-flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white focus:ring-slate-500 px-5 py-2.5 text-base rounded-lg"><Github size={16} /> Source</a>
                    </div>
                  </div>
                  <div className={`h-full ${index % 2 !== 0 ? 'lg:-order-last' : ''}`}>
                    <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-6 sm:p-8 h-full">
                      <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                      <ul className="space-y-4">{project.features.map(f => <li key={f} className="flex items-start gap-3"><CheckCircle2 size={18} className="text-sky-500 mt-1 flex-shrink-0" /><span>{f}</span></li>)}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection id="contact" className="bg-slate-900/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Get In Touch" />
             <div className="max-w-lg mx-auto">
                {/* To make this form functional, you'll need to connect it to a backend service like EmailJS, Formspree, or your own API endpoint. */}
                <form onSubmit={handleFormSubmit} className="space-y-6 bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
                  <p className="text-center text-slate-400">Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or email me directly.</p>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                    <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none transition-all" required />
                  </div>
                  <button type="submit" className="w-full font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white shadow-lg focus:ring-sky-500 px-6 py-3 text-lg rounded-xl" disabled={isSubmitted}>
                    {isSubmitted ? 'Message Sent!' : <><Send size={18} /> Send Message</>}
                  </button>
                </form>
                <div className="text-center mt-8">
                    <p className="text-slate-400">Or email me directly at:</p>
                    <a href="mailto:aarya6105@gmail.com" className="text-sky-400 hover:text-sky-300 text-lg font-medium transition-colors">aarya6105@gmail.com</a>
                </div>
             </div>
          </div>
        </AnimatedSection>
      </main>
      
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/AaryaAgrawal6105" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/aarya6105" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:aarya6105@gmail.com" className="hover:text-sky-400 transition-colors"><Mail size={24} /></a>
          </div>
          <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Aarya Agrawal</p>
          <p className="text-xs mt-2">Pune, India • Last Updated: July 2025</p>
        </div>
      </footer>

      {showScrollTop && (
        <button onClick={scrollToTop} aria-label="Scroll to top" className="fixed bottom-5 right-5 z-50 w-10 h-10 bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 text-sky-400 hover:bg-sky-500/30 rounded-full flex items-center justify-center transition-all duration-300">
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;