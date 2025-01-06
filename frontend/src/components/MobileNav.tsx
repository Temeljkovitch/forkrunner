import { CgMenuRightAlt } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center">
        <CgMenuRightAlt className="text-emerald-500 h-7 w-7" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle className="text-center">
          <span>Welcome to ForkRunner!</span>
        </SheetTitle>
       
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-emerald-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
