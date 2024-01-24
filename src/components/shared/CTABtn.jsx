import { useState } from "react";
import ctaIcon from "../../assets/imgs/ctaIcon.svg";

const CTABtn = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div
      onClick={() => setShowText(!showText)}
      className="fixed bottom-10 cursor-pointer z-20 right-3 bg-yellow-primary w-[70px] h-[70px]  flex items-center justify-center rounded-full"
    >
      <div className="relative h-[70%] w-[70%]">
        <img className="object-contain w-full h-full" src={ctaIcon} alt="cta" />
      </div>
      <div
        className={`absolute ${
          showText ? "opacity-100" : "opacity-0"
        } duration-300 right-20 bg-yellow-primary w-[200px] py-2 text-center rounded-md`}
      >
        <span className="text-white capitalize">contact us</span>
      </div>
    </div>
  );
};

export default CTABtn;
