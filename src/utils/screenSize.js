import {useState, useEffect} from "react";

export const checkIfMobile = () => window.matchMedia("(max-width: 768px)").matches;

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(checkIfMobile());
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
  }