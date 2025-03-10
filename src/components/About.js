import { motion } from "framer-motion";

const About = () => {

  return (
    <motion.section className="w-full min-h-screen flex items-center justify-center text-blanc-casse">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Bienvenue !<br></br>Ici, vous allez apprendre à mieux me connaitre.</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Moi c'est Jonathan Brachet et je suis développeur orienté plutôt backend avec trois ans d'expériences dans ce domaine.<br></br>Je suis également vidéaste autodidacte. Je réalises des vidéos pour mes clients afin de mettre en avant leur service.<br></br>Ce que j'aime dans l'informatique et la vidéo, c'est l'aspect créatif. Le fait de concevoir et de pouvoir constater visuellement du résultat est quelque chose de très stimulant pour moi. Cet aspect créatif permet aussi de se creuser les méninges, de toujours se surpasser pour trouver des idées originales. De plus, la constante évolution technologique dans ces domaines permettent de toujours maintenir de l'attrait, de part la curiosité qu'elle suscite.<br></br>En somme : on ne s'ennuie jamais 😃
        </p>
      </div>
    </motion.section>
  );
};

export default About;



