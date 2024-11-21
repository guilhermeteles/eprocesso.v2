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
import { HEADER_COLOR_DARKER, HEADER_COLOR_DARKEST, ORANGE } from "@/constants";

export default function Sorting() {
  const [view, setView] = useState<"hierarchical" | "chronological">("hierarchical");
  const [selectedChronological, setSelectedChronological] = useState<"asc" | "desc">("asc");

  return (
    <div style={{ backgroundColor: HEADER_COLOR_DARKER }} className="rounded-md flex items-center">
      {/* First group of buttons */}
      <div className="py-1 px-1.5 gap-1 flex border-r border-white/20">
        <Button
          variant="ghost"
          size="empty"
          style={{ backgroundColor: HEADER_COLOR_DARKER }}
          className={`p-1 rounded-sm ${
            view === "hierarchical" ? `text-[${ORANGE}]` : ""
          }`}
          onClick={() => setView("hierarchical")}
        >
          <FontAwesomeIcon icon={faThList} />
        </Button>
        <Button
          variant="ghost"
          size="empty"
          style={{ backgroundColor: HEADER_COLOR_DARKER }}
          className={`p-1 rounded-sm ${
            view === "chronological" ? `text-[${ORANGE}]` : ""
          }`}
          onClick={() => setView("chronological")}
        >
          <FontAwesomeIcon icon={faCalendarDays} className="-mt-0.5" />
        </Button>
      </div>

      {/* Second group of buttons (conditional) */}
      <div style={{ backgroundColor: HEADER_COLOR_DARKEST }} className="p-1 gap-1 flex rounded-r-md">
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
              className={`p-1 rounded-sm ${
                selectedChronological === "asc" ? `text-[${ORANGE}]` : ""
              }`}
              onClick={() => setSelectedChronological("asc")}
            >
              <FontAwesomeIcon icon={faArrowDown19} />
            </Button>
            <Button
              variant="darkBlue"
              size="empty"
              className={`p-1 rounded-sm ${
                selectedChronological === "desc" ? `text-[${ORANGE}]` : ""
              }`}
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
