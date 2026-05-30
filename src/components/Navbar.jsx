import { useEffect, useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'certs', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset for nav header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header className="portfolio-header" style={{ position: 'sticky', top: '16px', zIndex: 1000 }}>
      <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="logo-container">
        <div className="logo-dot"></div>
        <span className="logo-text">Faisal</span>
      </a>
      <nav className="nav-links">
        <a 
          href="#about" 
          onClick={(e) => handleScrollTo(e, 'about')}
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
        >
          Tentang
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleScrollTo(e, 'skills')}
          className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
        >
          Keahlian
        </a>
        <a 
          href="#certs" 
          onClick={(e) => handleScrollTo(e, 'certs')}
          className={`nav-item ${activeSection === 'certs' ? 'active' : ''}`}
        >
          Sertifikat
        </a>
        <a 
          href="#education" 
          onClick={(e) => handleScrollTo(e, 'education')}
          className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
        >
          Pendidikan
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleScrollTo(e, 'projects')}
          className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
        >
          Projek
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScrollTo(e, 'contact')}
          className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Kontak
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
