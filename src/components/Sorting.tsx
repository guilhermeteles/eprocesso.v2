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

  return (
    <div 
      className={`${darker} rounded-md flex items-center`}
    >
      {/* First group of buttons */}
      <div className="py-1 px-1.5 gap-1 flex border-r border-white/10">
        <Button
          variant="darker"
          size="empty"
          style={{
            color: view === "hierarchical" ? ORANGE : "#ffffff77", // Use ORANGE when active
          }}
          className="p-1 rounded-sm"
          onClick={() => setView("hierarchical")}
        >
          <FontAwesomeIcon icon={faThList} />
        </Button>
        <Button
          variant="darker"
          size="empty"
          style={{
            color: view === "chronological" ? ORANGE : "#ffffff77", // Use ORANGE when active
          }}
          className="p-1 rounded-sm"
          onClick={() => setView("chronological")}
        >
          <FontAwesomeIcon icon={faCalendarDays} className="-mt-0.5" />
        </Button>
      </div>

      {/* Second group of buttons (conditional) */}
      <div className={`${darkest} p-1 gap-1 flex rounded-r-md`}>
        {view === "hierarchical" ? (
          <>
            <Button 
              variant="darkest" 
              size="empty"
              className="p-1 rounded-sm text-[#ffffff77]"
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <Button 
              variant="darkest" 
              size="empty"
              className="p-1 rounded-sm text-[#ffffff77]"
            >
              <FontAwesomeIcon icon={faBarsStaggered} />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="darkest"
              size="empty"
              style={{
                color: selectedChronological === "asc" ? ORANGE : "#ffffff77", // Use ORANGE when active
              }}
              className="p-1 rounded-sm"
              onClick={() => setSelectedChronological("asc")}
            >
              <FontAwesomeIcon icon={faArrowDown19} />
            </Button>
            <Button
              variant="darkest"
              size="empty"
              style={{
                color: selectedChronological === "desc" ? ORANGE : "#ffffff77", // Use ORANGE when active
              }}
              className="p-1 rounded-sm"
              onClick={() => setSelectedChronological("desc")}
            >
              <FontAwesomeIcon icon={faArrowUp19} />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
