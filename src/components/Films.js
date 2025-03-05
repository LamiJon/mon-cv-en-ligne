import React, { useEffect, useState, useRef } from "react";
import { fetchFilms } from "../utils/letterboxdScraper";
import { fetchSynopsis } from "../utils/letterboxdScraper";
//import Navbar from "./Navbar"; // Assure-toi que le chemin est correct

const Films = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("sortie"); // Option de tri sélectionnée
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredSynopsis, setHoveredSynopsis] = useState("");
  //const [synopsisIsLoading, setSynopsisIsLoading] = useState(false);
  //const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  
  const handleHover = async (filmHref) => {
    if (!filmHref) return;
    //setSynopsisIsLoading(true); // ✅ Active la roue de chargement
    setHoveredSynopsis(""); // ✅ Efface l'ancien synopsis
    const synopsis = await fetchSynopsis(filmHref);
    //console.log("Synopsis récupéré :", synopsis);
    setHoveredSynopsis(synopsis);
    setIsLoading(false); // ✅ Désactive la roue de chargement
  };

  useEffect(() => {
    const loadFilms = async () => {
      setIsLoading(true);
      const movies = await fetchFilms(sortOption, page);
      
      setFilms((prevFilms) => [...prevFilms, ...movies]); // ✅ Ajoute les nouveaux films sans supprimer les anciens
      
      setIsLoading(false);
    };
  
    loadFilms();
  }, [sortOption, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
        //console.log("Position du scroll :", containerRef.current.scrollTop);
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

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto scroll-container relative">
      <div ref={containerRef}
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-[auto_100vh] translate-y-[-50px] scale-110 z-[-1]"
          style={{
            backgroundImage: "url('/background_films.JPG')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 130vh",
            backgroundPosition: `center ${scrollY * -0.064}px`, // Appliquer l'effet Parallax ici
          }}
        />
      <div className="min-h-screen flex flex-col items-center text-white pt-20">
        <h2 className="text-4xl font-bold mb-4 text-outline">Les films que j’ai vus 🎬</h2>
        {/*<button
          onClick={() => {
            window.location.href = "/";
            setPage(1); // ✅ Réinitialise la page
            setFilms([]);
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition"
        >
          Retour à l'accueil
        </button>*/}

        <div className="px-6 py-3 size-fit rounded bg-black/40 center">

          <label htmlFor="sort-select" className="mr-2 text-lg">Trier par :</label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setPage(1);
              setFilms([]);
            }}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            <option value="sortie">Date de sortie</option>
            <option value="vu">Derniers films vus</option>
            <option value="titre">Ordre alphabétique</option>
            <option value="popularite">Popularité</option>
            <option value="hasard">Au hasard</option>
          </select>
        </div>

        {isLoading && <div className="loader pt-8 mt-4"></div>} {/*Roue de chargement*/}

        {/* Liste des films affichés en grille */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          {films.length > 0 ? (
            films.map((film, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-32 h-48 rounded-lg shadow-lg"
                  onMouseEnter={() => handleHover(film.href)}
                />
                <p className="mt-2">{film.title}</p>
              </div>
            ))
          ) : (
            <p>Chargement des films...</p>
          )}
        </div>

        {/* Section du synopsis */}
        <div className="w-1/4 p-4 bg-gray-900/80 rounded text-white fixed right-20 top-80 flex items-center">
          <p className="text-lg">{hoveredSynopsis || "Survolez une affiche pour voir le synopsis."}</p>
        </div>

        {isLoading && <div className="loader pt-8 mt-4"></div>} {/*Roue de chargement*/}

        {page < 3 ? (
          <button
            onClick={() => setPage(page + 1)}
            className="mt-4 px-4 py-2 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded transition"
          >
            Voir plus de films
          </button>
        ) : (
          <a
            href="https://letterboxd.com/lamijon/films/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition"
          >
            Voir plus sur Letterboxd
          </a>
        )}
      </div>
    </div>
  );
};

export default Films;

