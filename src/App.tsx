import "./Global.css";
import DesktopEnvironment from "./components/DesktopEnvironment/DesktopEnvironment";
import Hero from "./components/Hero/Hero";
import { ClientContextProvider } from "./contexts/ClientContext";
import { DesktopEnvContextProvider } from "./contexts/DesktopEnvContext";

function App() {
  return (
    <>
      <ClientContextProvider>
        <DesktopEnvContextProvider>
          <Hero />
          <DesktopEnvironment />
        </DesktopEnvContextProvider>
      </ClientContextProvider>
    </>
  );
}

export default App;
