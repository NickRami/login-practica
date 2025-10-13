import { Link } from "react-router";

const SignUp = () => {
  return (
    <div
      className="container d-flex justify-content-center  align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="mb-4 text-center" style={{ color: "#ffb347" }}>
          Crear Cuenta
        </h2>
        <form>
          <div className="mb-4">
            <label className="form-label text-start d-block  ">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-start d-block ">Password</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-start d-block ">
              Confirm Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your password"
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
        <div className="mt-3 d-flex align-items-center justify-content-between">
          <Link to="/login" style={{ color: "#ffb347" }}>
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
          <Link to="/" className="btn btn-dark">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
