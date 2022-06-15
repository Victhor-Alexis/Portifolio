import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 300px;
  top: 25px;
  height: 20rem;
  width: 16rem;

  @keyframes drawLines {
    from {
      height: 7rem;
      width: 2rem;
    }
    to {
      height: 20rem;
      width: 16rem;
    }
  }

  svg {
    animation-delay: 0.4s;
    animation-name: drawLines;
    animation-duration: 3.5s;
  }

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const Line = styled.div`
  background-color: black;
  width: 220px;
  height: 1px;
  transform: rotate(-21deg);
  position: relative;
  top: -40px;
  left: -10px;
`;