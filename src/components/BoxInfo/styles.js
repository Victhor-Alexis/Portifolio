import styled from 'styled-components'
import tomorrow from '../../assets/tomorrow_font/Tomorrow-Regular.ttf'

export const Container = styled.div`
  @font-face {
    font-family: 'Tomorrow-Regular';
    src: url(${tomorrow}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  transition: 0.5s;

  :hover {
    background-color: ${ props => props.hover ? "#020202" : "transparent"};
  }

  width: 25rem;
  height: 14.5rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 2px 1px #D9D9D9;
  padding: 1rem 2.5rem;
  color: white;
  margin: 1rem;
  
  h2 {
    font-size: 21px;
    display: flex;
    align-items: center;
  }

  p {
    text-align: justify;
    margin-top: 1rem;
    font-size: 15px;
    font-family: 'Tomorrow-Regular';
    letter-spacing: -0.7px;
  }
`;

export const IconsWrapper = styled.div`
  display: ${ props => props.linksDisplay ? "flex" : "none"};
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    font-size: 14px;
  }
`;