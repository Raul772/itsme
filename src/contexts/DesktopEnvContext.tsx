import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Window from "../types/Window";

type DesktopEnvContextType = {
  windows: Map<string, Window> | null;
  setWindows: Dispatch<SetStateAction<Map<string, Window> | null>>;
};

const DesktopEnvContext = createContext<DesktopEnvContextType | null>(null);

export const useDesktopEnvContext = () => {
  const context = useContext(DesktopEnvContext);

  if (!context)
    throw new Error(
      "useDesktopEnvContext must be in scope of a DesktopEnvContextProvider",
    );

  return context;
};

export function DesktopEnvContextProvider({ children }: PropsWithChildren) {
  const [windows, setWindows] = useState<Map<string, Window> | null>(null);

  return (
    <DesktopEnvContext.Provider
      value={{
        windows,
        setWindows,
      }}>
      {children}
    </DesktopEnvContext.Provider>
  );
}
