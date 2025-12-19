import React, { useState, useEffect } from 'react';

// Import des images
import img1 from '../assets/echo-dun-regard.png';
import img2 from '../assets/murmureDeOcean.png';
import img3 from '../assets/bien-etre-animalier.png';
import projet1 from '../assets/projet1.png';
import projet2 from '../assets/projet2.png';
import projet3 from '../assets/projet3.png';

const projetsData = [
  { id: 1, titre: "Écho d'un Regard", desc: "Projet sur la santé mentale des adolescents", image: img1, imagePopup: projet1, details: "Ce site sert à comprendre son adolescent via les différents comportements qu’il peut avoir, se renseigner sur les structures effectives dans votre région, des professionnels pleinement au cœur de la vie des jeunes. ", mission: "Analyse des besoins, UI/UX Design, Illustration." },
  { id: 2, titre: "Murmure de l'Océan", desc: "Projet de prévention marine", image: img2, imagePopup: projet2, details: "Ce site est sur la prévention Océanique, c'est une sorte de campagne de sensibilisation dédiée à la protection des écosystèmes marins", mission: "Identité visuelle, Communication." },
  { id: 3, titre: "Bien-être Animalier", desc: "Projet de stage pour une ostéopathe animalière", image: img3, imagePopup: projet3, details: "Conception d'un support de communication pour une ostéopathe animalière.", mission: "Mise en page, Photographie, Stratégie digitale." }
];

export default function Projets() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);

  useEffect(() => {
    document.body.style.overflow = projetSelectionne ? 'hidden' : 'auto';
  }, [projetSelectionne]);

  return (
    <section id="projets" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
      <h2 style={{ 
        textAlign: 'center', color: '#635147', marginBottom: '80px', 
        fontSize: '2.5rem', fontFamily: "'Playfair Display', sans-serif", fontWeight: 'bold' 
      }}>
        MES PROJETS
      </h2>

     
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '60px', 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {projetsData.map((projet) => (
          <div key={projet.id} style={{
            backgroundColor: 'rgba(235, 168, 213, 0.2)', 
            borderRadius: '35px',
            padding: '30px', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)', 
            border: '1px solid #ffffff', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '25px', marginBottom: '25px', overflow: 'hidden', backgroundColor: 'rgba(235, 168, 213, 0.2)' }}>
                <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#635147', marginBottom: '12px', fontFamily: "'Playfair Display', sans-serif" }}>{projet.titre}</h3>
              <p style={{ color: '#64748b', marginBottom: '25px', fontStyle: 'italic', fontFamily: "'Lora', sans-serif" }}>{projet.desc}</p>
            </div>
            
            <button 
              onClick={() => setProjetSelectionne(projet)}
              style={{ padding: '12px 30px', borderRadius: '50px', border: '1.5px solid #7BA6C6', background: 'none', backgroundColor: '#7BA6C6', color: '#ffffff', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Voir le projet
            </button>
          </div>
        ))}
      </div>

      {/* FENÊTRE PLEIN ÉCRAN */}
      {projetSelectionne && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: '#ffffff', zIndex: 9999, overflowY: 'auto' }}>
          <button 
            onClick={() => setProjetSelectionne(null)}
            style={{ position: 'fixed', top: '30px', right: '30px', border: 'none', background: '#7BA6C6', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', zIndex: 10000, color: 'white', fontSize: '1.5rem' }}
          >
            ✕
          </button>

          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 20px 100px 20px' }}>
            <h2 style={{ color: '#635147', fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', fontFamily: "'Playfair Display', sans-serif" }}>
              {projetSelectionne.titre}
            </h2>
            <img src={projetSelectionne.imagePopup || projetSelectionne.image} style={{ width: '100%', borderRadius: '40px', marginBottom: '50px' }} alt={projetSelectionne.titre} />
            
            <div style={{ borderLeft: '4px solid #7BA6C6', paddingLeft: '20px', marginBottom: '30px' }}>
              <h4 style={{ color: '#7BA6C6', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '5px', fontFamily: "'Playfair Display', sans-serif" }}>Mission</h4>
              <p style={{ fontSize: '1.2rem', color: '#635147', fontWeight: '500', fontFamily: "'Lora', sans-serif" }}>{projetSelectionne.mission}</p>
            </div>
            <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.15rem', fontFamily: "'Lora', sans-serif", textAlign: 'justify' }}>
              {projetSelectionne.details}
            </p>

            <div style={{ textAlign: 'center', marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #eee' }}>
              <button onClick={() => setProjetSelectionne(null)} style={{ padding: '20px 60px', borderRadius: '50px', border: 'none', backgroundColor: '#7BA6C6', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}