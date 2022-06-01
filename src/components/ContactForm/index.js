import React from 'react'
import { Container } from './styles'

const ContactForm = () => {
  return (
    <Container>
      <h2>Contate-me via email</h2>

      <input type="email" placeholder="seu email..." required/>
      <input type="text" placeholder="seu nome..." required/>
      <textarea placeholder="sua mensagem..." required/>

      <input type="submit" value="Enviar"/>
    </Container>
  )
}

export default ContactForm