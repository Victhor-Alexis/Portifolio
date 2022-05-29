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
