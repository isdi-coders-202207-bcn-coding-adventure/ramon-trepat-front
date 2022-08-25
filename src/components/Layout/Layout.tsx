import { useEffect, useState } from "react";
import getTimeRemaining from "../../utils/getTimeRemaining";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

interface LayoutProps {
  deathDate: Date;
}

const Layout = ({ deathDate }: LayoutProps): JSX.Element => {
  const initialTime = {
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [time, timeSet] = useState(initialTime);

  useEffect(() => {
    timeSet(getTimeRemaining(deathDate));

    setInterval(() => {
      timeSet(getTimeRemaining(deathDate));
    }, 1000);
  }, [deathDate]);

  return (
    <LayoutStyled>
      <Header />
      <Counter
        day={time.days}
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
    </LayoutStyled>
  );
};

export default Layout;
