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
        (viewportHeight - rect.top - startOffset) / (rect.height + endOffset) -
        0.05;

      progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 et 1
      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-transparent font-sans md:px-10">
      <div className="relative mx-auto max-w-7xl py-10">
        <div ref={ref} className="relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pb-10 pt-10 md:gap-10 md:pb-40 md:pt-40"
            >
              <div className="sticky top-24 z-50 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                {/* <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"> */}
                <div
                  className="bg-body-tertiary absolute flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ left: '0.78rem' }}
                >
                  {/* <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" /> */}
                  <div className="bg-body h-4 w-4 rounded-full border border-neutral-300 p-2 dark:border-neutral-700" />
                </div>
                <h3 className="hidden text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-5xl">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
                  {item.title}
                </h3>
                {item.content}{' '}
              </div>
            </div>
          ))}

          {/* 🔥 Barre de progression avec height dynamique */}
          <div
            style={{ height: height + 'px' }}
            className="absolute left-8 top-0 z-40 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 to-transparent dark:via-neutral-700 md:left-8"
          >
            <motion.div
              style={{
                height: `${scrollProgress * height}px`, // 🏁 Dynamique avec le scroll
                opacity:
                  scrollProgress < 0.9
                    ? 1
                    : Math.max(0, 1 - Math.pow((scrollProgress - 0.9) * 8, 2)),
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
