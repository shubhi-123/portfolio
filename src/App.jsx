import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

const [theme, setTheme] = useState("dark");

useEffect(() => {
  document.body.className = theme === "light" ? "light-theme" : "";
}, [theme]);

function toggleTheme() {
  setTheme((prevTheme) =>
    prevTheme === "dark" ? "light" : "dark"
  );
}

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
}

export default App;