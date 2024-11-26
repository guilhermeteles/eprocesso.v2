import {
  faEdit,
  faCheck,
  faFileContract,
  faUserAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Note {
  id: number;
  group: "process" | "team" | "user";
  date: string;
  content: string;
  name: string;
}

const notes: Note[] = [
  { id: 1, group: "process", date: "2024-11-11", content: "Reviewed initial case documentation and identified missing forms. Follow-up needed with user.", name: "Julio Cesar" },
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

  function groupAndSortNotes(notes: Note[]): Note[][] {
    const groups: { [key: string]: Note[] } = { process: [], team: [], user: [] };
    notes.forEach((note) => groups[note.group].push(note));

    // Sort each group chronologically
    Object.keys(groups).forEach((group) => {
      groups[group].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    });

    // Return grouped notes in the desired order
    return [groups.process, groups.team, groups.user];
  }

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    let filteredNotes: Note[];
    if (selectedFilter === "last-of-each-group") {
      filteredNotes = getLastOfEachGroup(notes);
    } else if (selectedFilter === "all") {
      const groupedNotes = groupAndSortNotes(notes);
      // Flatten grouped notes for rendering
      filteredNotes = groupedNotes.flat();
    } else {
      filteredNotes = notes.filter((note) => note.group === selectedFilter);
    }

    setFilteredNotes(filteredNotes);
  }

  function formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  const bgColors: Record<Note["group"], string> = {
    process: "bg-[#EFF4DD]",
    team: "bg-[#FEF0C8]",
    user: "bg-[#F8EFF1]",
  };

  const badgeLabels: Record<Note["group"], JSX.Element> = {
    process: <FontAwesomeIcon icon={faFileContract} />,
    team: <FontAwesomeIcon icon={faUsers} />,
    user: <FontAwesomeIcon icon={faUserAlt} />,
  };

  const badgeColors: Record<Note["group"], string> = {
    process: "shrink-0 bg-white border border-[#B8D293] text-gray-700 w-7 h-7 flex items-center justify-center rounded-full",
    team: "shrink-0 bg-white border border-[#FFBE2E] text-gray-700 w-7 h-7 flex items-center justify-center rounded-full",
    user: "shrink-0 bg-white border border-[#ECBEC6] text-gray-700 w-7 h-7 flex items-center justify-center rounded-full",
  };

  const content = (
    <div className="flex flex-col gap-4 overflow-auto w-full h-fit">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note, index) => (
          <div
            key={index}
            className={`text-gray-700 ${bgColors[note.group]} px-3 py-2 rounded-md w-full`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3 min-w-0">
                <span className={badgeColors[note.group]}>{badgeLabels[note.group]}</span>
                <span
                  className="text-xs font-semibold truncate"
                  title={note.name}
                >
                  {note.name}
                </span>
              </div>
              <span className="text-xs whitespace-nowrap ml-2">{formatDate(note.date)}</span>
            </div>
            <p>{note.content}</p>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center py-4 bg-gray-100 rounded">
          <FontAwesomeIcon icon={faCheck} className="mr-2 text-gray-400" />
          Processo sem notas.
        </div>
      )}
    </div>
  );

  const optionalTitleComplement = (
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
