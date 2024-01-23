const Statistic = ({ title, desc, sideY, sideX }) => {
  const borderRadiusClass = `rounded-${sideY}${sideX}-md`;

  console.log("x", sideX, "y", sideY);

  return (
    <div
      className={`w-[45%] h-[45%] bg-[#F7F7F7] flex items-center justify-center  flex-col gap-2 text-center ${borderRadiusClass}`}
    >
      <h4 className="text-green-primary text-2xl font-bold">{title}</h4>
      <h6>{desc}</h6>
    </div>
  );
};

export default Statistic;
