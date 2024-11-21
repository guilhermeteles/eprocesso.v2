import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import { SIDEBAR_WIDTH } from '@/constants';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH); // Default sidebar width in pixels
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 640;

      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);

        if (isNowMobile) {
          setSidebarWidth(window.innerWidth); // Full width on mobile
        } else {
          setSidebarWidth(SIDEBAR_WIDTH); // Reset sidebar width
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onResize={(width) => setSidebarWidth(width)}
        sidebarWidth={sidebarWidth}
        isMobile={isMobile}
      />

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <MainContent
        isSidebarOpen={isSidebarOpen}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        sidebarWidth={isMobile ? 0 : sidebarWidth}
      />
    </div>
  );
}
