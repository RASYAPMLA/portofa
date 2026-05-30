import { useState } from 'react';
import { 
  Sparkles, 
  Code, 
  Cpu, 
  Award, 
  Mail, 
  Download, 
  ChevronRight,
  Send,
  Layers,
  Terminal,
  Globe,
  GitBranch,
  Zap,
  Grid,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import BentoCard from '../components/BentoCard';
import faisalProfile from '../assets/faisal_profile.png';
import cert1Img from '../assets/cert_1.png';
import cert2Img from '../assets/cert_2.png';
import cert3Img from '../assets/cert_3.png';
import cert4Img from '../assets/cert_4.png';
import cert5Img from '../assets/cert_5.png';
import cert6Img from '../assets/cert_6.png';
import cert7Img from '../assets/cert_7.png';
import projectBioskopImg from '../assets/project_bioskop.png';
import projectEcommerceImg from '../assets/project_ecommerce.png';
import projectKalkulatorImg from '../assets/project_kalkulator.png';
import projectGhibliImg from '../assets/project_ghibli.png';
import cvFile from '../assets/CV Faisal Rahmat.pdf';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "Website Film Bioskop",
    category: "Web ",
    description: "Website bioskop lengkap dengan fitur pencarian film, jadwal tayang, pemilihan kursi, dan integrasi tiket online.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: projectBioskopImg,
    featured: true
  },
  {
    id: 2,
    title: "Pembuatan Ecommerce (Platzi Fake Store)",
    category: "Web ",
    description: "Aplikasi e-commerce modern dengan fitur keranjang belanja, kategori produk, dan tampilan produk populer menggunakan Platzi Fake Store API.",
    tags: ["React", "JavaScript", "CSS", "REST API"],
    image: projectEcommerceImg,
    featured: true
  },
  {
    id: 3,
    title: "Web Kalkulator",
    category: "Web ",
    description: "Aplikasi kalkulator berbasis web dengan tampilan yang menarik, mendukung operasi matematika dasar dengan desain yang bersih.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: projectKalkulatorImg,
    featured: false
  },
  {
    id: 4,
    title: "Website Film Studio Ghibli",
    category: "Web ",
    description: "Website eksplorasi film Studio Ghibli dengan fitur pencarian, filter, dan detail film lengkap menggunakan Ghibli API.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    image: projectGhibliImg,
    featured: false
  }
];

const certificatesData = [
  {
    id: 1,
    title: "Sertifikat Nasional DPMI",
    issuer: "Duta Pembicara Muda Indonesia",
    date: "2026",
    skills: "Public Speaking, Leadership, Organisasi, Komunikasi",
    image: cert1Img
  },
  {
    id: 2,
    title: "Patriot Pelajar Mahasiswa",
    issuer: "Forum OSIS Merah Putih",
    date: "Des 2025",
    skills: "Kepemimpinan, OSIS Awards 2025, Partisipasi Aktif",
    image: cert2Img
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Nov 2024",
    skills: "HTML, CSS, JavaScript, Web Development Fundamentals",
    image: cert3Img
  },
  {
    id: 4,
    title: "Keselamatan dan Kesehatan Kerja",
    issuer: "International Labour Organization (ILO)",
    date: "Okt 2024",
    skills: "K3, Safety Health for All, E-Learning ILO",
    image: cert4Img
  },
  {
    id: 5,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Jan 2025",
    skills: "JavaScript, ES6+, Pemrograman Dasar, Web Development",
    image: cert5Img
  },
  {
    id: 6,
    title: "Panitia Duta Inisiatif Indonesia",
    issuer: "Leuweung Hub Foundation",
    date: "2026",
    skills: "Kepemimpinan, Organisasi, Open Recruitment, Duta Inisiatif Batch 15",
    image: cert6Img
  },
  {
    id: 7,
    title: "Upgrading OSIS Nasional 2026",
    issuer: "Ibnu Sina Foundation (ISFO)",
    date: "5 Jan 2026",
    skills: "Kepemimpinan, Manajemen Organisasi, OSIS, Sharing Session",
    image: cert7Img
  }
];

