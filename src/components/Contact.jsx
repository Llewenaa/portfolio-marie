import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const innerCardStyle = {
    padding: '30px',
    borderRadius: '28px',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    backgroundColor: '#ffffff', 
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(99, 81, 71, 0.02)',
    transition: '0.3s',
    textAlign: 'left'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#7BA6C6',
    marginBottom: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontFamily: "'Lora', sans-serif"
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    outline: 'none',
    backgroundColor: '#fcfcfc',
    color: '#635147',
    fontFamily: "'Lora', sans-serif",
    fontSize: '0.95rem',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box'
  };

  return (
    <section id="contact" className="py-20 bg-white flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center text-center mb-20 px-4"
      >
        <h1 style={{ 
          color: '#635147', 
          marginBottom: '30px', 
          fontSize: '2.8rem', 
          fontFamily: "'Playfair Display', sans-serif", 
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Contactez-moi
        </h1>
      
        <p style={{ 
            fontFamily: "'Lora', sans-serif", 
            fontStyle: 'italic',
            color: '#64748b',
            lineHeight: '1.8',
            maxWidth: '550px',
            fontSize: '1.15rem',
            textAlign: 'center', 
            margin: '0 auto'   
          }}
        >
          Votre projet mérite une approche douce et personnalisée
        </p>
      </motion.div>

      {/*Card principale */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[90%] max-w-[650px] bg-[#FDF2F0] p-8 md:p-12 rounded-[50px] shadow-xl shadow-[#635147]/5 border border-[#7BA6C6]/5 mb-16"
      >
        <form id="contact-form" className="w-full">
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

     
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.button 
          form="contact-form"
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: '#635147' }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#7BA6C6',
            color: 'white',
            padding: '14px 50px', 
            borderRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem',
            letterSpacing: '1px',
            boxShadow: '0 8px 20px rgba(123, 166, 198, 0.2)',
            transition: 'all 0.3s ease',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Envoyer
        </motion.button>
      </div>
      
    </section>
  );
}