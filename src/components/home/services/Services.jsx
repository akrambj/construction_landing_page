import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import serice01 from "../../../assets/imgs/services/service01.svg";
import serice02 from "../../../assets/imgs/services/service02.svg";
import serice03 from "../../../assets/imgs/services/service03.svg";
import serice04 from "../../../assets/imgs/services/service04.svg";
import serice05 from "../../../assets/imgs/services/service05.svg";
import serice06 from "../../../assets/imgs/services/service06.svg";
import Service from "./Service";
import PopUp from "./PopUp";

const Services = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 });
  }, [controls, isVisible]);

  const openPopUpHandler = (service) => {
    setSelectedService(service);
    setOpenPopUp(true);
  };

  const closePopUpHandler = () => {
    setOpenPopUp(false);
  };

  const services = [
    {
      title: "Démolition",
      desc: "Nous réalisons la démolition de tout type de bâtiment, qu'il s'agisse de maisons, d'immeubles, de hangars ou de structures industrielles...",
      img: serice01,
      count: 10,
    },
    {
      title: "Rénovation Intérieur",
      desc: "Nous effectuons la rénovation de tout type de maison, qu'il s'agisse de rénovation partielle ou totale, de rénovation intérieure ou extérieure...",
      img: serice02,
      count: 20,
    },
    {
      title: "Térrassement",
      desc: "Nous effectuons le terrassement de tout type de terrain, qu'il s'agisse de préparer le sol pour la construction, de créer des fondations...",
      img: serice03,
      count: 30,
    },
    {
      title: "Architecture Intérieure",
      desc: "Nous réalisons la démolition de tout type de bâtiment, qu'il s'agisse de maisons, d'immeubles, de hangars ou de structures industrielles...",
      img: serice04,
      count: 40,
    },
    {
      title: "Rénovation Extérieur",
      desc: "Nous effectuons la rénovation de tout type de maison, qu'il s'agisse de rénovation partielle ou totale, de rénovation intérieure ou extérieure...",
      img: serice05,
      count: 50,
    },
    {
      title: "Construction",
      desc: "Nous effectuons le terrassement de tout type de terrain, qu'il s'agisse de préparer le sol pour la construction, de créer des fondations...",
      img: serice06,
      count: 60,
    },
  ];

  return (
    <motion.section
      id="services"
      style={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      className="w-full h-full overflow-hidden py-10 services-bg"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-green-primary text-3xl lg:text-5xl font-black">
            NOS SERVICES
          </h2>
          <p className="text-sm w-[95%] lg:text-lg lg:w-[60%] mx-auto opacity-80">
            Nous vous offrons une gamme complète de services pour tous vos
            travaux de démolition, rénovation et terrassement. Quelle que soit
            la nature ou la taille de votre projet, nous vous assurons un
            résultat à la hauteur de vos attentes.
          </p>
        </div>
        <motion.div
          className="flex items-center justify-center  flex-wrap gap-2 mx-auto lg:gap-x-[3%] xl:gap-x-[10%] gap-y-10 "
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <Service
              key={index}
              service={service}
              openPopUpHandler={() => openPopUpHandler(service)}
            />
          ))}
        </motion.div>
        {openPopUp && (
          <PopUp
            openPopUp={openPopUp}
            service={selectedService}
            closePopUpHandler={closePopUpHandler}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default Services;
