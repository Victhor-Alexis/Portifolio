import React from 'react'
import ContactForm from '../../components/ContactForm'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import { BoxesWrapper, ContainerBottom, ContainerTop } from './styles'

const ContactPage = () => {
  return (
    <>
      <Header selectedLink={[0,0,0,2]}/>
      <ContainerTop>
        <BoxesWrapper>
          <ContactForm/>
        </BoxesWrapper>

        <GreatCircle style={{marginTop: "5.5rem", marginLeft: "2rem"}} width={350} color={"#6CD1DF"}/>
      </ContainerTop>

      <ContainerBottom>
        <GreatCircle style={{}} width={210} color={"#43A0BD"}/>
        <GreatCircle style={{}} width={285} color={"#62B1CA"}/>
      </ContainerBottom>
    </>
  )
}

export default ContactPage