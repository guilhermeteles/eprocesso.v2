import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PageNumber() {
  return (
    <div className="rounded-md flex items-center text-white h-fit bg-[#071D41] px-1 gap-1">
      {/* Input Field */}
      <Input
        placeholder="Pg."
        className="bg-[#071D41] text-white border-none p-2 placeholder-pt-1"
      />

      {/* Button */}
      <Button
          variant="lightBlue"
          size="empty"
          className='py-[3px] rounded-sm px-2'
        >
          Ir
      </Button>
    </div>
  );
}
