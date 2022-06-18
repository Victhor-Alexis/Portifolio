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
  justify-content: start;
  margin-top: 2rem;
  margin-left: 1.5rem;

  h3:first-of-type {
    width: 25rem;
    height: 14.5rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 46px;
    color: white;
  }

  @media screen and (max-width: 1270px) {
    justify-content: center;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;

  .circle {
    margin-right: 1.5rem;

    @media screen and (min-width: 1400px) {
      margin-right: 7rem;
    }

    @media screen and (min-width: 1580px) {
      margin-right: 14rem;
    }

    @media screen and (min-width: 1750px) {
      margin-right: 20rem;
    }
  }

  @media screen and (max-width: 1270px) {
    justify-content: center;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 55rem;
  align-items: center;
  justify-content: space-around;
`;