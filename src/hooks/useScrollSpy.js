import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is within the offset from the top of the viewport
          if (rect.top <= offset && rect.bottom >= offset) {
            current = id;
            break;
          }
        }
      }

      // Fallback: If scrolled to the bottom, active is the last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = sectionIds[sectionIds.length - 1];
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
