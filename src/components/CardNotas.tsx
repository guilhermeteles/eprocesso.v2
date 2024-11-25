import { faEdit, faCheck, faFileContract, faUserAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Define the type for notes
interface Note {
  id: number;
  group: "process" | "team" | "user";
  date: string; // ISO string format
  content: string;
  name: string;
}

const notes: Note[] = [
  { id: 1, group: "process", date: "2024-11-11", content: "Reviewed initial case documentation and identified missing forms. Follow-up needed with user.", name: 'Julio Cesar' },
  { id: 2, group: "process", date: "2024-11-12", content: "Updated case status to 'In Progress' after reviewing submitted documents. Awaiting team approval for next steps.", name: 'Maria Fernandes' },
  { id: 3, group: "team", date: "2024-11-10", content: "Scheduled a team meeting to discuss case priorities for the week and assigned roles.", name: 'Carlos Lima' },
  { id: 4, group: "team", date: "2024-11-13", content: "Meeting conducted successfully. Next steps were delegated, and deadlines were set for each case file.", name: 'Ana Sousa' },
  { id: 5, group: "user", date: "2024-11-09", content: "User requested additional information about the process timeline and necessary documents.", name: 'Julio Cesar' },
  { id: 6, group: "user", date: "2024-11-14", content: "User submitted missing documentation. Case review has been updated accordingly.", name: 'Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon' },
  { id: 7, group: "process", date: "2024-11-14", content: "Finalized the report for the case summary. Forwarded it to the user for review.", name: 'Maria Fernandes' },
  { id: 8, group: "process", date: "2024-11-14", content: "Case closed with all actions documented. Archived case files for record-keeping.", name: 'Carlos Lima' },
];

export default function CardNotas() {
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

    let filteredNotes: Note[];
    if (selectedFilter === "last-of-each-group") {
      filteredNotes = getLastOfEachGroup(notes);
    } else if (selectedFilter === "all") {
      filteredNotes = notes;
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
    process: <FontAwesomeIcon icon={faFileContract} className="ml-[1px]" />,
    team: <FontAwesomeIcon icon={faUsers} className="-ml-[2.7px]" />,
    user: <FontAwesomeIcon icon={faUserAlt} className="-ml-[1px]" />,
  };

  const badgeColors: Record<Note["group"], string> = {
    process: "bg-white border border-[#B8D293] text-gray-[#1F2937] w-7 h-7 flex items-center",
    team: "bg-white border border-[#FFBE2E] text-gray-[#1F2937] w-7 h-7 flex items-center",
    user: "bg-white border border-[#ECBEC6] text-gray-[#1F2937] w-7 h-7 flex items-center",
  };

  return (
    <div className="bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-2 ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-semibold text-gray-[#1F2937] flex items-center">
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Notas
        </h2>
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
      </div>
      <div className="sm:max-h-[calc(100vh-269px)] h-fit flex flex-col gap-4 overflow-auto w-full">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`text-gray-[#4B5563] ${bgColors[note.group]} px-3 py-2 rounded-md w-full`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold flex items-center gap-2 w-100">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColors[note.group]}`}
                  >
                    {badgeLabels[note.group]}
                  </span>
                  <span className="flex-1 truncate min-w-0 w-32" title={note.name}>
                    {note.name}
                  </span>
                </span>
                <span className="text-xs whitespace-nowrap">{formatDate(note.date)}</span>
              </div>
              <p>{note.content}</p>
            </div>
          ))
        ) : (
          <div className="text-[#374151] text-center py-4 bg-[#F3F4F6] rounded">
            <FontAwesomeIcon icon={faCheck} className="me-2 text-[#6B7280]" />
            Processo sem notas.
          </div>
        )}
      </div>
    </div>
  );
}
