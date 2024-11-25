import PropTypes from 'prop-types';
import MainContentHeader from './MainContentHeader';
import Cards from './Cards';

interface Props {
  onMenuToggle: () => void; // Function type with no arguments and no return value
  isSidebarOpen: boolean;   // Boolean type for sidebar state
  sidebarWidth: number;     // Number type for sidebar width
  colorMode: 'colorido' | 'outline'; // Accept colorMode as a prop
}

export default function MainContent({ onMenuToggle, sidebarWidth, colorMode }: Props) {
  return (
    <div
      className="flex-1 flex flex-col bg-[#F7F9FA]"
      style={{
        marginLeft: window.innerWidth > 640 ? `${sidebarWidth}px` : '0', // Adjust content margin based on sidebar width
        width: `${sidebarWidth}px`
      }}
    >
      {/* Header */}
      <MainContentHeader onMenuToggle={onMenuToggle} colorMode={colorMode} />

      {/* Content */}
      <Cards/>
    </div>
  );
}

MainContent.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  sidebarWidth: PropTypes.number.isRequired,
  colorMode: PropTypes.oneOf(['colorido', 'outline']).isRequired, // Add PropTypes validation
};
