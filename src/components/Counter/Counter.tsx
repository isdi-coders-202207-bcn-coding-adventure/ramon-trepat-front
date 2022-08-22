import CounterStyled from "./CounterStyled";
import "@fontsource/oxanium";

const Counter = () => {
  return (
    <>
      <CounterStyled className="counters">
        <li className="counter">
          <span className="counter__digit">02</span>
          <span className="counter__title">days</span>
        </li>
        <li className="counter">
          <span className="counter__digit">20</span>
          <span className="counter__title">hours</span>
        </li>
        <li className="counter">
          <span className="counter__digit">34</span>
          <span className="counter__title">minutes</span>
        </li>
        <li className="counter">
          <span className="counter__digit">09</span>
          <span className="counter__title">seconds</span>
        </li>
      </CounterStyled>
    </>
  );
};

export default Counter;
