import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register"
import NotFound from "../pages/Notfound";
import CambiarContraseña from "../pages/CambiarContraseña";
import Verification from "../pages/Verification";

function App() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cambiarcontraseña" element={<CambiarContraseña/>} />
            <Route path="/verification" element={<Verification/>} />
            <Route path="/notFound" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;