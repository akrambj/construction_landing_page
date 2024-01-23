import aboutus from "../../../assets/imgs/aboutus.svg";
import Statistic from "./Statistic";

const Aboutus = () => {
  return (
    <section className="w-full bg-logo relative ">
      <div className="w-full h-full flex flex-col py-10 gap-7 md:flex-row md:justify-between md:items-center">
        <div className="relative md:w-[45%] ">
          <div className="w-[70%] lg:w-[80%] h-[300px] lg:h-[450px] md:w-[90%]  xs:h-[350px] 2xs:h-[400px] bg-yellow-primary rounded-tr-[30px] rounded-br-[30px]">
            <div className="w-[70%] md:w-full lg:w-[70%] h-[240px] lg:h-[400px] xs:h-[300px] 2xs:h-[350px] absolute top-8 lg:top-5 lg:left-40 left-10  rounded-[20px] drop-shadow-xl">
              <img
                className="w-full h-full object-cover rounded-[20px] drop-shadow-xl"
                src={aboutus}
                alt="workers"
              />
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col gap-3 md:w-[45%] md:text-left lg:items-start ">
          <h3 className="text-green-primary uppercase font-black text-3xl lg:text-4xl lg:w-[70%] lg:leading-[40px]">
            qualifiés, passionnés et professionnels
          </h3>
          <p className="lg:text-xl lg:w-[60%]">
            Guirri-bat, c{"'"}est la garantie d{"'"}un travail soigné, rapide et
            efficace, réalisé par une équipe de professionnels qualifiés et
            passionnés. N{"'"}attendez plus, confiez-nous vos travaux de
            démolition, rénovation et terrassement !
          </p>
        </div>
      </div>
      <div className="w-[90%] md:h-[120px] md:rounded-[50px] h-[300px] bg-white drop-shadow-2xl justify-center gap-[1%] mx-auto flex items-center   flex-wrap">
        <div
          className={`w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-l-[50px] flex items-center justify-center  flex-col gap-2 text-center `}
        >
          <h4 className="text-green-primary text-2xl font-bold">+10</h4>
          <h6>Ans dans L’Industrie</h6>
        </div>
        <Statistic title={"+100"} desc={"Bâtiment dans L’Algérie"} />
        <Statistic title={"+230"} desc={"Membre d’équipe"} />
        <div
          className={`w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-r-[50px] flex items-center justify-center  flex-col gap-2 text-center `}
        >
          <h4 className="text-green-primary text-2xl font-bold">+2000</h4>
          <h6>Capacité</h6>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
