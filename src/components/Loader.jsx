import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = ["Sensibilité", "Structure", "Éclat","Authenticité"];

export default function Loader() {
  const [index, setIndex] = useState(0);

  // Gestion du défilement des mots
  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 700);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, overflow: 'hidden', backgroundColor: '#7BA6C6' }}>
      
      {/* Rideaux de sortie (Rose) */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ position: 'absolute', inset: 0, backgroundColor: '#EBA8D5', zIndex: 4 }}
      />

      {/* Rideau Gauche (Bleu) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 1, delay: 3, ease: [0.87, 0, 0.13, 1] }}
        style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#7BA6C6', zIndex: 2 }}
      />

      {/* Rideau Droite (Bleu) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 1, delay: 3, ease: [0.87, 0, 0.13, 1] }}
        style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#7BA6C6', zIndex: 2 }}
      />

      {/* Contenu Central */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Prénom Fixe */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ 
           fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: '3.5rem', 
            color: '#F2D2DE', letterSpacing: '12px', fontWeight: 'bold',
            textTransform: 'uppercase', marginBottom: '30px'
          }}
        >
          Marie
        </motion.h1>

        {/* Mots qui défilent en dessous */}
        <div style={{ height: '30px', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={messages[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ 
                fontFamily: "'Lora', sans-serif", fontStyle: 'italic',
                fontSize: '1.2rem', color: '#ffffff', margin: 0 
              }}
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Ligne de progression */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '150px' }}
          transition={{ duration: 3, ease: "linear" }}
          style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.5)', marginTop: '30px' }}
        />
      </div>
    </div>
  );
}