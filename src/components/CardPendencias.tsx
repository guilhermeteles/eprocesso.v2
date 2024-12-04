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
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-cadastro-sief"),
    },
    {
      icon: faFolder,
      text: "Existe SJD a ser avaliada",
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-sjd"),
    },
    {
      icon: faFileCircleExclamation,
      text: "Existe documento a ser efetivado",
      clickable: false,
    },
    {
      icon: faFolderOpen,
      text: "Existe providência aberta",
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-providencias"),
    },
    {
      icon: faNoteSticky,
      text: "Existe nota para o processo ativa",
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-notas"),
    },
    {
      icon: faClipboard,
      text: "Existe ciência pendente",
      customBadge: "C",
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-ciencia"),
    },
    {
      icon: faClipboard,
      text: "Existe manifestação pendente",
      customBadge: "M",
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-manifestacoes"),
    },
    {
      icon: faHand,
      text: "Existe alegação",
      clickable: true,
      onClick: () => alert("You will navigate to: /consultar-alegacoes"),
    },
    {
      icon: faClipboardList,
      text:
        "Processo está em atividade de análise de quesitos e a ficha de quesitos ainda não foi respondida",
      clickable: false,
    },
  ];

  const cardContent = pendencias.map((item, index) => (
    <div
      key={index}
      className={`text-gray-700 px-3 py-2 rounded-md flex items-center gap-3
        ${item.clickable ? "cursor-pointer hover:bg-[#FBC4B8] bg-[#FBC4B8]" : "bg-[#FDE0DB]"}`}
      onClick={item.clickable ? item.onClick : undefined}
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
