import { FaBars, FaBible } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-md bg-light navbar-light shadow-sm">
      <div onClick={() => navigate("/")} className="logo">
        <FaBible />
      </div>
      <div
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </div>
    </nav>
  );
}

export default Navbar;
