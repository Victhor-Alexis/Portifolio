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
  margin-top: 2rem;
  position: relative;

  h2 {
    font-size: 36px;
    color: white;
    width: 42rem;
    margin-top: 6.5rem;
    font-weight: normal;

    @media screen and (max-width: 1270px) {
      margin-bottom: 3rem;
    }

    span {
      font-weight: bold;
    }
  }

  h3 {
    font-size: 28px;
    color: white;
    width: 38rem;
    margin-top: 1.5rem;
    font-weight: normal;
    text-align: justify;
    letter-spacing: -1px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 1.5rem 0;
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 840px) {
    justify-content: center;

    h2 {
      font-size: 32px;
      text-align: center;
    }
  }

  @media screen and (max-width: 680px) {
    justify-content: center;

    h2 {
      width: 90%;
    }

    h3 {
      width: 90%;
      text-align: left;
    }
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  margin-left: 5.1rem;
  justify-content: space-between;

  .circle {
    margin-right: 3rem;

    @media screen and (min-width: 1400px) {
      margin-right: 10rem;
    }

    @media screen and (min-width: 1680px) {
      margin-right: 18rem;
    }

    @media screen and (min-width: 1920px) {
      margin-right: 25rem;
    }
  }

  @media screen and (max-width: 840px) {
    margin-bottom: 10rem;
    margin-left: 0;
  }

  @media screen and (max-width: 665px) {
    margin-bottom: 10rem;
    margin-left: 2.5rem;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 55rem;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5rem;
`;