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
          Je m'appelle Jonathan Brachet, développeur backend avec trois ans d'expérience dans le domaine, et également vidéaste autodidacte. J'accompagne mes clients en réalisant des vidéos percutantes pour mettre en valeur leurs services.<br/>Ce qui me passionne dans l’informatique et la vidéo, c’est leur dimension créative. Concevoir un projet, voir une idée prendre forme et donner un résultat concret et visuel est quelque chose de très stimulant pour moi. Ces domaines exigent également une remise en question constante, un esprit d’innovation et une capacité à résoudre des problèmes de manière originale.<br/>Enfin, la technologie évolue sans cesse, offrant toujours de nouveaux défis à relever et nourrissant une curiosité insatiable. En somme, impossible de s’ennuyer ! 😃
          </p>
        </AnimatedContent>
      </div>
    </motion.section>
  );
};

export default About;



