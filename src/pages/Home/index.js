import React from 'react'
import BoxInfo from '../../components/BoxInfo'
import CircleIcon from '../../components/CircleIcon'
import ConnectionLines from '../../components/ConnectionLines'
import Header from '../../components/Header'
import { BoxesWrapper } from './styles'

const Home = () => {
  return (
    <>
      <Header/>
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
    </>
  )
}

export default Home