// PopUp.js
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";

const PopUp = ({ service, closePopUpHandler, openPopUp }) => {
  const popupVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  };

  return (
    <AnimatePresence>
      {openPopUp && (
        <motion.div
          className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center overlay z-[200]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <div className="w-[90%] md:w-[70%] h-[90%] bg-white rounded-[20px] drop-shadow-xl md:flex-row flex justify-between px-4 py-10 md:p-10  gap-3 md:gap-10  relative flex-col">
            <div className="absolute top-1 right-2">
              <IoIosClose
                className="text-yellow-primary text-4xl cursor-pointer"
                onClick={closePopUpHandler}
              />
            </div>
            <div className="w-full sm:w-[70%] sm:mx-auto md:w-[50%] drop-shadow-md">
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                src={service.img}
                alt={service.title}
              />
            </div>
            <div className="flex flex-col justify-between text-center md:text-left w-full md:w-[50%] h-[60%] py-2 2xs:pb-5 md:h-full md:gap-4 md:pb-0">
              <h2 className="font-black text-xl md:text-2xl text-green-primary lg:text-2xl">
                {service.title}
              </h2>
              <p className="opacity-80  h-[70%]  md:h-[80%] mb-auto  md:text-lg  overflow-clip text-sm 2xs:h-[50%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                sint nostrum voluptatem illum quis natus consequatur, magni
                explicabo nihil facilis non earum magnam possimus vel error?
                Aspernatur sit impedit delectus, architecto repudiandae itaque
                voluptates quia alias dolor eligendi, eum laboriosam doloribus
                placeat minus tempora velit laborum dolore corporis eveniet
                vitae quibusdam repellat ea dignissimos illum. Sed illo ipsam
                ratione perferendis, eos vitae non mollitia distinctio quibusdam
                dolorem velit labore nesciunt odit! Aut distinctio voluptates
                pariatur praesentium soluta delectus et odit aliquid enim
                deserunt reiciendis maiores esse possimus impedit ad, earum
                laboriosam ipsum sunt facilis officia deleniti consequatur
                explicabo id officiis. Accusantium asperiores, porro et harum
                recusandae voluptas, voluptate, quia nostrum corporis eum
                officiis eos. Distinctio labore odit dolores nulla iste nesciunt
                eligendi expedita. Nam expedita explicabo ratione excepturi
                sapiente odit commodi corrupti doloremque nisi consequuntur! Cum
                cumque quibusdam facere modi! Impedit exercitationem illo ullam
                corporis perspiciatis quaerat magni minima neque laborum beatae?
                Voluptatum deserunt repudiandae architecto. Illum velit at ex
                eveniet facere, unde reprehenderit labore tempore voluptate
                voluptates praesentium voluptatibus quos quae eligendi,
                distinctio impedit necessitatibus voluptas molestiae reiciendis
                consequatur. Obcaecati, asperiores, repellat quis nobis eius
                vitae itaque minus iusto doloribus placeat dignissimos omnis
                dolor reprehenderit ex voluptas, architecto eum!
              </p>
              <button className="bg-green-primary w-[200px] mx-auto md:mx-0 py-2 text-white font-bold text-lg rounded-[20px] hover:bg-black duration-300">
                Contactez-Nous
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
