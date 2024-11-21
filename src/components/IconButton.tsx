import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition for type checking
import { COLORS } from '@/constants'; // Import your COLORS constant

interface IconButtonProps {
  icon: IconDefinition; // FontAwesome icon type
  group: keyof typeof COLORS; // Restrict group to valid keys in COLORS
  colorMode: 'colorido' | 'outline'; // Accept colorMode as a prop
}

export default function IconButton({ icon, group, colorMode }: IconButtonProps) {
  const backgroundColor = COLORS[group] || '#808080'; // Default to gray if group is not in COLORS

  return (
    <Button
      variant={colorMode === 'colorido' ? 'ghost' : 'outline'}
      size="navIcon"
      style={colorMode === 'colorido' ? { backgroundColor: backgroundColor } : undefined} // Apply background color only for Colorido
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}
