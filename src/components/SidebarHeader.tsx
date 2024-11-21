import { HEADER_COLOR } from '@/constants';
import PageNumber from './PageNumber';
import Sorting from './Sorting';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './ui/button';

interface SidebarHeaderProps {
  onClose: () => void; // Define the type for the onClose prop
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div className="flex">
      {/* Close Button for Small Screens */}
      <div
        style={{ backgroundColor: HEADER_COLOR }}
        className="flex py-2 px-4 text-white grow justify-between items-center overflow-auto"
      >
        {/* <Switch /> */}
        <div className='flex gap-4'>
          <Sorting />
          <PageNumber />
        </div>
        
        <Button
          className="sm:hidden text-white rounded p-2"
          size='empty'
          variant='ghost'
          onClick={onClose}
        > 
          <FontAwesomeIcon icon={faXmark}/>
        </Button>
      </div>
      
    </div>
  );
}
