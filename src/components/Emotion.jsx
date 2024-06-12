/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    padding: 10px;
    border: 2px solid blue;
    border-radius: 50px;
  `;
  const titleStyle = css({
    color: "#78909c",
    fontSize: "24px",
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!!!</SButton>
    </div>
  );
};

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
