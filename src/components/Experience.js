/*function Experience() {
    return (
      <div>
        <h2>Expériences professionnelles</h2>
        <p>Développeur chez [Entreprise] - [Année]</p>
      </div>
    );
  }
  
  export default Experience;*/
  
import { motion } from "framer-motion";
import React, { useState } from "react";

const Experience = () => {

  /*return (
    <motion.section
      id="experience"
      className="w-full min-h-screen flex items-center justify-center bg-brun-terreux/20 text-blanc-casse "
      /*initial={{ opacity: 0, y: 50 }} // Départ invisible et en bas
      animate={{ opacity: 1, y: 0 }} // Apparition et montée
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }} // Animation fluide*/
  /*  >
      <div className="text-center place-items-center">

        <div className="px-6 py-2 size-fit rounded bg-black/50 center">
          <h2 className="text-5xl font-bold mb-4">Expériences professionnelles</h2>
          <p className="text-lg max-w-4xl mx-auto font-semibold underline">
            Employé polyvalent chez Escape Yourself Poitiers - Du 06/2024 au 01/2025
          </p>
          <p className="italic mb-2 max-w-3xl">
            Mission et tâches réalisées : 
            Accompagner les clients dans tout le processus d'une partie de jeu d'évasion gradeur nature.
            Dévellopement relationnel client/communication.
          </p>
          <p className="text-lg max-w-4xl mx-auto font-semibold underline">
            Vidéaste chez JonProduction (Auto-Entreprose) - Du 07/2023 (toujours actif)
          </p>
          <p className="italic mb-2 max-w-3xl">
            Mission et tâches réalisées : 
            Accompagner les clients dans la promotions de leur service grâce à la vidéo.
            Apprendre des nouvelles compétences.
          </p>
          <p className="text-lg max-w-4xl mx-auto font-semibold underline">
            Ingénieur d'étude chez ALTEN - Du 07/2019 au 04/2021
          </p>
          <p className="italic mb-2 max-w-3xl">
          Mission et tâches réalisées : 
          En mission à SAFRAN Electronics & Defense pour le développement de logiciels pour bancs de maintenance optronique.
          </p>
          <p className="text-lg max-w-4xl mx-auto font-semibold underline">
            Ingénieur hospitalier au CHU de Poitiers, Secteur Informatique - Du 10/2017 au 07/2018
          </p>
          <p className="italic mb-2 max-w-3xl">
            Mission et tâches réalisées : Retranscrire les formulaires de santé en format papier vers un format web sur l’intranet du site.
            Familiarisation au domaine hospitalier, Rencontre avec des professionnels de santé, Etudier les besoins, Superviser les phases de test.
          </p>
          <p className="text-lg max-w-4xl mx-auto font-semibold underline">
            Ingénieur informaticien à l'Université de Poitiers, Secteur Informatique - Du 01/2016 au 06/2016
          </p>
          <p className="italic mb-2 max-w-3xl">
            Mission et tâches réalisées : Développement d’une application sous Android.
            Saisie de dossier, Concevoir un cahier des charges, Superviser le projet.
          </p>
        </div>

        <div className="p-4 mx-2"></div>

        <div className="px-6 py-2 size-fit rounded bg-black/50 center">
          <h2 className="text-4xl font-bold mb-4">FORMATIONS</h2>
          <p className="text-lg max-w-2xl mx-auto font-semibold underline">
            Master Informatique, Mathématiques, Multimédia et Télécommunications
          </p>
          <p className="italic mb-2">
            2017 - Faculté des Sciences Fondamentales et Appliquées de l’Université de Poitiers
          </p>
          <p className="text-lg max-w-2xl mx-auto font-semibold underline">
            Licence Mathématiques, Informatique, Ingénierie, Physique et Chimie
          </p>
          <p className="italic mb-2">
            2015 -  Faculté des Sciences Fondamentales et Appliquées de l’Université de Poitiers
          </p>
          <p className="text-lg max-w-2xl mx-auto font-semibold underline">
            Baccalauréat (Scientifique)
          </p>
          <p className="italic">
            2011 -   Lycée Camille Guérin de Poitiers
          </p>
        </div>

      </div>
    </motion.section>
  );*/

  const [selectedCategory, setSelectedCategory] = useState("informatique"); // 💡 Expériences Informatique par défaut

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
        titre: "Court-métrage 'Reflets'", 
        type: "video", 
        url: "/videos/PBF2023.mp4", 
        description: "Un court-métrage expérimental sur l'illusion et la perception."
      },
      { 
        titre: "Vidéo promotionnelle 'Festival 2023'", 
        type: "video", 
        url: "/videos/Chaone.mp4", 
        description: "Réalisation d'une vidéo promo pour un événement culturel."
      },
      { 
        titre: "Photographie - Coucher de soleil", 
        type: "photo", 
        url: "/images/Ecran_attente.gif", 
        description: "Une photo capturée à la golden hour pour un projet personnel."
      },
      { 
        titre: "Photographie - Portrait en noir et blanc", 
        type: "photo", 
        url: "/images/halloween_2023/Halloween3.jpg", 
        description: "Un portrait expressif avec un jeu d'ombres et lumières."
      }
    ]
  };

  return (
    <motion.section
      id="experience"
      className="w-full min-h-screen flex items-center justify-center bg-brun-terreux/20 text-blanc-casse "
    >
      <div className="ablsolute min-h-screen min-w-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8">Expérience</h1>

        {/* Boutons des catégories */}
        <div className="flex gap-8 mb-12">
          {["formations", "informatique", "audiovisuel"].map((category) => (
            <div
              key={category}
              className={`text-2xl font-semibold px-6 py-3 rounded cursor-pointer transition duration-300 
                          ${selectedCategory === category ? "bg-yellow-500 text-gray-900" : "bg-gray-800 hover:bg-yellow-400"}`}
              onClick={() => setSelectedCategory(category)} // 💡 Clic au lieu du survol
            >
              {category === "formations" && "📚 Formations"}
              {category === "informatique" && "💻 Expériences Informatique"}
              {category === "audiovisuel" && "🎬 Expériences Audiovisuel"}
            </div>
          ))}
        </div>

        {/* Affichage dynamique des informations */}
        <div className="min-w-screen p-6 bg-gray-900 rounded-lg shadow-lg min-h-[200px] transition-all duration-500">
          {selectedCategory === "audiovisuel" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.audiovisuel.map((exp, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">{exp.titre}</h3>
                  {exp.type === "video" ? (
                    <iframe
                      className="w-full h-48 rounded-lg"
                      src={exp.url}
                      title={exp.titre}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img className="w-full h-48 object-cover rounded-lg" src={exp.url} alt={exp.titre} />
                  )}
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              ))}
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
      </div>
    </motion.section>
  );
};

export default Experience;

