import { Checkbox } from "./ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconsList from "./IconsList";

interface NodeProps {
  name: string;
  pages?: string; // Optional for documents
  icons?: number[]; // Optional for documents
  children?: NodeProps[]; // Optional for folders, required for nested nodes
}

interface DocumentsProps {
  data: NodeProps[]; // Array of root-level nodes
}

// Recursive component to render nodes (folders or documents)
const Node: React.FC<NodeProps> = ({ name, pages, icons, children }) => (
  <div className="ml-4 mt-[2px]">
    <p className="whitespace-nowrap text-sm flex items-center">
      <Checkbox className="mr-1" />
      {children && (
        <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-gray-600" />
      )}
      {pages && <span className="font-bold text-[#999]">{pages}</span>}
      {icons && icons.length > 0 && (
        <span className="ml-1 border border-gray-200 p-1 rounded"><IconsList icons={icons} /></span>
      )}
      <a href="#" className="ml-1 hover:underline">{name}</a>
    </p>
    {children && (
      <ul className="mt-[2px]">
        {children.map((child, index) => (
          <li key={index} >
            <Node
              name={child.name}
              pages={child.pages}
              icons={child.icons}
              children={child.children}
            />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Documents: React.FC<DocumentsProps> = ({ data }) => (
  <div className="py-2">
    {data.map((node, index) => (
      <Node
        key={index}
        name={node.name}
        pages={node.pages}
        icons={node.icons}
        children={node.children}
      />
    ))}
  </div>
);

export default Documents;
