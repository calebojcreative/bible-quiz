import { FaBars, FaBible } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav">
        <div onClick={() => navigate("/")} className="logo">
          <FaBible />
        </div>
        <div className="logo">
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
