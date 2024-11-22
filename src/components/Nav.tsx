import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import IconButton from './IconButton';
import {
  faArrowRightArrowLeft,
  faCalendar,
  faCircleInfo,
  faClipboard,
  faDownload,
  faEllipsisVertical,
  faFile,
  faFileArrowUp,
  faFileCircleCheck,
  faFileContract,
  faFileSignature,
  faFolder,
  faInfoCircle,
  faLink,
  faLock,
  faRightLong,
  faTrashCan,
  faUpLong,
  faUser,
  faUserCheck,
  faUserGroup,
  faUserPen,
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
            <IconButton icon={faRightLong} group="processo" colorMode={colorMode} />
            <IconButton icon={faUpLong} group="processo" colorMode={colorMode} />
            <IconButton icon={faUserCheck} group="processo" colorMode={colorMode} />
            <IconButton icon={faUserGroup} group="processo" colorMode={colorMode} />
            <IconButton icon={faDownload} group="processo" colorMode={colorMode} />
            <IconButton icon={faEllipsisVertical} group="processo" colorMode={colorMode} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs">Documentos</div>
          <div className="flex gap-2">
            <IconButton icon={faFileArrowUp} group="documentos" colorMode={colorMode} />
            <IconButton icon={faFileCircleCheck} group="documentos" colorMode={colorMode} />
            <IconButton icon={faFileSignature} group="documentos" colorMode={colorMode} />
            <IconButton icon={faTrashCan} group="documentos" colorMode={colorMode} />
            <IconButton icon={faCircleInfo} group="documentos" colorMode={colorMode} />
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
