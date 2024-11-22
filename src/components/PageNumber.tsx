import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useColorContext } from '@/context/ColorContext';

export default function PageNumber() {
  const { darkest } = useColorContext();

  return (
    <div
      className={`${darkest} rounded-md flex items-center text-white gap-1 px-[2.5px]`}>
      {/* Input Field */}
      <Input
        placeholder="Pg."
        className={`${darkest} text-white border-none p-2 placeholder-pt-1`}
      />

      {/* Button */}
      <Button
          variant="darker"
          size="empty"
          className='py-[3px] rounded-sm px-2 pb-1'
        >
          Ir
      </Button>
    </div>
  );
}
