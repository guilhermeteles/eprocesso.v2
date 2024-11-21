import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faLink, faTrashAlt, faBoxesPacking } from '@fortawesome/free-solid-svg-icons';

export default function Indicadores() {
  return (
    <div className="bg-[#071D41] py-2 px-3 gap-2 rounded-md flex items-center justify-around text-white">
        <FontAwesomeIcon icon={faShareAlt} className='text-orange-500' size='sm'/>
        <FontAwesomeIcon icon={faLink} size='sm' />
        <FontAwesomeIcon icon={faTrashAlt} size='sm' />
        <FontAwesomeIcon icon={faBoxesPacking} size='sm' />
    </div>
  );
}
