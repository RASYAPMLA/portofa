import React, { useState } from 'react';
import { ExternalLink, Code, Sparkles, Folder, Globe } from 'lucide-react';
import BentoCard from '../components/BentoCard';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "Zenith Commerce Platform",
    category: "Web ",
    description: "A high-performance modern e-commerce storefront with serverless APIs, instant product filtering, and a state-of-the-art payment gateway checkout.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Apple-Style Bento Builder",
    category: "UI/UX Design & Frontend",
    description: "An interactive, open-source library that helps developers arrange dashboard and portfolio components in responsive, Apple-inspired CSS grids easily.",
    tags: ["React", "CSS Grid", "Figma", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Funder Crowdfunding Portal",
    category: "Web ",
    description: "Decentralized donation and creator funding ecosystem featuring Web3 wallets integration, clean card lists, and automated email confirmation alerts.",
    tags: ["React", "Ethers.js", "TailwindCSS", "Solidity"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "VibeMusic Web Player",
    category: "Product Design",
    description: "Minimalist browser music application. Houses custom media controller interfaces, dynamic blurred covers background generator, and playlist queue management.",
    tags: ["HTML5 Audio", "Javascript", "Vanilla CSS", "UX Design"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  }
];

function Works() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter) || p.tags.includes(filter));

  return (
    <div className="works-page">
      <div className="works-intro">
        <span className="works-tag">
          <Folder size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
          Showcase
        </span>
        <h1 className="works-title">Selected Works</h1>
        <p className="works-subtitle">A collection of systems I have built, designed, and optimized.</p>
        
        {/* Filter controls */}
        <div className="filter-container">
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
            style={project.featured ? { borderTop: '2px solid var(--accent-blue-bright)' } : {}}
          >
            <div className="work-card-header">
              <span className="work-category">{project.category}</span>
              {project.featured && (
                <span className="featured-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                  <Sparkles size={10} style={{ color: 'var(--accent-blue-bright)' }} />
                  <span style={{ color: '#FFFFFF' }}>Featured</span>
                </span>
              )}
            </div>
            
            <div className="work-card-body">
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge" style={{ background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)' }}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="work-card-footer" style={{ display: 'flex', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px' }}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--accent-blue-bright)', fontWeight: '600' }}>
                <Globe size={16} />
                <span>Live Demo</span>
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link" style={{ color: 'var(--text-secondary)' }}>
                <GithubIcon />
                <span>Source Code</span>
              </a>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
}

export default Works;
