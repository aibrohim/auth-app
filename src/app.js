import { BrowserRouter } from "react-router-dom";
import AuthApp from "./apps/auth-app";
import UnAuthApp from "./apps/unauth-app";
import useUser from "./hooks/useUser";

function App() {
  const {user} = useUser();

  return (
    <BrowserRouter>
      {
        user
        ? <AuthApp />
        : <UnAuthApp />
      }
    </BrowserRouter>
  );
}

export default App;
