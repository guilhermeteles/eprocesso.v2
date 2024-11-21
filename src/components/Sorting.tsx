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
import { useColorContext } from '@/context/ColorContext';

export default function Sorting() {
  const [view, setView] = useState<"hierarchical" | "chronological">("hierarchical");
  const [selectedChronological, setSelectedChronological] = useState<"asc" | "desc">("asc");
  const { headerColorDarkest, headerColorDarker } = useColorContext();

  return (
    <div style={{ backgroundColor: headerColorDarker }} className="rounded-md flex items-center">
      {/* First group of buttons */}
      <div className="py-1 px-1.5 gap-1 flex border-r border-white/20">
      <Button
        variant="darkestBlue"
        size="empty"
        style={{
          // backgroundColor: headerColorDarker,
          color: view === "hierarchical" ? ORANGE : "inherit", // Use ORANGE when active
        }}
        className="p-1 rounded-sm"
        onClick={() => setView("hierarchical")}
      >
        <FontAwesomeIcon icon={faThList} />
      </Button>
      <Button
        variant="darkestBlue"
        size="empty"
        style={{
          // backgroundColor: headerColorDarker,
          color: view === "chronological" ? ORANGE : "inherit", // Use ORANGE when active
        }}
        className="p-1 rounded-sm"
        onClick={() => setView("chronological")}
      >
        <FontAwesomeIcon icon={faCalendarDays} className="-mt-0.5" />
      </Button>

      </div>

      {/* Second group of buttons (conditional) */}
      <div style={{ backgroundColor: headerColorDarkest }} className="p-1 gap-1 flex rounded-r-md">
        {view === "hierarchical" ? (
          <>
            <Button variant="darkBlue" size="empty" className="p-1 rounded-sm">
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <Button variant="darkBlue" size="empty" className="p-1 rounded-sm">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="darkBlue"
              size="empty"
              style={{
                color: selectedChronological === "asc" ? ORANGE : "inherit", // Use ORANGE when active
              }}
              className="p-1 rounded-sm"
              onClick={() => setSelectedChronological("asc")}
            >
              <FontAwesomeIcon icon={faArrowDown19} />
            </Button>
            <Button
              variant="darkBlue"
              size="empty"
              style={{
                color: selectedChronological === "desc" ? ORANGE : "inherit", // Use ORANGE when active
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
