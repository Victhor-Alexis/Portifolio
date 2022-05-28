import React from 'react'
import CircleIcon from '../CircleIcon'
import { Container } from './styles'

const BoxInfo = ({title, children, right}) => {
  return (
    <Container>
      <h2><CircleIcon right={!right}/>{title}<CircleIcon right={right}/></h2>
      <p>{children}</p>
    </Container>
  )
}

export default BoxInfo