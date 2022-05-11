import avatar from "../../assets/avatar.jpg";
import "./Navbar.css";
import { FaBars, FaSearch, FaRegClock } from "react-icons/fa";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-icon" onclick={() => openSidebar()}>
        <i aria-hidden="true">
          <FaBars />
        </i>
      </div>

      <div className="navbar-left">
        <a href="/">Estilos</a>
        <a href="/">Usuários</a>
        <a href="/" className="active-link">
          Admin
        </a>
      </div>

      <div className="navbar-right">
        <a href="/">
          <i>
            <FaSearch />
          </i>
        </a>

        <a href="/">
          <i>
            <FaRegClock />
          </i>
        </a>

        <a href="/">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
