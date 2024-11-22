import PageNumber from './PageNumber';
import Sorting from './Sorting';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './ui/button';
import { useColorContext } from '@/context/ColorContext';

interface SidebarHeaderProps {
  onClose: () => void; // Define the type for the onClose prop
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps) {
  const { defaultColor } = useColorContext();
  return (
    <div className="flex">
      {/* Header */}
      <div
        className={`${defaultColor} flex px-2 grow justify-between items-center overflow-auto h-[50px]`}
      >
        <div className="flex gap-4 justify-between w-full">
          <Sorting />
          <PageNumber />
        </div>

        <Button
          className="sm:hidden text-white rounded p-2"
          size="empty"
          variant="ghost"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
    </div>
  );
}
