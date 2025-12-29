import React from 'react';
import { motion } from 'framer-motion';
import marie_teteImg from '../assets/marie_tete.png'; 
import cv from '../assets/cv.png';

export default function ProfilEtCompetences() {
  return (
    <div className="w-full py-20" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. RAPPEL DES BULLES DU HERO (Arrière-plan) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Bulle Rose - Flotte à gauche */}
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', top: '10%', left: '5%', 
            width: '300px', height: '300px', 
            backgroundColor: 'rgba(235, 168, 213, 0.4)', 
            borderRadius: '50%', filter: 'blur(80px)' 
          }} 
        />
        {/* Bulle Bleue - Flotte à droite */}
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', bottom: '10%', right: '5%', 
            width: '350px', height: '350px', 
            backgroundColor: 'rgba(123, 166, 198, 0.4)', 
            borderRadius: '50%', filter: 'blur(90px)' 
          }} 
        />
      </div>

      <section id="profil" className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 2. LA CARD GLASSMORPHISM ANIMÉE */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.35)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '60px 40px', 
              borderRadius: '60px',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 25px 50px -12px rgba(123, 166, 198, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', 
              textAlign: 'center'    
            }}
          >
            
            {/* Photo de profil avec lévitation douce */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                width: '150px', 
                height: '150px',
                marginBottom: '30px',
                borderRadius: '50%', 
                overflow: 'hidden',
                border: '5px solid white',
                boxShadow: '0 15px 30px rgba(123, 166, 198, 0.3)',
                backgroundColor: '#7BA6C6'
              }}
            >
              <img 
                src={marie_teteImg} 
                alt="Marie Portrait" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
              
            <div style={{ width: '100%', maxWidth: '700px' }}>
              <h3 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 'bold', 
                color: '#6a1b50', 
                fontSize: '2rem',
                marginBottom: '20px'
              }}>
                Marie, développeuse web passionnée par l'empathie numérique
              </h3>

              <div style={{ 
                width: '50px', height: '3px', 
                backgroundColor: '#EBA8D5', 
                margin: '0 auto 30px auto', 
                borderRadius: '10px' 
              }} />

              <p style={{ 
                fontFamily: "'Lora', serif", 
                color: '#334155',
                lineHeight: '1.9',
                marginBottom: '40px',
                fontSize: '1.15rem',
                fontStyle: 'italic'
              }}>
                "Issue du secteur social, j'ai développé une capacité d'écoute unique. 
                Aujourd'hui, je transpose cette empathie dans le monde numérique pour créer 
                des interfaces qui ne sont pas seulement belles, mais qui comprennent vraiment 
                l'utilisateur."
              </p>

              <motion.a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#42A5F5',
                  boxShadow: '0 10px 25px rgba(66, 165, 245, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  display: 'inline-block',
                  padding: '16px 45px', 
                  borderRadius: '50px', 
                  backgroundColor: '#7BA6C6', 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  boxShadow: '0 10px 20px rgba(123, 166, 198, 0.2)',
                  transition: 'all 0.3s ease'
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