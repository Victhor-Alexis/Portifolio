import styled from 'styled-components'

export const Container = styled.div`
  height: 3.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: white;
  box-shadow: 1px 1px 1px 0.3px black;
  color: black;
  width: ${ props => props.width ? props.width : "auto" };
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  :hover {
    background-color: #202020;
    color: white;
    font-weight: bold;
    box-shadow: 1px 1px 1px 0.3px;
  }
`;