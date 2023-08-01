import { useEffect, useState } from 'react';
import HeaderSection from '../../components/headerSection/headerSection';
import { useAppContext } from '../../context/appContext';
import { useIsFetching } from '@tanstack/react-query';

const Header = () => {
  const { isRenderPage } = useAppContext();
  const isFetching = useIsFetching();
  const [isLoadingHead, setIsLoadingHead] = useState(true);

  useEffect(() => {
    isRenderPage || isFetching > 0
      ? setIsLoadingHead(true)
      : setIsLoadingHead(false);
  }, [isRenderPage, isFetching]);

  return <HeaderSection isLoading={isLoadingHead} />;
};

export default Header;
