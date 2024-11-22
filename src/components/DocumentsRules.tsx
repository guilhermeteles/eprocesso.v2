interface Document {
  id: string;
  title: string;
  order: number;
  startPage: number;
  endPage: number;
  type: string;
  situation: string;
  isNonPageable: boolean;
  hasPendingAcknowledgment: boolean;
  acknowledgmentDate?: string;
  isSearchableVersionAvailable: boolean;
  isPrimaryDocument: boolean;
  isSEIIntegrated: boolean;
  isSPEIntegrated: boolean;
}

interface User {
  isTeamMember: boolean;
  isSharingProvisionMember: boolean;
}

interface DocumentsProps {
  documents: Document[];
  user: User;
}

export default function DocumentsRules({ documents, user }: DocumentsProps) {
  // Filter documents based on user permissions
  const filteredDocuments = documents.filter((doc) => {
    if (user.isTeamMember || user.isSharingProvisionMember) {
      return doc.situation !== "Excluded"; // Show all except excluded
    }

    // If not a team member, apply additional rules
    if (doc.situation === "Juntado") return true;
    if (doc.situation === "Minuta" && doc.isPrimaryDocument) return true;

    return false;
  });

  return (
    <ul className="p-2 h-svh overflow-auto">
      {filteredDocuments.map((doc) => (
        <li
          key={doc.id}
          className="mt-2 cursor-pointer hover:bg-gray-100 rounded flex justify-between items-center"
        >
          {/* Document Title and Status */}
          <div>
            <h3 className="font-bold">{doc.title}</h3>
            <p className="text-sm text-gray-600">Tipo: {doc.type}</p>
          </div>

          {/* Icons for Document Features */}
          <div className="flex items-center gap-2">
            {doc.isNonPageable && (
              <span
                className="text-blue-500 cursor-pointer"
                title="Clique para fazer o download do arquivo não paginável"
              >
                📄
              </span>
            )}
            {doc.hasPendingAcknowledgment && (
              <span
                className="text-yellow-500 cursor-pointer"
                title="Documento pertence a uma ciência pendente."
              >
                ⚠️
              </span>
            )}
            {doc.isSearchableVersionAvailable && (
              <span
                className="text-green-500 cursor-pointer"
                title="Visualizar versão pesquisável"
              >
                🔍
              </span>
            )}
            {doc.isPrimaryDocument && (
              <span
                className="text-red-500 cursor-pointer"
                title="Esse é o principal documento de expediente do processo."
              >
                🌟
              </span>
            )}
            {doc.isSEIIntegrated && (
              <span
                className="text-purple-500 cursor-pointer"
                title="Documento juntado pelo Sistema Eletrônico de Informações SEI"
              >
                🔗
              </span>
            )}
            {doc.isSPEIntegrated && (
              <span
                className="text-indigo-500 cursor-pointer"
                title="Documento juntado pelo Sistema de Processo Eletrônico integrado ao tramite.gov.br"
              >
                📥
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
