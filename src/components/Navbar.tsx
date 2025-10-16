import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="container navbar navbar-expand-lg ">
      <div className="container-fluid py-1 ">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#294F85",
            letterSpacing: "2px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{
              marginRight: "0.5rem",
            }}
          >
            <circle cx="16" cy="16" r="16" fill="#000000" />
            <text
              x="8"
              y="22"
              fontSize="16"
              fill="#ffffff"
              fontFamily="Arial"
              fontWeight="bold"
              style={{
                objectPosition: "center",
                alignItems: "center",
                flex: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              L
            </text>
          </svg>
          LoginAuth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center text-black ">
            <li className="nav-item">
              <a
                className="nav-link fw-medium px-3"
                href="#"
                style={{ transition: "color 0.2s" }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  fw-medium px-3"
                href="#"
                style={{ transition: "color 0.2s" }}
              >
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  fw-medium px-3"
                href="#"
                style={{ transition: "color 0.2s" }}
              >
                Contacto
              </a>
            </li>

            {user ? (
              <div className="d-flex align-items-center">
                <span className="me-3  text-white bg-black px-2 py-2 rounded ">
                  {" "}
                  {user.name}
                </span>
                <LogoutButton />
              </div>
            ) : (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="btn text-white"
                  style={{ backgroundColor: "#294F85" }}
                >
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <style>
        {`
          .nav-link:hover, .nav-link.active {
            color: #fffbe7 !important;
            text-shadow: 0 1px 8px #ffb347;
          }
          .btn:hover {
            background: #ffb347 !important;
            color: #fffbe7 !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
