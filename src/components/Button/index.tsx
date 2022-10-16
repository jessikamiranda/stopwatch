import { ButtonContainer, StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  handlePauseResume,
  handleReset,
  handleStart,
  isPaused,
  active,
}: ButtonProps) => {
  const StartButton = <StyledButton onClick={handleStart}>Start</StyledButton>;

  const ActiveButtons = (
    <ButtonContainer>
      <StyledButton onClick={handleReset}>Reset</StyledButton>
      <StyledButton onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </StyledButton>
    </ButtonContainer>
  );

  return <>{active ? ActiveButtons : StartButton}</>;
};

export default Button;
