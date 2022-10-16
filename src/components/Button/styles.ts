import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  padding: 16px 32px;

  outline: none;
  border: none;

  width: 160px;
  height: 52px;

  background: #1f243e;
  box-shadow: -5px -5px 10px rgba(111, 117, 151, 0.1), 10px 10px 10px #191d32,
    inset -5px -5px 10px rgba(111, 117, 151, 0.1), inset 10px 10px 10px #191d32;
  border-radius: 71px;

  font-family: "Bai Jamjuree";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #c9cee6;

  cursor: pointer;

  :hover {
    background: #671fff;
    box-shadow: 10px 10px 10px #191d32, inset 10px 10px 10px #915eff,
      inset -5px -5px 10px #4015b7;
  }

  :active {
    transition: all ease-in-out 0.1s;
    background: #671fff;
    box-shadow: 10px 10px 10px #191d32, inset 10px 10px 10px #4015b7,
      inset -5px -5px 10px #915eff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
