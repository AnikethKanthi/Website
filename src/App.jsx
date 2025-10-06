import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/about.jsx";
import Home from "./components/Home.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

export default function App() {
  return (
    <>
      {/* anchor target for "Brand" link */}
      <div id="top"></div>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Optional: fallback to Home for unknown paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
