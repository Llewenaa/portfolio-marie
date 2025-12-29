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
        background: 'radial-gradient(circle at center, #ffffff 0%, #f3f7fa 50%, #fcecf4 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', backgroundColor: '#EBA8D5', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2 }}
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '15%', right: '10%', width: '600px', height: '600px', backgroundColor: '#7BA6C6', borderRadius: '50%', filter: 'blur(130px)', opacity: 0.2 }}
        />
      </div>

      {/* Le Cercle avec l'effet Glassmorphism à l'intérieur */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.02 }}
        style={{ 
          position: 'relative',
          zIndex: 10,
          width: '560px', 
          height: '560px', 
          borderRadius: '50%', 
          
         
          backgroundColor: 'rgba(255, 255, 255, 0.3)', 
          backdropFilter: 'blur(12px)',              
          WebkitBackdropFilter: 'blur(12px)',         
          
          /* Bordure rose très fine et subtile */
          border: '3px solid rgba(235, 168, 213, 1)', 
          
          /* Ombre portée légère pour le relief */
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.05)',
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px'
        }}
      >
        <h1 style={{ 
          fontSize: '5.5rem', 
          fontWeight: 'bold', 
          color: '#6a1b50', // Ton bordeaux
          margin: 0, 
          fontFamily: "'Playfair Display', serif" 
        }}>
          Marie
        </h1>

        <h2 style={{ 
          fontSize: '1.1rem', 
          color: '#7BA6C6', // Ton bleu
          fontWeight: '600', 
          letterSpacing: '0.4em', 
          textTransform: 'uppercase', 
          marginTop: '25px'
        }}>
          Bienvenue sur mon portfolio
        </h2>

       
        <div style={{ 
          width: '45px', 
          height: '2px', 
          backgroundColor: '#EBA8D5', 
          margin: '35px auto',
          borderRadius: '10px'
        }}></div>

        <p style={{ 
          fontSize: '1.25rem', 
          color: '#475569', 
          fontStyle: 'italic', 
          lineHeight: '1.8', 
          maxWidth: '380px', 
          margin: 0, 
          fontFamily: "'Lora', serif" 
        }}>
          "L'empathie du social au service du développement web."
        </p>
      </motion.div>
    </section>
  );
}