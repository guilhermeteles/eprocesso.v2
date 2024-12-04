import { useColorContext } from '@/context/ColorContext';
import HeaderTextCopy from '@/components/HeaderTextCopy';
import { useState } from 'react';
import Nav from './Nav';
import { faBars, faFile, faFileLines, faFolder, faFolderOpen, faHamburger, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import FavProcesso from '@/components/FavProcesso';
import Indicadores from './Indicadores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './ui/button';
import ProcessoSigiloso from './ProcessoSigiloso';

interface MainContentHeaderProps {
  onMenuToggle: () => void;
  colorMode: 'colorido' | 'outline';
}

export default function MainContentHeader({ onMenuToggle, colorMode }: MainContentHeaderProps) {
  const { darker, defaultColor } = useColorContext();
  const [isDraggable, setIsDraggable] = useState(false);

  const handleProcessoSigilosoClick = () => {
    setIsDraggable(true);
  };

  const closeProcessoSigiloso = () => {
    setIsDraggable(false);
  };

  return (
    <div className="sm:ml-2 w-full">
  <div className={`${defaultColor} overflow-x-auto`}>
    <header
      className={`${defaultColor} px-4 flex items-center h-[50px] gap-2 sm:gap-6 `}
    >
      <Button
        className={`${darker} sm:hidden rounded p-2`}
        size="empty"
        variant="ghost"
        onClick={onMenuToggle}
      >
        <FontAwesomeIcon icon={faFolder} className="pl-0.5" />
      </Button>
 
      <FavProcesso />
      <HeaderTextCopy text="10090.000003/0419-05" icon={faFile} bold className='truncate min-w-10'/>
      <span className='flex gap-2 truncate min-w-30'>
        <HeaderTextCopy text="05136946504" icon={faUser} bold className='truncate min-w-20'/>
        <HeaderTextCopy text="UOLIRHEZOWL UVORXRL WV XZIEZOSL" className='truncate min-w-10'/>
      </span>
      

      <ProcessoSigiloso
          text="Processo Sigiloso"
          icon={faLock}
          isDraggable={isDraggable}
          onOpen={handleProcessoSigilosoClick}
          onClose={closeProcessoSigiloso}
        />

      <Indicadores />
    </header>
  </div>
  <Nav colorMode={colorMode} />
</div>

  );
}