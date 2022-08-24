import CounterStyled from "./CounterStyled";
import "@fontsource/oxanium";

interface CounterProps {
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = ({
  day,
  hours,
  minutes,
  seconds,
}: CounterProps): JSX.Element => {
  return (
    <>
      <CounterStyled className="counters">
        <li className="counter">
          <span className="counter__digit">{day}</span>
          <span className="counter__title">days</span>
        </li>
        <li className="counter">
          <span className="counter__digit">{hours}</span>
          <span className="counter__title">hours</span>
        </li>
        <li className="counter">
          <span className="counter__digit">{minutes}</span>
          <span className="counter__title">minutes</span>
        </li>
        <li className="counter">
          <span className="counter__digit">{seconds}</span>
          <span className="counter__title">seconds</span>
        </li>
      </CounterStyled>
    </>
  );
};

export default Counter;
