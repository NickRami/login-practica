import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LogoutButton from "../components/LogoutButton";

const Login = () => {
  const { user, name, setName, setEmail, email, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="container text-center" style={{ padding: "2rem" }}>
        <h2 className="mb-4">
          Ya has iniciado sesión como {user?.name || user?.email}
        </h2>
        <LogoutButton />
        <div className="mt-3">
          <Link to="/" className="btn btn-dark">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación real
    login(name, email);
    navigate("/");
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="mb-4 text-center" style={{ color: "#ffb347" }}>
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-start d-block ">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="form-label text-start d-block "
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              background: "#ffb347",
              color: "#fffbe7",
              fontWeight: "bold",
            }}
          >
            Ingresar
          </button>
        </form>
        <div className="mt-3 d-flex align-items-center justify-content-between">
          <Link
            to="/register"
            className="d-block text-center"
            style={{ color: "#ffb347" }}
          >
            ¿No tienes cuenta? Regístrate
          </Link>
          <Link to="/" className="btn btn-dark">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
