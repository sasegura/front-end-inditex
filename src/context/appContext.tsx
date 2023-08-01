import { createContext, useContext } from 'react';

interface AppContextType {
  isRenderPage: boolean;
  setIsRenderPage: (renderPage: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  isRenderPage: true,
  setIsRenderPage: () => {},
});

export const useAppContext = () => useContext(AppContext);
