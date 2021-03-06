import { useEffect, useState } from "react";


const useNav = () => {
  const [navbar, setNavbar] = useState(false);
  const [navBarLogo, setNavBarLogo] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeLogo = () => {
    if (window.scrollY >= 300) {
      setNavBarLogo(<span className="font-bold text-2xl">DATA <span className="text-amber-500 ">COMM</span></span>);
    } else {
      setNavBarLogo(<span className="text-amber-500 ">BeST <span className="font-bold text-2xl text-black">DeAl_</span></span>);
    }
  };
  useEffect(() => {
    changeLogo();
    window.addEventListener("scroll", changeLogo);
  }, []);
  return { navbar, navBarLogo };
};

export default useNav;
