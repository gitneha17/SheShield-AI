import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Emergency from "./pages/Emergency";
import Rights from "./pages/Rights";
import Schemes from "./pages/Schemes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="/schemes" element={<Schemes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;