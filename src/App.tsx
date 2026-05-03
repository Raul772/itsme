import "./Global.css";
import DesktopEnvironment from "./components/DesktopEnvironment/DesktopEnvironment";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Taskbar from "./components/Taskbar/Taskbar";
import { ClientContextProvider } from "./contexts/ClientContext";
import { DesktopEnvContextProvider } from "./contexts/DesktopEnvContext";

function App() {
  
  return (
    <>
      <ClientContextProvider>
        <DesktopEnvContextProvider>
          {/* <Navbar /> */}
          <Hero />
          <DesktopEnvironment />
          {/* <About />
          <Projects />
          <Contact />
          <Footer /> */}
        </DesktopEnvContextProvider>
      </ClientContextProvider>
    </>
  );
}

export default App;
