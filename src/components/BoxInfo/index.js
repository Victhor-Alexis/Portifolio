import React from 'react'
import { Container } from './styles'

const BoxInfo = ({title, children}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  )
}

export default BoxInfo