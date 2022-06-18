import { useState } from "react";

import Navbar from "./Components/navbar/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";

import { Rotas } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Rotas />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </Router>
  );
};

export default App;
