import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useColorContext } from '@/context/ColorContext';

export default function PageNumber() {
  const { headerColorDarkest } = useColorContext();

  return (
    <div
      style={{
        backgroundColor: headerColorDarkest,
      }}
      className="rounded-md flex items-center text-white h-fit px-1 gap-1">
      {/* Input Field */}
      <Input
        placeholder="Pg."
        style={{
          backgroundColor: headerColorDarkest,
        }}
        className="text-white border-none p-2 placeholder-pt-1"
      />

      {/* Button */}
      <Button
          variant="lightBlue"
          size="empty"
          // style={{
          //   backgroundColor: headerColorDarker,
          // }}
          className='py-[3px] rounded-sm px-2'
        >
          Ir
      </Button>
    </div>
  );
}
