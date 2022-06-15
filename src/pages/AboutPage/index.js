import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../components/Button'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import { BoxesWrapper, ContainerBottom, ContainerTop } from './styles'

const AboutPage = () => {
  const navigate = useNavigate()

  let [textDisplay, setTextDisplay] = useState(["block", "none"])
  let [buttonDisplay, setButtonDisplay] = useState(["flex", "none"])

  const ChangeTextDisplay = () => {
    if(textDisplay[0] === "block") {
      setTextDisplay(["none", "block"])
      setButtonDisplay(["none", "flex"])
    }
    else {
      setTextDisplay(["block", "none"])
      setButtonDisplay(["flex", "none"])
    }
  }

  return (
    <>
      <Header selectedLink={[0,2,0,0]}/>
      <ContainerTop>
        <BoxesWrapper>
          <h2 style={{display: textDisplay[0]}}>
            Sou <span>Victhor Alexis</span>, desenvolvedor em contato com programação desde 2019
            quando ingressei na UnB no curso de Engenharia da computação.
          </h2>

          <h3 style={{display: textDisplay[1]}}>
            Sou pragmático, rápido e eficiente, sem perder o bom gosto, como se pode 
            observar com o design simples e clean deste site. Tenho conhecimentos a 
            respeito de todo o processo relacionado ao desenvolvimento de projetos web, 
            aplicativos, aplicações para desktop, desde o levantamento de requisitos, 
            prototipação, modelagem do banco de dados até o deploy do sistema final.
          </h3>
          
          <Button onClick={() => ChangeTextDisplay()} style={{display: buttonDisplay[0]}} width={"40%"}>Por que sou a escolha certa?</Button>
          <Button onClick={() => navigate('/projects')} style={{display: buttonDisplay[1]}} width={"40%"}>Take a look at my projects</Button>
        </BoxesWrapper>

        <GreatCircle style={{marginTop: "8rem", marginLeft: "-3.1rem"}} width={350} color={"#6CD1DF"}/>
      </ContainerTop>

      <ContainerBottom>
        <GreatCircle style={{}} width={210} color={"#43A0BD"}/>
        <GreatCircle style={{}} width={285} color={"#62B1CA"}/>
      </ContainerBottom>
    </>
  )
}

export default AboutPage