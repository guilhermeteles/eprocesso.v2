import {
  faClock,
  faEnvelope,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

export default function CardManifestacoesPendentes({ numCols }: { numCols: number }) {
  const manifestacoesPendentes = [
    {
      destinatario: "João da Silva",
      diasRestantes: 5, // Exemplo. No sistema real, deve ser calculado dinamicamente.
    },
    {
      destinatario: "Maria Oliveira",
      diasRestantes: 2,
    },
    {
      destinatario: "Carlos Souza",
      diasRestantes: 10,
    },
  ];

  const sortedManifestacoes = manifestacoesPendentes.sort(
    (a, b) => a.diasRestantes - b.diasRestantes
  );

  const cardContent = sortedManifestacoes.map((item, index) => (
    <div
      key={index}
      className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center justify-between gap-3"
    >
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faEnvelope} />
        <div>
          <p
            className="text-xs font-semibold truncate"
            title={item.destinatario}
          >
            {item.destinatario}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <FontAwesomeIcon icon={faClock} />
        <span>{item.diasRestantes} dias restantes</span>
      </div>
    </div>
  ));

  return (
    <Card
      icon={faList}
      title="Manifestações Pendentes"
      content={cardContent}
      numCols={numCols}
    />
  );
}
