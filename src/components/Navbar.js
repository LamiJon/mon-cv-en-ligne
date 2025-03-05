import React, { useLayoutEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa"; // Importer l'icône LinkedIn
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ Récupère l'URL actuelle

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    //console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`; // ✅ Redirige vers l'accueil avec l'ancre correcte
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500); // ✅ Petit délai pour laisser le temps à la page de se charger
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 text-blanc-casse transition-all duration-300 backdrop-blur-lg z-50 flex justify-between items-center bg-bleu-nuit/80 shadow-lg">

      {/* Espace vide à gauche pour équilibrer */}
      <div className="flex-1"></div>
      
      {/* Liste des liens centrée */}
      <ul className="flex items-center justify-center space-x-6 mx-auto">
        <li>
          <button className="hover:text-gray-300 transition duration-200" onClick={() => scrollToSection("about")}>À propos</button>
        </li>
        <li>
          <button className="hover:text-gray-300 transition duration-200" onClick={() => scrollToSection("skills")}>Compétences</button>
        </li>
        <li>
          <button className="hover:text-gray-300 transition duration-200" onClick={() => scrollToSection("experience")}>Expérience</button>
        </li>
        <li>
          <button className="hover:text-gray-300 transition duration-200" onClick={() => scrollToSection("Interets")}>Intérêts</button>
        </li>
        <li>
          <button className="hover:text-gray-300 transition duration-200" onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>

      <div className="flex items-center space-x-2 flex-1 justify-end">
        {/* Icône LinkedIn bien à droite */}
        <a
          href="https://www.linkedin.com/in/jonathan-brachet-5071ba172/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-vert-neon text-3xl transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://my.assessfirst.com/public/profile/ublgevxf-jonathan-brachet?lang=fr-FR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-vert-neon text-3xl transition duration-300"
        >
          <img src="/logo-assessfirst.webp" alt="AssessFirst" className="w-7 h-7 opacity-80 hover:opacity-100 transition duration-300" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;

