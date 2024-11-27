import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStar,
  faHeart,
  faSquare,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

interface IconsListProps {
  icons: number[];
}

// Mapping of numbers to specific FontAwesome icons
const iconsMap: Record<number, any> = {
  1: faCircle,
  2: faStar,
  3: faHeart,
  4: faSquare,
  5: faHouse,
};

// Mapping of numbers to colors from Brasil.gov.br Design System
const colorsMap: Record<number, string> = {
  1: "#155BCB", // Blue
  2: "#FFCD07", // Yellow
  3: "#FF8C00", // Orange
  4: "#7FB135", // Green
  5: "#AD79E9", // Purple
};

// Mapping of numbers to titles for hints
const titlesMap: Record<number, string> = {
  1: "Circle Icon",
  2: "Star Icon",
  3: "Heart Icon",
  4: "Square Icon",
  5: "House Icon",
};

const IconsList: React.FC<IconsListProps> = ({ icons }) => {
  return (
    <div className="flex space-x-0.5">
      {icons.map((iconId, index) => {
        const icon = iconsMap[iconId];
        const color = colorsMap[iconId];
        const title = titlesMap[iconId];
        return (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="h-3 w-3"
            style={{ color }}
            title={title} // Add title for hint
          />
        );
      })}
    </div>
  );
};

export default IconsList;
