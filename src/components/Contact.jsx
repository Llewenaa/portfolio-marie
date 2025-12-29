import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const innerCardStyle = {
    padding: '25px',
    borderRadius: '28px',
    /* Effet Glass subtil pour les champs internes */
    border: '1px solid rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(123, 166, 198, 0.05)',
    textAlign: 'left'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#6a1b50', // Ton bordeaux
    marginBottom: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: "'Lora', sans-serif"
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '12px',
    border: '1px solid rgba(123, 166, 198, 0.2)',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#334155',
    fontFamily: "'Lora', sans-serif",
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  return (
    <section id="contact" style={{ 
      padding: '100px 20px', 
      position: 'relative', 
      overflow: 'hidden',
      backgroundColor: 'transparent', // On laisse voir le fond du body
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      {/* 1. TITRE ET INTRODUCTION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px', zIndex: 10 }}
      >
        <h2 style={{ 
          color: '#6a1b50', 
          fontSize: '3rem', 
          fontFamily: "'Playfair Display', serif", 
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          Contactez-moi
        </h2>
      
        <p style={{ 
            fontFamily: "'Lora', serif", 
            fontStyle: 'italic',
            color: '#475569',
            lineHeight: '1.8',
            maxWidth: '550px',
            fontSize: '1.15rem',
            margin: '0 auto',
            /* Effet Glass sur le petit texte */
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(5px)',
            padding: '15px 30px',
            borderRadius: '50px',
            border: '1px solid rgba(235, 168, 213, 0.4)',
            boxShadow: '0 10px 30px rgba(123, 166, 198, 0.1)'
          }}
        >
          Votre projet mérite une approche douce et personnalisée
        </p>
      </motion.div>

      {/* 2. CARD PRINCIPALE GLASS-BOMBER */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          width: '90%', 
          maxWidth: '650px', 
          /* Fond mélangé Rose/Bleu comme tes projets */
          background: 'linear-gradient(135deg, rgba(235, 168, 213, 0.3) 0%, rgba(123, 166, 198, 0.3) 100%)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          padding: '50px', 
          borderRadius: '60px',
          /* Effet Bomber */
          borderTop: '2px solid rgba(255, 255, 255, 0.8)',
          borderLeft: '2px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 30px 60px rgba(123, 166, 198, 0.2)',
          zIndex: 10,
          marginBottom: '40px'
        }}
      >
        <form id="contact-form" style={{ width: '100%' }}>
          <div style={innerCardStyle}>
            <label style={labelStyle}>Nom complet</label>
            <input type="text" placeholder="Marie Durant" style={inputStyle} />
          </div>

          <div style={innerCardStyle}>
            <label style={labelStyle}>Adresse E-mail</label>
            <input type="email" placeholder="marie@exemple.com" style={inputStyle} />
          </div>

          <div style={innerCardStyle}>
            <label style={labelStyle}>Votre Message</label>
            <textarea 
              rows="4" 
              placeholder="Comment puis-je vous aider ?" 
              style={{...inputStyle, resize: 'none'}}
            ></textarea>
          </div>
        </form>
      </motion.div>

      {/* 3. BOUTON ENVOYER */}
      <motion.button 
        form="contact-form"
        type="submit"
        whileHover={{ scale: 1.05, backgroundColor: '#6a1b50', boxShadow: '0 10px 25px rgba(106, 27, 80, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: '#7BA6C6',
          color: 'white',
          padding: '16px 60px', 
          borderRadius: '50px',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          boxShadow: '0 8px 20px rgba(123, 166, 198, 0.2)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
      >
        Envoyer
      </motion.button>
      
    </section>
  );
}