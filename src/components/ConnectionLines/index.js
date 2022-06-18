import React from 'react'
import { Container } from './styles'

const ConnectionLines = () => {
  const userAgent = navigator.userAgent;
  let rightPoint = "M29 112 L230 33 M29 112 L230 288 M29 112 L58 300";

  if(userAgent.match(/firefox|fxios/i))
    rightPoint = "M29 112 L230 33 M29 112 L230 288 M29 112 L64 300";

  return (
    <Container>
      <svg width="256" height="320" fill="#555" xmlns="http://www.w3.org/2000/svg">
        <path d={rightPoint} stroke="#BBBBBB"/>
      </svg>
    </Container>
  )
}

export default ConnectionLines