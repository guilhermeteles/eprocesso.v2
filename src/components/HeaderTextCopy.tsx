import { useState } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip'; // Adjust the import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import type for icons

interface HeaderTextCopyProps {
  text: string; // Text to display and copy
  copyDuration?: number; // Duration (ms) for success state (default: 2 seconds)
  bold?: boolean; // Optionally make the text bold
  icon?: IconDefinition; // Optional FontAwesome icon to display
  className?: string; // Additional custom className
}

export default function HeaderTextCopy({
  text,
  copyDuration = 2000,
  bold = false,
  icon,
  className = '',
}: HeaderTextCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text); // Copy text to clipboard
      setCopied(true); // Set copied state to true
      setTimeout(() => setCopied(false), copyDuration); // Reset after delay
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={handleCopy}>
            <div
              className={`flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                copied ? 'text-green-500' : 'text-white'
              }`}
            >
              {icon && <FontAwesomeIcon icon={icon} className="mr-1" />} {/* Render icon if provided */}
              <span
                className={`truncate ${copied ? 'font-bold' : bold ? 'font-bold' : ''}`}
              >
                {text}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? 'Copiado!' : 'Clique no texto para copiar'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
