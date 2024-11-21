import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import IconButton from './IconButton';
import {
  faArrowRight,
  faArrowUp,
  faCalendar,
  faClipboard,
  faDownload,
  faEllipsisVertical,
  faFile,
  faFileArrowUp,
  faFileCircleCheck,
  faFileContract,
  faInfoCircle,
  faLink,
  faLock,
  faRotateRight,
  faTrashAlt,
  faUser,
  faUserCheck,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

interface NavProps {
  colorMode: 'colorido' | 'outline'; // Accept colorMode as a prop
}

export default function Nav({ colorMode }: NavProps) {
  return (
    <nav className="bg-white gap-6 items-center px-4 py-2 flex flex-grow overflow-auto shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
      <div className="flex gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-xs">Consultas</div>
          <div className="flex gap-2">
            <IconButton icon={faLink} group="consultas" colorMode={colorMode} />
            <IconButton icon={faInfoCircle} group="consultas" colorMode={colorMode} />
            <IconButton icon={faCalendar} group="consultas" colorMode={colorMode} />
            <IconButton icon={faUser} group="consultas" colorMode={colorMode} />
            <IconButton icon={faLock} group="consultas" colorMode={colorMode} />
            <IconButton icon={faFile} group="consultas" colorMode={colorMode} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs">Processo</div>
          <div className="flex gap-2">
            <IconButton icon={faArrowRight} group="processo" colorMode={colorMode} />
            <IconButton icon={faArrowUp} group="processo" colorMode={colorMode} />
            <IconButton icon={faRotateRight} group="processo" colorMode={colorMode} />
            <IconButton icon={faUserGroup} group="processo" colorMode={colorMode} />
            <IconButton icon={faUserCheck} group="processo" colorMode={colorMode} />
            <IconButton icon={faDownload} group="processo" colorMode={colorMode} />
            <IconButton icon={faEllipsisVertical} group="processo" colorMode={colorMode} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs">Documentos</div>
          <div className="flex gap-2">
            <IconButton icon={faFileArrowUp} group="documentos" colorMode={colorMode} />
            <IconButton icon={faFileCircleCheck} group="documentos" colorMode={colorMode} />
            <IconButton icon={faFileContract} group="documentos" colorMode={colorMode} />
            <IconButton icon={faTrashAlt} group="documentos" colorMode={colorMode} />
            <IconButton icon={faInfoCircle} group="documentos" colorMode={colorMode} />
            <IconButton icon={faDownload} group="documentos" colorMode={colorMode} />
            <IconButton icon={faEllipsisVertical} group="documentos" colorMode={colorMode} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs">Notas</div>
          <div className="flex gap-2">
            <IconButton icon={faClipboard} group="notas" colorMode={colorMode} />
            <IconButton icon={faClipboardList} group="notas" colorMode={colorMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}
