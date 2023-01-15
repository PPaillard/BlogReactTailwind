import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import ProfileInfos from "./components/ProfileInfos";

import "./styles/App.css";
import { useDarkModeContext } from "./contexts/DarkmodeContext";

function App() {
  const { darkMode } = useDarkModeContext();
  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route index element={<Posts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="terms" element={<Terms />} />
        {/* Secured route */}
        <Route path="profile" element={<Profile />}>
          <Route index element={<ProfileInfos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
