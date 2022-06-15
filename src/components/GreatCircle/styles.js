import styled from 'styled-components'

export const BiggerCircle = styled.div`
  border-radius: 50%;
  width: ${props => props.width ? props.width + "px" : '0'};
  height: ${props => props.width ? props.width + "px" : '0'};
  border: ${props => props.color ? `1px solid ${props.color}` : "none"};
  position: relative;
  transition: 0.3s;

  :hover {
    border: ${props => props.color ? `4px solid ${props.color}` : "none"};
  }

  @media screen and (max-width: 1270px) {
    display: none;
  }
`;

export const SmallerCircle = styled.div`
  border-radius: 50%;
  width: ${props => props.width ? props.width + "px": '0'};
  height: ${props => props.width ? props.width + "px": '0'};
  border: ${props => props.color ? `1px solid ${props.color}` : "none"};
  transform: translate(-50%,-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s;
  animation-timing-function: linear;

  :hover {
    border: ${props => props.color ? `6px solid ${props.color}` : "none"};
  }
`;