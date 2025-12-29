import React from 'react';
import { motion } from 'framer-motion';
import marie_teteImg from '../assets/marie_tete.png'; 
import cv from '../assets/cv.png';

export default function ProfilEtCompetences() {
  return (
    <div className="w-full py-20" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. ARRIÈRE-PLAN DYNAMIQUE */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ 
            position: 'absolute', top: '10%', left: '5%', 
            width: '300px', height: '300px', 
            backgroundColor: 'rgba(235, 168, 213, 0.4)', 
            borderRadius: '50%', filter: 'blur(80px)' 
          }} 
        />
      </div>

      <section id="profil" className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 2. LA CARD EFFET BOMBER */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.4)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '60px 40px', 
              borderRadius: '60px',
              borderTop: '2px solid rgba(255, 255, 255, 0.8)',
              borderLeft: '2px solid rgba(255, 255, 255, 0.8)',
              borderBottom: '2px solid rgba(123, 166, 198, 0.3)',
              borderRight: '2px solid rgba(123, 166, 198, 0.3)',
              boxShadow: `
                0 30px 60px -12px rgba(123, 166, 198, 0.3), 
                inset 10px 10px 20px rgba(255, 255, 255, 0.5)
              `,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', 
              textAlign: 'center'    
            }}
          >
            
            {/* 3. PHOTO FIXE AVEC HALO "RESPIRANT" */}
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              {/* Le halo qui respire derrière l'image */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  position: 'absolute',
                  inset: -15, // Dépasse de l'image
                  backgroundColor: '#EBA8D5',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />

              <div style={{ 
                width: '160px', 
                height: '160px',
                borderRadius: '50%', 
                overflow: 'hidden',
                border: '4px solid #EBA8D5',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: 2,
                backgroundColor: '#7BA6C6'
              }}>
                <img 
                  src={marie_teteImg} 
                  alt="Marie Portrait" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
              
            {/* CONTENU TEXTUELLE */}
            <div style={{ width: '100%', maxWidth: '700px' }}>
              <h3 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 'bold', 
                color: '#6a1b50', 
                fontSize: '2.2rem',
                marginBottom: '20px'
              }}>
                Marie
              </h3>

              <div style={{ 
                width: '40px', height: '4px', 
                backgroundColor: '#EBA8D5', 
                margin: '0 auto 30px auto', 
                borderRadius: '10px' 
              }} />

              <p style={{ 
                fontFamily: "'Lora', serif", 
                color: '#334155',
                lineHeight: '1.9',
                marginBottom: '40px',
                fontSize: '1.2rem',
                fontStyle: 'italic'
              }}>
                "Issue du secteur social, j'ai développé une capacité d'écoute unique. 
                Mon code est guidé par l'empathie."
              </p>

              <motion.a
                href={cv}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  display: 'inline-block',
                  padding: '16px 45px', 
                  borderRadius: '50px', 
                  backgroundColor: '#6a1b50', // Bordeaux pour le bouton
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  boxShadow: '0 10px 20px rgba(106, 27, 80, 0.2)'
                }}
              >
                VOIR MON CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}