import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [height, setHeight] = useState(0);

  // 🔍 Vérifier la hauteur du ref après le rendu
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
      console.log('Hauteur détectée du ref:', rect.height);
    }
  }, []);

  // 📜 Écoute du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 🏁 Calculer le progrès du scroll avec offset (comme useScroll)
      const startOffset = viewportHeight * 0.1; // Équivalent à "start 10%"
      const endOffset = viewportHeight * 0.5; // Équivalent à "end 50%"

      // Progression entre 0 et 1 selon la visibilité
      let progress =
        (viewportHeight - rect.top - startOffset) / (rect.height + endOffset);

      progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 et 1
      setScrollProgress(progress);

      console.log('📊 Scroll progress:', progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="relative max-w-7xl mx-auto py-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Mon parcours
        </h2>
        <div ref={ref} className="relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-50 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}{' '}
              </div>
            </div>
          ))}

          {/* 🔥 Barre de progression avec height dynamique */}
          <div
            style={{ height: height + 'px' }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] z-40 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
          >
            <motion.div
              style={{
                height: `${scrollProgress * height}px`, // 🏁 Dynamique avec le scroll
                opacity: scrollProgress,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
