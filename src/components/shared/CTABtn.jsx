import ctaIcon from "../../assets/imgs/ctaIcon.svg";

const CTABtn = () => {
  return (
    <div className="fixed bottom-10 cursor-pointer right-32 bg-yellow-primary w-[70px] h-[70px]  flex items-center justify-center rounded-full">
      <div className="relative h-[70%] w-[70%]">
        <img className="object-contain w-full h-full" src={ctaIcon} alt="cta" />
      </div>
    </div>
  );
};

export default CTABtn;
