import React, { useState } from "react";
import { documentsData, Document } from "./documentsList";
import DocumentsActions from "./DocumentsActions";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SelectedDocuments = Record<number, boolean>;

const DocumentItem: React.FC<{
  document: Document;
  level: number;
  onToggle: (id: number, checked: boolean, children?: Document[]) => void;
  isChecked: boolean;
  allSelected: SelectedDocuments;
}> = ({
  document,
  level,
  onToggle,
  isChecked,
  allSelected,
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = document.children && document.children.length > 0;

  return (
    <div
      style={{ marginLeft: `${level * 16}px` }}
      className="flex flex-col"
    >
      <div className="flex items-center">
        {hasChildren && (
          <span
            className="cursor-pointer mr-2 transform transition-transform"
            onClick={() => setExpanded(!expanded)}
            style={{
              transform: expanded ? "rotate(90deg)" : "rotate(0)",
            }}
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-orange-500"
              size="sm"
              title="Expand/Collapse"
            />
          </span>
        )}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onToggle(document.id, e.target.checked, document.children)}
          className="mr-2"
        />
        <span className="whitespace-nowrap hover:underline cursor-pointer">
          {document.name}
        </span>
      </div>
      {expanded && hasChildren && (
        <div className="mt-1">
          {document.children?.map((child) => (
            <DocumentItem
              key={child.id}
              document={child}
              level={level + 1}
              onToggle={onToggle}
              isChecked={!!allSelected[child.id]}
              allSelected={allSelected}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Documents: React.FC = () => {
  const [selectedDocuments, setSelectedDocuments] = useState<SelectedDocuments>({});

  const handleToggle = (id: number, checked: boolean, children?: Document[]) => {
    setSelectedDocuments((prev) => {
      const updated = { ...prev };

      // Update the clicked item
      updated[id] = checked;

      // Only update children when checking/unchecking a parent
      if (children) {
        const updateChildren = (docs: Document[]) => {
          docs.forEach((child) => {
            updated[child.id] = checked;
            if (child.children) {
              updateChildren(child.children);
            }
          });
        };
        updateChildren(children);
      }

      return updated;
    });
  };

  const selectedIds = Object.keys(selectedDocuments)
    .filter((id) => selectedDocuments[Number(id)])
    .map(Number);

  return (
    <div className="p-4">
      {documentsData.map((doc) => (
        <DocumentItem
          key={doc.id}
          document={doc}
          level={0}
          onToggle={handleToggle}
          isChecked={!!selectedDocuments[doc.id]}
          allSelected={selectedDocuments}
        />
      ))}
      {selectedIds.length > 0 && (
        <DocumentsActions selectedIds={selectedIds} colorMode="colorido" />
      )}
    </div>
  );
};

export default Documents;
