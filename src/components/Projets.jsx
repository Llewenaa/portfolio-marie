import React from 'react';

const projetsData = [
  { id: 1, titre: "Project 1", desc: "Description du projet 1" },
  { id: 2, titre: "Project 2", desc: "Description du projet 2" },
  { id: 3, titre: "Project 3", desc: "Description du projet 3" }
];

export default function Projets() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
      <h2 style={{ textAlign: 'center', color: '#635147', marginBottom: '40px', fontSize: '2rem' }}>
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
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            {/* Card */}
            <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#FDF2F0', borderRadius: '15px', marginBottom: '20px' }}></div>
            
            <h3 style={{ fontSize: '1.5rem', color: '#635147', marginBottom: '10px' }}>{projet.titre}</h3>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>{projet.desc}</p>
            
            <button style={{
              padding: '10px 25px',
              borderRadius: '50px',
              border: '1px solid #635147',
              background: 'none',
              color: '#635147',
              cursor: 'pointer'
            }}>
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}