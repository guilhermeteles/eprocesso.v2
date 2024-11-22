import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faLink, faTrashAlt, faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { useColorContext } from '@/context/ColorContext';

export default function Indicadores() {
  const { darkest } = useColorContext();
  
  return (
    <div
      className={`${darkest} py-2.5 px-3 gap-3 rounded-md flex items-center justify-around`}
    >
      {/* Compartilhado */}
      
      <FontAwesomeIcon
        icon={faShareAlt}
        className="text-orange-500"
        size="sm"
        title="Indicação de que o processo está na situação compartilhado."
      />
      
      {/* Juntada/Vínculo */}
      <FontAwesomeIcon
        icon={faLink}
        size="sm"
        title="Esse processo está envolvido em juntada ou vínculo."
      />
      
      {/* Excluído */}
      <FontAwesomeIcon
        icon={faTrashAlt}
        size="sm"
        title="Esse processo não está mais no controle do e-Processo."
      />
      
      {/* Arquivado */}
      <FontAwesomeIcon
        icon={faBoxesPacking}
        size="sm"
        title="Esse processo está arquivado."
      />
    </div>
  );
}
