import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Draggable from "react-draggable";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

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

  return (
    <div className="text-foreground">
      <HoverCard openDelay={100} closeDelay={200}>
        <HoverCardTrigger
          className="flex items-center gap-2 cursor-pointer whitespace-nowrap text-white"
          onClick={onOpen}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          <span>{text}</span>
        </HoverCardTrigger>


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
                    <li><a className="hover:underline" href="#">Lei nº 10.180/2011 (Art. 26, §3º)</a></li>
                    <li><a className="hover:underline" href="#">Lei nº 12.527/2011 (Art. 22)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
      {isDraggable && (
        <Draggable>
          <div className="absolute border top-[40px] bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded w-100 z-50 cursor-move">

            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Informações de Sigilo</h2>
                <Button
                  onClick={onClose}
                  className="rounded p-2 text-foreground"
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
                    <li><a className="hover:underline" href="#">Lei nº 10.180/2011 (Art. 26, §3º)</a></li>
                    <li><a className="hover:underline" href="#">Lei nº 12.527/2011 (Art. 22)</a></li>
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
