import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import MainContentHeader from './MainContentHeader';
import Cards from './Cards';

interface Props {
  onMenuToggle: () => void; // Function type with no arguments and no return value
  isSidebarOpen: boolean;   // Boolean type for sidebar state
  sidebarWidth: number;     // Number type for sidebar width
  colorMode: 'colorido' | 'outline'; // Accept colorMode as a prop
}

// Function to dynamically retrieve MainContentHeader height
export const getMainContentHeaderHeight = (): number | null => {
  const headerElement = document.getElementById('MainContentHeader');
  return headerElement ? headerElement.offsetHeight : null;
};

export default function MainContent({ onMenuToggle, sidebarWidth, colorMode }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    // Handle window resize to update header height
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  console.log('Header Height:', headerHeight); // Debug log
  const numCols = window.innerWidth > 1024 ? 3 : 2;
  return (
    <div
      className="flex-1 flex flex-col bg-[#F7F9FA]"
      style={{
        marginLeft: window.innerWidth > 640 ? `${sidebarWidth}px` : '0', // Adjust content margin based on sidebar width
        width: `${sidebarWidth}px`,
      }}
    >
      {/* Header */}
      <div ref={headerRef} id="MainContentHeader">
        <MainContentHeader onMenuToggle={onMenuToggle} colorMode={colorMode} />
      </div>

      {/* Content */}
      <Cards numCols={numCols} />
    </div>
  );
}

MainContent.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  sidebarWidth: PropTypes.number.isRequired,
  colorMode: PropTypes.oneOf(['colorido', 'outline']).isRequired, // Add PropTypes validation
};
