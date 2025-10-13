import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff",
            letterSpacing: "2px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{ marginRight: "0.5rem" }}
          >
            <circle cx="16" cy="16" r="16" fill="#fffbe7" />
            <text
              x="8"
              y="22"
              fontSize="16"
              fill="#ffb347"
              fontFamily="Arial"
              fontWeight="bold"
            >
              L
            </text>
          </svg>
          LoginAuth
        </a>
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
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a
                className="nav-link text-white fw-medium px-3"
                href="#"
                style={{ transition: "color 0.2s" }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-medium px-3"
                href="#"
                style={{ transition: "color 0.2s" }}
              >
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-medium px-3"
                href="#"
                style={{ transition: "color 0.2s" }}
              >
                Contacto
              </a>
            </li>
            <Link className="btn btn-dark" to={"/login"}>
              Iniciar Sesión
            </Link>
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
