import React from 'react'
import BoxInfo from '../../components/BoxInfo'
import CircleIcon from '../../components/CircleIcon'
import ConnectionLines from '../../components/ConnectionLines'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import Lines from '../../components/Lines'
import { BoxesWrapper, ContainerBottom, ContainerTop } from './styles'

const Home = () => {
  return (
    <>
      <Header selectedLink={[2,0,0,0]}/>
      <ContainerTop>
        <BoxesWrapper>
          <ConnectionLines/>
          
          <h3>Serviços <CircleIcon style={{marginTop: "0.65rem", marginLeft: "1.5rem"}}/></h3>
          <Lines style={{marginBottom: "2rem", marginLeft: "10%", marginRight: "10%"}}/>

          <BoxInfo title="Desenvolvimento frontend" right={false}>
            Criação de aplicações responsivas, com o desenvolvimento de telas pensado em interações facilitadas e intuitivas por parte do usuário. Capacidade de criação de interfaces com dinamicidade e animações utilizando tecnologias como react, javascript, html, css.
          </BoxInfo>
          <BoxInfo title="Desenvolvimento backend" right={true} left={false}>
            Produção de API's com implementação que facilita interoperabilidade de várias interfaces diferentes (sites, aplicativos) seguindo o estilo arquitetural REST. Utilização de padrão de arquitetura de software que contribui na otimização da velocidade entre as requisições feitas pelo usuário ao servidor (padrão MVC).
          </BoxInfo>
          <BoxInfo title="Desenvolvimento mobile" right={false}>
            Experiência no desenvolvimento de aplicações nativas para iOS e Android utilizando React Native e a ferramenta Expo. Utilização de biblioteca de armazenamento asíncrono que simula os cookies em web apps para criação de sistema de sessões de login (Async Storage). Manipulação, leitura e escrita de pdfs com expo-print e expo-sharing, entre outros conhecimentos.
          </BoxInfo>
        </BoxesWrapper>

        <div className="circle">
          <GreatCircle className="topCircle" style={{marginTop: "8rem"}} width={350} color={"#6CD1DF"}/>
        </div>
      </ContainerTop>

      <ContainerBottom>
        <GreatCircle style={{}} width={210} color={"#43A0BD"}/>
        <GreatCircle style={{}} width={285} color={"#62B1CA"}/>
      </ContainerBottom>
    </>
  )
}

export default Home