import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import Profil from './components/Profil';
import Projets from './components/Projets';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth overflow-x-hidden">
      <Header />

      <main className="pt-[80px] w-full">
       
        <Hero />
        
        <div className="container mx-auto px-6">
          <div className="h-20 md:h-40"></div> 
          <Profil />
        </div>

        <Projets />
        
        <div className="container mx-auto px-6">
          <div className="h-20 md:h-40"></div>
          <Contact />
        </div>
      </main>

<div style={{ height: '200px', width: '100%' }}></div>

      <Footer />
    </div>
  );
}

export default App;