import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Interets from "./components/Interets";
import Films from "./components/Films";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function App() {
  const containerRef = useRef(null); // Référence pour la div qui scroll
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const sectionTimestamps = useMemo(() => [0, 6.2, 14, 18, 26], []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
        console.log("Position du scroll :", containerRef.current.scrollTop);
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
  
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (!video) {
      console.error("La vidéo n'a pas été trouvée !");
      return;
    }
  
    const container = containerRef.current;
    if (!container) {
      console.error("Le container n'a pas été trouvé !");
      return;
    }
  
    let animationFrameId;
    let scrollTimeout;
  
    const updateVideoTime = (targetTime, isScrollingDown) => {
      if (!video) return;
    
      const bufferTime = 0.3;
      if (Math.abs(video.currentTime - targetTime) < bufferTime) return;
    
      video.play();
      video.playbackRate = 2; // ✅ Vitesse normale si on avance
    
      if (!isScrollingDown) {
        video.pause(); // ✅ Stoppe la lecture normale
        let reverseInterval = setInterval(() => {
          if (video.currentTime <= targetTime + bufferTime) {
            clearInterval(reverseInterval);
            video.currentTime = targetTime; // ✅ Fixe à la position exacte
          } else {
            video.currentTime -= 0.1; // ✅ Simule la lecture arrière
          }
        }, 50);
      } else {
        const checkTime = () => {
          if (Math.abs(video.currentTime - targetTime) < bufferTime) {
            video.pause();
            video.playbackRate = 1;
            video.currentTime = targetTime;
          } else {
            requestAnimationFrame(checkTime);
          }
        };
        requestAnimationFrame(checkTime);
      }
    };    
    
    let isTransitioning = false;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (isTransitioning) return;
      isTransitioning = true;
    
      requestIdleCallback(() => {
        let currentScrollTop = container.scrollTop;
        let sectionIndex = Math.floor(currentScrollTop / window.innerHeight);
        const targetTime = sectionTimestamps[sectionIndex] || 0;
    
        let isScrollingDown = currentScrollTop > lastScrollTop;
        lastScrollTop = currentScrollTop;
    
        console.log("Scroll terminé, section:", sectionIndex, "Direction:", isScrollingDown ? "↓" : "↑");
        console.log("Timecode cible:", targetTime);
    
        updateVideoTime(targetTime, isScrollingDown);
    
        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }, { timeout: 300 });
    };     
  
    container.addEventListener("scroll", handleScroll);
    
    return () => {
      container.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sectionTimestamps]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const video = document.getElementById("bg-video");
      if (video) {
        console.log("Temps actuel de la vidéo :", video.currentTime);
      }
    }, 2000);
  
    return () => clearInterval(intervalId); // ✅ Nettoie l'intervalle
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto scroll-container relative">
      <>
        <Navbar />

        {location.pathname !== "/films" && <video
          id="bg-video"
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/videos/background.mp4" // ✅ Mets ton fichier vidéo ici
          muted
          playsInline
        >
        </video>
        }

        <Routes>
          <Route path="/" element={
            <main className="h-screen">
              {/*<video id="bg-video" className="fixed top-0 left-0 w-full h-full object-cover z-[-1]" src="/videos/background.mp4" muted playsInline />*/}
              <section id="about" className="h-screen section"><About /></section>
              <section id="skills" className="h-screen section"><Skills /></section>
              <section id="experience" className="h-screen section"><Experience /></section>
              <section id="interets" className="h-screen section"><Interets /></section>
              <section id="contact" className="h-screen section"><Contact /></section>
            </main>
          } />
          <Route path="/films" element={<Films />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
