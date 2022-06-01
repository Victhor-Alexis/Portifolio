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
`;

export const ContainerTop = styled.div`
  display: flex;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 55rem;
  align-items: center;
  justify-content: space-around;
  margin-top: 2.5rem;
`;

export const ContactInfo = styled.div`
  width: 27rem;
  border-left: 4px solid #fff;
  height: 11.5rem;
  color: white;
  padding: 0 2%;

  h2 {
    margin: 0.9rem 0;
  }

  a {
    width: 100%;
    display: block;
    color: white;
    font-size: 21px;
    margin: 0.9rem 0;
  }
`;