import styled from "styled-components";

const CounterStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  background-color: #243342;
  font-family: "Oxanium";

  .counter {
    display: flex;
    flex-direction: column;
    text-align: center;

    &__digit {
      background-color: #ffc700;
      border-radius: 10px;
      padding: 20px;
      margin: 2px 10px;
      font-size: 40px;
      color: #243342;
    }

    &__title {
      font-size: 18px;
      color: #ecf0f1;
    }
  }
`;

export default CounterStyled;
