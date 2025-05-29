import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);
  const rowRefs = useRef([]); // Array of refs for each row
  const mouseXRef = useRef(window.innerWidth / 2);

  // Ensure the grid has 45 items (5 rows x 9 columns) by default
  const totalItems = 45;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 700;
      const baseDuration = 0.8; // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

          // Apply inertia and staggered stop
          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"
        ></div>
        <div
          className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-5 grid-cols-1 rotate-[-15deg] origin-center z-[2]"
        >
          {[...Array(5)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-9"
              style={{ willChange: 'transform, filter' }}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(9)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 9 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div
                      className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1.5rem]"
                    >
                      {typeof content === 'string' && content.startsWith('/') ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                          style={{ backgroundImage: `url(${content})` }}
                          onClick={() => setSelectedImage(content)}
                        ></div>
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Image fullscreen"
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
  );
};

export default GridMotion;
