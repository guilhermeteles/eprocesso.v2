import { useState, useEffect } from 'react';
import CardNotas from './CardNotas';
import CardPendencias from './CardPendencias';

export default function Cards() {
  const [numCols, setNumCols] = useState<number>(1);

  useEffect(() => {
    const calculateColumns = () => {
      const containerWidth = document.querySelector('.grid')?.clientWidth || 0;
      const columnWidth = 340; // Matches the `minmax(340px, 1fr)` in the grid definition
      setNumCols(Math.max(1, Math.floor(containerWidth / columnWidth)));
    };

    // Initial calculation
    calculateColumns();

    // Recalculate on resize
    window.addEventListener('resize', calculateColumns);
    return () => {
      window.removeEventListener('resize', calculateColumns);
    };
  }, []);

  return (
    <div className="grid w-full h-full ml-1 sm:p-8 gap-4 items-start overflow-y-auto sm:overflow-y-none container-fluid grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
      <CardPendencias numCols={numCols} />
      <CardNotas numCols={numCols} />
      <div className={`h-fit ${numCols === 3 ? '' : 'hidden'}`}></div>
    </div>
  );
}
