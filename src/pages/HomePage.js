import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/Coordinator";

export const HomePage = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>home página</p>
      <button onClick={login}>Login</button>
    </div>
  );
};
