import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Draggable from 'react-draggable';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

interface HeaderTextCopyProps {
  text: string; // Text to display and copy
  icon?: IconDefinition; // Optional icon to display
}

export default function ProcessoSigiloso({ text, icon }: HeaderTextCopyProps) {
  const [isDraggable, setIsDraggable] = useState(false);

  const handleTriggerClick = () => {
    setIsDraggable(true);
  };

  const closeDraggableCard = () => {
    setIsDraggable(false);
  };

  return (
    <div className='text-foreground'>
      {/* Always Visible HoverCard */}
      <HoverCard openDelay={100} closeDelay={200}>
        <HoverCardTrigger
          className=" flex items-center gap-2 cursor-pointer whitespace-nowrap text-white"
          onClick={handleTriggerClick} // Opens draggable card on click
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          <span>{text}</span>
        </HoverCardTrigger>

        {/* HoverCard Content */}
        {!isDraggable && (
          <HoverCardContent className="bg-white p-4 shadow-lg rounded w-80">
            <h2 className="text-lg font-bold">Processo Sigiloso</h2>
            <p className="mt-2">
              This is sensitive information about: <strong>{text}</strong>.
            </p>
          </HoverCardContent>
        )}
      </HoverCard>

      {/* Draggable Card */}
      {isDraggable && (
        <Draggable>
          <div className="absolute bg-white p-4 shadow-lg rounded right-[170px] top-10 w-80 z-50 cursor-move">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Processo Sigiloso</h2>
              <Button
                onClick={closeDraggableCard}
                className="rounded p-2 text-foreground"
                size='empty'
                variant='ghost'
              > 
                <FontAwesomeIcon icon={faXmark}/>
              </Button>
            </div>

            <p className="mt-2">
              This is sensitive information about: <strong>{text}</strong>.
            </p>
          </div>
        </Draggable>
      )}
    </div>
  );
}
