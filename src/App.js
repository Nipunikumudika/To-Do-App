import "./App.css";
import LoginPage from "./Pages/Login";
import WelcomeBackPage from "./Pages/WelcomeBack";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="Welcomebackpage" element={<WelcomeBackPage />} />
    </Routes>
  </div>
  );
}

export default App;
