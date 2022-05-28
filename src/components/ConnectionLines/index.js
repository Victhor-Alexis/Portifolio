import React from 'react'
import { Container } from './styles'

const ConnectionLines = () => {
  return (
    <Container>
      <svg width="256" height="320" fill="#555" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 112 L230 34 M29 112 L230 300 M29 112 L37 300" stroke="#BBBBBB"/>
      </svg>
    </Container>
  )
}

export default ConnectionLines