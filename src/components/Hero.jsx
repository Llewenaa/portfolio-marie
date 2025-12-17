import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="accueil" 
      style={{ 
        width: '100%', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
     
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', backgroundColor: '#fdf2f8', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '400px', height: '400px', backgroundColor: '#eff6ff', borderRadius: '50%', filter: 'blur(80px)' }}></div>
      </div>

      
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'relative',
          zIndex: 10,
          width: '450px', 
          height: '450px', 
          borderRadius: '50%', 
          backgroundColor: '#f8fafc', 
          border: '4px solid #ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px',
          overflow: 'hidden'
        }}
      >
       
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}></div>

        
        <div style={{ position: 'relative', zIndex: 20 }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#6a1b50', margin: 0 }}>
            Marie
          </h1>
          
          <h2 style={{ fontSize: '1.5rem', color: '#7BA6C6', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '10px 0' }}>
        Bienvenue sur mon portfolio
          </h2>

          <div style={{ width: '50px', height: '2px', backgroundColor: '#f9a8d4', margin: '20px auto' }}></div>

          <p style={{ fontSize: '1.1rem', color: '#475569', fontStyle: 'italic', lineHeight: '1.6', maxWidth: '300px' }}>
            "L'empathie du social au service du développement web."
          </p>
        </div>
      </motion.div>
    </section>
  );
}