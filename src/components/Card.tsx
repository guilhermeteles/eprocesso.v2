import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, ReactNode } from "react";
import { getMainContentHeaderHeight } from "./MainContent";

interface CardProps {
  icon: any; // Adjust the type if you have specific typing for FontAwesomeIcon
  title: string;
  content: ReactNode; // Allows flexible content like JSX or strings
  optionalTitleComplement?: ReactNode; // Optional complement to appear next to the title
  numCols: number; // Number of columns in the layout
}

export default function Card({
  icon,
  title,
  content,
  optionalTitleComplement,
  numCols,
}: CardProps) {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  // Effect to calculate the header height dynamically
  useEffect(() => {
    const updateHeight = () => {
      const height = getMainContentHeaderHeight();
      setHeaderHeight(height || null);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Dynamic styling based on number of columns
  const dynamicStyle =
    numCols === 1
      ? {
          height: "auto", // Allow height to adapt naturally for single-column layouts
        }
      : {
          maxHeight: headerHeight
            ? `calc(100vh - ${headerHeight}px - 64px)` // Account for header and padding
            : "auto",
        };

  return (
    <div
      className="bg-white px-6 pb-6 pt-4 shadow-md flex flex-col gap-4 "
      style={dynamicStyle}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          {title}
        </h2>
        {optionalTitleComplement && (
          <div className="flex items-center">{optionalTitleComplement}</div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 overflow-auto">{content}</div>
    </div>
  );
}
