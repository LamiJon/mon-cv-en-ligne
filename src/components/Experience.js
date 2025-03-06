/*function Experience() {
    return (
      <div>
        <h2>Expériences professionnelles</h2>
        <p>Développeur chez [Entreprise] - [Année]</p>
      </div>
    );
  }
  
  export default Experience;*/
  
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("informatique"); // 💡 Expériences Informatique par défaut
  const [selectedAudiovisual, setSelectedAudiovisual] = useState(0); // Premier élément sélectionné par défaut
  //const [direction, setDirection] = useState(1); // 1 = droite, -1 = gauche

  const experiences = {
    formations: [
      { titre: " Master Informatique, Mathématiques, Multimédia et Télécommunications", 
        annee: "2017", 
        description: "Faculté des Sciences Fondamentales et Appliquées de l’Université de Poitiers" 
      },
      { titre: "Licence Mathématiques, Informatique, Ingénierie, Physique et Chimie", 
        annee: "2015", 
        description: "Faculté des Sciences Fondamentales et Appliquées de l’Université de Poitiers" 
      },
      { titre: "Baccalauréat (Scientifique)", 
        annee: "2011", 
        description: "Lycée Camille Guérin de Poitiers" 
      }
    ],
    informatique: [
      { titre: "Employé polyvalent", 
        entreprise: "Escape Yourself Poitiers", 
        annee: " Du 06/2024 au 01/2025", 
        description: "Accompagner les clients dans tout le processus d'une partie de jeu d'évasion gradeur nature.\nDévellopement relationnel client/communication." 
      },
      { titre: "Vidéaste", 
        entreprise: "JonProduction (Auto-Entreprose)", 
        annee: "Du 07/2023 (toujours actif)", 
        description: "Accompagner les clients dans la promotions de leur service grâce à la vidéo.\nApprendre des nouvelles compétences." 
      },
      { titre: "Ingénieur d'étude", 
        entreprise: "ALTEN", 
        annee: "Du 07/2019 au 04/2021", 
        description: "En mission à SAFRAN Electronics & Defense pour le développement de logiciels pour bancs de maintenance optronique." 
      },
      { titre: "Ingénieur hospitalier", 
        entreprise: "CHU de Poitiers, Secteur Informatique", 
        annee: "Du 10/2017 au 07/2018", 
        description: "Retranscrire les formulaires de santé en format papier vers un format web sur l’intranet du site.\nFamiliarisation au domaine hospitalier, Rencontre avec des professionnels de santé, Etudier les besoins, Superviser les phases de test." 
      },
      { titre: "Ingénieur informaticien", 
        entreprise: "Université de Poitiers, Secteur Informatique", 
        annee: "Du 01/2016 au 06/2016", 
        description: "Développement d’une application sous Android.\nSaisie de dossier, Concevoir un cahier des charges, Superviser le projet." 
      }
    ],
    audiovisuel: [
      { 
        titre: "Vidéo - Poitou Bière Festival 2023", 
        type: "video", 
        url: "/videos/PBF2023.mp4", 
        description: "Vidéo courte de type aftermovie, du Poitou Bière Festival édition 2023. Allant de brasseurs passionnés à goûteurs plus ou moins confirmés,\namoureux de saveur houblonnée et de belles rencontres, tous sont réunis pour partager un moment d'exception autour de boissons artisanales.",
        width: "940px",
        height: "528px"
      },
      { 
        titre: "Vidéo - Chaone Café", 
        type: "video", 
        url: "/videos/Chaone.mp4", 
        description: "Réalisation d'une vidéo très courte au format vertical, destinée aux réseaux de type Instagram et TikTok.\nLe Chaone est un lieu qui fait bon y respirer les saveurs gourmandes et réconfortantes qui en émanent. Qu'on y aille seul pour traviller\nou pour partager un moment avec ses proche, ce café de curiosité et un repère idéal pour passer un moment chaleureux.",
        width: "320px",
        height: "450px"
      },
      { 
        titre: "GIF - Animation 3D", 
        type: "photo", 
        url: "/images/Ecran_attente.gif",
        description: "Petit projet personnel, ce que vous voyez actuellement est une animation créée en totalité sous Blender et qui me sert d'écran d'attente sur ma chaîne Twitch.\nJe peux également intégrer des éléments en 3D dans mes vidéos, comme le logo du Poitou Bière Festival que vous pouvez voir au début de la vidéo\naccessible via la liste déroulante",
        width: "784px",
        height: "360px"
      },
      { 
        titre: "Photographie - Challoween", 
        type: "photo",  
        url: [ // plusieurs images
          "/images/halloween_2023/Halloween6.jpg",
          "/images/halloween_2023/Halloween4.jpg",
        ],
        description: "La vidéo étant l'art de manier les images et de les animer, il est aussi intéressant de savoir manier l'art de l'image fixe. C'est pourquoi je m'adonne parfois à la photographie.",
        width: "500px",
        height: "360px"
      }
    ]
  };
  
  // ✅ Fonction pour changer de catégorie et gérer la direction de l'animation
  const changeCategory = (newCategory) => {
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <motion.section
      id="experience"
      className="w-full min-h-screen flex items-center justify-center bg-brun-terreux/20 text-blanc-casse "
    >
      <div className="ablsolute min-h-screen min-w-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-6">Expérience</h1>

        {/* Boutons des catégories */}
        <div className="flex gap-8 mb-8">
          {["formations", "informatique", "audiovisuel"].map((category) => (
            <div
              key={category}
              className={`text-2xl font-semibold px-6 py-3 rounded cursor-pointer transition duration-300 
                          ${selectedCategory === category ? "bg-yellow-500 text-gray-900" : "bg-gray-800 hover:bg-yellow-400"}`}
              onClick={() => changeCategory(category)} // 💡 Clic au lieu du survol
            >
              {category === "formations" && "📚 Formations"}
              {category === "informatique" && "💻 Expériences Informatique"}
              {category === "audiovisuel" && "🎬 Expériences Audiovisuel"}
            </div>
          ))}
        </div>

        {/* Affichage dynamique des informations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ x: 100, opacity: 0 }} // Départ en dehors de l'écran
            animate={{ x: 0, opacity: 1 }} // Arrivée à sa place
            exit={{ x: -100, opacity: 0 }} // Disparition vers l'extérieur
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="min-w-screen p-6 bg-gray-900 rounded-lg shadow-lg min-h-[200px] transition-all duration-500">

              {selectedCategory === "audiovisuel" ? (
                <div>

                  {/* Liste déroulante pour choisir un élément */}
                  <select
                    id="audiovisual-select"
                    className="px-4 py-2 bg-gray-700 text-white rounded"
                    value={selectedAudiovisual}
                    onChange={(e) => setSelectedAudiovisual(e.target.value)}
                  >
                    <option value="">-- Choisir un projet --</option>
                    {experiences.audiovisuel.map((exp, index) => (
                      <option key={index} value={index}>
                        {exp.titre}
                      </option>
                    ))}
                  </select>

                  {/* Affichage du contenu sélectionné */}
                  {selectedAudiovisual !== "" && (
                  <div className="mt-4 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                      {experiences.audiovisuel[selectedAudiovisual].titre}
                    </h3>
                    {experiences.audiovisuel[selectedAudiovisual].type === "video" ? (
                      <video
                        className="rounded-lg mx-auto"
                        width={experiences.audiovisuel[selectedAudiovisual].width}
                        height={experiences.audiovisuel[selectedAudiovisual].height}
                        src={experiences.audiovisuel[selectedAudiovisual].url}
                        controls // ✅ Ajoute les boutons Play/Pause
                        autoPlay={false} // ✅ Désactive la lecture automatique
                        muted={false} // ✅ Garde le son activé
                      ></video>
                    ) : (
                      <>
                      {/* Si plusieurs photos, on affiche une galerie */}
                      {Array.isArray(experiences.audiovisuel[selectedAudiovisual].url) ? (
                        <div className="flex flex-wrap justify-center gap-4">
                          {experiences.audiovisuel[selectedAudiovisual].url.map((imgSrc, index) => (
                            <img
                              key={index}
                              className="rounded-lg object-cover"
                              width={experiences.audiovisuel[selectedAudiovisual].width}
                              height={experiences.audiovisuel[selectedAudiovisual].height}
                              src={imgSrc}
                              alt={`${experiences.audiovisuel[selectedAudiovisual].titre} - ${index + 1}`}
                            />
                          ))}
                        </div>
                      ) : (
                        /* Si une seule photo */
                        <img
                          className="rounded-lg object-cover"
                          width={experiences.audiovisuel[selectedAudiovisual].width}
                          height={experiences.audiovisuel[selectedAudiovisual].height}
                          src={experiences.audiovisuel[selectedAudiovisual].url}
                          alt={experiences.audiovisuel[selectedAudiovisual].titre}
                        />
                      )}
                    </>
                    )}
                    <p className="text-gray-300 mt-4">
                      {experiences.audiovisuel[selectedAudiovisual].description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                )}
              </div>

              ) : (
                experiences[selectedCategory].map((exp, index) => (
                  <div key={index} className="mb-4 text-center">
                    <h3 className="text-xl font-semibold text-yellow-400">{exp.titre}</h3>
                    <p className="text-sm text-gray-400">{exp.entreprise || exp.annee}</p>
                    <p className="text-gray-300">
                      {exp.description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Experience;

