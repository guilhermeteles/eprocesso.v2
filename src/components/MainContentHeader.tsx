import { useColorContext } from '@/context/ColorContext';
import HeaderTextCopy from '@/components/HeaderTextCopy';
import { useState } from 'react';
import Nav from './Nav';
import { faBars, faFile, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import FavProcesso from '@/components/FavProcesso';
import Indicadores from './Indicadores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './ui/button';
import ProcessoSigiloso from './ProcessoSigiloso';

interface MainContentHeaderProps {
  onMenuToggle: () => void;
  colorMode: 'colorido' | 'outline'; // Accept colorMode as a prop
}

export default function MainContentHeader({ onMenuToggle, colorMode }: MainContentHeaderProps) {
  const { headerColor, headerColorDarker } = useColorContext();
  const [isDraggable, setIsDraggable] = useState(false);

  const handleProcessoSigilosoClick = () => {
    setIsDraggable(true);
  };

  const closeProcessoSigiloso = () => {
    setIsDraggable(false);
  };

  return (
    <div className="sm:ml-2">
      {/* Header */}
      <header
        style={{
          backgroundColor: headerColor,
        }}
        className="py-2 px-4 gap-2 flex items-center text-white overflow-auto"
      >
        <Button
          style={{
            backgroundColor: headerColorDarker,
          }}
          className={`sm:hidden text-white rounded p-2`}
          size="empty"
          variant="ghost"
          onClick={onMenuToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <FavProcesso />

        <div className="flex gap-6 mr-4">
          <HeaderTextCopy text="10090.000003/0419-05" icon={faFile} bold />
          <div className="flex gap-2">
            <HeaderTextCopy text="05136946504" icon={faUser} bold />
            <HeaderTextCopy text="UOLIRHEZOWL UVORXRL WV XZIEZOSL" />
          </div>
          <ProcessoSigiloso
            text="Processo Sigiloso"
            icon={faLock}
            isDraggable={isDraggable}
            onOpen={handleProcessoSigilosoClick}
            onClose={closeProcessoSigiloso}
          />
        </div>

        <Indicadores />
      </header>

      {/* Nav Component */}
      <Nav colorMode={colorMode} />
    </div>
  );
}
