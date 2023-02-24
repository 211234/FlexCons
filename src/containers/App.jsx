import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register"
import NotFound from "../pages/Notfound";

function App() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/notFound" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;