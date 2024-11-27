import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import {
  faArrowDown19,
  faArrowUp19,
  faBars,
  faBarsStaggered,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { ORANGE } from "@/constants";
import { useColorContext } from "@/context/ColorContext";

export default function Sorting() {
  const [view, setView] = useState<"hierarchical" | "chronological">("hierarchical");
  const [selectedChronological, setSelectedChronological] = useState<"asc" | "desc">("asc");
  const { darker, darkest } = useColorContext();

  const hierarchicalButtons = [
    { icon: faBars, label: "Flat view" },
    { icon: faBarsStaggered, label: "Indented view" },
  ];

  const chronologicalButtons: Array<{
    icon: any;
    label: string;
    value: "asc" | "desc"; // Explicitly type the value
  }> = [
    { icon: faArrowDown19, label: "Sort ascending", value: "asc" },
    { icon: faArrowUp19, label: "Sort descending", value: "desc" },
  ];

  return (
    <div className={`${darker} rounded-md flex items-center`}>
      {/* First group of buttons */}
      <div className="py-1 px-1.5 gap-1 flex border-r border-white/10">
        <Button
          variant="darker"
          size="empty"
          style={{
            color: view === "hierarchical" ? ORANGE : "#ffffff77",
          }}
          className="p-1 rounded-sm"
          onClick={() => setView("hierarchical")}
          aria-label="Switch to hierarchical view"
        >
          <FontAwesomeIcon icon={faThList} />
        </Button>
        <Button
          variant="darker"
          size="empty"
          style={{
            color: view === "chronological" ? ORANGE : "#ffffff77",
          }}
          className="p-1 rounded-sm"
          onClick={() => setView("chronological")}
          aria-label="Switch to chronological view"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="-mt-0.5" />
        </Button>
      </div>

      {/* Second group of buttons (conditional) */}
      <div className={`${darkest} p-1 gap-1 flex rounded-r-md`}>
        {view === "hierarchical"
          ? hierarchicalButtons.map(({ icon, label }, index) => (
              <Button
                key={index}
                variant="darkest"
                size="empty"
                className="p-1 rounded-sm text-[#ffffff77]"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} />
              </Button>
            ))
          : chronologicalButtons.map(({ icon, label, value }) => (
              <Button
                key={value}
                variant="darkest"
                size="empty"
                style={{
                  color: selectedChronological === value ? ORANGE : "#ffffff77",
                }}
                className="p-1 rounded-sm"
                onClick={() => setSelectedChronological(value)} // No more type error
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} />
              </Button>
            ))}
      </div>
    </div>
  );
}
