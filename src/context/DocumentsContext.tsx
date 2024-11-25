import React, { createContext, useContext, useState } from "react";

type DocumentsContextType = {
  expandAll: boolean;
  collapseAll: boolean;
  triggerExpandAll: () => void;
  triggerCollapseAll: () => void;
};

const DocumentsContext = createContext<DocumentsContextType | undefined>(undefined);

export const DocumentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expandAll, setExpandAll] = useState(false);
  const [collapseAll, setCollapseAll] = useState(false);

  const triggerExpandAll = () => {
    setExpandAll(true);
    setCollapseAll(false);
    setTimeout(() => setExpandAll(false), 100); // Reset after triggering
  };

  const triggerCollapseAll = () => {
    setExpandAll(false);
    setCollapseAll(true);
    setTimeout(() => setCollapseAll(false), 100); // Reset after triggering
  };

  return (
    <DocumentsContext.Provider
      value={{ expandAll, collapseAll, triggerExpandAll, triggerCollapseAll }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

export const useDocumentsContext = () => {
  const context = useContext(DocumentsContext);
  if (!context) {
    throw new Error("useDocumentsContext must be used within a DocumentsProvider");
  }
  return context;
};
