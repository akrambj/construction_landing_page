// Service.js
import { motion } from "framer-motion";

const Service = ({ service, openPopUpHandler }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      onClick={openPopUpHandler}
      className="service flex flex-col gap-5 justify-between py-5 bg-white rounded-[30px] px-5 drop-shadow-2xl shadow-md w-[80%] xs:w-[60%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[22%] cursor-pointer hover:bg-green-primary hover:text-white duration-300"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="w-full h-[60%]">
        <motion.img
          loading="lazy"
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover rounded-[30px]"
        />
      </motion.div>
      <motion.div className="h-[40%] text-center flex flex-col gap-2">
        <motion.h4 className="font-bold text-lg w-full overflow-x-clip">
          {service.title}
        </motion.h4>
        <motion.p className="text-[11px] lg:text-[10px]">
          {service.desc}
        </motion.p>
        <motion.button
          className="service-btn text-green-primary font-bold border-b-2 border-black lg:w-[130px] xl:w-[200px] mx-auto text-base w-[200px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN SAVOIR PLUS
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Service;
