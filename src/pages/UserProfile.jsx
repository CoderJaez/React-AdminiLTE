import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, []);
  return (
    <div>
      <h1>Welcome {user ? user.username : null}</h1>
    </div>
  );
};
