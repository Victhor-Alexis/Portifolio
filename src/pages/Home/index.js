import React from 'react'
import BoxInfo from '../../components/BoxInfo'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
      <Header/>
      <BoxInfo title="Aplicativos móveis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar ex vel mi iaculis egestas. Integer eget leo ligula. Cras laoreet dolor pretium lacus semper consectetur. Vivamus ut elit pellentesque, blanda mi dictum, luctus viverra velit imperdiet.
      </BoxInfo>
      <BoxInfo title="Aplicações para desktop">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar ex vel mi iaculis egestas. Integer eget leo ligula. Cras laoreet dolor pretium lacus semper consectetur. Vivamus ut elit pellentesque, blanda mi dictum, luctus viverra velit imperdiet.
      </BoxInfo>
      <BoxInfo title="Sites">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar ex vel mi iaculis egestas. Integer eget leo ligula. Cras laoreet dolor pretium lacus semper consectetur. Vivamus ut elit pellentesque, blanda mi dictum, luctus viverra velit imperdiet.
      </BoxInfo>
    </>
  )
}

export default Home