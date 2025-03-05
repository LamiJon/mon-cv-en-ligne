/*function Skills() {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg m-6">
      <h2 className="text-2xl font-semibold text-blue-600">Mes compétences</h2>
      <ul className="mt-4 space-y-2">
        <li className="text-gray-700">✅ JavaScript</li>
        <li className="text-gray-700">✅ React</li>
        <li className="text-gray-700">✅ Node.js</li>
        <li className="text-gray-700">✅ Base de données</li>
      </ul>
    </div>
  );
}

export default Skills;*/

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "/logos/react.svg",
    description: "Je suis le descriptif de React"
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
  /*const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.02); // ✅ Incrémente le temps toutes les 100ms
    }, 20);

    return () => clearInterval(interval); // ✅ Nettoie l'intervalle au démontage
  }, []);*/

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.section
      id="skills"
      //className="w-full min-h-screen flex items-center justify-center /*bg-gray-200*/ bg-gray-200/20"
      /*initial={{ opacity: 0, y: 50 }} // Départ invisible et en bas
      animate={{ opacity: 1, y: 0 }} // Apparition et montée
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }} // Animation fluide*/
    >
      {/*<div className="text-center text-blanc-casse">
        <h2 className="text-4xl font-bold mb-4">Compétences</h2>
        <ul className="mt-4 space-y-2">
          <li className>✅ JavaScript</li>
          <li className>✅ React</li>
          <li className>✅ Node.js</li>
          <li className>✅ Base de données</li>
        </ul>
      </div>*/}

      <div className="relative w-[900px] h-[900px] mx-auto rounded-full animate-[rotateEllipse_100s_linear_infinite] mt-12">
        {/* Texte explicatif au centre */}
        <div className="absolute w-[900px] h-[900px] rounded-full blur-2xl bg-gray-400/40 center"></div>
        <div className="absolute inset-0 flex items-center justify-center text-2xl text-black font-bold animate-[rotateSkill_100s_linear_infinite]">
          {activeSkill ? activeSkill.description : "Survolez un logo"}
        </div>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = 360 * Math.cos(angle); // Rayon du cercle
          const y = 360 * Math.sin(angle);
          
          return (
            <div
              key={index}
              className="absolute animate-[rotateSkill_100s_linear_infinite]"
              style={{
                //left: `calc(46% + ${(x*((Math.cos(time/20*4*Math.PI)/4)+0.75))-(y*((Math.sin(time/20*4*Math.PI)/2)))}px)`,
                left: `calc(46% + ${x}px)`,
                //top: `calc(46% + ${y*((-Math.cos(time/20*4*Math.PI)/2)+1.5)-(x*((Math.cos(time/20*4*Math.PI)/4)))}px)`,
                top: `calc(46% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setActiveSkill(skill)} // ✅ Change le logo actif
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className={`w-20 h-20 transform transition-transform duration-300 hover:scale-125 hover:invert" ${
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
