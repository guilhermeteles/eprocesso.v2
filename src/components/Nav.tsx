//import { HEADER_HEIGHT } from '../constants';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import IconButton from './IconButton';
import { faArrowRight, faArrowUp, faCalendar, faClipboard, faDownload, faEllipsisVertical, faFile, faFileArrowUp, faFileCircleCheck, faFileContract, faInfoCircle, faLink, faLock, faRotateRight, faTrashAlt, faUser, faUserCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

  return (
    <nav /*style={{ height: HEADER_HEIGHT }}*/ className="bg-white gap-6 items-center px-4 py-2 flex flex-grow overflow-auto shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
        <div className='flex gap-6'>
            <div className='flex flex-col gap-1'>
                <div className='text-xs'>Consultas</div>
                <div className='flex gap-2'>
                    <IconButton icon={faLink} group="consultas" />
                    <IconButton icon={faInfoCircle} group="consultas" />
                    <IconButton icon={faCalendar} group="consultas" />
                    <IconButton icon={faUser} group="consultas" />
                    <IconButton icon={faLock} group="consultas" />
                    <IconButton icon={faFile} group="consultas" />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-xs'>Processo</div>
                <div className='flex gap-2'>
                    <IconButton icon={faArrowRight} group="processo" />
                    <IconButton icon={faArrowUp} group="processo" />
                    <IconButton icon={faRotateRight} group="processo" />
                    <IconButton icon={faUserGroup} group="processo" />
                    <IconButton icon={faUserCheck} group="processo" />
                    <IconButton icon={faDownload} group="processo" />
                    <IconButton icon={faEllipsisVertical} group="processo" />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-xs'>Documentos</div>
                <div className='flex gap-2'>
                    <IconButton icon={faFileArrowUp} group="documentos" />
                    <IconButton icon={faFileCircleCheck} group="documentos" />
                    <IconButton icon={faFileContract} group="documentos" />
                    <IconButton icon={faTrashAlt} group="documentos" />
                    <IconButton icon={faInfoCircle} group="documentos" />
                    <IconButton icon={faDownload} group="documentos" />
                    <IconButton icon={faEllipsisVertical} group="documentos" />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-xs'>Notas</div>
                <div className='flex gap-2'>
                    <IconButton icon={faClipboard} group="notas" />
                    <IconButton icon={faClipboardList} group="notas" />
                </div>
            </div>      
        </div>
    </nav>
  );
}
