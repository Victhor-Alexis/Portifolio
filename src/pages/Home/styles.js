import styled from "styled-components";

export const BoxesWrapper = styled.div`
  @keyframes showContent {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: showContent;
  animation-duration: 2.5s;

  width: 55rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  margin-top: 2rem;
  position: relative;

  h3:first-of-type {
    width: 25rem;
    height: 14.5rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 46px;
    color: white;

    @media screen and (max-width: 860px) {
      height: 3rem;
      margin-top: 3rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 860px) {
    justify-content: center;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 55rem;
  align-items: center;
  justify-content: space-around;
`;