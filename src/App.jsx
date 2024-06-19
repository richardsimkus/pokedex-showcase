import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import TopNav from "./components/TopNav/TopNav.jsx";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="max-w-[1200px] m-auto">
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
