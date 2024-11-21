import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export default function FavProcesso() {
  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    setIsFav((prev) => !prev);
  };

  return (
    <Button
      variant="ghost"
      size="navIcon"
      onClick={toggleFav}
      className={`px-2 rounded ${isFav ? 'text-yellow-500' : 'text-white'}`}
    >
      <FontAwesomeIcon icon={isFav ? solidStar : regularStar} />
    </Button>
  );
}
