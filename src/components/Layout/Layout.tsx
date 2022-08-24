import { useEffect, useState } from "react";
import styled from "styled-components";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const getTimeRemaining = (deathDate: string) => {
  const total = Date.parse(deathDate) - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

interface LayoutProps {
  deathDate: string;
}

const Layout = ({ deathDate }: LayoutProps): JSX.Element => {
  const inicialTime = {
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [time, timeSet] = useState(inicialTime);

  useEffect(() => {
    setInterval(() => {
      timeSet(getTimeRemaining(deathDate));
    }, 1000);
  }, [deathDate]);

  return (
    <StyledContainer>
      <Header />
      <Counter
        day={time.days}
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
    </StyledContainer>
  );
};

export default Layout;
