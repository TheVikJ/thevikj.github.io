import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FreqDetail from "./pages/FreqDetail";
import FiveHubDetail from "./pages/FiveHubDetail";
import ThorGPTDetail from "./pages/ThorGPTDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freq" element={<FreqDetail />} />
      <Route path="/5hub" element={<FiveHubDetail />} />
      <Route path="/thor" element={<ThorGPTDetail />} />
    </Routes>
  );
}
