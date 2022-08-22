const Counter = () => {
  return (
    <>
      <ul className="numbers">
        <li className="number">
          <span className="number__digit">02</span>
          <span className="number__title">days</span>
        </li>
        <li className="number">
          <span className="number__digit">20</span>
          <span className="number__title">hours</span>
        </li>
        <li className="number">
          <span className="number__digit">34</span>
          <span className="number__title">minutes</span>
        </li>
        <li className="number">
          <span className="number__digit">09</span>
          <span className="number__title">seconds</span>
        </li>
      </ul>
    </>
  );
};

export default Counter;
