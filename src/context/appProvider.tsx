import { useEffect, useState } from 'react';
import { AppContext } from './appContext';
import { useLocation } from 'react-router-dom';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRenderPage, setIsRenderPage] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsRenderPage(false);
    }, 500);

    return () => {
      setIsRenderPage(true);
    };
  }, [location]);

  return (
    <AppContext.Provider value={{ isRenderPage, setIsRenderPage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
