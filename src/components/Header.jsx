import React from 'react'; 
import logoImg from '../assets/logo.png'; 
import { Home, User, Palette, Send } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
  width: '100vw',      
  height: '80px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'fixed',  
  top: 0,
  left: 0,
  zIndex: 10000,       
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  pointerEvents: 'auto' 
}}>
      
      
      <img 
        src={logoImg} 
        alt="logo" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          height: '50px', 
          width: 'auto', 
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />

      
      <nav style={{ 
        display: 'flex', 
        gap: '25px', 
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)' 
      }}>
        <a href="#accueil" title="Accueil" style={linkStyle}><Home size={24} color="#475569" /></a>
        <a href="#profil" title="Profil" style={linkStyle}><User size={24} color="#475569" /></a>
        <a href="#projets" title="Projets" style={linkStyle}><Palette size={24} color="#475569" /></a>
        <a 
          href="#contact" 
          title="Contact" 
          style={contactCircleStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#7BA6C6';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#EBA8D5';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Send size={20} color="white" />
        </a>
      </nav>

      {/* Le vide à droite de contact pour laisser de la place après l'icone contact (à droite)*/}
      <div style={{ width: '50px' }}></div> 
      
    </header>
  );
} 

const linkStyle = { 
  display: 'flex', 
  alignItems: 'center', 
  textDecoration: 'none',
  padding: '10px',
  transition: 'transform 0.2s',
  borderRadius: '50%'
};

const contactCircleStyle = {
  backgroundColor: '#EBA8D5',
  width: '45px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '2px solid #7BA6C6',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};