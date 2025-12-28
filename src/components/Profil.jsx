import React from 'react';
import { motion } from 'framer-motion';
import marie_teteImg from '../assets/marie_tete.png'; 
import cv from '../assets/cv.png';

export default function ProfilEtCompetences() {
  return (
    <div className="w-full py-10">
      
      {/* --- SECTION PROFIL --- */}
      <section id="profil" className="w-full mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ 
            backgroundColor: 'rgba(235, 168, 213, 0.15)', 
            padding: '50px 40px', // Plus d'espace vertical
            borderRadius: '50px',
            border: '1px solid rgba(123, 166, 198, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centre tout horizontalement
            textAlign: 'center'    // Centre tout le texte
          }}>
            
            {/* Image ronde centrée */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ 
                width: '120px', 
                height: '120px',
                marginBottom: '25px',
                borderRadius: '50%', 
                overflow: 'hidden',
                border: '4px solid white',
                boxShadow: '0 4px 15px rgba(123, 166, 198, 0.3)',
                backgroundColor: '#7BA6C6'
              }}
            >
              <img 
                src={marie_teteImg} 
                alt="Marie Portrait" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
              
            {/* Contenu Texte */}
            <div style={{ width: '100%', maxWidth: '700px' }}>
              <h3 
                className="text-2xl md:text-3xl mb-6"
                style={{ 
                  fontFamily: "'Playfair Display', sans-serif", 
                  fontWeight: 'bold', 
                  color: '#6a1b50', 
                  lineHeight: '1.2',
                  marginBottom: '30px',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
              >
                Marie, développeuse web passionnée par l'empathie numérique
              </h3>

              <p 
                className="text-lg italic" 
                style={{ 
                  fontFamily: "'Lora', sans-serif", 
                  color: '#334155',
                  lineHeight: '1.8',
                  opacity: '0.9',
                  marginBottom: '40px',
                  textAlign: 'justify',
                  fontStyle: 'italic'

                }}
              >
                "Issue du secteur social, j'ai développé une capacité d'écoute unique. 
                Aujourd'hui, je transpose cette empathie dans le monde numérique pour créer 
                des interfaces qui ne sont pas seulement belles, mais qui comprennent vraiment 
                l'utilisateur. Mon parcours me permet de placer l'humain au cœur de chaque pixel."
              </p>

              
              <motion.a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: '#6a1b50' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  display: 'inline-block',
                  padding: '12px 35px', 
                  borderRadius: '50px', 
                  backgroundColor: '#7BA6C6', 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(123, 166, 198, 0.4)',
                  transition: 'background-color 0.3s ease',
                  fontFamily: "'Lora', sans-serif"
                }}
              >
                VOIR MON CV
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}