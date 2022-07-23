import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  max-width: 69rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  spacing: 1rem;
  font-family: "sans-serif";
`;

const App = () => {
  return (
    <Wrapper>
      <Title> Hello There</Title>
    </Wrapper>
  );
};

export default App;
