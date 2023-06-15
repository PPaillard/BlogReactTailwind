import { createContext, useContext, useEffect, useMemo } from "react";
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

  const logout = () => {
    setUser({});
    setToken("");
  };

  const login = (_user, _token) => {
    setToken(_token);
    setUser(_user);
  };

  const memo = useMemo(() => {
    return {
      user,
      token,
      logout,
      login,
    };
  }, [user, token]);

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
