import React from "react";
import { Link } from "react-router";

const Login = () => {
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
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-start d-block ">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
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
          <Link to="/register" className="d-block text-center">
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
