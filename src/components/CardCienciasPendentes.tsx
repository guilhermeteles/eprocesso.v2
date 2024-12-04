import {
  faEnvelopeOpen,
  faCalendarAlt,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

function formatarData(date: string | Date): string {
  const currentDate = new Date();
  const noteDate = typeof date === "string" ? new Date(date) : date; // Handle both types
  const differenceInDays = Math.floor(
    (currentDate.getTime() - noteDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays === 0) {
    return "Hoje";
  } else if (differenceInDays === 1) {
    return "Ontem";
  } else if (differenceInDays < 7) {
    return noteDate.toLocaleDateString("pt-BR", { weekday: "long" })
      .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter
  } else {
    return noteDate.toLocaleDateString("pt-BR");
  }
}


export default function CardCienciasPendentes({ numCols }: { numCols: number }) {
  const cienciasPendentes = [
    {
      tipo: "Comunicado",
      destinatario: "João da Silva",
      dataEmissao: new Date(2024, 11, 3, 10, 30), // Exemplo
    },
    {
      tipo: "Intimação",
      destinatario: "Maria Oliveira",
      dataEmissao: new Date(2024, 11, 2, 15, 0), // Exemplo
    },
    {
      tipo: "Comunicado",
      destinatario: "Carlos Souza",
      dataEmissao: new Date(2024, 10, 28, 9, 15), // Exemplo
    },
  ];

  const sortedCiencias = cienciasPendentes.sort(
    (a, b) => b.dataEmissao.getTime() - a.dataEmissao.getTime()
  );

  const cardContent = sortedCiencias.map((item, index) => (
    <div
      key={index}
      className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center justify-between gap-3"
    >
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        <div>
          <p className="text-xs font-semibold truncate" title={item.tipo}>
            {item.tipo}
          </p>
          <p className="text-xs truncate">{item.destinatario}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>{formatarData(item.dataEmissao)}</span>
      </div>
    </div>
  ));

  return (
    <Card
      icon={faList}
      title="Ciências Pendentes"
      content={cardContent}
      numCols={numCols}
    />
  );
}
