import GridMotion from './tailwindEffects/GridMotion';
import Dock from './tailwindEffects/Dock';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [showVideo, setShowVideo] = useState(false);

  const items_gridmotion_portrait = [
    "/images/Portraits/blossac.jpg",
    "/images/Portraits/noir.jpg",
    "/images/Portraits/cafe.JPG",
    "/images/Portraits/flims.JPG",
    "/images/Portraits/bleu.jpg",
    "/images/Portraits/pensive.JPG",
    "/images/Portraits/rouge.jpg",
    "/images/Portraits/vert.jpg",
    "/images/Portraits/vladi.JPG",

    "/images/Portraits/blossac.jpg",
    "/images/Portraits/noir.jpg",
    "/images/Portraits/cafe.JPG",
    "/images/Portraits/flims.JPG",
    "/images/Portraits/bleu.jpg",
    "/images/Portraits/pensive.JPG",
    "/images/Portraits/rouge.jpg",
    "/images/Portraits/vert.jpg",
    "/images/Portraits/vladi.JPG",

    "/images/Portraits/blossac.jpg",
    "/images/Portraits/noir.jpg",
    "/images/Portraits/cafe.JPG",
    "/images/Portraits/flims.JPG",
    "/images/Portraits/bleu.jpg",
    "/images/Portraits/pensive.JPG",
    "/images/Portraits/rouge.jpg",
    "/images/Portraits/vert.jpg",
    "/images/Portraits/vladi.JPG",

    "/images/Portraits/blossac.jpg",
    "/images/Portraits/noir.jpg",
    "/images/Portraits/cafe.JPG",
    "/images/Portraits/flims.JPG",
    "/images/Portraits/bleu.jpg",
    "/images/Portraits/pensive.JPG",
    "/images/Portraits/rouge.jpg",
    "/images/Portraits/vert.jpg",
    "/images/Portraits/vladi.JPG",

    "/images/Portraits/blossac.jpg",
    "/images/Portraits/noir.jpg",
    "/images/Portraits/cafe.JPG",
    "/images/Portraits/flims.JPG",
    "/images/Portraits/bleu.jpg",
    "/images/Portraits/pensive.JPG",
    "/images/Portraits/rouge.jpg",
    "/images/Portraits/vert.jpg",
    "/images/Portraits/vladi.JPG",
  ];

  const items_gridmotion_animaux = [
    '/images/Animaux/chaton3.JPG',
    '/images/Animaux/meduse.JPG',
    '/images/Animaux/chaton1.JPG',
    '/images/halloween_2023/Halloween3.jpg',
    '/images/Animaux/chaton2.jpg',
    '/images/Animaux/double_expo.JPG',
    '/images/Animaux/shouken1.jpg',
    '/images/Animaux/chaton8.JPG',
    '/images/halloween_2023/Halloween5.jpg',

    '/images/Animaux/chaton3.JPG',
    '/images/Animaux/meduse.JPG',
    '/images/Animaux/chaton1.JPG',
    '/images/halloween_2023/Halloween3.jpg',
    '/images/Animaux/chaton2.jpg',
    '/images/Animaux/double_expo.JPG',
    '/images/Animaux/shouken1.jpg',
    '/images/Animaux/chaton8.JPG',
    '/images/halloween_2023/Halloween5.jpg',

    '/images/Animaux/chaton3.JPG',
    '/images/Animaux/meduse.JPG',
    '/images/Animaux/chaton1.JPG',
    '/images/halloween_2023/Halloween3.jpg',
    '/images/Animaux/chaton2.jpg',
    '/images/Animaux/double_expo.JPG',
    '/images/Animaux/shouken1.jpg',
    '/images/Animaux/chaton8.JPG',
    '/images/halloween_2023/Halloween5.jpg',

    '/images/Animaux/chaton3.JPG',
    '/images/Animaux/meduse.JPG',
    '/images/Animaux/chaton1.JPG',
    '/images/halloween_2023/Halloween3.jpg',
    '/images/Animaux/chaton2.jpg',
    '/images/Animaux/double_expo.JPG',
    '/images/Animaux/shouken1.jpg',
    '/images/Animaux/chaton8.JPG',
    '/images/halloween_2023/Halloween5.jpg',

    '/images/Animaux/chaton3.JPG',
    '/images/Animaux/meduse.JPG',
    '/images/Animaux/chaton1.JPG',
    '/images/halloween_2023/Halloween3.jpg',
    '/images/Animaux/chaton2.jpg',
    '/images/Animaux/double_expo.JPG',
    '/images/Animaux/shouken1.jpg',
    '/images/Animaux/chaton8.JPG',
    '/images/halloween_2023/Halloween5.jpg',
  ];
  
  const items_gridmotion_evenement = [
    '/images/Evenements/Gamer_Assembly_2022/P1001167.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001174.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001177.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001187.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001192.JPG',
    '/images/Evenements/Gamer_Assembly_2023/GA2023.jpg',
    '/images/Evenements/Gamer_Assembly_2023/GA2023_2.jpg',
    '/images/Evenements/Gamer_Assembly_2023/P1000099.JPG',
    '/images/Evenements/Gamer_Assembly_2023/P1000859.JPG',

    '/images/Evenements/Pictasia_2024/P1003714.JPG',
    '/images/Evenements/Pictasia_2024/P1003748.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001167.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001174.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001177.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001187.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001192.JPG',
    '/images/Evenements/Gamer_Assembly_2023/GA2023.jpg',
    '/images/Evenements/Gamer_Assembly_2023/GA2023_2.jpg',

    '/images/Evenements/Gamer_Assembly_2023/P1000099.JPG',
    '/images/Evenements/Gamer_Assembly_2023/P1000859.JPG',
    '/images/Evenements/Pictasia_2024/P1003714.JPG',
    '/images/Evenements/Pictasia_2024/P1003748.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001167.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001174.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001177.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001187.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001192.JPG',

    '/images/Evenements/Gamer_Assembly_2023/GA2023.jpg',
    '/images/Evenements/Gamer_Assembly_2023/GA2023_2.jpg',
    '/images/Evenements/Gamer_Assembly_2023/P1000099.JPG',
    '/images/Evenements/Gamer_Assembly_2023/P1000859.JPG',
    '/images/Evenements/Pictasia_2024/P1003714.JPG',
    '/images/Evenements/Pictasia_2024/P1003748.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001167.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001174.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001177.JPG',

    '/images/Evenements/Gamer_Assembly_2022/P1001187.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001192.JPG',
    '/images/Evenements/Gamer_Assembly_2023/GA2023.jpg',
    '/images/Evenements/Gamer_Assembly_2023/GA2023_2.jpg',
    '/images/Evenements/Gamer_Assembly_2023/P1000099.JPG',
    '/images/Evenements/Gamer_Assembly_2023/P1000859.JPG',
    '/images/Evenements/Pictasia_2024/P1003714.JPG',
    '/images/Evenements/Pictasia_2024/P1003748.JPG',
    '/images/Evenements/Gamer_Assembly_2022/P1001167.JPG',
  ];

  const items_gridmotion_autre = [
    '/images/Autres/20220805_143131.jpg',
    '/images/Autres/Chaone.jpg',
    '/images/Autres/Kim3.jpg',
    '/images/Autres/P1000205.JPG',
    '/images/Autres/P1000139.JPG',
    '/images/Autres/P1001822.JPG',
    '/images/Autres/tattoo1.png',
    '/images/Autres/P1000368.JPG',
    '/images/Autres/P1000386.JPG',

    '/images/Autres/tattoo2.png',
    '/images/Autres/P10011562.JPG',
    '/images/Autres/20220805_154949.jpg',
    '/images/Autres/P1000369.JPG',
    '/images/Autres/P1001823.JPG',
    '/images/Autres/P1000399.JPG',
    '/images/Autres/P1000392.JPG',
    '/images/Autres/20220805_143131.jpg',
    '/images/Autres/Chaone.jpg',

    '/images/Autres/Kim3.jpg',
    '/images/Autres/P1000205.JPG',
    '/images/Autres/P1000139.JPG',
    '/images/Autres/P1001822.JPG',
    '/images/Autres/tattoo1.png',
    '/images/Autres/P1000368.JPG',
    '/images/Autres/P1000386.JPG',
    '/images/Autres/tattoo2.png',
    '/images/Autres/P10011562.JPG',

    '/images/Autres/20220805_154949.jpg',
    '/images/Autres/P1000369.JPG',
    '/images/Autres/P1001823.JPG',
    '/images/Autres/P1000399.JPG',
    '/images/Autres/P1000392.JPG',
    '/images/Autres/20220805_143131.jpg',
    '/images/Autres/Chaone.jpg',
    '/images/Autres/Kim3.jpg',
    '/images/Autres/P1000205.JPG',

    '/images/Autres/P1000139.JPG',
    '/images/Autres/P1001822.JPG',
    '/images/Autres/tattoo1.png',
    '/images/Autres/P1000368.JPG',
    '/images/Autres/P1000386.JPG',
    '/images/Autres/tattoo2.png',
    '/images/Autres/P10011562.JPG',
    '/images/Autres/20220805_154949.jpg',
    '/images/Autres/P1000369.JPG'
  ];

  const [itemsGrid, setItemsGrid] = useState(items_gridmotion_portrait);

  const items_dock = [
    { icon: <img src="/logos/portrait.png" alt="Portraits" className="w-6 h-6" />, label: 'Portraits', onClick: () => setItemsGrid(items_gridmotion_portrait) },
    { icon: <img src="/logos/dog.png" alt="Animaux" className="w-5 h-5" />, label: 'Animaux', onClick: () => setItemsGrid(items_gridmotion_animaux) },
    { icon: <img src="/logos/ticket.png" alt="Evenements" className="w-5 h-6" />, label: 'Evenements', onClick: () => setItemsGrid(items_gridmotion_evenement) },
    { icon: <img src="/logos/beer.png" alt="PoitouBiereFestival" className="w-5 h-5" />, label: 'Video Poitou Biere Festival', onClick: () => setShowVideo(true) },
    { icon: <img src="/logos/more.png" alt="Autres" className="w-5 h-5" />, label: 'Autres', onClick: () => setItemsGrid(items_gridmotion_autre) }
  ];

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <GridMotion items={itemsGrid} />

      <div className="absolute bottom-0 w-full flex justify-center">
        <Dock
          className="z-10"
          items={items_dock}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
            >
              <motion.video
                src="/videos/PBF2023.mp4"
                controls
                autoPlay
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;