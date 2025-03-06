import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Interets = () => {

  return (
    <motion.section
      id="Interets"
      className="w-full min-h-screen flex items-center justify-center bg-bleu-nuit/20"
      /*initial={{ opacity: 0, y: 50 }} // Départ invisible et en bas
      animate={{ opacity: 1, y: 0 }} // Apparition et montée
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }} // Animation fluide*/
    >
      <div className="text-center text-blanc-casse">
        <h2 className="text-4xl font-bold mb-6">Intérêts</h2>
        <ul className="mt-4 space-y-2">
          <li className="w-800 h-10">
            🎥 Cinéma : 
            <Link
                to="/films"
                className="px-3 py-3 bg-bleu-nuit/50 text-blanc-casse rounded-lg hover:bg-bleu-nuit transition duration-300"
            >
                Voir les films que j’ai vus 🎬
            </Link>
          </li>
          <li className="w-800 h-10">
            🍕 Cuisine :
            <Link
                to="/cuisine"
                className="px-3 py-3 bg-bleu-nuit/50 text-blanc-casse rounded-lg hover:bg-bleu-nuit transition duration-300"
            >
                Découvrir les chaines de cuisine Youtube que je suis 🍴
            </Link></li>
          <li className="w-800 h-10">
            🎙️ Streaming :
            <a
                href="https://www.twitch.tv/lamijon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 bg-bleu-nuit/50 text-blanc-casse rounded-lg hover:bg-bleu-nuit transition duration-300"
            >
                Visiter ma chaîne Twitch 🕹️
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Interets;