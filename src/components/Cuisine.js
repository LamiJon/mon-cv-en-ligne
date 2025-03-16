import React, { useState, useEffect } from "react";
import RotatingText from './tailwindEffects/RotatingText'

const Cuisine = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/youtube-videos")
    /*fetch("https://mon-cv-en-ligne-production.up.railway.app/api/youtube-videos")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setVideos(data);
        }
      })
      .catch((error) => console.error("Erreur de chargement des vidéos :", error));*/
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white pt-[100px]">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-[auto_100vh] translate-y-[-50px] scale-110 z-[-1] blur-md"
        style={{
          backgroundImage: "url('/background_cuisine.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 130vh",
          backgroundPosition: `center` // Appliquer l'effet Parallax ici
        }}
      />
      <h1 className="text-4xl font-bold mb-6 text-outline">Dernières vidéos de mes chaînes préférées 🍳</h1>
      <div className="px-6 py-2 size-fit rounded-xl bg-gray-900/90 center mb-10 text-lg text-center max-w-2xl">
        <p>
          Voici les dernières vidéos des chaînes YouTube que je suis pour trouver de nouvelles inspirations culinaires !
        </p>
        <div className="flex flex-row py-2 items-center justify-center">
          <p className="px-2">Et pour votre santé, évitez de manger</p>
          <RotatingText
              texts={['trop gras', 'trop sucré', 'trop salé', 'trop en général']}
              mainClassName="px-2 bg-yellow-400 text-black overflow-hidden justify-center rounded-lg"              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
        </div>
      </div>
      
      <div className="flex flex-col items-center bg-gray-900/90 px-6 py-2 rounded-xl text-lg max-w-4xl mx-auto">
        {videos.length > 0 ? (
          videos.map((channel, index) => (
            <div key={index} className="relative flex flex-col text-center items-center justify-center mb-10">
              <h2 className="text-2xl font-semibold text-yellow-400">{channel.name}</h2>
              <p className="mb-2">{channel.presentation}</p>
              <iframe
                classname="flex justify-center w-full mx-auto rounded-lg"
                width={channel.videoURL.includes("/shorts/") ? "360" : "784"}
                height={channel.videoURL.includes("/shorts/") ? "640" : "441"}
                src={channel.videoURL.replace("watch?v=", "embed/").replace("/shorts/", "/embed/")}
                title={`Vidéo de ${channel.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p>Chargement des vidéos...</p>
            <div className="loader pt-6 mx-4"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cuisine;


