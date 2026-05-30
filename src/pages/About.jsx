import React from 'react';
import { Award, Briefcase, Code, BookOpen, Star, Cpu, ChevronRight, Calendar } from 'lucide-react';
import BentoCard from '../components/BentoCard';
import cert1 from '../assets/cert_1.png';
import cert2 from '../assets/cert_2.png';
import cert3 from '../assets/cert_3.png';
import cert4 from '../assets/cert_4.png';
import cert5 from '../assets/cert_5.png';

function About() {
  return (
    <div className="about-page">
      <div className="about-intro">
        <span className="about-tag">
          <BookOpen size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
          Biography
        </span>
        <h1 className="about-title">My Coding Journey</h1>
        <p className="about-subtitle">Frontend engineer, UX enthusiast, and digital designer based in Jakarta.</p>
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '28px', marginBottom: '40px' }}>
        {/* Profile Details */}
        <BentoCard className="about-card-profile" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="profile-top">
            <div className="profile-large-avatar" style={{ background: 'var(--grad-primary)' }}>F</div>
            <div className="profile-meta">
              <h2>Faisal Rahmat</h2>
              <p>Frontend Developer & Interface Designer</p>
            </div>
          </div>
          <p className="profile-paragraph" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            I am a software engineer with a deep appreciation for interface engineering and digital design systems. Inspired by physical industrial design principles, I build web solutions where user satisfaction is defined by smooth micro-animations, clear structural lines, and functional minimalism.
          </p>
          <p className="profile-paragraph" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            My approach blends advanced coding paradigms with clean user experience architectures, ensuring that applications are not only visually stunning but also highly performant and accessible across all devices.
          </p>
        </BentoCard>

        {/* Philosophy & Credentials Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Philosophy Card */}
          <BentoCard className="about-card-philosophy">
            <div className="card-title">
              <Star size={14} style={{ color: 'var(--accent-blue-bright)' }} />
              Core Philosophy
            </div>
            <div className="philosophy-items">
              <div className="philosophy-item">
                <h4 style={{ fontWeight: '700', color: '#FFFFFF', fontSize: '0.95rem' }}>Apple-Inspired Minimalism</h4>
                <p>Prioritizing negative space, elegant drop shadows, translucent glass features, and harmonious gradients.</p>
              </div>
              <div className="philosophy-item">
                <h4 style={{ fontWeight: '700', color: '#FFFFFF', fontSize: '0.95rem' }}>Performant Engineering</h4>
                <p>Optimizing page structures, state operations, and rendering triggers to hit perfect web vital scores.</p>
              </div>
            </div>
          </BentoCard>

          {/* Credentials Card (Moved from Home Page Bento) */}
          <BentoCard className="card-certs">
            <div>
              <div className="card-title">
                <Award size={14} />
                Credentials
              </div>
              <div className="certs-container">
                <div className="certs-stack">
                  <div className="cert-card">
                    <div className="cert-icon">
                      <Award />
                    </div>
                    <div className="cert-info">
                      <h4>Google UX Cert</h4>
                      <p>Product Design</p>
                    </div>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon">
                      <Code />
                    </div>
                    <div className="cert-info">
                      <h4>React Advanced</h4>
                      <p>Meta Systems</p>
                    </div>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon">
                      <Cpu />
                    </div>
                    <div className="cert-info">
                      <h4>W3C Frontend</h4>
                      <p>HTML & CSS Core</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '12px' }}>
              <span>Verified Registry</span>
              <ChevronRight size={14} />
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Certifications Gallery Section */}
      <div style={{ marginTop: '48px' }}>
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-tag">
            <Award size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            Certifications
          </span>
          <h2 className="section-title-large" style={{ fontSize: '2rem' }}>Professional Credentials</h2>
          <p className="section-subtitle-large">Verified certificates from recognized institutions and programs.</p>
        </div>

        <div className="certs-grid-showcase">
          {/* Certificate 1 */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img src={cert1} alt="Sertifikat Nasional DPMI" className="cert-photo-img" style={{ objectFit: 'contain', padding: '8px', background: '#fff' }} />
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Sertifikat Nasional DPMI</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Duta Pembicara Muda Indonesia</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>2026</span>
              </div>
            </div>
          </BentoCard>

          {/* Certificate 2 */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img src={cert2} alt="Patriot Pelajar Mahasiswa" className="cert-photo-img" style={{ objectFit: 'contain', padding: '8px', background: '#fff' }} />
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Patriot Pelajar Mahasiswa</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Forum OSIS Merah Putih</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>Des 2025</span>
              </div>
            </div>
          </BentoCard>

          {/* Certificate 3 */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img src={cert3} alt="Belajar Dasar Pemrograman Web" className="cert-photo-img" style={{ objectFit: 'contain', padding: '8px', background: '#fff' }} />
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Belajar Dasar Pemrograman Web</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Dicoding Indonesia</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>Nov 2024</span>
              </div>
            </div>
          </BentoCard>

          {/* Certificate 4 - Sertifikat Webinar */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img src={cert4} alt="Sertifikat Webinar" className="cert-photo-img" style={{ objectFit: 'contain', padding: '8px', background: '#fff' }} />
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Sertifikat Webinar</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>DicodingEvent</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>Okt 2024</span>
              </div>
            </div>
          </BentoCard>

          {/* Certificate 5 - Sertifikat Webinar Dicoding */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img src={cert5} alt="Sertifikat Webinar Dicoding" className="cert-photo-img" style={{ objectFit: 'contain', padding: '8px', background: '#fff' }} />
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Sertifikat Webinar</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Dicoding Indonesia</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>Jan 2025</span>
              </div>
            </div>
          </BentoCard>

          {/* Certificate 6 - Panitia Duta Inisiatif (GAMBAR BARU) */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f5f3ef 0%, #e8e4dc 100%)',
                padding: '8px'
              }}>
                <div style={{ 
                  textAlign: 'center',
                  color: '#8B7355',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  <div style={{ marginBottom: '8px', fontSize: '1.2rem' }}>🏆</div>
                  <div>SERTIFIKAT</div>
                  <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>Leuweung Hub Foundation</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', margin: '12px 0', color: '#6B5744' }}>Faisal Rahmat</div>
                  <div style={{ fontSize: '0.7rem' }}>Panitia</div>
                  <div style={{ fontSize: '0.65rem', marginTop: '8px', lineHeight: '1.4' }}>
                    Open Recruitment Duta Inisiatif<br/>
                    Indonesia Batch 15<br/>
                    "Bergerak Berdampak, We Are Going Green"
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Panitia Duta Inisiatif Indonesia</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Leuweung Hub Foundation - Batch 15</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>2026</span>
              </div>
            </div>
          </BentoCard>

          {/* Certificate 7 - Upgrading OSIS (GAMBAR BARU) */}
          <BentoCard className="cert-item-card">
            <div className="cert-photo-area" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                padding: '8px',
                position: 'relative'
              }}>
                <div style={{ 
                  textAlign: 'center',
                  color: '#FFD700',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  <div style={{ marginBottom: '8px', fontSize: '1rem', color: '#FFFFFF' }}>ISFO</div>
                  <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>SERTIFIKAT</div>
                  <div style={{ fontSize: '0.7rem', color: '#CCCCCC', marginBottom: '8px' }}>NOMOR: 008/EDU/I/2026</div>
                  <div style={{ fontSize: '0.75rem', color: '#FFFFFF', marginBottom: '8px' }}>Diberikan kepada:</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', margin: '8px 0', color: '#FFFFFF' }}>Faisal Rahmat</div>
                  <div style={{ fontSize: '0.65rem', marginTop: '8px', lineHeight: '1.4', color: '#CCCCCC' }}>
                    Sharing Session<br/>
                    "Upgrading OSIS Nasional 2026"<br/>
                    4 Januari 2026
                  </div>
                  <div style={{ fontSize: '0.6rem', marginTop: '8px', color: '#888888' }}>
                    IBNU SINA FOUNDATION
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>Upgrading OSIS Nasional 2026</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Ibnu Sina Foundation (ISFO)</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-blue-bright)' }}>
                <Calendar size={12} />
                <span>5 Januari 2026</span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Coding Timeline / Milestones */}
      <BentoCard className="about-card-timeline" style={{ marginTop: '48px' }}>
        <div className="card-title">
          <Briefcase style={{ color: 'var(--accent-blue-bright)' }} />
          Journey Timeline
        </div>
        <div className="timeline-container">
          
          <div className="timeline-step">
            <div className="timeline-dot-active"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024 — Present</span>
              <h4>Senior UI / Frontend Developer</h4>
              <p>Lead engineer for styling systems, UI templates, and component design patterns at local agency projects. Optimized load-times by 40% and pioneered custom dashboard layouts.</p>
            </div>
          </div>
          
          <div className="timeline-step">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2022 — 2024</span>
              <h4>Freelance Web Developer</h4>
              <p>Constructed customized portfolios, landing pages, and interactive WebGL canvas landing grids for global clients. Focused heavily on vanilla animations, styling accuracy, and responsive builds.</p>
            </div>
          </div>
          
          <div className="timeline-step">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2021</span>
              <h4>First Lines of Code</h4>
              <p>Learnt core foundations of CSS layout engines, responsive media design, modular layouts, and vanilla Javascript scripting.</p>
            </div>
          </div>

        </div>
      </BentoCard>
    </div>
  );
}

export default About;
