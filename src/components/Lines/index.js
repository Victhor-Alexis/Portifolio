import React from 'react'
import { Container, Line } from './styles'

const Lines = ({style, right}) => {
  return (
    <Container style={style} right={right}>
      <Line/>
      <Line style={{width: "50%"}}/>
    </Container>
  )
}

export default Lines