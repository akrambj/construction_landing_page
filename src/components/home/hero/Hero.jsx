import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section className="w-full h-screen overflow-hidden phone-bg md:px-40">
      <motion.div className="h-full flex flex-col items-center justify-end pb-10 text-center gap-3 z-20 lg:gap-5 text-white w-[85%] mx-auto md:mx-0 md:justify-center lg:py-32 md:items-start md:text-left lg:w-[50%]">
        <motion.h1
          className="text-xl font-bold uppercase md:text-2xl lg:text-3xl md:w-full lg:w-[90%] xl:w-[70%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AVEC VOUS JUSQU’A LA DERNIèRE PIERRE!
        </motion.h1>
        <motion.p
          className="text-sm md:text-sm md:w-[90%] lg:text-lg shadow-lg opacity-80 xl:w-[70%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bienvenue sur le site de Guirri-bat, votre entreprise de démolition,
          rénovation et terrassement à Birkhadem. Nous vous proposons des
          prestations de qualité, adaptées à vos projets et à votre budget.
        </motion.p>
        <motion.button
          className="bg-yellow-primary px-10 py-2 text-lg text-black font-bold rounded-lg md:text-xl hover:bg-white duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          FAIRE UN PROJET
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
