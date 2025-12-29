import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import des images
import img1 from '../assets/echo-dun-regard.png';
import img2 from '../assets/murmureDeOcean.png';
import img3 from '../assets/bien-etre-animalier.png';
import projet1 from '../assets/projet1.png';
import projet2 from '../assets/projet2.png';
import projet3 from '../assets/projet3.png';

const projetsData = [
  { id: 1, titre: "Écho d'un Regard", desc: "Santé mentale des adolescents", image: img1, imagePopup: projet1, details: "Ce site sert à comprendre son adolescent via les différents comportements qu’il peut avoir, se renseigner sur les structures effectives dans votre région.", mission: "Analyse des besoins, UI/UX Design, Illustration." },
  { id: 2, titre: "Murmure de l'Océan", desc: "Prévention marine", image: img2, imagePopup: projet2, details: "Campagne de sensibilisation dédiée à la protection des écosystèmes marins et de la biodiversité.", mission: "Identité visuelle, Communication." },
  { id: 3, titre: "Bien-être Animalier", desc: "Ostéopathie animalière", image: img3, imagePopup: projet3, details: "Conception d'un support de communication complet pour une praticienne en ostéopathie.", mission: "Mise en page, Photographie, Stratégie." }
];

export default function Projets() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);

  useEffect(() => {
    document.body.style.overflow = projetSelectionne ? 'hidden' : 'auto';
  }, [projetSelectionne]);

  return (
    <section id="projets" style={{ 
      padding: '100px 20px', 
      position: 'relative', 
      overflow: 'hidden',
      /* Suppression du fond blanc pour hériter du fond global du body */
      backgroundColor: 'transparent' 
    }}>
      
      {/* 1. RAPPEL DES AURAS (Même style que Profil) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', top: '20%', right: '5%', 
            width: '400px', height: '400px', 
            backgroundColor: 'rgba(235, 168, 213, 0.3)', 
            borderRadius: '50%', filter: 'blur(100px)' 
          }} 
        />
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', bottom: '10%', left: '5%', 
            width: '450px', height: '450px', 
            backgroundColor: 'rgba(123, 166, 198, 0.3)', 
            borderRadius: '50%', filter: 'blur(110px)' 
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
        <h2 style={{ 
          textAlign: 'center', color: '#6a1b50', marginBottom: '80px', 
          fontSize: '3rem', fontFamily: "'Playfair Display', serif", fontWeight: 'bold' 
        }}>
          Mes Projets
        </h2>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px', 
          margin: '0 auto'
        }}>
          {projetsData.map((projet) => (
            <motion.div 
              key={projet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                /* CARTES ROSE/BLEU BOMBER (Comme demandé) */
                background: 'linear-gradient(135deg, rgba(235, 168, 213, 0.4) 0%, rgba(123, 166, 198, 0.4) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '50px',
                padding: '35px', 
                borderTop: '2px solid rgba(255, 255, 255, 0.7)',
                borderLeft: '2px solid rgba(255, 255, 255, 0.7)',
                boxShadow: '0 20px 40px rgba(123, 166, 198, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              {/* Image avec cadre blanc fixe */}
              <div style={{ 
                width: '100%', aspectRatio: '1/1', borderRadius: '30px', 
                marginBottom: '25px', overflow: 'hidden', border: '5px solid white'
              }}>
                <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <h3 style={{ fontSize: '1.7rem', color: '#6a1b50', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>{projet.titre}</h3>
              <p style={{ color: '#334155', marginBottom: '30px', fontStyle: 'italic', flexGrow: 1 }}>{projet.desc}</p>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#6a1b50' }}
                onClick={() => setProjetSelectionne(projet)}
                style={{ 
                  padding: '14px 0', borderRadius: '50px', border: 'none',
                  backgroundColor: '#7BA6C6', color: '#ffffff', fontWeight: 'bold', cursor: 'pointer'
                }}
              >
                DÉCOUVRIR
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP (Modèle identique au profil mais pour les détails) */}
      <AnimatePresence>
        {projetSelectionne && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
              background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)',
              zIndex: 9999, overflowY: 'auto', padding: '40px 20px' 
            }}
          >
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <motion.div
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                style={{
                  backgroundColor: 'white', borderRadius: '50px', padding: '40px',
                  boxShadow: '0 40px 80px rgba(106, 27, 80, 0.1)', border: '1px solid rgba(235, 168, 213, 0.3)'
                }}
              >
                <button onClick={() => setProjetSelectionne(null)} style={{ float: 'right', border: 'none', background: '#6a1b50', color: 'white', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>✕</button>
                <h2 style={{ color: '#6a1b50', fontSize: '2.5rem', marginBottom: '30px', fontFamily: "'Playfair Display', serif" }}>{projetSelectionne.titre}</h2>
                <img src={projetSelectionne.imagePopup || projetSelectionne.image} style={{ width: '100%', borderRadius: '30px', marginBottom: '30px' }} />
                <div style={{ textAlign: 'left' }}>
                   <p style={{ color: '#EBA8D5', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Ma Mission</p>
                   <p style={{ fontSize: '1.2rem', color: '#7BA6C6', marginBottom: '20px' }}>{projetSelectionne.mission}</p>
                   <p style={{ color: '#475569', lineHeight: '1.8' }}>{projetSelectionne.details}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}