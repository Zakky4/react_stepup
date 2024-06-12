import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Sytled Components -</STitle>
      <SButton>FIGHT!!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 50px;
`;

const STitle = styled.p`
  color: #78909c;
  font-size: 24px;
`;

const SButton = styled.button`
  background-color: #b2dfdb;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
