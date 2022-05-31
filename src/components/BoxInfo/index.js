import React from 'react'
import CircleIcon from '../CircleIcon'
import { Container } from './styles'

const BoxInfo = ({title, children, right, left, style, onClick, hover}) => {
  return (
    <Container style={style} onClick={onClick} hover={hover}>
      <h2><CircleIcon right={left}/>{title}<CircleIcon right={right}/></h2>
      <p>{children}</p>
    </Container>
  )
}

export default BoxInfo