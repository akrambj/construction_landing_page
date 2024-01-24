import { IoIosClose } from "react-icons/io";

const PopUp = ({ service, closePopUpHandler, openPopUp }) => {
  const transitionStyle = {
    top: openPopUp ? "0" : "100%",
    transition: "top 0.5s ease-in",
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-0 flex items-center justify-center overlay z-[200]"
      style={transitionStyle}
    >
      <div className="w-[70%] h-[80%] bg-white rounded-[20px] drop-shadow-xl flex justify-between p-10 gap-10 relative">
        <div className="absolute top-4 right-6">
          <IoIosClose
            className="text-yellow-primary text-4xl cursor-pointer"
            onClick={closePopUpHandler}
          />
        </div>
        <div className="w-[50%] drop-shadow-md">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={service.img}
            alt={service.title}
          />
        </div>
        <div className="flex flex-col justify-between  w-[50%] ">
          <h2 className="font-black text-4xl text-green-primary">
            {service.title}
          </h2>
          <p className="opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa
            ex earum qui veniam hic doloremque totam, dignissimos ratione fuga
            molestias illo obcaecati ut possimus error maiores expedita optio
            natus? Est quaerat atque voluptates soluta quam itaque id optio, ab
            velit veniam modi aut quo ad obcaecati quia expedita totam explicabo
            enim ipsum deleniti. Autem totam voluptates enim assumenda culpa
            nesciunt dignissimos accusamus harum quae fugiat? Officiis culpa,
            iure deleniti quasi reprehenderit excepturi dolores sunt a similique
            vitae sequi quis atque repudiandae magnam ex dolore accusantium
            doloribus, dicta error aliquid eius fugit. Natus amet error dolorum
            aliquam eius numquam dignissimos?
          </p>
          <button className="bg-green-primary w-[200px]  py-2 text-white font-bold text-lg rounded-[20px] hover:bg-black duration-300">
            Contactez-Nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
