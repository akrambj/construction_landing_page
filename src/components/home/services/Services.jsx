import { useState } from "react";
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
    },
    {
      title: "Rénovation Intérieur",
      desc: "Nous effectuons la rénovation de tout type de maison, qu'il s'agisse de rénovation partielle ou totale, de rénovation intérieure ou extérieure...",
      img: serice02,
    },
    {
      title: "Térrassement",
      desc: "Nous effectuons le terrassement de tout type de terrain, qu'il s'agisse de préparer le sol pour la construction, de créer des fondations...",
      img: serice03,
    },
    {
      title: "Architecture Intérieure",
      desc: "Nous réalisons la démolition de tout type de bâtiment, qu'il s'agisse de maisons, d'immeubles, de hangars ou de structures industrielles...",
      img: serice04,
    },
    {
      title: "Rénovation Extérieur",
      desc: "Nous effectuons la rénovation de tout type de maison, qu'il s'agisse de rénovation partielle ou totale, de rénovation intérieure ou extérieure...",
      img: serice05,
    },
    {
      title: "Construction",
      desc: "Nous effectuons le terrassement de tout type de terrain, qu'il s'agisse de préparer le sol pour la construction, de créer des fondations...",
      img: serice06,
    },
  ];

  return (
    <section className="w-full h-full overflow-hidden py-10 services-bg ">
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-green-primary text-5xl font-black">
            NOS SERVICES
          </h2>
          <p className="text-lg w-[60%] mx-auto opacity-80">
            Nous vous offrons une gamme complète de services pour tous vos
            travaux de démolition, rénovation et terrassement. Quelle que soit
            la nature ou la taille de votre projet, nous vous assurons un
            résultat à la hauteur de vos attentes.
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-x-[10%] gap-y-10">
          {services.map((service, index) => (
            <Service
              key={index}
              service={service}
              openPopUpHandler={() => openPopUpHandler(service)}
            />
          ))}
          {openPopUp && (
            <PopUp
              openPopUp={openPopUp}
              service={selectedService}
              closePopUpHandler={closePopUpHandler}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
