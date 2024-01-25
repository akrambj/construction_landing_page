import { useEffect, useState } from "react";

const AnimatedNumber = ({ finalValue, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 1;
          return nextCount <= finalValue ? nextCount : prevCount;
        });
      }, 30);
    }

    return () => clearInterval(interval);
  }, [isVisible, finalValue]);

  return <span>+{count}</span>;
};

export default AnimatedNumber;
