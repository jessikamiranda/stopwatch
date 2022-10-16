import { TimerContainer } from "./styles";
import { TimerProps } from "./types";

const Timer = ({ time }: TimerProps) => {
  return (
    <TimerContainer>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      <span className="mili-sec">.{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </TimerContainer>
  );
};

export default Timer;
