import { HEADER_COLOR } from '@/constants';
import HeaderTextCopy from '@/components/HeaderTextCopy';
import PropTypes from 'prop-types';
import Nav from './Nav';
import { faBars, faFile, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import FavProcesso from '@/components/FavProcesso';
import Indicadores from './Indicadores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './ui/button';
import ProcessoSigiloso from './ProcessoSigiloso';

interface MainContentHeaderProps {
  onMenuToggle: () => void;
}

export default function MainContentHeader({
  onMenuToggle,
}: MainContentHeaderProps) {
  return (
    <div className="sm:ml-2">
      {/* Header */}
      <header
        style={{
          backgroundColor: HEADER_COLOR,
        }}
        className="py-2 px-4 gap-2 flex items-center text-white overflow-auto"
      >
        {/* Toggle Button */}
        <Button
          className="sm:hidden bg-[#0C326F] text-white rounded p-2"
          size="empty"
          variant="ghost"
          onClick={onMenuToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        {/* Favorite Process */}
        <FavProcesso />

        {/* Header Text */}
        <div className="flex gap-6 mr-4">
          <HeaderTextCopy text="10090.000003/0419-05" icon={faFile} bold/>
          <div className='flex gap-2'>
            <HeaderTextCopy text="05136946504" icon={faUser} bold/>
            <HeaderTextCopy text="UOLIRHEZOWL UVORXRL WV XZIEZOSL" />
          </div>
          <ProcessoSigiloso text="Processo Sigiloso" icon={faLock} />
        </div>

        {/* Indicators */}
        <Indicadores />
      </header>

      {/* Navigation */}
      <Nav />
    </div>
  );
}

// PropTypes validation
MainContentHeader.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
};
