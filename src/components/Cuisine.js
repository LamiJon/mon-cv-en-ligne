/*import React, { useState, useEffect } from "react";

const Cuisine = () => {
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/whoogys")
      .then((response) => response.json())
      .then((data) => {
        if (data.videoURL) {
          setVideoURL(data.videoURL);
        }
      })
      .catch((error) => console.error("Erreur de chargement de la vidéo :", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Dernière vidéo de Whoogys 🍳</h1>
      <p className="text-lg text-center max-w-2xl mb-4">
        J’adore cette chaîne car elle propose des recettes accessibles et bien expliquées. 
        Chaque vidéo est un plaisir à regarder et m'inspire à essayer de nouvelles choses en cuisine !
      </p>
      {videoURL ? (
        <iframe
          width="896"
          height="504"
          src={videoURL.replace("watch?v=", "embed/")}
          title="Vidéo Whoogys"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Chargement de la vidéo...</p>
      )}
    </div>
    
  );
};

export default Cuisine;*/

import React, { useState, useEffect } from "react";

const Cuisine = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/youtube-videos")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setVideos(data);
        }
      })
      .catch((error) => console.error("Erreur de chargement des vidéos :", error));
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
      <div className="px-6 py-2 size-fit rounded-xl bg-gray-900/90 center mb-10">
        <p className="text-lg text-center max-w-2xl">
          Voici les dernières vidéos des chaînes YouTube que je suis pour trouver de nouvelles inspirations culinaires !
        </p>
      </div>
      
      <div className="flex flex-col items-center bg-gray-900/90 px-6 py-2 rounded-xl">
        {videos.length > 0 ? (
          videos.map((channel, index) => (
            <div key={index} className="relative flex flex-col text-center items-center justify-center mb-10">
              <h2 className="text-2xl font-semibold">{channel.name}</h2>
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
          <p>Chargement des vidéos...</p>
        )}
      </div>
    </div>
  );
};

export default Cuisine;


