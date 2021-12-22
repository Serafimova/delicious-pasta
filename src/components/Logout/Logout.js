import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

export default function Logout() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  useEffect(() => {
    authService
      .logout(user.accessToken)
      .then(() => {
        logout();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [logout, navigate, user.accessToken]);

  return null;
}
