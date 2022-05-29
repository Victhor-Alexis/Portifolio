import React from 'react'
import { Container } from './styles'

const Button = ({style, onClick, children, width}) => {
  return (
    <Container style={style} width={width} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button