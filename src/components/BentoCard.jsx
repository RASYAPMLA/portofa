import React from 'react';

function BentoCard({ children, className = '', style = {}, onClick }) {
  return (
    <section 
      className={`bento-card ${className}`} 
      style={style} 
      onClick={onClick}
    >
      {children}
    </section>
  );
}

export default BentoCard;
