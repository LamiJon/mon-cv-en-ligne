import { motion } from "framer-motion";
import SplitText from "./tailwindEffects/SplitText";
import AnimatedContent from './tailwindEffects/AnimatedContent'
import Lanyard from './tailwindEffects/Lanyard'

const About = () => {

  return (
    <motion.section className="w-full min-h-screen flex flex-row items-center justify-center text-blanc-casse">
      <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
      <div className="absolute ml-[400px] text-center flex flex-col p-6">
        <SplitText
          text="Bienvenue !"
          className="text-4xl font-bold"
          delay={60}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <SplitText
          text="Ici, vous allez apprendre à mieux me connaitre."
          className="text-4xl font-bold mb-8"
          delay={60}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={0.5}
          threshold={0.2}
        >
          <p className="text-lg max-w-4xl mx-auto">
            Moi c'est Jonathan Brachet et je suis développeur orienté plutôt backend avec trois ans d'expériences dans ce domaine.<br></br>Je suis également vidéaste autodidacte. Je réalises des vidéos pour mes clients afin de mettre en avant leur service.<br></br>Ce que j'aime dans l'informatique et la vidéo, c'est l'aspect créatif. Le fait de concevoir et de pouvoir constater visuellement du résultat est quelque chose de très stimulant pour moi. Cet aspect créatif permet aussi de se creuser les méninges, de toujours se surpasser pour trouver des idées originales. De plus, la constante évolution technologique dans ces domaines permettent de toujours maintenir de l'attrait, de part la curiosité qu'elle suscite.<br></br>En somme : on ne s'ennuie jamais 😃
          </p>
        </AnimatedContent>
      </div>
    </motion.section>
  );
};

export default About;



