import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconButton from "./IconButton";

interface DocumentsActionsProps {
  selectedIds: number[];
  colorMode: 'colorido' | 'outline'; // Accept colorMode as a prop
}


const DocumentsActions: React.FC<DocumentsActionsProps> = ({ selectedIds, colorMode }) => {
  const handleAction = () => {
    if (selectedIds.length === 1) {
      alert(`Performing action A on: ${selectedIds[0]}`);
    } else {
      alert(`Performing action B on: ${selectedIds.join(", ")}`);
    }
  };

  return (
    <div className="" style={{ padding: "10px", background: "#f9f9f9", border: "1px solid #ccc" }}>
      {selectedIds.length === 1 ? (
        <p>Documento selecionado: {selectedIds[0]}</p>
      ) : (
        <p>Documentos selecionados: {selectedIds.join(", ")}</p>
      )}
      <button onClick={handleAction}>
        {selectedIds.length === 1 ? 
        <div className="flex gap-1">
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
        </div>
         : 
        <div className="flex gap-1">
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
            <IconButton icon={faLink} group="documentos" colorMode={colorMode} />
  
        </div>
        }
      </button>
    </div>
  );
};

export default DocumentsActions;
