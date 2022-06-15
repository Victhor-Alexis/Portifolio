import styled from "styled-components";

export const Container = styled.div`
  width: 14rem;
  height: 2rem;
  margin-top: 0.5rem;

  display: none;

  @media screen and (max-width: 860px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${ props => props.right ? "end" : "start" };
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;