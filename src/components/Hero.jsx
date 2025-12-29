import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="accueil" 
      style={{ 
        width: '100%', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 1. Fonds flous en arrière-plan */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '15%', left: '15%', width: '450px', height: '450px', backgroundColor: '#EBA8D5', borderRadius: '50%', filter: 'blur(110px)', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '550px', height: '550px', backgroundColor: '#7BA6C6', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.5 }}></div>
      </div>

      {/* 2. Le Cercle Glassmorphism */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'relative',
          zIndex: 10,
          width: '520px', 
          height: '520px', 
          borderRadius: '50%', 
          backgroundColor: 'rgba(255, 255, 255, 0.25)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgb(235, 168, 213)',
          boxShadow: '0 20px 40px rgba(123, 166, 198, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px',
          boxSizing: 'border-box'
        }}
      >
        <h1 style={{ 
          fontSize: '4.8rem', 
          fontWeight: 'bold', 
          color: '#6a1b50', 
          margin: 0,
          fontFamily: "'Playfair Display', serif"
        }}>
          Marie
        </h1>
        
        <h2 style={{ 
          fontSize: '1.1rem', 
          color: '#7BA6C6', 
          fontWeight: '600', 
          letterSpacing: '0.3em', 
          textTransform: 'uppercase', 
          marginTop: '15px'
        }}>
          Bienvenue sur mon portfolio
        </h2>

        <div style={{ 
          width: '40px', 
          height: '3px', 
          backgroundColor: '#EBA8D5', 
          margin: '25px auto', 
          borderRadius: '10px'
        }}></div>

        <p style={{ 
          fontSize: '1.2rem', 
          color: '#475569', 
          fontStyle: 'italic', 
          lineHeight: '1.7', 
          maxWidth: '340px', 
          margin: 0,
          fontFamily: "'Lora', serif"
        }}>
          "L'empathie du social au service du développement web."
        </p>
      </motion.div>
    </section>
  );
}