import React from 'react';

// Assure-toi que l'orthographe est EXACTEMENT la même que tes fichiers
import img1 from '../assets/echo-dun-regard.png';
import img2 from '../assets/murmureDeOcean.png';
import img3 from '../assets/bien-etre-animalier.png';

const projetsData = [
  { id: 1, titre: "Écho d'un Regard", desc: "Projet sur la santé mentale des adolescents", image: img1 },
  { id: 2, titre: "Murmure de l'Océan", desc: "Projet de prévention marine", image: img2 },
  { id: 3, titre: "Bien-être Animalier", desc: "Projet de stage pour une ostéopathe animalière", image: img3 }
];

export default function Projets() {
  return (
    <section id="projets" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
      <h2 style={{ textAlign: 'center', color: '#635147', marginBottom: '40px', fontSize: '2rem', letterSpacing: '0.2em' }}>
        MES PROJETS
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
        {projetsData.map((projet) => (
          <div key={projet.id} style={{
            width: '100%',
            maxWidth: '500px',
            backgroundColor: '#ffffff',
            borderRadius: '25px',
            padding: '30px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '15px', marginBottom: '20px', overflow: 'hidden', backgroundColor: '#FDF2F0' }}>
              <img 
                src={projet.image} 
                alt={projet.titre} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#635147', marginBottom: '10px' }}>{projet.titre}</h3>
            <p style={{ color: '#64748b', marginBottom: '20px', fontStyle: 'italic' }}>{projet.desc}</p>
            <button style={{
              padding: '10px 25px',
              borderRadius: '50px',
              border: '1px solid #635147',
              background: 'none',
              color: '#635147',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}