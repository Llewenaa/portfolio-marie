import React from 'react'; 
import logoImg from '../assets/logo.png'; 
import { User, Palette, Send } from 'lucide-react';

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
      pointerEvents: 'auto',
      padding: '0 20px' 
    }}>
      
      {/* LOGO */}
      <img 
        src={logoImg} 
        alt="logo" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          height: '60px', 
          width: '60px', 
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          marginTop: '10px',
          marginRight: '5px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />

      {/* NAVIGATION (Accueil retiré) */}
      <nav style={{ 
        display: 'flex', 
        gap: '30px', 
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        marginLeft: '25px',
        

      }}>
        <a href="#profil" title="Profil" style={linkStyle}>
          <User size={24} color="#475569" />
        </a>
        <a href="#projets" title="Projets" style={linkStyle}>
          <Palette size={24} color="#475569" />
        </a>
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

      {/* Espaceur à droite pour maintenir le centrage du nav */}
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
  borderRadius: '50%',
  backgroundColor: '#EBA8D5',
  width: '45px',
  height: '45px',
  justifyContent: 'center',
  border: '2px solid #7BA6C6',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
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
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};