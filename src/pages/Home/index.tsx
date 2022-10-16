import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import Timer from "../../components/Timer";

import {
  Container,
  ButtonContainer,
  ClockContainer,
  Border,
  Clock,
  Shadow,
} from "./styles";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval: number | null | undefined;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(Number(interval));
    }
    return () => {
      clearInterval(Number(interval));
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Container>
      <ClockContainer>
        <Shadow />
        <Border isActive={isActive} isPaused={isPaused} />
        <Clock>
          <Timer time={time} />
        </Clock>
      </ClockContainer>

      <ButtonContainer>
        <Button
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Home;
