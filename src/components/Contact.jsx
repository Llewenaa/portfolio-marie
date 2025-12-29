import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // Pour afficher un message de succès/erreur

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs.sendForm(
      'service_x99cwwg',   
      'template_j684szk',  
      form.current,
      'gRaSdA1Dflm3ClB4d'     
    )
    .then((result) => {
    setStatus("Votre message a bien pris son envol. Je reviens vers vous très vite. 🌸");
    form.current.reset();
}, (error) => {
    setStatus("Une petite bulle a éclaté... Merci de réessayer plus tard.");
});
  };

  const innerCardStyle = {
    padding: '25px',
    borderRadius: '28px',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(123, 166, 198, 0.05)',
    textAlign: 'left'
  };

  const labelStyle = {
    display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#6a1b50', 
    marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Lora', sans-serif"
  };

  const inputStyle = {
    width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1px solid rgba(123, 166, 198, 0.2)',
    outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#334155',
    fontFamily: "'Lora', sans-serif", fontSize: '0.95rem', transition: 'all 0.3s ease', boxSizing: 'border-box'
  };

  return (
    <section id="contact" style={{ padding: '100px 20px', position: 'relative', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ color: '#6a1b50', fontSize: '3rem', fontFamily: "'Playfair Display', sans-serif", fontWeight: 'bold', marginBottom: '50px', textAlign: 'center' }}>
        Contactez-moi
      </motion.h2>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ width: '90%', maxWidth: '650px', background: 'linear-gradient(135deg, rgba(235, 168, 213, 0.3) 0%, rgba(123, 166, 198, 0.3) 100%)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', padding: '50px', borderRadius: '60px', borderTop: '2px solid rgba(255, 255, 255, 0.8)', borderLeft: '2px solid rgba(255, 255, 255, 0.8)', boxShadow: '0 30px 60px rgba(123, 166, 198, 0.2)', zIndex: 10, marginBottom: '40px' }}>
        
        <p style={{ fontFamily: "'Lora', sans-serif", fontStyle: 'italic', color: '#6a1b50', lineHeight: '1.6', fontSize: '1.5rem', textAlign: 'center', marginBottom: '40px', padding: '15px' }}>
          "Votre projet mérite une approche douce et personnalisée"
        </p>

        {/* AJOUT DE LA REF ET DU ONSUBMIT ICI */}
        <form ref={form} onSubmit={sendEmail} id="contact-form" style={{ width: '100%' }}>
          <div style={innerCardStyle}>
            <label style={labelStyle}>Nom complet</label>
            {/* IMPORTANT: AJOUT DE L'ATTRIBUT 'name' pour EmailJS */}
            <input type="text" name="from_name" placeholder="Iris Durant" style={inputStyle} required />
          </div>

          <div style={innerCardStyle}>
            <label style={labelStyle}>Adresse E-mail</label>
            <input type="email" name="reply_to" placeholder="marie@exemple.com" style={inputStyle} required />
          </div>

          <div style={innerCardStyle}>
            <label style={labelStyle}>Votre Message</label>
            <textarea name="message" rows="4" placeholder="Comment puis-je vous aider ?" style={{...inputStyle, resize: 'none'}} required></textarea>
          </div>
        </form>

        {/* AFFICHAGE DU STATUT */}
        {status && <p style={{ color: '#6a1b50', marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
      </motion.div>

      <motion.button 
        type="submit" 
        form="contact-form"
        whileHover={{ scale: 1.05, backgroundColor: '#6a1b50' }} 
        whileTap={{ scale: 0.95 }}
        style={{ backgroundColor: '#7BA6C6', color: 'white', padding: '16px 60px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', boxShadow: '0 8px 20px rgba(123, 166, 198, 0.2)', transition: 'all 0.3s ease', zIndex: 10 }}>
        Envoyer
      </motion.button>
      
    </section>
  );
}