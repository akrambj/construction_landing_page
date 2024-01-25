import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="w-full h-screen overflow-hidden phone-bg md:px-40"
    >
      <motion.div className="h-full flex flex-col items-center justify-end pb-10 text-center gap-3 z-20 lg:gap-16 text-white w-[85%] mx-auto md:mx-0 md:justify-center lg:mt-40 lg:py-20  lg:h-[60%]  md:items-start md:text-left lg:w-[50%]">
        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-xl font-bold uppercase md:text-2xl lg:text-3xl md:w-full lg:w-[90%] xl:w-[70%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AVEC VOUS JUSQU’A LA DERNIèRE PIERRE!
          </motion.h1>
          <motion.p
            className="text-sm md:text-sm md:w-[90%] lg:text-lg shadow-lg opacity-80 xl:w-[80%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Bienvenue chez Guerri Bat, votre partenaire de confiance pour la
            construction dans le sud de la France. Notre équipe expérimentée à
            cane se consacre à des solutions de construction de qualité,
            adaptées à vos besoins uniques. Découvrez comment nous pouvons
            concrétiser vos projets avec excellence et engagement.
          </motion.p>
        </div>
        <motion.button
          className="bg-yellow-primary px-10 py-2 text-lg text-black font-bold rounded-lg md:text-xl hover:bg-white duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#contact">FAIRE UN PROJET</a>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
