import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "/logos/react.svg",
    description: "React est un framework qui allie parfaitement simplicité et efficacité. C’est une bibliothèque moderne et performante, idéale pour développer une interface interactive et fluide. Et React s’intègre parfaitement avec des librairies modernes comme Framer Motion (animations), Tailwind CSS (design responsive) et même Puppeteer pour récupérer dynamiquement du contenu."
  },
  { name: "JavaScript", logo: "/logos/javascript.svg",
    description: "JavaScript est un langage incontournable du web, qui m’a permis de rendre mon CV en ligne interactif et dynamique. Grâce à sa flexibilité et son intégration parfaite avec React, j’ai pu créer des animations fluides, gérer l’affichage des contenus et interagir avec des APIs externes comme Puppeteer et DeepL. Sa puissance côté front-end et back-end m’a offert une grande liberté dans le développement, tout en assurant une expérience utilisateur moderne et réactive."
  },
  { name: "C#", logo: "/logos/csharp.svg",
    description: "Utilisé pour l'évolution de l'intranet du CHU de Poitiers, C# est un langage moderne, puissant et polyvalent, conçu pour le développement d’applications performantes et maintenables. Son approche orientée objet et ses fonctionnalités avancées garantissent un développement fluide et efficace."
  },
  { name: "C++", logo: "/logos/cpp.svg",
    description: "Utilisé à Safran pour concevoir des séquences de test, C++ est un langage puissant et performant, reconnu pour sa gestion fine de la mémoire et son efficacité en calcul intensif. Grâce à son approche orientée objet et bas niveau, il permet de développer des applications rapides, optimisées et robustes, que ce soit pour la programmation système ou les logiciels embarqués."
  },
  { name: "HTML", logo: "/logos/html.svg",
    description: "HTML (HyperText Markup Language) est le fondement du web, permettant de structurer le contenu de mon CV en ligne. Grâce à sa simplicité et sa compatibilité universelle, j’ai pu organiser mes sections de manière claire et accessible, tout en intégrant facilement React, Tailwind CSS et JavaScript pour enrichir l’expérience utilisateur. Son rôle essentiel dans la création de pages web en fait un outil incontournable pour un site bien structuré."
  },
  { name: "Java", logo: "/logos/java.svg",
    description: "Java et C sont les langages de programmation les plus utilisés lors de mon cursus universitaire. Java est un langage robuste et polyvalent, reconnu pour sa fiabilité et sa portabilité. Grâce à son approche orientée objet, il permet de structurer efficacement le code et de créer des applications performantes.  Son utilisation dans des environnements backend et son écosystème riche en frameworks et outils en font un choix idéal pour le développement d’applications complexes."
  },
  { name: "Sql", logo: "/logos/sql.svg",
    description: "SQL (Structured Query Language) est un langage essentiel pour la gestion et l’exploitation des bases de données. Formé tout au long de mes études supérieurs et utilisé durant de mon parcours professionnel, au sein du CHU de Poitiers et à Safran, il m’a permis d’organiser, stocker et interroger efficacement des données, garantissant ainsi une récupération rapide et optimisée des informations. Grâce à sa puissance et sa flexibilité, SQL est idéal pour structurer des données relationnelles, assurer leur cohérence et exécuter des requêtes complexes en toute simplicité."
  },
  { name: "SVN", logo: "/logos/svn.svg",
    description: "SVN (Subversion) est un système de gestion de versions que j'ai été amené à utilisé lors de mon passage à Safran. Fiable et structuré, SVN est idéal pour le suivi et la gestion des modifications. Il permet de travailler en équipe tout en évitant les conflits, en gardant un contrôle précis des versions, avec un historique détaillé des changements. Un outil essentiel pour assurer la stabilité, la traçabilité et la collaboration dans le développement de n'importe quel projet."
  },
  { name: "VisualStudio", logo: "/logos/visualstudio.svg",
    description: "Visual Studio Code (VS Code) est un éditeur de code puissant, léger et hautement personnalisable. Grâce à ses extensions adaptées à React et Tailwind CSS, son autocomplétion intelligente et son intégration fluide avec Git, j’ai pu coder efficacement et sans friction. Son interface intuitive et ses outils de debugging intégrés m’ont permis d’optimiser mon workflow et d’améliorer la qualité de mon code."
  },
  { name: "Yarn", logo: "/logos/yarn.svg",
    description: "Yarn est un gestionnaire de paquets rapide et performant, idéal pour gérer les dépendances de mon projet de CV en ligne. Grâce à sa vitesse d’installation optimisée, il m’a permis d’installer et mettre à jour mes librairies React en toute fluidité. Yarn a rendu le développement de mon CV plus rapide et plus fiable."
  },
  { name: "Tailwind", logo: "/logos/tailwind.svg",
    description: "Tailwind CSS est un framework puissant et flexible, qui m’a permis de concevoir rapidement un design moderne pour mon CV en ligne. Grâce à Tailwind, j’ai pu styliser mes composants directement dans le HTML, sans écrire de fichiers CSS complexes. Cet outil m’a aidé à optimiser la mise en page et à améliorer l’esthétique générale du site, m'offrant un rendu professionnel et fluide."
  },
  { name: "API", logo: "/logos/api.svg",
    description: "Pour la création de mon CV en ligne, j’ai intégré plusieurs APIs afin d’enrichir l’expérience utilisateur et d’automatiser certaines fonctionnalités. Comme Puppeteer, pour extraire dynamiquement du contenu, comme les affiches et descriptions de films depuis Letterboxd, ou pour récupérer et afficher les dernières vidéos des chaînes que je suis dans la section Cuisine. Mais aussi DeepL API, pour traduire automatiquement en français les synopsis de films récupérés sur Letterboxd."
  },
  { name: "NI", logo: "/logos/ni.svg",
    description: "Outil principalement utilisé en mission à Safran, TestStand est un logiciel puissant et flexible conçu pour l’automatisation des tests en environnement industriel. Développé par NI (National Instruments), il permet de créer, exécuter et gérer des séquences de test de manière efficace, tout en s’intégrant facilement avec divers langages de programmation comme Python, C++ et LabVIEW. Grâce à son interface intuitive, sa gestion avancée des rapports et des bases de données, TestStand est un choix incontournable pour les ingénieurs cherchant fiabilité, traçabilité et gain de temps dans leurs processus de test."
  },
  { name: "Blender", logo: "/logos/blender.svg",
    description: "Blender est un logiciel 3D open-source ultra-puissant, idéal pour la modélisation, l’animation, le rendu et les effets visuels. Grâce à son moteur de rendu, il permet de créer des images réalistes et fluides en temps réel. Son interface flexible et personnalisable, ainsi que sa large communauté, en font un outil incontournable pour les artistes et développeurs. Gratuit, performant et polyvalent, Blender est la solution parfaite pour donner vie à ses projets"
  },
  { name: "DavinciResolve", logo: "/logos/davinciresolve.svg",
    description: "DaVinci Resolve est un logiciel puissant et complet, alliant montage, étalonnage, effets visuels et mixage audio en une seule plateforme. Réputé pour son interface intuitive et ses outils professionnels, il offre une précision exceptionnelle en colorimétrie, idéale pour donner un rendu cinématographique aux vidéos. Grâce à sa version gratuite ultra-complète et ses performances optimisées, c’est un choix incontournable pour les créateurs cherchant qualité, fluidité et polyvalence."
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [radius, setRadius] = useState(360); // ✅ Rayon par défaut

  useEffect(() => {
    const updateRadius = () => {
      const newRadius = Math.min(window.innerHeight*0.4, 360); // ✅ Ajuste le rayon selon l’écran
      setRadius(newRadius);
    };

    updateRadius(); // ✅ Appliquer dès le premier rendu
    window.addEventListener("resize", updateRadius); // ✅ Mettre à jour quand la fenêtre change

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <motion.section id="skills">

      <div className="relative w-[700px] 2xl:w-[900px] h-[700px] 2xl:h-[900px] mx-auto rounded-full animate-[rotateEllipse_100s_linear_infinite] mt-12">
        {/* Texte explicatif au centre */}
        <div className="absolute w-[700px] 2xl:w-[900px] h-[700px] 2xl:h-[900px] rounded-full blur-2xl bg-gray-500/40 center"></div>
        <div className="absolute inset-0 flex items-center justify-center animate-[rotateSkill_100s_linear_infinite]">
          <div className="w-[500px] 2xl:w-[600px] h-[550px] 2xl:h-[600px] rounded-full flex items-center justify-center p-4">
            <div className="max-h-[300px] overflow-auto text-black text-lg font-bold text-center">
              {activeSkill ? activeSkill.description : "Survolez un logo"}
            </div>
          </div>
        </div>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle); // Rayon du cercle
          const y = radius * Math.sin(angle);
          
          return (
            <div
              key={index}
              className="absolute animate-[rotateSkill_100s_linear_infinite]"
              style={{
                left: `calc(46% + ${x}px)`,
                top: `calc(46% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setActiveSkill(skill)} // ✅ Change le logo actif
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className={`w-16 h-16 transform transition-transform duration-300 hover:scale-125 hover:invert" ${
                  activeSkill?.name === skill.name 
                    ? "scale-125 invert" 
                    : "scale-100 invert-0"
                }`}/>
            </div>
          );
        })}
      </div>
      
    </motion.section>
  );
};

export default Skills;
