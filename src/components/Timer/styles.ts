import styled from "styled-components";

export const TimerContainer = styled.div`
  span {
    width: 70%;
    text-align: center;
    font-weight: 500;
    font-size: 65px;
    user-select: none;
  }

  .mili-sec {
    font-size: 30px;
  }

  @media only screen and (min-width: 375px) and (max-width: 510px) {
    span {
      font-size: 40px;
    }
    .mili-sec {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 375px) {
    span {
      font-size: 35px;
    }
    .mili-sec {
      font-size: 20px;
    }
  }
`;
