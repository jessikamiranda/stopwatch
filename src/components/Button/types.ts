import { MouseEventHandler } from "react";

export type ButtonProps = {
  active: boolean;
  isPaused: boolean;

  handleReset: MouseEventHandler<HTMLButtonElement> | undefined;
  handleStart: MouseEventHandler<HTMLButtonElement> | undefined;
  handlePauseResume: MouseEventHandler<HTMLButtonElement> | undefined;
};
