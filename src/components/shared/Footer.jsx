import { useState } from "react";
import logo from "../../assets/imgs/footer/logo.svg";
import Socials from "../data/Socials";

const Footer = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  const menuItems = [
    { name: "Accueil", link: "#home" },
    { name: "à Propos", link: "#about" },
    { name: "NOS SERVICES", link: "#services" },
    { name: "Testemonials", link: "#testemonials" },
    { name: "Contacts", link: "#contact" },
  ];

  return (
    <footer className="w-full py-5 px-10 flex items-center justify-between bg-black">
      <div className="w-[20%] h-[200px]  flex flex-col gap-3">
        <div className="logo">
          <img className="h-full w-full object-cover" src={logo} alt="logo" />
        </div>
        <h4 className="text-white">AVEC VOUS JUSQU’A LA DERNIèRE PIERRE!</h4>
      </div>
      <div className="w-[20%] h-[200px] ">
        <ul className="flex flex-col justify-center gap-2 uppercase ">
          {menuItems.map((menuItemm, index) => (
            <li key={index}>
              <a
                className={`${
                  index === selectedLink
                    ? "text-yellow-primary font-bold opacity-100"
                    : "text-white opacity-80"
                } text-base hover:text-yellow-primary hover:font-bold duration-300`}
                href={menuItemm.link}
              >
                {menuItemm.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[20%] h-[200px]  flex flex-col gap-3 text-white">
        <h2 className="font-bold">Suivez-nous</h2>
        <ul className="flex items-center gap-3">
          {Socials.map((social, index) => (
            <li className="" key={index}>
              <a
                className="text-white text-xl hover:text-green-primary duration-300"
                href={social.link}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        <li className="list-none">0612 34 53 78</li>
      </div>
      <div className="w-[20%] h-[200px] bg-red-300"></div>
    </footer>
  );
};

export default Footer;
