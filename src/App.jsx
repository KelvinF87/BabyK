import "./App.css";

import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { Mensajes } from "./pages/Mesajes";
import { Mibaby } from "./pages/Mibaby";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
        <div className="mt-17">
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/baby" element={<Mibaby />} />
          <Route path="/noticias" element={<Mensajes />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
        </div>
      <Menu />
    </>
  );
}

export default App;
