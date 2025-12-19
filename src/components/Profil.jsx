import React from 'react';
import { motion } from 'framer-motion';
import marie_teteImg from '../assets/marie_tete.png'; 

export default function Profil() {
  return (
    // mt-20 (margin-top) pousse la card vers le bas
    <section id="profil" className="w-full mt-20 mb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Card */}
        <div style={{ 
          backgroundColor: 'rgba(235, 168, 213, 0.2)', 
          padding: '40px', 
          borderRadius: '50px',
          border: '1px solid rgba(123, 166, 198, 0.2)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'block' 
        }}>
          
          {/* Image ronde */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ 
              float: 'left', 
              width: '120px', 
              height: '120px',
              marginRight: '25px',
              marginBottom: '10px',
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '4px solid white',
              boxShadow: '0 4px 6px #7BA6C6',
              shapeOutside: 'circle(50%)', 
              backgroundColor: '#7BA6C6'
            }}
          >
            <img 
              src={marie_teteImg} 
              alt="Marie Portrait" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          
          <div className="text-left">
  <h3 
    className="text-2xl md:text-4xl mb-4"
    style={{ 
      fontFamily: 'Montserrat, sans-serif, light', 
      fontWeight: '900', 
      color: '#6a1b50',
      lineHeight: '1.2'
    }}
  >
    Marie, développeuse web passionnée par l'empathie numérique
  </h3>
  
  <p 
    className="text-lg md:text-xl italic"
    style={{ 
      fontFamily: 'lora, sans-serif, light', 
      fontStyle: 'italic',
      color: '#334155',
      lineHeight: '1.8',
      opacity: '0.9'
    }}
  >
    "Issue du secteur social, j'ai développé une capacité d'écoute unique. 
    Aujourd'hui, je transpose cette empathie dans le monde numérique pour créer 
    des interfaces qui ne sont pas seulement belles, mais qui comprennent vraiment 
    l'utilisateur. Mon parcours me permet de placer l'humain au cœur de chaque pixel."
  </p>
</div>
         
          <div style={{ clear: 'both' }}></div>
          
        </div> 
      </div>
    </section>
  );
}