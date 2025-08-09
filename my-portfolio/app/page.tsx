
"use client";
import React, { useEffect } from "react";

export default function Home() {

  const skills = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Creating intuitive and beautiful user interfaces with modern design principles.",
      gradient: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      icon: "⚡",
      title: "Frontend Development",
      desc: "Building responsive web applications with React, Vue, and modern JavaScript.",
      gradient: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      desc: "Optimizing applications for speed, accessibility, and user experience.",
      gradient: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      desc: "Creating mobile-first responsive designs and progressive web apps.",
      gradient: "from-orange-500/20 to-red-500/20 border-orange-500/30",
    },
    {
      icon: "🔧",
      title: "Full Stack",
      desc: "End-to-end development with Node.js, databases, and cloud services.",
      gradient: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
    },
    {
      icon: "🎯",
      title: "Project Management",
      desc: "Leading projects from conception to deployment with agile methodologies.",
      gradient: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern shopping experience with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-purple-400 to-pink-400",
      tagColors: ["bg-purple-500/30", "bg-blue-500/30", "bg-green-500/30"],
    },
    {
      title: "Task Management App",
      desc: "Collaborative productivity tool with real-time updates",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      gradient: "from-blue-400 to-cyan-400",
      tagColors: ["bg-blue-500/30", "bg-orange-500/30", "bg-purple-500/30"],
    },
    {
      title: "Portfolio Website",
      desc: "Creative showcase with advanced animations",
      tags: ["JavaScript", "GSAP", "CSS3"],
      gradient: "from-green-400 to-emerald-400",
      tagColors: ["bg-yellow-500/30", "bg-pink-500/30", "bg-indigo-500/30"],
    },
  ];

  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@yourportfolio.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/yourusername",
    },
  ];

  // Scroll reveal animation
  React.useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = (element as HTMLElement).getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    revealOnScroll();
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);

  // Mouse particle effect
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.createElement('div');
      cursor.className = 'fixed w-2 h-2 bg-white/20 rounded-full pointer-events-none z-50';
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.animation = 'fadeOut 1s ease forwards';
      document.body.appendChild(cursor);
      setTimeout(() => cursor.remove(), 1000);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add fadeOut animation to head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `@keyframes fadeOut {0% { opacity: 1; transform: scale(1); }100% { opacity: 0; transform: scale(0); }}`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);


  // Contact form state
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to NestJS backend
    await new Promise((res) => setTimeout(res, 1000));
    setSent(true);
    setLoading(false);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  // Smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-gray-900 text-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="min-h-screen animated-bg relative flex items-center justify-center overflow-hidden">
        {/* Floating Particles */}
        <div className="particle" style={{ top: '10%' }} />
        <div className="particle" style={{ top: '30%' }} />
        <div className="particle" style={{ top: '60%' }} />
        <div className="particle" style={{ top: '80%' }} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            Building Exceptional<br />
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              User Experiences
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 fade-in-up delay-1">
            I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-2">
            <button
              className="btn-primary px-8 py-4 rounded-full text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </button>
            <button
              className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold text-white"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={skill.title}
                className={`skill-card bg-gradient-to-br ${skill.gradient} p-8 rounded-2xl border scroll-reveal`}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 animated-bg relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            Featured <span className="text-yellow-300">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="project-card bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden scroll-reveal"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="project-overlay absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={tag} className={project.tagColors[j] + " px-3 py-1 rounded-full text-sm"}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            Let's <span className="text-green-400">Connect</span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="scroll-reveal">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              </p>
              <div className="space-y-4">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{c.label}</p>
                      <p className="text-gray-300">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-reveal">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 backdrop-blur-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-lg font-semibold"
                  disabled={loading}
                  style={sent ? { background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' } : {}}
                >
                  {sent ? 'Message Sent! ✓' : loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 text-center">
        <p className="text-gray-400">© 2025 Prateek. Crafted with passion and code.</p>
      </footer>

      {/* Custom styles for animation and particles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .animated-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .particle {
          position: absolute;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        .particle:nth-child(1) { width: 80px; height: 80px; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { width: 60px; height: 60px; left: 20%; animation-delay: 2s; }
        .particle:nth-child(3) { width: 100px; height: 100px; left: 70%; animation-delay: 4s; }
        .particle:nth-child(4) { width: 40px; height: 40px; left: 80%; animation-delay: 1s; }
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease forwards;
        }
        .fade-in-up.delay-1 { animation-delay: 0.2s; }
        .fade-in-up.delay-2 { animation-delay: 0.4s; }
        .fade-in-up.delay-3 { animation-delay: 0.6s; }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102,126,234,0.4);
        }
        .btn-secondary {
          border: 2px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
        .skill-card {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .skill-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .project-card {
          transition: all 0.4s ease;
          overflow: hidden;
        }
        .project-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s ease;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .form-input {
          transition: all 0.3s ease;
        }
        .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102,126,234,0.2);
        }
      `}</style>
    </main>
  );
}
