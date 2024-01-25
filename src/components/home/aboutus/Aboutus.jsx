import { useEffect, useRef, useState } from "react";
import aboutus from "../../../assets/imgs/aboutus.svg";
import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber ";

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
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

  return (
    <motion.section
      id="about"
      className="w-full bg-logo relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="w-full h-full flex flex-col py-10 gap-7 md:flex-row md:justify-between md:items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="relative md:w-[45%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="w-[70%] lg:w-[80%] h-[300px] lg:h-[450px] md:w-[90%] xs:h-[350px] 2xs:h-[400px] bg-yellow-primary rounded-tr-[30px] rounded-br-[30px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="w-[70%] md:w-full lg:w-[70%] h-[240px] lg:h-[400px] xs:h-[300px] 2xs:h-[350px] absolute top-8 lg:top-5 lg:left-40 left-10 rounded-[20px] drop-shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.img
                className="w-full h-full object-cover rounded-[20px] drop-shadow-xl"
                src={aboutus}
                loading="lazy"
                alt="workers"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center flex flex-col gap-3 md:w-[45%] md:text-left lg:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h3 className="text-green-primary uppercase font-black text-3xl lg:text-4xl lg:w-[70%] lg:leading-[40px]">
            qualifiés, passionnés et professionnels
          </motion.h3>
          <motion.p
            className="lg:text-sm lg:w-[90%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Bienvenue chez Guerri Bat, votre partenaire de confiance pour tous
            vos projets de construction dans le sud de la France. Fondée avec
            une passion durable pour l{"'"}art de bâtir, notre société s{"'"}
            engage à fournir des solutions de construction innovantes et de
            qualité.À Guerri Bat, nous comprenons que chaque projet est unique,
            c{"'"}est pourquoi nous mettons l{"'"}accent sur une approche
            personnalisée. Notre équipe expérimentée, basée à Cannes, allie
            expertise technique et créativité pour donner vie à vos idées. Que
            vous envisagiez une nouvelle construction, une rénovation ou une
            extension, nous sommes là pour concrétiser vos rêves. Notre
            engagement envers l{"'"}excellence se reflète dans chaque étape de
            notre travail, de la conception à la réalisation. Nous sommes fiers
            de notre réputation en tant que constructeur fiable, offrant des
            résultats exceptionnels et respectant les délais. Chez Guerri Bat,
            nous croyons en la construction de relations solides avec nos
            clients. La transparence, l{"'"}intégrité et la communication
            ouverte sont au cœur de notre approche. Explorez notre portefeuille
            diversifié de projets réussis et découvrez comment nous pouvons
            transformer vos idées en réalité. Nous sommes prêts à être votre
            partenaire de confiance dans chaque étape de{" "}votre{" "}projet.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-[90%] md:h-[120px] md:rounded-[50px] py-2 rounded-lg h-[300px] bg-white drop-shadow-2xl justify-center gap-2 mx-auto flex items-center flex-wrap"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-l-[50px] flex items-center justify-center  flex-col gap-2 text-center rounded-tl-[40px] drop-shadow-md `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={10} isVisible={isVisible} />
          </motion.h4>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Ans dans L’Industrie
          </motion.h6>
        </motion.div>
        <motion.div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center rounded-tl-[40px] drop-shadow-md `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={100} isVisible={isVisible} />
          </motion.h4>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Ans dans L’Industrie
          </motion.h6>
        </motion.div>
        <motion.div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center rounded-tl-[40px] drop-shadow-md `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={230} isVisible={isVisible} />
          </motion.h4>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Membre d’équipe
          </motion.h6>
        </motion.div>
        <motion.div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-r-[50px] md:rounded-l-none flex items-center justify-center  flex-col gap-2 text-center rounded-tl-[40px] drop-shadow-md `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={2000} isVisible={isVisible} />
          </motion.h4>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Capacité
          </motion.h6>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Aboutus;
