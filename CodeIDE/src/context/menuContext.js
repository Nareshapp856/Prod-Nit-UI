import { createContext, useContext, useState } from "react";

export const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  navHeight: "0px",
});

export const MenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [navHeight, setNavHeight] = useState("58px");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        setNavHeight("100px");
      } else {
        setNavHeight("58px");
      }

      return !prev;
    });
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, navHeight }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
