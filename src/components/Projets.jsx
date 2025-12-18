import React, { useState } from 'react';

// Import des images
import img1 from '../assets/echo-dun-regard.png';
import img2 from '../assets/murmureDeOcean.png';
import img3 from '../assets/bien-etre-animalier.png';
import projet1 from '../assets/projet1.png';
import projet2 from '../assets/projet2.png';
import projet3 from '../assets/projet3.png';

const projetsData = [
  { 
    id: 1, 
    titre: "Écho d'un Regard", 
    desc: "Projet sur la santé mentale des adolescents", 
    image: img1,
    imagePopup: projet1,
    details: "Ce site sert à comprendre son adolescent via les différents comportements qu’il peut avoir, se renseigner sur les structures effectives dans votre région, des professionnels pleinement au cœur de la vie des jeunes.",
    mission: "Analyse des besoins, UI/UX Design, Illustration."
  },
  { 
    id: 2, 
    titre: "Murmure de l'Océan", 
    desc: "Projet de prévention marine", 
    image: img2,
    imagePopup: projet2,
    details: "Une campagne de sensibilisation dédiée à la protection des écosystèmes marins, utilisant des visuels apaisants pour transmettre un message urgent.",
    mission: "Identité visuelle, Communication."
  },
  { 
    id: 3, 
    titre: "Bien-être Animalier", 
    desc: "Projet de stage pour une ostéopathe animalière", 
    image: img3,
    imagePopup: projet3,
    details: "Conception d'un support de communication pour une ostéopathe animalière, mettant en avant le lien unique entre l'humain et l'animal.",
    mission: "Mise en page, Photographie, Stratégie digitale."
  }
];

export default function Projets() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);

  return (
    <section id="projets" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
      {/* Titre avec police élégante */}
      <h2 style={{ 
        textAlign: 'center', 
        color: '#635147', 
        marginBottom: '60px', 
        fontSize: '2.5rem', 
        letterSpacing: '0.15em', 
        fontFamily: "'Playfair Display', serif", // Police élégante
        fontWeight: 'bold' 
      }}>
        MES PROJETS
      </h2>

      {/* GRILLE DES PROJETS RESPONSIVE (Grâce à Tailwind) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projetsData.map((projet) => (
          <div key={projet.id} style={{
            backgroundColor: '#ffffff', 
            borderRadius: '35px',
            padding: '30px', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)', 
            border: '1px solid #e2e8f0', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '25px', marginBottom: '25px', overflow: 'hidden', backgroundColor: '#FDF2F0' }}>
                <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#635147', marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>{projet.titre}</h3>
              <p style={{ color: '#64748b', marginBottom: '25px', fontStyle: 'italic', fontFamily: "'Lora', serif", fontSize: '1.05rem' }}>{projet.desc}</p>
            </div>
            
            <button 
              onClick={() => setProjetSelectionne(projet)}
              style={{ 
                padding: '12px 30px', 
                borderRadius: '50px', 
                border: '1.5px solid #7BA6C6', // Ton bleu pour le bouton
                background: 'none', 
                color: '#7BA6C6', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              En savoir plus
            </button>
          </div>
        ))}
      </div>

      {/* LA MODALE : CENTRAGE ABSOLU ET SÉCURITÉ DES BORDS */}
{projetSelectionne && (
  <div 
    onClick={() => setProjetSelectionne(null)} 
    style={{
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', // Utilisation de vw/vh pour couvrir tout l'écran
      height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.4)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex', 
      alignItems: 'center', // Centre verticalement
      justifyContent: 'center', // Centre horizontalement
      zIndex: 9999, 
      padding: '20px' // Cette marge empêche la carte de toucher les bords de l'écran
    }}
  >
    <div 
      onClick={(e) => e.stopPropagation()} 
      style={{
        backgroundColor: 'white', 
        width: 'calc(100% - 40px)', // Prend toute la place moins les marges
        maxWidth: '650px', // Mais ne dépasse jamais 650px sur ordinateur
        maxHeight: '85vh', // Ne touche jamais le haut ou le bas (laisse 7.5% de vide en haut et en bas)
        borderRadius: '35px', 
        padding: '30px', 
        position: 'relative',
        overflowY: 'auto', // Permet de scroller si le texte est long
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Bouton Fermer */}
      <button 
        onClick={() => setProjetSelectionne(null)}
        style={{ 
          position: 'absolute', top: '15px', right: '15px', border: 'none', 
          background: '#7BA6C6', borderRadius: '50%', width: '35px', height: '35px', 
          cursor: 'pointer', zIndex: 10, color: 'white'
        }}
      >
        ✕
      </button>

      {/* Image */}
      <img 
        src={projetSelectionne.imagePopup || projetSelectionne.image} 
        style={{ width: '100%', borderRadius: '20px', marginBottom: '20px', flexShrink: 0 }} 
        alt="" 
      />

      {/* Contenu texte */}
      <h2 style={{ color: '#635147', marginBottom: '15px', fontFamily: "'Playfair Display', serif" }}>
        {projetSelectionne.titre}
      </h2>
      <p style={{ color: '#475569', lineHeight: '1.6', textAlign: 'left', fontFamily: "'Lora', serif" }}>
        {projetSelectionne.details || projetSelectionne.desc}
      </p>

      {/* Bouton Fermer en bas pour l'accessibilité mobile */}
      <button 
        onClick={() => setProjetSelectionne(null)}
        style={{ 
          marginTop: '25px', padding: '15px', borderRadius: '15px', 
          border: 'none', backgroundColor: '#7BA6C6', color: 'white', 
          fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 
        }}
      >
        Retour
      </button>
    </div>
  </div>
)}
    </section>
  );
}