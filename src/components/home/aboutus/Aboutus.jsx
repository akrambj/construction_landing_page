import aboutus from "../../../assets/imgs/aboutus.svg";
import Statistic from "./Statistic";

const Aboutus = () => {
  return (
    <section className="w-full bg-logo relative">
      <div className="w-full h-full flex flex-col py-10 gap-7">
        <div className="relative">
          <div className="w-[70%] h-[300px] bg-yellow-primary rounded-tr-[30px] rounded-br-[30px]">
            <div className="w-[70%] h-[240px] absolute top-8 left-10  rounded-[20px] drop-shadow-xl">
              <img
                className="w-full h-full object-cover rounded-[20px] drop-shadow-xl"
                src={aboutus}
                alt="workers"
              />
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h3 className="text-green-primary uppercase font-black text-3xl">
            qualifiés, passionnés et professionnels
          </h3>
          <p>
            Guirri-bat, c{"'"}est la garantie d{"'"}un travail soigné, rapide et
            efficace, réalisé par une équipe de professionnels qualifiés et
            passionnés. N{"'"}attendez plus, confiez-nous vos travaux de
            démolition, rénovation et terrassement !
          </p>
        </div>
        <div className="w-[90%] h-[300px] bg-white drop-shadow-2xl justify-center gap-[1%] mx-auto flex items-center  flex-wrap">
          <Statistic
            title={"+10"}
            desc={"Ans dans L’Industrie"}
            sideX={"t"}
            sideY={"l"}
          />
          <Statistic
            title={"+100"}
            desc={"Bâtiment dans L’Algérie"}
            sideX={"t"}
            sideY={"r"}
          />
          <Statistic
            title={"+230"}
            desc={"Membre d’équipe"}
            sideX={"b"}
            sideY={"l"}
          />
          <Statistic
            title={"+2000"}
            desc={"Capacité"}
            sideX={"b"}
            sideY={"r"}
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
