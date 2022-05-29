import React from 'react'
import Button from '../../components/Button'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import { BoxesWrapper, ContainerBottom, ContainerTop } from './styles'

const AboutPage = () => {
  return (
    <>
      <Header selectedLink={[0,2,0,0]}/>
      <ContainerTop>
        <BoxesWrapper>
          <h2>
            Sou <span>Victhor Alexis</span>, desenvolvedor em contato com programação desde 2019
            quando ingressei na UnB no curso de Engenharia da computação.
          </h2>
          
          <Button style={{marginLeft: "5.1rem"}} width={"40%"}>Por que sou a escolha certa?</Button>
        </BoxesWrapper>

        <GreatCircle style={{marginTop: "8rem", marginLeft: "2rem"}} width={350} color={"#6CD1DF"}/>
      </ContainerTop>

      <ContainerBottom>
        <GreatCircle style={{}} width={210} color={"#43A0BD"}/>
        <GreatCircle style={{}} width={285} color={"#62B1CA"}/>
      </ContainerBottom>
    </>
  )
}

export default AboutPage