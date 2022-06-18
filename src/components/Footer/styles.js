import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  
  h2 {
    font-size: 14px;
    color: white;
    margin-left: 1rem;
    font-weight: normal;
  }

  svg {
    margin-top: -12rem;
  }

  @media screen and (max-width: 1270px) {
    margin-top: 18rem;
  }

  @media screen and (max-width: 840px) {
    margin-top: 5rem;
    padding-bottom: 4.75rem;
    justify-content: center;
    flex-wrap: wrap;
    
    h2 {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      text-align: center;
      margin: 0;
      margin-bottom: 0.5rem;
    }

    svg {
      display: none;
    }
  }

  @media screen and (min-height: 990px) {
    margin-top: 6rem;
  }

  @media screen and (min-height: 1050px) {
    margin-top: 12rem;
  }

  @media screen and (min-height: 1150px) {
    margin-top: 16rem;
  }

  @media screen and (min-height: 1200px) {
    margin-top: 23rem;
  }

  @media screen and (min-height: 1320px) {
    margin-top: 30rem;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  right: 6.5rem;
  .icon {
    color: #18343b;
    margin: 0 0.4rem;
    cursor: pointer;
  }
`;

