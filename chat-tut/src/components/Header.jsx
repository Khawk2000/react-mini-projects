import { useAuth } from "../utils/AuthContext";
import { LogIn, LogOut } from "react-feather";

const Header = () => {
  const { user } = useAuth();

  return (
    <div id="header--wrapper">
      {user ? (
        <>
          Welcome {user.name} <LogOut className="header--link" />
        </>
      ) : (
        <LogIn className="header--link" />
      )}
    </div>
  );
};

export default Header;
