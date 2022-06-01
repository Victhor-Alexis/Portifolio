import React from 'react'
import ContactForm from '../../components/ContactForm'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import WppContact from '../../components/WppContact'
import { BoxesWrapper, ContactInfo, ContainerBottom, ContainerTop } from './styles'

const ContactPage = () => {
  return (
    <>
      <Header selectedLink={[0,0,0,2]}/>
      <ContainerTop>
        <BoxesWrapper>
          <ContactForm/>
          <WppContact style={{marginLeft: "9rem", marginTop: "10rem"}}/>
        </BoxesWrapper>

        <GreatCircle style={{marginTop: "6.5rem"}} width={350} color={"#6CD1DF"}/>
      </ContainerTop>

      <ContainerBottom>
        <ContactInfo>
          <h2>victhoralexis123@gmail.com</h2>
          <h2>+55 (61) 992516558</h2>
          <a href="https://github.com/Victhor-Alexis" target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/victhor-paiva-a78717223/" target="_blank" rel="noreferrer">Linkedin</a>
        </ContactInfo>
        
        <GreatCircle style={{}} width={285} color={"#62B1CA"}/>
      </ContainerBottom>
    </>
  )
}

export default ContactPage