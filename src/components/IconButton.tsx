import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition for type checking
import { COLORS } from '@/constants'; // Import your COLORS constant

interface IconButtonProps {
  icon: IconDefinition; // FontAwesome icon type
  group: keyof typeof COLORS; // Restrict group to valid keys in COLORS
}

export default function IconButton({ icon, group }: IconButtonProps) {
  const backgroundColor = COLORS[group] || '#808080'; // Default to gray if group is not in COLORS

  return (
    <Button
      variant="ghost"
      size="navIcon"
      style={{ backgroundColor: backgroundColor }}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}
