import { createContext, PropsWithChildren, useContext } from "react";
import useMatchMedia from "../hooks/useMatchMedia";

type IClientContext = {
  isMobile: boolean;
};

const ClientContext = createContext<IClientContext | null>(null);

export const useClientContext = () => {
  const context = useContext(ClientContext);

  if (!context)
    throw new Error(
      "useClientContext must be in scope of a ClientContextProvider"
    );

  return context;
};

export function ClientContextProvider({ children }: PropsWithChildren) {
  const isMobile = useMatchMedia("(width < 600px)");

  return (
    <ClientContext.Provider
      value={{
        isMobile,
      }}>
      {children}
    </ClientContext.Provider>
  );
}
