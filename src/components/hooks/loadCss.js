import { useEffect } from 'react';

const useCss = url => {
    useEffect(() => {
        const head = document.head;
        const link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;

        head.appendChild(link);
    }, [url]);
};

export default useCss;