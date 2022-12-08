import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const value = {
    user,
    login,
  };
  const navigate = useNavigate();
  function login({ username, password }) {
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({
            username: username,
            token: data.token,
          });
          navigate("/profile");
        }
      });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
