import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import NameTag from "./NameTag";

const Header = () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle mb-4">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="GraphQL Logo" className="mr-2" />
            <div>ProjMan</div>
          </div>
        </a>

        <span className="d-flex justify-content-center ">
          {" "}
          {token && <NameTag token={token} />}
          {token && (
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Header;
