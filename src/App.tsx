import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import DappPage from "pages/dapp";

function App() {
  document.documentElement.classList.add("dark");
  return (
    <div
      className="min-h-screen bg-white dark:bg-black"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dapp" element={<DappPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
