import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "/logos/react.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit."
  },
  { name: "JavaScript", logo: "/logos/javascript.svg",
    description: "Je suis le descriptif de JavaScript"
  },
  { name: "C#", logo: "/logos/csharp.svg",
    description: "Je suis le descriptif de C#"
  },
  { name: "C++", logo: "/logos/cpp.svg",
    description: "Je suis le descriptif de C++"
  },
  { name: "HTML", logo: "/logos/html.svg",
    description: "Je suis le descriptif de HTML"
  },
  { name: "CSS", logo: "/logos/css.svg",
    description: "Je suis le descriptif de CSS"
  },
  { name: "Java", logo: "/logos/java.svg",
    description: "Je suis le descriptif de Java"
  },
  { name: "PHP", logo: "/logos/php.svg",
    description: "Je suis le descriptif de PHP"
  },
  { name: "Sql", logo: "/logos/sql.svg",
    description: "Je suis le descriptif de Sql"
  },
  { name: "SVN", logo: "/logos/svn.svg",
    description: "Je suis le descriptif de SVN"
  },
  { name: "VisualStudio", logo: "/logos/visualstudio.svg",
    description: "Je suis le descriptif de VisualStudio"
  },
  { name: "Yarn", logo: "/logos/yarn.svg",
    description: "Je suis le descriptif de Yarn"
  },
  { name: "Tailwind", logo: "/logos/tailwind.svg",
    description: "Je suis le descriptif de Tailwind"
  },
  { name: "API", logo: "/logos/api.svg",
    description: "Je suis le descriptif de API"
  },
  { name: "NI", logo: "/logos/ni.svg",
    description: "Je suis le descriptif de TestStand"
  },
  { name: "Blender", logo: "/logos/blender.svg",
    description: "Je suis le descriptif de Blender"
  },
  { name: "DavinciResolve", logo: "/logos/davinciresolve.svg",
    description: "Je suis le descriptif de Davinci Resolve"
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
