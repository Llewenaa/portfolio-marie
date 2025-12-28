import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';  

export default function Footer() {
  return (
    <footer 
      style={{ 
        width: '100%',
        borderTop: '1px solid #f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
    
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '35px', // Espace entre le logo et chaque icône
        marginBottom: '10px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       
        <img 
          src={logo} 
          alt="logo marie" 
          style={{ height: '60px', width: '60px', opacity: 0.9 }} 
        />

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ width: '35px', height: '35px', color: '#7BA6C6' }} />
        </a>
        
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ width: '35px', height: '35px', color: '#7BA6C6' }} />
        </a>
        
        <a href="mailto:ton-email@exemple.com">
          <FaEnvelope style={{ width: '35px', height: '35px', color: '#7BA6C6' }} />
        </a>
      </div>

     
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'black', fontSize: '14px', fontStyle: 'italic', fontFamily: 'sans-sérif' }}>
          © {new Date().getFullYear()} — Marie Portfolio — Images par IA
        </p>
      </div>
    </footer>
  );
}