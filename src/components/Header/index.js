import React, { useState } from 'react'
import { Close, Container, IconMenu, Logo, Navbar, NavMobile, Sidebar } from './styles'
import LogoImage from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
  const [displayMobMenu, setDisplayMobMenu] = useState(["none", 0]);

  const show_hideMobMenu = (display) => {
    if (display[0] === "none") {
      setDisplayMobMenu(["block", 0])
      setTimeout(() => setDisplayMobMenu(["block", 1]), 1)
    } else {
      setDisplayMobMenu(["block", 0])
      setTimeout(() => setDisplayMobMenu(["none", 0]), 300)
    }
  }

  return (
    <Container>
      <Logo>
        <img src={LogoImage} alt="Logo" />
        <h2>TypingCode</h2>
      </Logo>

      <Navbar>
        <Link style={{borderBottom: "2px solid #fff"}} to="/">Home</Link>
        <Link to="projects">Projetos</Link>
        <Link to="about">Sobre</Link>
        <Link to="contact">Contato</Link>
      </Navbar>

      <NavMobile>
        <IconMenu onClick={() => show_hideMobMenu(displayMobMenu)}>
          <div/>
          <div/>
          <div/>
        </IconMenu>

        <Sidebar style={{ display: displayMobMenu[0], opacity: displayMobMenu[1] }}>
          <Close>
            <AiFillCloseCircle size={32} color="white" style={{cursor: "pointer"}} onClick={() => show_hideMobMenu(displayMobMenu)}/>
          </Close>
          
          <Link to="/">Home</Link>
          <Link to="projects">Projetos</Link>
          <Link to="about">Sobre</Link>
          <Link to="contact">Contato</Link>

        </Sidebar>
      </NavMobile>

    </Container>
  )
}

export default Header