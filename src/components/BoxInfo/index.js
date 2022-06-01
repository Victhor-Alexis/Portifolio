import React from 'react'
import CircleIcon from '../CircleIcon'
import { Container, IconsWrapper } from './styles'

const BoxInfo = ({title, children, right, left, style, links, linksDisplay}) => {
  return (
    <Container style={style} onClick={() => {}}>
      <h2><CircleIcon right={left}/>{title}<CircleIcon right={right}/></h2>
      <p>{children}</p>

      <IconsWrapper linksDisplay={linksDisplay}>
        <a href={links && links[0]} style={{display: linksDisplay && linksDisplay[0]}} target="_blank" rel="noreferrer">Acesse aqui</a>
        <a href={links && links[1]} style={{display: linksDisplay && linksDisplay[1]}} target="_blank" rel="noreferrer">Baixe o app</a>
        <a href={links && links[2]} style={{display: linksDisplay && linksDisplay[2]}} target="_blank" rel="noreferrer">Baixe o app (linux)</a>
        <a href={links && links[3]} style={{display: linksDisplay && linksDisplay[3]}} target="_blank" rel="noreferrer">Baixe o app (windows)</a>
        <a href={links && links[4]} style={{display: linksDisplay && linksDisplay[4]}} target="_blank" rel="noreferrer">git repo (frontend)</a>
        <a href={links && links[5]} style={{display: linksDisplay && linksDisplay[5]}} target="_blank" rel="noreferrer">git repo (backend)</a>
      </IconsWrapper>
    </Container>
  )
}

export default BoxInfo