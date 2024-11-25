import { faList, faDatabase, faFolder, faFileCircleExclamation, faFolderOpen, faNoteSticky, faClipboard, faHand, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardPendencias() {
    return (
        <div className='bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-2 sm:max-h-[calc(100vh-182px)] h-fit'>
                <h2 className="text-md font-semibold text-gray-[#1F2937] mb-3 mt-1">
                <FontAwesomeIcon icon={faList} className='mr-2' />
                Pendências do Processo
                </h2>
                <div className='sm:max-h-[calc(100vh-255px)] h-fit flex flex-col gap-2 overflow-auto'>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon icon={faDatabase} className='mr-2 mt-0.5' />
                    <p>Finalizar o cadastro do processo no SIEF-Processos</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faFolder}
                    className='mr-2 mt-0.5'
                    />
                    <p>Existe SJD a ser avaliada</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faFileCircleExclamation}
                    className='mr-2 mt-0.5'
                    />
                    <p>Existe documento a ser efetivado</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faFolderOpen}
                    className='mr-2 mt-0.5'
                    />
                    <p>Existe providência aberta</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faNoteSticky}
                    className='mr-2 mt-0.5'
                    />
                    <p>Existe nota para o processo ativa</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <div className="relative">
                    <span className="absolute top-[6px] left-[3.5px] text-[10px] font-bold">C</span>
                    <FontAwesomeIcon icon={faClipboard} className="mr-2 mt-0.5 text-lg" />
                    </div>
                    <p>Existe ciência pendente</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <div className="relative">
                    <span className="absolute top-[6.5px] left-[2.4px] text-[10px] font-bold">M</span>
                    <FontAwesomeIcon icon={faClipboard} className="mr-2 mt-0.5 text-lg" />
                    </div>
                    <p>Existe manifestação pendente</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faHand}
                    className='mr-2 mt-0.5'
                    />
                    <p>Existe alegação</p>
                </p>
                <p className="text-gray-[#374151] bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faClipboardList}
                    className='mr-2 mt-0.5'
                    />
                    <p>Processo está em atividade de análise de quesitos e a ficha de quesitos ainda não foi respondida</p>
                </p>

                </div>
            </div>
    )}