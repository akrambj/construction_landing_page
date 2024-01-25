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
      desc: "Les démolitions ne sont pas simplement une phase nécessaire, mais une opportunité de transformation. Notre équipe gère ces transitions avec professionnalisme, respectant strictement les normes de sécurité, tout en facilitant une évolution fluide vers de nouveaux projets passionnants.",
      img: serice01,
      count: 10,
    },
    {
      title: "Rénovation Intérieur",
      desc: "L'art de réinventer l'espace intérieur est une passion chez Guerri Bat. Notre service de rénovation va au-delà de la simple mise à jour. Nous fusionnons fonctionnalité et esthétique pour créer des intérieurs qui incarnent parfaitement votre style de vie.",
      img: serice02,
      count: 20,
    },
    {
      title: "Térrassement",
      desc: "Les fondations solides sont la clé de toute construction durable. Notre expertise en terrassement assure la stabilité requise, créant un socle robuste pour soutenir la vision architecturale de votre projet.",
      img: serice03,
      count: 30,
    },
    {
      title: "Architecture Intérieure",
      desc: "Affinez chaque détail de votre espace avec notre expertise en architecture d'intérieur. Chaque choix est délibéré, chaque élément est considéré pour créer des ambiances cohérentes, personnalisées et harmonieuses.",
      img: serice04,
      count: 40,
    },
    {
      title: "Rénovation Extérieur",
      desc: "Nos projets de rénovation extérieure transforment vos espaces en des environnements accueillants et fonctionnels. Chaque détail est pensé pour revitaliser vos extérieurs, créant ainsi des espaces qui résistent à l'épreuve du temps.",
      img: serice05,
      count: 50,
    },
    {
      title: "Construction",
      desc: "Au cœur de notre savoir-faire, la construction chez Guerri Bat est bien plus qu'une simple réalisation. C'est une histoire méticuleusement écrite, de la conception initiale à l'achèvement, où chaque étape est soigneusement orchestrée pour garantir la précision, la durabilité et la satisfaction du client.",
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
            Chez Guerri Bat, nous sommes votre partenaire polyvalent, prêt à
            répondre à tous vos besoins de construction et de design pour créer
            des espaces exceptionnels{" "}et{" "}durables.
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
