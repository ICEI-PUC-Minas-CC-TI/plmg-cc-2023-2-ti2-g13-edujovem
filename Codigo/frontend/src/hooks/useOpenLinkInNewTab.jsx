import { useCallback } from 'react';

const useOpenLinkInNewTab = () => {
  const openLinkInNewTab = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  return openLinkInNewTab;
};

export default useOpenLinkInNewTab;
