import DesktopEnvironment from "@/components/features/DesktopEnvironment/DesktopEnvironment";
import Hero from "@/components/features/Hero/Hero";
import { ClientContextProvider } from "./contexts/ClientContext";
import { DesktopEnvContextProvider } from "./contexts/DesktopEnvContext";
import "./Global.css";

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
