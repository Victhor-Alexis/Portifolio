import React from 'react'
import { Container } from './styles'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rtkn81o', 'template_gb0mgxk', e.target, 'AGtWexjd6ZlTawPkN')
      .then((result) => {
          alert("Mensagem enviada com sucesso!");
      }, (error) => {
          alert(error.text);
      });
  };
  
  return (
    <Container onSubmit={sendEmail}>
      <h2>Contate-me via email</h2>

      <input type="email" name="email" placeholder="seu email..." required/>
      <input type="text" name="name" placeholder="seu nome..." required/>
      <textarea name="message" placeholder="sua mensagem..." required/>

      <input type="submit" value="Enviar"/>
    </Container>
  )
}

export default ContactForm