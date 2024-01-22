import { useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.svg";
import logoWhite from "../../assets/imgs/logoWhite.svg";
import Socials from "../data/Socials";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [scrollVersion, setScrollVersion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
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
    { name: "à Propos", link: "/" },
    { name: "NOS SERVICES", link: "#services" },
    { name: "Testemonials", link: "#agency" },
    { name: "Contacts", link: "#values" },
  ];

  const toggleMenu = () => {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
  };
  return (
    <header className="w-screen fixed top-0 left-0 flex items-center justify-between py-4 px-7  lg:px-32">
      <div
        className={`logo w-[60%] xs:w-[50%] md:w-[30%] xl:w-[20%] relative z-40 ${
          scrollVersion ? "opacity-0" : "opacity-100"
        } duration-300`}
      >
        <img
          className="w-full h-full object-cover duration-300 "
          src={menuToggle ? logoWhite : logo}
          alt="logo"
        />
      </div>
      <div className="menu md:hidden">
        <div
          className={`menuicon z-50 ${menuToggle ? "openMenu" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line-1 bg-yellow-primary"></span>
          <span className="line-2 bg-yellow-primary"></span>
          <span className="line-3 bg-yellow-primary"></span>
        </div>
        <div
          className={`absolute top-0 h-screen w-screen overflow-hidden ${
            menuToggle ? " right-0  menu-bg" : "-right-[100vw]"
          } transition-all ease-in duration-300`}
        >
          <div className="overlay absolute left-0 top-0 right-0 bottom-0 z-20"></div>
          <div className="w-[80%] mx-auto h-[90%] pt-14 mt-10  flex flex-col justify-between text-white z-30  relative">
            <div className="flex flex-col gap-12">
              <h2 className="border-l-4 border-green-primary pl-2 uppercase w-[90%] text-xl font-bold">
                <span className="text-yellow-primary">AVEC VOUS</span> JUSQU’A
                LA DERNIèRE <span className="text-green-primary">PIERRE</span>
              </h2>
              <ul className="flex flex-col gap-4 px-2">
                {menuItems.map((item, index) => (
                  <li
                    className={`uppercase text-xl ${
                      selectedLink === index
                        ? "text-yellow-primary font-bold"
                        : ""
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
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="uppercase  font-semibold text-xl">Suivez-nous</h2>
              <ul className="w-full flex items-center gap-2">
                {Socials.map((media, index) => (
                  <li key={index} className="">
                    <a
                      className="text-yellow-primary text-xl"
                      href={media.link}
                    >
                      {media.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`items-center  hidden md:flex ${
          scrollVersion
            ? "bg-white shadow-xl py-3 px-5 rounded-lg"
            : "bg-transparent py-0 px-0"
        } duration-300`}
      >
        <ul className="flex items-center gap-5">
          {menuItems.map((item, index) => (
            <li
              className={`cursor-pointer uppercase text-sm md:text-base xl:text-lg hover:text-yellow-primary duration-300 ${
                selectedLink === index ? "text-yellow-primary font-bold" : ""
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
