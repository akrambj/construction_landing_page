const Statistic = ({ title, desc }) => {
  return (
    <div
      className={`w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center `}
    >
      <h4 className="text-green-primary text-2xl font-bold">{title}</h4>
      <h6>{desc}</h6>
    </div>
  );
};

export default Statistic;
