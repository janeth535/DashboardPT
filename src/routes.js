import { Routes, Route } from "react-router-dom";
import { Admin } from "./pages/admin";
import { AdminUsers } from "./pages/adminUsers";
import { Categoria } from "./pages/categoria";
import { Downloadoads } from "./pages/downloads";
import { Home } from "./pages/home";
import { Payments } from "./pages/payments";
import { Settings } from "./pages/settings";
import { Style } from "./pages/style";
import { Uploads } from "./pages/uploads";
import { Users } from "./pages/users";

export function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/uploads" element={<Uploads />} />
      <Route path="/estilo" element={<Style />} />
      <Route path="/categoria" element={<Categoria />} />
      <Route path="/usuario" element={<Users />} />
      <Route path="/pagamentos" element={<Payments />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminusers" element={<AdminUsers />} />
      <Route path="/definicoes" element={<Settings />} />
      <Route path="/downloads" element={<Downloadoads />} />
    </Routes>
  );
}
