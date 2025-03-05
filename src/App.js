import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Interets from "./components/Interets";
import Films from "./components/Films";
import Cuisine from "./components/Cuisine";
import { useLocation } from "react-router-dom";

function App() {
  const containerRef = useRef(null); // Référence pour la div qui scroll
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();

  useEffect(() => {
    /*const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
        console.log("Position du scroll :", containerRef.current.scrollTop);
      }
    };*/

    const handleScroll = () => {
      if (containerRef.current) {
        const sections = document.querySelectorAll(".section");
        let currentSection = "about"; // Par défaut
    
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
          }
        });
    
        setActiveSection(currentSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // ✅ Attendre un peu avant de scroller
      }
    }
  }, [location]);

  const backgroundSettings = {
    about: { x: 50, y: 26, zoom: 3 }, // Haut de l'image, zoomé
    skills: { x: 50, y: 36, zoom: 2.9 }, // Centre avec léger zoom
    experience: { x: 50, y: 60, zoom: 2.92 }, // Plus bas sur l'image
    interets: { x: 50, y: 76, zoom: 3.6 }, // Décalé vers la gauche
    contact: { x: 50, y: 96, zoom: 2.87 }, // Tout en bas à droite
  };  

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto scroll-container relative">
      <>
        <Navbar />

        {/*<div 
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-[auto_100vh] translate-y-[-50px] scale-110 z-[-1]"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 130vh",
            backgroundPosition: `center ${scrollY * -0.064}px`, // Appliquer l'effet Parallax ici
          }}
        />*/}

        <div 
          className="fixed top-0 left-0 w-full h-full bg-cover translate-y-[-50px] z-[-1] transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: "url('/background.JPG')",
            backgroundRepeat: "no-repeat",
            backgroundSize: `auto ${backgroundSettings[activeSection].zoom * 100}%`,
            backgroundPosition: `${backgroundSettings[activeSection].x}% ${backgroundSettings[activeSection].y}%`,
            transform: `scale(${backgroundSettings[activeSection].zoom})`
          }}
        />

        <Routes>
          <Route path="/" element={
            <main className="h-screen">
              <section id="about" className="h-screen section"><About /></section>
              <section id="skills" className="h-screen section"><Skills /></section>
              <section id="experience" className="h-screen section"><Experience /></section>
              <section id="interets" className="h-screen section"><Interets /></section>
              <section id="contact" className="h-screen section"><Contact /></section>
            </main>
          } />
          <Route path="/films" element={<Films />} />
          <Route path="/cuisine" element={<Cuisine />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
