import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Formulaire de contact
        </h1>
        <h3 className="text-xl text-slate-600 italic">
          Votre projet mérite une approche douce et personnalisée
        </h3>
      </div>

      <form 
        className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl w-full max-w-2xl border-2 border-[#EBA8D5]"
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-serif italic text-slate-700">Nom :</label>
            <input type="text" className="w-full p-4 rounded-2xl bg-[#EBA8D5]/20 border-2 border-[#7BA6C6] focus:outline-none focus:border-[#EBA8D5]" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-serif italic text-slate-700">E-mail :</label>
            <input type="email" className="w-full p-4 rounded-2xl bg-[#EBA8D5]/20 border-2 border-[#7BA6C6] focus:outline-none focus:border-[#EBA8D5]" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-serif italic text-slate-700">Message :</label>
            <textarea rows="4" className="w-full p-4 rounded-2xl bg-[#EBA8D5]/20 border-2 border-[#7BA6C6] focus:outline-none focus:border-[#EBA8D5] resize-none"></textarea>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#7BA6C6] text-white px-10 py-3 rounded-full hover:bg-[#EBA8D5] transition-colors font-bold text-lg">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}