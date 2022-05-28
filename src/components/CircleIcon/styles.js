import styled from 'styled-components'

export const Container = styled.div`
  width: 20px;
  height: 20px;
  background-color: #BBBBBB;
  border-radius: 10px;
  margin: 0 1rem;
  margin-top: 0.15rem;

  display: ${props => props.right === undefined ? "block" : (!!props.right ? "block" : "none")};
`;