function Home() {
  const [downloadStatus, setDownloadStatus] = useState('Download CV');
  const [filter, setFilter] = useState('All');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter) || p.tags.includes(filter));

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CV_Faisal_Rahmat.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadStatus('Downloaded! ✓');
    setTimeout(() => setDownloadStatus('Download CV'), 3000);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Harap isi semua kolom!");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // reset success state after a few seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <main className="portfolio-home">
      
      {/* SECTION 1: TENTANG SAYA (Hero & Personal Bio) */}
      <section id="about" className="hero-section" style={{ paddingTop: '20px' }}>
        <div className="hero-content">
          <h1 className="home-title gradient-text">
          Halo, Saya Faisal
         </h1>
        

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '32px', maxWidth: '580px' }}>
            Saya Faisal Rahmat seorang siswa SMK jurusan PPLG yang memiliki ketertarikan besar di bidang teknologi dan pengembangan perangkat lunak. 
            Saya senang mempelajari hal-hal baru dan saya akan terus berusaha mengasah kemampuan untuk bisa lebih berkembang, Selain fokus di bidang teknologi, saya juga aktif dalam organisasi dan kegiatan kedutaan, yang membantu saya memperluas wawasan, membangun relasi, serta meningkatkan kemampuan beradaptasi dan komunikasi.
          </p>

          <div className="hero-cta-area">
            <button className="cv-button" onClick={handleDownloadCV}>
              <Download size={16} />
              {downloadStatus}
            </button>
            <button className="contact-cta-btn" onClick={() => handleScrollToSection('contact')}>
              <span>Hubungi Saya</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Glowing Profile Photo Graphic with Rotating Background Aura */}
        <div className="profile-photo-container">
          <div className="profile-photo-wrapper">
            <img src={faisalProfile} alt="Faisal Rahmat - Frontend Developer" />
          </div>
        </div>
      </section>

      {/* SECTION 2: KEAHLIAN & TOOLS */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2 className="section-title-large">Tools & Keahlian</h2>
          <p className="section-subtitle-large">Perangkat dan teknologi utama yang saya gunakan untuk mewujudkan produk web performa tinggi.</p>
        </div>

        <BentoCard className="card-skills" style={{ width: '100%' }}>
          <div className="card-title">
            <Terminal />
            Core Tech Stack & Tools
          </div>
          <div className="tech-grid-container">
            <div className="tech-icon-box" data-tech="react">
              <div className="tech-icon-wrapper"><Code size={20} /></div>
              <span className="tech-name">React</span>
            </div>
            <div className="tech-icon-box" data-tech="js">
              <div className="tech-icon-wrapper"><Cpu size={20} /></div>
              <span className="tech-name">JavaScript</span>
            </div>
            <div className="tech-icon-box" data-tech="ts">
              <div className="tech-icon-wrapper"><Terminal size={20} /></div>
              <span className="tech-name">TypeScript</span>
            </div>
            <div className="tech-icon-box" data-tech="next">
              <div className="tech-icon-wrapper"><Grid size={20} /></div>
              <span className="tech-name">Next.js</span>
            </div>
            <div className="tech-icon-box" data-tech="tailwind">
              <div className="tech-icon-wrapper"><Layers size={20} /></div>
              <span className="tech-name">Tailwind CSS</span>
            </div>
            <div className="tech-icon-box" data-tech="node">
              <div className="tech-icon-wrapper"><Layers size={20} /></div>
              <span className="tech-name">Node.js</span>
            </div>
            <div className="tech-icon-box" data-tech="vite">
              <div className="tech-icon-wrapper"><Zap size={20} /></div>
              <span className="tech-name">Vite bundler</span>
            </div>
            <div className="tech-icon-box" data-tech="css">
              <div className="tech-icon-wrapper"><Grid size={20} /></div>
              <span className="tech-name">CSS Grid / Flex</span>
            </div>
            <div className="tech-icon-box" data-tech="figma">
              <div className="tech-icon-wrapper"><Globe size={20} /></div>
              <span className="tech-name">Figma Design</span>
            </div>
            <div className="tech-icon-box" data-tech="api">
              <div className="tech-icon-wrapper"><Code size={20} /></div>
              <span className="tech-name">Rest APIs</span>
            </div>
          </div>
        </BentoCard>
      </section>

      {/* SECTION 3: SERTIFIKAT SAYA (Static Images - ubah hanya lewat kode) */}
      <section id="certs" className="certs-section">
        <div className="section-header">
          <h2 className="section-title-large">Sertifikasi </h2>
          <p className="section-subtitle-large">Kredensial dan sertifikat keahlian terverifikasi yang saya raih di industri teknologi.</p>
        </div>

        <div className="certs-grid-showcase">
          {certificatesData.map((cert) => (
            <BentoCard key={cert.id} className="cert-item-card">
              {/* Certificate Photo - Static, tidak bisa diubah dari web */}
              <div className="cert-photo-area" style={{ cursor: 'default', pointerEvents: 'none' }}>
                <img
                  src={cert.image}
                  alt={`Sertifikat ${cert.title}`}
                  className="cert-photo-img"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="cert-icon">
                    <Award size={20} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>{cert.date}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px', lineHeight: '1.3' }}>{cert.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-blue-bright)', fontWeight: '500' }}>{cert.issuer}</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '12px', marginTop: '12px' }}>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: '600' }}>Skills:</span> {cert.skills}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* SECTION 4: RIWAYAT PENDIDIKAN */}
      <section id="education" className="education-section">
        <div className="section-header">
          <h2 className="section-title-large">Riwayat Pendidikan</h2>
          <p className="section-subtitle-large">Latar belakang pendidikan formal yang membentuk pemahaman akademis saya.</p>
        </div>

        <BentoCard className="about-card-timeline" style={{ width: '100%' }}>
          <div className="card-title">
            <BookOpen style={{ color: 'var(--accent-blue-bright)' }} />
            Riwayat Pendidikan
          </div>
          <div className="timeline-container">
            
            <div className="timeline-step">
              <div className="timeline-dot-active"></div>
              <div className="timeline-content">
                <span className="timeline-date">2024 - sekarang</span>
                <h4>SMK Wikrama Kota Bogor</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-blue-bright)', fontWeight: '600', marginBottom: '4px' }}>Pengembangan Perangkat Lunak dan Gim</p>
                <p>Memiliki keterampilan dalam pengembangan perangkat lunak dan gim, serta memahami prinsip-prinsip desain antarmuka yang menarik.</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2024</span>
                <h4>SMP Mardi Yuana Kota Bogor</h4>
                <p>awal saya menyukai bidang teknologi informasi dan pemrograman.</p>
              </div>
            </div>

          </div>
        </BentoCard>
      </section>

      {/* SECTION 5: PROJEK YANG PERNAH SAYA KERJAKAN */}
      <section id="projects" className="works-section">
        <div className="section-header">
          <h2 className="section-title-large">Projek yang Pernah Dikerjakan</h2>
          <p className="section-subtitle-large">Daftar sistem web inovatif, pustaka antarmuka, dan aplikasi interaktif yang saya rancang.</p>
          
          {/* Filter controls */}
          <div className="filter-container" style={{ justifyContent: 'flex-start' }}>
            {['All', 'Web ', 'UI/UX Design', 'React'].map((cat) => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="works-grid">
          {filteredProjects.map((project) => (
            <BentoCard 
              key={project.id} 
              className={`work-card ${project.featured ? 'featured-project' : ''}`}
              style={project.featured ? { borderTop: '2px solid var(--accent-blue-bright)', padding: '0', overflow: 'hidden' } : { padding: '0', overflow: 'hidden' }}
            >
              {/* Project Screenshot */}
              {project.image && (
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  borderRadius: '24px 24px 0 0',
                  flexShrink: 0,
                  background: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                      padding: '0',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              )}

              <div style={{ padding: '24px' }}>
                <div className="work-card-header">
                  <span className="work-category">{project.category}</span>
                </div>
                
                <div className="work-card-body">
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '10px' }}>{project.title}</h3>
                  <p style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-badge" style={{ background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* SECTION 6: KONTAK SAYA (With Interactive Send Message Form) */}
      <section id="contact" className="contact-section">
        <BentoCard className="card-contact">
          <div className="contact-left">
            <div className="contact-header">
              <h2>Let's build something epic!</h2>
              <p>Hubungi saya secara instan untuk kolaborasi, konsultasi proyek, atau peluang kerja.</p>
            </div>
            <div className="contact-links" style={{ marginTop: '12px' }}>
              <a href="mailto:faisalrahmat76@google.com" className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={16} />
                </div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>faisalrahmat76@google.com</p>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-wrapper">
                  <LinkedinIcon />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn Profile</h4>
                  <p>linkedin/in/faisal</p>
                </div>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-wrapper">
                  <GithubIcon />
                </div>
                <div className="contact-details">
                  <h4>GitHub Repository</h4>
                  <p>github.com/faisal</p>
                </div>
              </a>
              <a href="#ping" className="contact-item" onClick={(e) => { e.preventDefault(); alert("System operational! Signal strong."); }}>
                <div className="contact-icon-wrapper">
                  <Send size={16} />
                </div>
                <div className="contact-details">
                  <h4>Developer Status</h4>
                  <p>Signal active & hiring</p>
                </div>
              </a>
            </div>
          </div>

          {/* Premium Form matching the screenshot precisely */}
          <div className="contact-right-form">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>Kirim pesan</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Balasan dikirim ke email yang Anda cantumkan.</p>
              </div>

              {formSubmitted ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', padding: '28px 24px', borderRadius: '12px', textAlign: 'center', color: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', margin: '10px 0' }}>
                  <CheckCircle size={36} style={{ color: 'var(--accent-green)' }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Pesan Berhasil Terkirim!</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Terima kasih telah menghubungi saya. Balasan akan dikirim secepatnya.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-group-premium">
                    <label className="form-label-premium">NAMA</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda" 
                      required
                      className="form-input-premium"
                    />
                  </div>

                  <div className="form-group-premium">
                    <label className="form-label-premium">EMAIL</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com" 
                      required
                      className="form-input-premium"
                    />
                  </div>

                  <div className="form-group-premium">
                    <label className="form-label-premium">PESAN</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan proyek, pertanyaan, atau ide kolaborasi..." 
                      required
                      rows={3}
                      className="form-input-premium"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="form-submit-btn-premium"
                  >
                    {submitting ? 'Mengirim...' : 'Kirim pesan'}
                  </button>
                </>
              )}
            </form>
          </div>
        </BentoCard>
      </section>

    </main>
  );
}

export default Home;
