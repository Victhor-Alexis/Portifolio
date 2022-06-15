import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.75rem;
  background-color: #202020;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  color: white;
  width: 17rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-size: 30px;
    margin-top: -0.25rem;
  }

  @media screen and (max-width: 380px) {
    width: 15rem;
    
    h2 {
      font-size: 26px;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  width: 25rem;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  a {
    font-size: 17px;
    text-decoration: none;
    color: white;
    transition: 0.05s;
    font-weight: bold;

    :hover {
      border-bottom: 2px solid #fff;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    margin-top: 0.35rem;
    z-index: 999;
  }
`;

export const IconMenu = styled.div`
  width: 42px;
  height: 37px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;

  div {
    transition: 0.6s;
    background-color: white;
    width: 100%;
    height: 4px;

    :nth-of-type(2) {
      width: 55%;
    }

    :nth-of-type(3) {
      width: 75%;
    }
  }

  :hover {
    div {
      :nth-of-type(2) {
        width: 100%;
      }

      :nth-of-type(3) {
        width: 100%;
      }
    }
  }
`;

export const Close = styled.div`
  text-align: right;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const Sidebar = styled.div`
  padding: 1rem 0;
  width: 40%;
  min-width: 19rem;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #00CDFF;
  transition: 0.5s;
  box-shadow: 1px 1px 5px 1px #000;

  a {
    width: 100%;
    display: block;
    text-align: center;
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 1rem;
    transition: 0.4s;
    font-weight: bold;

    :hover {
      background-color: #3B8698;
    }
  }
`;