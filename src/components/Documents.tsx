import DocumentsRules from "./DocumentsRules";
import { ScrollArea } from "./ui/scroll-area"; // Adjust the import path to match your file structure

const mockDocuments = [
  {
    id: "1",
    title: "Document 1",
    order: 1,
    startPage: 1,
    endPage: 10,
    type: "Relatório",
    situation: "Juntado",
    isNonPageable: true,
    hasPendingAcknowledgment: false,
    isSearchableVersionAvailable: true,
    isPrimaryDocument: true,
    isSEIIntegrated: false,
    isSPEIntegrated: true,
  },
  {
    id: "2",
    title: "Document 2",
    order: 2,
    startPage: 11,
    endPage: 20,
    type: "Memorando",
    situation: "Minuta",
    isNonPageable: false,
    hasPendingAcknowledgment: true,
    isSearchableVersionAvailable: false,
    isPrimaryDocument: false,
    isSEIIntegrated: true,
    isSPEIntegrated: false,
  },
];

const mockUser = {
  isTeamMember: true,
  isSharingProvisionMember: false,
};

export default function App() {
  return (
    <ScrollArea className="h-full w-full">
      <DocumentsRules documents={mockDocuments} user={mockUser} />
    </ScrollArea>
  );
}
