import React from 'react';
export default function Footer() {
  return (
    <footer className="w-full bg-black/10 backdrop-blur-md p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo et Copyright */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="logo footer" className="h-12 w-12" />
          <p className="text-sm text-white italic">
            Copyright - Tous droits réservés - image par IA
          </p>
        </div>

        {/* Liens Sociaux */}
        <div className="flex gap-6 text-white font-serif text-xl">
          <a href="#" className="hover:text-[#C17D3E] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#C17D3E] transition-colors">GitHub</a>
          <a href="mailto:..." className="hover:text-[#C17D3E] transition-colors">Email</a>
        </div>
        
      </div>
    </footer>
  );
}