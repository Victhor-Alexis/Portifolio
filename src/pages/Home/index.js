import React from 'react'
import BoxInfo from '../../components/BoxInfo'
import CircleIcon from '../../components/CircleIcon'
import ConnectionLines from '../../components/ConnectionLines'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import { BoxesWrapper, ContainerBottom, ContainerTop } from './styles'

const Home = () => {
  return (
    <>
      <Header selectedLink={[2,0,0,0]}/>
      <ContainerTop>
        <BoxesWrapper>
          <ConnectionLines/>
          
          <h3>Serviços <CircleIcon style={{marginTop: "0.65rem", marginLeft: "1.5rem"}}/></h3>

          <BoxInfo title="Aplicativos móveis" right={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar ex vel mi iaculis egestas. Integer eget leo ligula. Cras laoreet dolor pretium lacus semper consectetur. Vivamus ut elit pellentesque, blanda mi dictum, luctus viverra velit imperdiet.
          </BoxInfo>
          <BoxInfo title="Aplicações para desktop" right={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar ex vel mi iaculis egestas. Integer eget leo ligula. Cras laoreet dolor pretium lacus semper consectetur. Vivamus ut elit pellentesque, blanda mi dictum, luctus viverra velit imperdiet.
          </BoxInfo>
          <BoxInfo title="Sites" right={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar ex vel mi iaculis egestas. Integer eget leo ligula. Cras laoreet dolor pretium lacus semper consectetur. Vivamus ut elit pellentesque, blanda mi dictum, luctus viverra velit imperdiet.
          </BoxInfo>
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

export default Home