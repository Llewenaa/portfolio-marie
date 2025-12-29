import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Projets from './components/Projets';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Le loader s'arrête après 2.5 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <Hero />
          <Profil />
          <Projets />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;