import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface HeaderTextCopyProps {
  text: string; // Text to display and copy
  icon?: IconDefinition; // Optional icon to display before copying
  copyDuration?: number; // Duration (ms) for success state (default: 2 seconds)
  bold?: boolean; // Optionally make the text bold
}

export default function HeaderTextCopy({
  text,
  icon,
  copyDuration = 2000,
  bold = false,
}: HeaderTextCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text); // Copy text to clipboard
      setCopied(true); // Set copied state to true
      setTimeout(() => setCopied(false), copyDuration); // Reset after duration
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer whitespace-nowrap ${
        copied ? 'text-green-500' : 'text-white'
      }`}
      onClick={handleCopy}
    >
      {/* Only render the FontAwesomeIcon if there is an icon to display */}
      {(icon || copied) && (
        <FontAwesomeIcon icon={copied ? faCheck : (icon as IconDefinition)} />
      )}
      <span
        className={`${
          copied ? 'font-bold' : bold ? 'font-bold' : ''
        }`}
      >
        {text}
      </span>
    </div>
  );
}
