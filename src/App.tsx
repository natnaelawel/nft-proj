import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import DappPage from "pages/dapp";

function App() {
  document.documentElement.classList.add("dark");
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-white dark:bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dapp" element={<DappPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
