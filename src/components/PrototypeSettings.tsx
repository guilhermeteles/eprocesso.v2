import { useColorContext } from '@/context/ColorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './ui/dropdown-menu';

interface PrototypeSettingsProps {
  colorMode: 'colorido' | 'outline'; // Current color mode
  setColorMode: (mode: 'colorido' | 'outline') => void; // Function to update color mode
}

export default function PrototypeSettings({ colorMode, setColorMode }: PrototypeSettingsProps) {
  const { setHeaderTheme } = useColorContext(); // Access function to update theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="absolute right-5 bottom-5"
          size="smallIcon"
          variant={colorMode === 'outline' ? 'outline' : 'ghost'} // Use colorMode here
        >
          <FontAwesomeIcon icon={faCog} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Usuários</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setHeaderTheme('blue')}>Azul</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHeaderTheme('green')}>Verde</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHeaderTheme('gray')}>Cinza</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Cores Nav</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setColorMode('colorido')}>Colorido</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setColorMode('outline')}>Outline</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

