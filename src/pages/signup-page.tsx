import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const SignUp = () => {
  const { login } = useAuth();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!name || !email) return alert("Por favor completa todos los campos.");

    // Llamada correcta (solo dos argumentos)
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
          Crear Cuenta
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Correo electrónico */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 mb-2"
            style={{
              background: "#ffb347",
              color: "#fffbe7",
              fontWeight: "bold",
            }}
          >
            Registrarse
          </button>
        </form>

        <div className="mt-3 d-flex justify-content-between">
          <Link to="/login" style={{ color: "#ffb347" }}>
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
          <Link to="/" style={{ color: "#ffb347" }}>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
