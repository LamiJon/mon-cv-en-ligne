import { motion } from "framer-motion";

const About = () => {

  return (
    <motion.section className="w-full min-h-screen flex items-center justify-center bg-bleu-nuit/20 text-blanc-casse">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Je suis un développeur passionné par la création d’expériences web modernes et interactives...
        </p>
      </div>
    </motion.section>
  );
};

export default About;



