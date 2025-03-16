import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import PixelTransition from './tailwindEffects/PixelTransition';

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("informatique"); // 💡 Expériences Informatique par défaut
  const [selectedAudiovisual, setSelectedAudiovisual] = useState(0); // Premier élément sélectionné par défaut
  const [hoveredExperience, setHoveredExperience] = useState(null);

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
        description: "En tant qu'auto-entrepreneur dans un Escape Game, j’ai accompagné les clients tout au long de leur expérience, de l’accueil jusqu’au débriefing. Mes missions incluaient la gestion des réservations, l’encaissement, l’explication des règles du jeu, la supervision des parties et la préparation des salles. Mon objectif principal était d’assurer une expérience immersive et mémorable aux joueurs. Cette expérience m’a permis de développer mes compétences relationnelles et mon sens du service client, tout en travaillant en équipe dans un environnement dynamique.\nCompétences acquises : Service client & travail en équipe" 
      },
      { titre: "Vidéaste", 
        entreprise: "JonProduction (Auto-Entreprose)", 
        annee: "Du 07/2023 (toujours actif)", 
        description: "J’accompagne mes clients dans la promotion de leurs services grâce à la vidéo, en réalisant notamment des contenus courts pour les réseaux sociaux. Je prends en charge le cadrage, le tournage et la post-production, en utilisant DaVinci Resolve pour le montage et l’étalonnage. Cette activité m’a permis de développer un œil artistique et une maîtrise des techniques de montage et d’étalonnage, tout en gérant des projets de manière autonome.\nCompétences acquises : Autonomie & créativité" 
      },
      { titre: "Ingénieur d'étude", 
        entreprise: "ALTEN", 
        annee: "Du 07/2019 au 04/2021", 
        description: "Ma mission consistait à développer et améliorer des logiciels pour les bancs de maintenance optronique, notamment pour l’évaluation et le calibrage de jumelles infrarouges et de caméras embarquées. J’ai conçu et intégré des séquences de test destinées à des bancs utilisés en Inde et au Danemark. J’ai travaillé avec TestStand, C++, SVN et SQL, en analysant et en adaptant du code existant tout en rédigeant des documents techniques (fiches de livraison, manuels d’utilisation). Cette mission m’a appris à m’adapter à des environnements industriels exigeants et à rédiger une documentation claire et précise.\nCompétences acquises : Développement logiciel & tests industriels" 
      },
      { titre: "Ingénieur hospitalier", 
        entreprise: "CHU de Poitiers, Secteur Informatique", 
        annee: "Du 10/2017 au 07/2018", 
        description: "Au sein du CHU de Poitiers, j’étais en charge de la gestion des données hospitalières. Mon travail consistait à transcrire des formulaires papier en formulaires numériques pour leur Intranet, en collaborant avec des professionnels de santé pour garantir la précision des données. J’ai notamment travaillé sur des formulaires en allergologie, cancérologie et gérontologie. J’ai utilisé C# pour le backend et un outil interne pour le frontend, ainsi que SQL pour la gestion des bases de données. Cette expérience m’a permis de développer mes compétences en analyse de données, en collaboration interdisciplinaire et en structuration d’applications web dédiées au secteur médical.\nCompétences acquises : Gestion de données & collaboration interdisciplinaire" 
      },
      { titre: "Ingénieur informaticien", 
        entreprise: "Université de Poitiers, Secteur Informatique", 
        annee: "Du 01/2016 au 06/2016", 
        description: "Ma mission principale était le développement d’une application Android, impliquant la conception et l’implémentation de fonctionnalités adaptées aux besoins utilisateurs. Ce projet m’a permis de renforcer mes compétences en développement mobile, en gestion de projet et en optimisation des performances sur un environnement Android.\nCompétences acquises : Développement mobile & optimisation" 
      }
    ],
    audiovisuel: [
      { 
        titre: "Vidéo - Poitou Bière Festival 2023", 
        type: "video", 
        url: "/videos/PBF2023.mp4", 
        description: "Vidéo courte de type aftermovie, du Poitou Bière Festival édition 2023. Allant de brasseurs passionnés à goûteurs plus ou moins confirmés, amoureux de saveur houblonnée et de belles rencontres, tous sont réunis pour partager un moment d'exception autour de boissons artisanales.",
        width: "752px",
        height: "422px"
      },
      { 
        titre: "Vidéo - Chaone Café", 
        type: "video", 
        url: "/videos/Chaone.mp4", 
        description: "Réalisation d'une vidéo très courte au format vertical, destinée aux réseaux de type Instagram et TikTok. Le Chaone est un lieu qui fait bon y respirer les saveurs gourmandes et réconfortantes qui en émanent. Qu'on y aille seul pour travailler ou pour partager un moment avec ses proches, ce café de curiosité et un repère idéal pour passer un moment chaleureux.",
        width: "256px",
        height: "360px"
      },
      { 
        titre: "GIF - Animation 3D", 
        type: "photo", 
        url: "/images/Ecran_attente.gif",
        description: "Petit projet personnel, ce que vous voyez actuellement est une animation créée en totalité sous Blender et qui me sert d'écran d'attente sur ma chaîne Twitch. Je peux également intégrer des éléments en 3D dans mes vidéos, comme le logo du Poitou Bière Festival que vous pouvez voir au début de la vidéo accessible via la liste déroulante.",
        width: "784px",
        height: "360px"
      },
      { 
        titre: "Photographie - Challoween", 
        type: "photo",  
        url: [ // plusieurs images
          ["/images/halloween_2023/Halloween6.jpg", "/images/halloween_2023/Halloween5.jpg"],
          ["/images/halloween_2023/Halloween4.jpg", "/images/halloween_2023/Halloween3.jpg"]
        ],
        description: "La vidéo étant l'art de manier les images et de les animer, il est aussi intéressant de savoir manier l'art de l'image fixe. C'est pourquoi je m'adonne parfois à la photographie.",
        width: "400px",
        height: "288px"
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
      className="w-full min-h-screen flex items-center justify-center bg-brun-terreux/5 text-blanc-casse "
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 max-h-[90vh] overflow-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">Expériences</h1>

        {/* Boutons des catégories */}
        <div className="flex gap-8 mb-8">
          {["formations", "informatique", "audiovisuel"].map((category) => (
            <div
              key={category}
              className={`text-2xl font-semibold px-6 py-3 rounded cursor-pointer transition duration-300 flex text-center justify-center
                          ${selectedCategory === category ? "bg-yellow-500 text-gray-900" : "bg-gray-800 hover:bg-yellow-400"}`}
              onClick={() => changeCategory(category)} // 💡 Clic au lieu du survol
            >
              {category === "formations" && "📚 Formations"}
              {category === "informatique" && "💻 Expériences Informatiques"}
              {category === "audiovisuel" && "🎬 Expériences Audiovisuelles"}
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
            <div className=" max-h-screen min-w-screen p-6 bg-gray-900 rounded-lg shadow-lg min-h-[200px] transition-all duration-500 overflow-auto">

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
                            <PixelTransition
                            firstContent={
                            <img
                              key={index}
                              className="rounded-lg object-cover"
                              width={experiences.audiovisuel[selectedAudiovisual].width}
                              height={experiences.audiovisuel[selectedAudiovisual].height}
                              src={imgSrc[0]}
                              alt={`${experiences.audiovisuel[selectedAudiovisual].titre} - ${index + 1}`}
                            />
                            }
                            secondContent={
                              <img
                                key={index}
                                className="rounded-lg object-cover"
                                width={experiences.audiovisuel[selectedAudiovisual].width}
                                height={experiences.audiovisuel[selectedAudiovisual].height}
                                src={imgSrc[1]}
                                alt={`${experiences.audiovisuel[selectedAudiovisual].titre} - ${index + 1}`}
                              />
                            }
                            gridSize={15}
                            pixelColor='#0D1B2A'
                            animationStepDuration={0.3}
                            className="custom-pixel-card"
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

              ) : selectedCategory === "formations" ? (
                experiences[selectedCategory].map((exp, index) => (
                  <div key={index} className="mb-4 text-center">
                    <h3 className="text-xl font-semibold text-yellow-400">{exp.titre}</h3>
                    <p className="text-gray-400">{exp.description}</p>
                    <p className="text-sm text-gray-300">{exp.annee}</p>
                  </div>
                ))
              ) : (
                experiences[selectedCategory].map((exp, index) => (
                  <div 
                    key={index} 
                    className="mb-4 text-center relative group"
                    onMouseEnter={() => setHoveredExperience(index)}
                    onMouseLeave={() => setHoveredExperience(null)}
                    initial={{ height: "auto" }}
                    animate={{ height: hoveredExperience === index ? "auto" : "auto" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h3 className="text-xl font-semibold text-yellow-400 cursor-pointer">{exp.titre}</h3>
                    <p className="text-sm text-gray-400 cursor-pointer">{exp.entreprise} - {exp.annee}</p>
                    {/* Description qui apparaît au survol */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredExperience === index ? 1 : 0, y: hoveredExperience === index ? 0 : -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`overflow-hidden text-gray-300 transition-all duration-1000 ease-in-out ${
                        hoveredExperience === index ? "max-h-[200px]" : "max-h-0"
                      }`}
                    >
                      {exp.description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </motion.div>
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

