import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    url.forEach(url => {
      const script = document.createElement('script');

      script.src = url;

      document.body.appendChild(script);
    })
    // const script = document.createElement('script');

    // script.src = url;

    // document.body.appendChild(script);

    return () => {

      // document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;