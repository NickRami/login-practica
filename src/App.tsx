import { BrowserRouter } from "react-router";
import "./App.css";
import AuthProvider from "./context/auth/AuthProvider";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
