import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center">
        <IoMenu className="text-lime-600 h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle className="text-center">
          <span>
            {isAuthenticated
              ? `Welcome back, ${user?.given_name}!`
              : "Welcome to ForkRunner!"}
          </span>
        </SheetTitle>

        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 hover:bg-lime-600 duration-200"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
