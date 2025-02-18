import "./Global.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { ClientContextProvider } from "./contexts/ClientContext";

function App() {
  return (
    <>
      <ClientContextProvider>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </ClientContextProvider>
    </>
  );
}

export default App;
