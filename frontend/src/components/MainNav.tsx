import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          className="bg-lime-600 hover:bg-lime-700 duration-200"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </nav>
  );
};

export default MainNav;
