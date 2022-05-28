import React from 'react'
import { BiggerCircle, SmallerCircle } from './styles'

const GreatCircle = ({width, color, style}) => {

  return (
    <BiggerCircle style={style} width={width} color={color}>
      <SmallerCircle width={width/2} color={color}/>
    </BiggerCircle>
  )
}

export default GreatCircle