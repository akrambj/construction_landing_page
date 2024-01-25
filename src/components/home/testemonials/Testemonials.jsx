import { useEffect, useState } from "react";
import testimonial01 from "../../../assets/imgs/testemonials/testimonial01.svg";
import Testemonial from "./Testemonial";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
const Testemonials = () => {
  const testemonials = [
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const testemonialsSection = document.getElementById("testemonials");
      if (testemonialsSection) {
        const rect = testemonialsSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="testemonials"
      className="w-full h-full overflow-hidden bg-logo"
    >
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center gap-20 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="flex flex-col gap-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="font-bold text-4xl">Client</h4>
          <h3 className="text-green-primary font-black text-3xl md:text-5xl">
            Témoignage
          </h3>
        </motion.div>
        <motion.div
          className="w-[80%] mx-auto flex justify-center items-center flex-wrap gap-x-14 gap-y-20 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {testemonials.map((testemonial, index) => (
            <Testemonial key={index} testemonial={testemonial} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testemonials;
