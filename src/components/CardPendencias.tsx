import {
  faList,
  faDatabase,
  faFolder,
  faFileCircleExclamation,
  faFolderOpen,
  faNoteSticky,
  faClipboard,
  faHand,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

export default function CardPendencias({ numCols }: { numCols: number }) {
  const pendencias = [
    {
      icon: faDatabase,
      text: "Finalizar o cadastro do processo no SIEF-Processos",
    },
    {
      icon: faFolder,
      text: "Existe SJD a ser avaliada",
    },
    {
      icon: faFileCircleExclamation,
      text: "Existe documento a ser efetivado",
    },
    {
      icon: faFolderOpen,
      text: "Existe providência aberta",
    },
    {
      icon: faNoteSticky,
      text: "Existe nota para o processo ativa",
    },
    {
      icon: faClipboard,
      text: "Existe ciência pendente",
      customBadge: "C",
    },
    {
      icon: faClipboard,
      text: "Existe manifestação pendente",
      customBadge: "M",
    },
    {
      icon: faHand,
      text: "Existe alegação",
    },
    {
      icon: faClipboardList,
      text: "Processo está em atividade de análise de quesitos e a ficha de quesitos ainda não foi respondida",
    },
  ];

  const cardContent = pendencias.map((item, index) => (
    <div
      key={index}
      className="text-gray-700 bg-red-100 px-3 py-2 rounded-md flex items-center gap-3"
    >
      
      {item.customBadge ? (
        <div className="relative">
          <span className="absolute top-[6px] left-[3.5px] text-[10px] font-bold">
            {item.customBadge}
          </span>
          <FontAwesomeIcon icon={item.icon} className="text-lg" />
        </div>
      ) : (
        <FontAwesomeIcon icon={item.icon} />
      )}
      {item.text}
    </div>
  ));

  return (
    <Card
      icon={faList}
      title="Pendências do Processo"
      content={cardContent}
      numCols={numCols}
    />
  );
}
