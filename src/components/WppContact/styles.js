import styled from "styled-components";

export const Container = styled.div`
  width: 175px;
  height: 175px;
  background-color: #95E388;
  border-radius: 50%;
  cursor: pointer;
  border: 7px solid #28A456;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  :hover {
    background-color: #2FBA63;
  }
`;