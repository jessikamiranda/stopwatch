import styled, { css } from "styled-components";
import { Teste } from "./types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const ClockContainer = styled.div`
  position: relative;
`;

export const Border = styled.div<Teste>`
  position: absolute;
  width: 431px;
  height: 431px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  background: linear-gradient(
    129.76deg,
    rgba(216, 167, 255, 0) 12.97%,
    rgba(161, 107, 255, 0.66) 89.62%
  );

  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  ${({ isActive, isPaused }) =>
    isActive &&
    isPaused === false &&
    css`
      animation: loading 3s linear infinite;
    `}
`;

export const Shadow = styled.div`
  position: absolute;
  width: 431px;
  height: 431px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  background: #1f243e;
  filter: drop-shadow(-10px -23px 30px rgba(111, 117, 151, 0.1))
    drop-shadow(15px 30px 30px #191d32);
`;

export const Clock = styled.div`
  position: relative;
  top: 2px;
  left: 2px;
  width: 427px;
  height: 427px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  background: #1f243e;
  box-shadow: inset -8px -8px 30px rgba(111, 117, 151, 0.1),
    inset 15px 30px 30px #191d32;
`;
