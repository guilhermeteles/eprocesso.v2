import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import Draggable from "react-draggable"; // Ensure react-draggable is installed

interface ProcessoSigilosoProps {
  text: string;
  icon?: IconDefinition;
  isDraggable: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function ProcessoSigiloso({
  text,
  icon,
  isDraggable,
  onOpen,
  onClose,
}: ProcessoSigilosoProps) {
  const [isDraggableVisible, setIsDraggableVisible] = useState(false);

  const toggleDraggable = () => {
    setIsDraggableVisible((prev) => !prev);
    if (!isDraggableVisible) {
      onOpen(); // Call onOpen when showing draggable
    } else {
      onClose(); // Call onClose when hiding draggable
    }
  };

  return (
    <div className="">
      {/* HoverCard trigger is always visible */}
      <HoverCard openDelay={100} closeDelay={200}>
        <HoverCardTrigger
          className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
          onClick={toggleDraggable} // Toggle draggable visibility
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          <span>{text}</span>
        </HoverCardTrigger>

        {/* Regular hover content */}
        {!isDraggable && (
          <HoverCardContent className="bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded w-100">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mt-[2px]">Informações de Sigilo</h2>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <div className="flex gap-2">
                  <div className="grow bg-gray-100 px-4 py-2">
                    <div className="text-xs font-semibold">Nível de Sigilo Interno</div>
                    Básico
                  </div>
                  <div className="grow bg-gray-100 px-4 py-2">
                    <div className="text-xs font-semibold">Nível de Sigilo Interno</div>
                    Básico
                  </div>
                </div>
                <div className="grow bg-gray-100 px-4 py-2">
                  <div className="text-xs font-semibold">Motivo do Sigilo</div>
                  Controle Interno
                </div>
                <div className="grow bg-gray-100 px-4 py-2">
                  <div className="text-xs font-semibold mb-1">Norma Regulamentadora</div>
                  <ul className="text-sm flex flex-col gap-1 list-disc pl-5">
                    <li>
                      <a className="hover:underline" href="#">
                        Lei nº 10.180/2011 (Art. 26, §3º)
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        Lei nº 12.527/2011 (Art. 22)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>

      {/* Draggable content, toggled on click */}
      {isDraggableVisible && (
        <Draggable>
          <div className="text-foreground fixed right-20 top-20 border bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded w-100 z-50 cursor-move">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Informações de Sigilo</h2>
                <Button
                  onClick={toggleDraggable}
                  className="rounded p-2"
                  size="empty"
                  variant="ghost"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-40 bg-gray-100 px-4 py-2">
                    <div className="text-xs font-semibold">Nível de Sigilo Interno</div>
                    Básico
                  </div>
                  <div className="w-40 bg-gray-100 px-4 py-2">
                    <div className="text-xs font-semibold">Nível de Sigilo Interno</div>
                    Básico
                  </div>
                </div>
                <div className="w-90 bg-gray-100 px-4 py-2">
                  <div className="text-xs font-semibold">Motivo do Sigilo</div>
                  Controle Interno
                </div>
                <div className="grow bg-gray-100 px-4 py-2">
                  <div className="text-xs font-semibold mb-1">Norma Regulamentadora</div>
                  <ul className="text-sm flex flex-col gap-1 list-disc pl-5">
                    <li>
                      <a className="hover:underline" href="#">
                        Lei nº 10.180/2011 (Art. 26, §3º)
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        Lei nº 12.527/2011 (Art. 22)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}
