import "./Sidebar.css";
import {
  FaTimes,
  FaHome,
  FaUserClock,
  FaMusic,
  FaFolderOpen,
  FaUserSecret,
  FaUser,
  FaDownload,
  FaRegCreditCard,
  FaFileAlt,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import me from "../../assets/me.jpg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-img">
          <img src={me} alt="me" />
          <h1>LinkTalents</h1>
        </div>
        <i onClick={() => closeSidebar()} id="sidebarIcon" aria-hidden="true">
          <FaTimes />
        </i>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-link active-menu-link">
          <i>
            <FaHome />
          </i>
          <a href="/">HOME</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar-link">
          <i>
            <FaUserClock />
          </i>
          <a href="/admin">Área administrativa</a>
        </div>
        <div className="sidebar-link">
          <i>
            <FaMusic />
          </i>
          <a href="/estilo">Estilos</a>
        </div>
        <div className="sidebar-link">
          <i>
            <FaFolderOpen />
          </i>
          <a href="/categoria">Categorias</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar-link">
          <i>
            <FaUserSecret />
          </i>
          <a href="/adminusers">Administradores</a>
        </div>
        <div className="sidebar-link">
          <i>
            <FaUser />
          </i>
          <a href="/usuario">Usuários</a>
        </div>
        <div className="sidebar-link">
          <i>
            <FaDownload />
          </i>
          <a href="/downloads">Downloads</a>
        </div>
        <div className="sidebar-link">
          <i>
            <FaRegCreditCard />
          </i>
          <a href="/pagamentos">Pagamentos e custos</a>
        </div>
        <div className="sidebar-link">
          <i>
            <FaFileAlt />
          </i>
          <a href="/definicoes">Política de Privacidade</a>
        </div>
        <div className="sidebar-logout">
          <i>
            <FiLogOut />
          </i>
          <a href="/">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
