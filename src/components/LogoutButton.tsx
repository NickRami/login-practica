import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        logout();
        navigate("/");
      }}
      className="btn btn-danger"
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
