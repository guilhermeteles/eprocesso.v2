import React, { useState } from 'react';
import SidebarHeader from './SidebarHeader';
import { SIDEBAR_WIDTH } from '@/constants';
import Documents from './Documents';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onResize: (width: number) => void;
  sidebarWidth: number; // Add this property
  isMobile: boolean;
};

export default function Sidebar({ isOpen, onClose, onResize }: SidebarProps) {
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH); // Default width in pixels
  const minWidth = 260; // Minimum width in pixels
  const maxWidth = 700; // Maximum width in pixels
  const isDragging = React.useRef(false); // Ref to track dragging state

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      const newWidth = Math.min(Math.max(e.clientX, minWidth), maxWidth);
      setSidebarWidth(newWidth);
      onResize(newWidth); // Notify parent of the new width
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className={`bg-white fixed top-0 left-0 z-50 h-screen transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
      }`}
      style={{
        width: isOpen && window.innerWidth <= 640 ? '100%' : `${sidebarWidth}px`, // Full width on mobile
      }}
    >
      <div>
        <SidebarHeader onClose={onClose} />
        <Documents/>
      </div>

      {window.innerWidth > 640 && (
        <div
          className="absolute top-0 -right-2 h-full w-2 cursor-ew-resize bg-gray-100"
          onMouseDown={handleMouseDown}
        ></div>
      )}
    </div>
  );
}
