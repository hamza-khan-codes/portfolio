import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/Mainlayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
