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

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <Counter />
    </StyledContainer>
  );
};

export default Layout;
