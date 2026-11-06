import { useState, useEffect } from 'react';
import { UniverseNav } from './components/UniverseNav';
import { UniverseHero } from './components/UniverseHero';
import { DimensionWhoIAm } from './components/DimensionWhoIAm';
import { DimensionJourney } from './components/DimensionJourney';
import { DimensionCreative } from './components/DimensionCreative';
import { DimensionTech } from './components/DimensionTech';
import { DimensionExperiences } from './components/DimensionExperiences';
import { DimensionFuture } from './components/DimensionFuture';
import { UniverseFooter } from './components/UniverseFooter';

export function App() {
  const [activeChapter, setActiveChapter] = useState<string>('home');

  const handleWarpToDimension = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Section observer for active dimension
  useEffect(() => {
    const dimensionIds = ['home', 'identity', 'journey', 'creative', 'tech', 'experiences', 'future'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = dimensionIds.length - 1; i >= 0; i--) {
        const id = dimensionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveChapter(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070A08] text-[#F5F7F5] selection:bg-[#75F0A8]/20 selection:text-[#75F0A8] font-sans antialiased overflow-x-hidden">
      {/* Sticky Universal Dimension Navigator */}
      <UniverseNav
        activeChapter={activeChapter}
        onSelectChapter={handleWarpToDimension}
      />

      {/* Main Dimensional Stream */}
      <main>
        {/* Gateway Homepage */}
        <UniverseHero onWarpToDimension={handleWarpToDimension} />

        {/* 01. WHO I AM */}
        <DimensionWhoIAm />

        {/* 02. MY JOURNEY */}
        <DimensionJourney />

        {/* 03. MY CREATIVE WORLD */}
        <DimensionCreative />

        {/* 04. MY TECH WORLD */}
        <DimensionTech />

        {/* 05. MY EXPERIENCES */}
        <DimensionExperiences />

        {/* 06. MY FUTURE */}
        <DimensionFuture />
      </main>

      {/* Living Universe Archive Footer */}
      <UniverseFooter onWarpToDimension={handleWarpToDimension} />
    </div>
  );
}

export default App;
