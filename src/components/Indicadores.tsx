import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faLink, faTrashAlt, faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { useColorContext } from '@/context/ColorContext';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip'; // Adjust the import path

export default function Indicadores() {
  const { darkest } = useColorContext();
  const [activeIcon, setActiveIcon] = useState(null);

  const tooltips = {
    share: 'Indicação de que o processo está na situação compartilhado.',
    link: 'Esse processo está envolvido em juntada ou vínculo.',
    trash: 'Esse processo não está mais no controle do e-Processo.',
    archive: 'Esse processo está arquivado.',
  };

  const toggleTooltip = (icon) => {
    setActiveIcon((prev) => (prev === icon ? null : icon));
  };

  return (
    <div
      className={`${darkest} py-1 px-3 gap-3 rounded-md flex items-center justify-around group`}
    >
      <TooltipProvider delayDuration={0}>
        {/* Compartilhado */}
        <Tooltip>
          <TooltipTrigger
            onMouseEnter={() => setActiveIcon('share')}
            onMouseLeave={() => setActiveIcon(null)}
            onClick={() => toggleTooltip('share')}
          >
            <FontAwesomeIcon
              icon={faShareAlt}
              className="text-orange-500 opacity-100 group-hover:opacity-50 hover:opacity-100 FontAwesomeIcon cursor-pointer"
            />
          </TooltipTrigger>
          {activeIcon === 'share' && (
            <TooltipContent>{tooltips.share}</TooltipContent>
          )}
        </Tooltip>

        {/* Juntada/Vínculo */}
        <Tooltip>
          <TooltipTrigger
            onMouseEnter={() => setActiveIcon('link')}
            onMouseLeave={() => setActiveIcon(null)}
            onClick={() => toggleTooltip('link')}
          >
            <FontAwesomeIcon
              icon={faLink}
              className="opacity-100 group-hover:opacity-50 hover:opacity-100 FontAwesomeIcon cursor-pointer"
            />
          </TooltipTrigger>
          {activeIcon === 'link' && (
            <TooltipContent>{tooltips.link}</TooltipContent>
          )}
        </Tooltip>

        {/* Excluído */}
        <Tooltip>
          <TooltipTrigger
            onMouseEnter={() => setActiveIcon('trash')}
            onMouseLeave={() => setActiveIcon(null)}
            onClick={() => toggleTooltip('trash')}
          >
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="opacity-100 group-hover:opacity-50 hover:opacity-100 FontAwesomeIcon cursor-pointer"
            />
          </TooltipTrigger>
          {activeIcon === 'trash' && (
            <TooltipContent>{tooltips.trash}</TooltipContent>
          )}
        </Tooltip>

        {/* Arquivado */}
        <Tooltip>
          <TooltipTrigger
            onMouseEnter={() => setActiveIcon('archive')}
            onMouseLeave={() => setActiveIcon(null)}
            onClick={() => toggleTooltip('archive')}
          >
            <FontAwesomeIcon
              icon={faBoxesPacking}
              className="opacity-100 group-hover:opacity-50 hover:opacity-100 FontAwesomeIcon cursor-pointer"
            />
          </TooltipTrigger>
          {activeIcon === 'archive' && (
            <TooltipContent>{tooltips.archive}</TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
