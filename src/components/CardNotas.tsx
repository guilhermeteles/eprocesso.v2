import {
  faEdit,
  faFileContract,
  faUserAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface Note {
  id: number;
  group: "process" | "team" | "user";
  date: string;
  content: string;
  name: string;
  isClickable?: boolean; // Indicates if the note is clickable
  action?: () => void; // Function to trigger on click
}

const notes: Note[] = [
  { id: 1, group: "process", date: "2024-12-4", content: "Reviewed initial case documentation and identified missing forms. Follow-up needed with user.", name: "Julio Cesar" },
  { id: 2, group: "process", date: "2024-11-12", content: "Updated case status to 'In Progress' after reviewing submitted documents. Awaiting team approval for next steps.", name: "Maria Fernandes" },
  { id: 3, group: "team", date: "2024-11-10", content: "Scheduled a team meeting to discuss case priorities for the week and assigned roles.", name: "Carlos Lima" },
  { id: 4, group: "team", date: "2024-11-13", content: "Meeting conducted successfully. Next steps were delegated, and deadlines were set for each case file.", name: "Ana Sousa" },
  { id: 5, group: "user", date: "2024-11-09", content: "User requested additional information about the process timeline and necessary documents.", name: "Julio Cesar" },
  { id: 6, group: "process", date: "2024-11-14", content: "User submitted missing documentation. Case review has been updated accordingly.", name: "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon" },
  { id: 7, group: "user", date: "2024-11-14", content: "Finalized the report for the case summary. Forwarded it to the user for review.", name: "Maria Fernandes" },
  { id: 8, group: "process", date: "2024-11-14", content: "Case closed with all actions documented. Archived case files for record-keeping.", name: "Carlos Lima" },
];

export default function CardNotas({ numCols }: { numCols: number }) {
  const [filter, setFilter] = useState<string>("last-of-each-group");
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(getLastOfEachGroup(notes));

  function getLastOfEachGroup(notes: Note[]): Note[] {
    const latestNotes: { [key: string]: Note } = {};
    notes.forEach((note) => {
      const { group, date } = note;
      if (!latestNotes[group] || new Date(date) > new Date(latestNotes[group].date)) {
        latestNotes[group] = note;
      }
    });
    return Object.values(latestNotes);
  }

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    let filtered: Note[] = [];
    if (selectedFilter === "last-of-each-group") {
      filtered = getLastOfEachGroup(notes);
    } else if (selectedFilter === "all") {
      filtered = notes;
    } else {
      filtered = notes.filter((note) => note.group === selectedFilter);
    }
    setFilteredNotes(filtered);
  }

  function formatDate(date: string): string {
    const currentDate = new Date();
    const noteDate = new Date(date);
    const differenceInDays = Math.floor(
      (currentDate.getTime() - noteDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 0) {
      return "Hoje";
    } else if (differenceInDays === 1) {
      return "Ontem";
    } else if (differenceInDays < 7) {
      return noteDate
        .toLocaleDateString("pt-BR", { weekday: "long" })
        .replace(/^\w/, (c) => c.toUpperCase());
    } else {
      return noteDate.toLocaleDateString("pt-BR");
    }
  }

  const bgColors: Record<Note["group"], string> = {
    process: "bg-[#EFF4DD]",
    team: "bg-[#FEF0C8]",
    user: "bg-[#F8EFF1]",
  };

  const hoverColors: Record<Note["group"], string> = {
    process: "hover:bg-[#E0EAD0]",
    team: "hover:bg-[#FDE6B6]",
    user: "hover:bg-[#F3E6E9]",
  };

  const badgeColors: Record<Note["group"], string> = {
    process: "shrink-0 bg-[#ffffff99] text-gray-700 w-7 h-7 flex items-center justify-center rounded-sm",
    team: "shrink-0 bg-[#ffffff99] text-gray-700 w-7 h-7 flex items-center justify-center rounded-sm",
    user: "shrink-0 bg-[#ffffff99] text-gray-700 w-7 h-7 flex items-center justify-center rounded-sm",
  };

  const badgeIcons: Record<Note["group"], JSX.Element> = {
    process: <FontAwesomeIcon icon={faFileContract} />,
    team: <FontAwesomeIcon icon={faUsers} />,
    user: <FontAwesomeIcon icon={faUserAlt} />,
  };

  const content = (
    <div className="flex flex-col gap-4 overflow-auto w-full h-fit">
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className={`text-gray-700 ${bgColors[note.group]} px-3 py-2 rounded-md w-full ${
            note.isClickable ? "cursor-pointer " + hoverColors[note.group] : ""
          }`}
          onClick={note.isClickable ? note.action : undefined}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3 min-w-0">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className={badgeColors[note.group]}>
                      {badgeIcons[note.group]}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    {note.group === "process" && "Notas para Processo"}
                    {note.group === "team" && "Notas para Equipe"}
                    {note.group === "user" && "Notas para Usuário"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-xs font-semibold truncate" title={note.name}>
                {note.name}
              </span>
            </div>
            <span className="text-xs whitespace-nowrap ml-2">{formatDate(note.date)}</span>
          </div>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );

  const optionalTitleComplement = (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="last-of-each-group">Notas mais recentes</option>
            <option value="all">Todas as notas</option>
            <option value="process">Notas para Processo</option>
            <option value="team">Notas para Equipe</option>
            <option value="user">Notas para Usuário</option>
          </select>
        </TooltipTrigger>
        <TooltipContent>Filtrar notas</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <Card
      icon={faEdit}
      title="Notas"
      content={content}
      optionalTitleComplement={optionalTitleComplement}
      numCols={numCols}
    />
  );
}
