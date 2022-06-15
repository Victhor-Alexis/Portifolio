import React from 'react'
import { Container, IconsWrapper} from './styles'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Lines from '../Lines';

const Footer = () => {

  return (
    <Container>
      <h2>By Victhor Alexis</h2>
      <Lines right/>
      <svg width="419" height="234" viewBox="0 0 419 234" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M123 235.5C133.5 67 396 42.9999 417 235.5H123Z" stroke="#7BCCE5"/>
        <path d="M0.5 234C42.5 29.5 252.5 -66 418.5 52.0002" stroke="#7BCCE5"/>
      </svg>

      <IconsWrapper>
        <a href="https://github.com/Victhor-Alexis" target="_blank" rel="noreferrer">
          <FaGithubSquare className="icon" size={32}/>
        </a>
        <a href="https://www.linkedin.com/in/victhor-paiva-a78717223/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" size={32}/>
        </a>
      </IconsWrapper>
    </Container>
  )
}

export default Footer