import React from 'react'
import { Container } from './styles'

const ContactForm = () => {
  return (
    <Container>
      <h2>Contate-me via email</h2>

      <input type="email" name="email" placeholder="seu email..." required/>
      <input type="text" name="name" placeholder="seu nome..." required/>
      <textarea name="message" placeholder="sua mensagem..." required/>

      <input type="submit" value="Enviar"/>
    </Container>
  )
}

export default ContactForm