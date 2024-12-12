import { useEffect } from "react";

const usePageVisibility = ({ onVisible, onHidden }) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (onHidden) onHidden();
      } else {
        onVisible();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onVisible, onHidden]);
};

export default usePageVisibility;
