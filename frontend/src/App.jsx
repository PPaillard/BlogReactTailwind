import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Header from "./components/Header";

import "./styles/App.css";
import { useDarkModeContext } from "./contexts/DarkmodeContext";

function App() {
  const { darkMode } = useDarkModeContext();
  return (
    <div className={`${darkMode === true ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
