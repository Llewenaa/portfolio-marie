import React from 'react';

export default function Contact() {
  // On définit le style des petites cartes ici pour ne pas le répéter
  const cardStyle = {
    padding: '20px',
    borderRadius: '24px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc', // Gris très léger pour l'effet card
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: '0.3s'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#7BA6C6',
    marginBottom: '8px',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    backgroundColor: 'white'
  };

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '10px' }}>Contactez-moi</h1>
        <p style={{ fontStyle: 'italic', color: '#64748b' }}>Votre projet mérite une approche douce et personnalisée</p>
      </div>

      <form style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '40px', 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', 
        maxWidth: '600px', 
        width: '100%',
        border: '2px solid rgba(235, 168, 213, 0.2)' 
      }}>
        
        
        <div style={cardStyle}>
          <label style={labelStyle}>Nom</label>
          <input type="text" placeholder="Ex: Marie Durant" style={inputStyle} />
        </div>

        
        <div style={cardStyle}>
          <label style={labelStyle}>E-mail</label>
          <input type="email" placeholder="marie@exemple.com" style={inputStyle} />
        </div>

        
        <div style={cardStyle}>
          <label style={labelStyle}>Message</label>
          <textarea rows="4" placeholder="Décrivez votre projet..." style={{...inputStyle, resize: 'none'}}></textarea>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button style={{
            backgroundColor: '#7BA6C6',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}