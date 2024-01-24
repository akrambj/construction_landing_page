import { useEffect, useState } from "react";
import logo from "../../assets/imgs/header/logo.svg";
import Socials from "../data/Socials";
import CTABtn from "./CTABtn";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [scrollVersion, setScrollVersion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setScrollVersion(true);
      } else {
        setScrollVersion(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollVersion);

  const menuItems = [
    { name: "Accueil", link: "/" },
    { name: "à Propos", link: "/" },
    { name: "NOS SERVICES", link: "#services" },
    { name: "Testemonials", link: "#agency" },
    { name: "Contacts", link: "#values" },
  ];

  const toggleMenu = () => {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
  };
  return (
    <header
      className={`w-screen  duration-300 fixed top-3 left-0 flex items-center justify-between py-4 px-5   md:px-24 lg:px-40 md:py-10 z-50`}
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          opacity: scrollVersion ? 0.4 : 0,
        }}
        className={` bg-black fixed w-[97%] left-[2%] md:w-[88%] py-8 md:left-[7%] rounded-[60px] ${
          scrollVersion
            ? "transition-opacity duration-300 ease-in-out"
            : "opacity-0"
        }`}
      ></div>
      <div
        className={`logo  flex items-center justify-center   w-[65%] xs:w-[50%] md:w-[30%] lg:w-[25%]  relative z-40  duration-300`}
      >
        <img
          className="w-full h-full object-cover duration-300  z-20 lg:cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="menu md:hidden">
        <div
          className={`menuicon z-50 ${menuToggle ? "openMenu" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line-1 bg-white"></span>
          <span className="line-2 bg-white"></span>
          <span className="line-3 bg-white"></span>
        </div>
        <nav
          className={`absolute headerBg ${
            menuToggle ? "right-0 " : "-right-full"
          } -top-3 duration-300 w-full h-screen overflow-hidden `}
        >
          <div className="w-full h-[90%] flex flex-col justify-between my-16 py-10 px-5 ">
            <ul className="flex flex-col justify-center gap-5 uppercase ">
              {menuItems.map((menuItemm, index) => (
                <li key={index}>
                  <a
                    className={`${
                      index === selectedLink
                        ? "text-yellow-primary font-bold opacity-100"
                        : "text-white opacity-80"
                    } text-xl`}
                    href={menuItemm.link}
                  >
                    {menuItemm.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <h3 className="text-white uppercase fono-bold text-xl">
                Suivez-nous
              </h3>
              <ul className="flex items-center gap-3">
                {Socials.map((social, index) => (
                  <li className="" key={index}>
                    <a
                      className="text-yellow-primary text-xl"
                      href={social.link}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`${
              menuToggle ? "opacity-100" : "opacity-0"
            } duration-300`}
          >
            <CTABtn />
          </div>
        </nav>
      </div>

      <nav className={`items-center  hidden md:flex  duration-300 z-20`}>
        <ul className="flex items-center gap-5 ">
          {menuItems.map((item, index) => (
            <li
              className={`cursor-pointer uppercase ${
                scrollVersion ? "text-black" : "text-white"
              } text-sm md:text-[11px] lg:text-base hover:text-yellow-primary duration-300  ${
                selectedLink === index
                  ? "text-yellow-primary font-bold"
                  : "text-white"
              }`}
              key={index}
              onClick={() => {
                setMenuToggle(false);
                setSelectedLink(index);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
