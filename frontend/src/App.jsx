import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Register from "./pages/Register";
import Terms from "./pages/Terms";

import "./styles/App.css";
import { useDarkModeContext } from "./contexts/DarkmodeContext";

function App() {
  const { darkMode } = useDarkModeContext();
  return (
    <div className={`min-h-screen ${darkMode === true ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
