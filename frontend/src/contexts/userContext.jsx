import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export default UserContext;

export function UserContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) navigate("/");
  }, [user.id]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
