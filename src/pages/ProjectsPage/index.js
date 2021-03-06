import React from 'react'
import BoxInfo from '../../components/BoxInfo'
import GreatCircle from '../../components/GreatCircle'
import Header from '../../components/Header'
import { BoxesWrapper, ContainerBottom, ContainerTop } from './styles'

const ProjectsPage = () => {
  return (
    <>
      <Header selectedLink={[0,0,2,0]}/>
      <ContainerTop>
        <BoxesWrapper>
          <BoxInfo style={{height: "18rem"}} links={["https://waelevadores.com.br/"]} linksDisplay={["block", "none", "none", "none", "none", "none", "none"]} title="Wa Montagem de Elevadores" right={false} left={false}>
            Landing page com formulário de contato desenvolvido para a empresa Wa Montagem de Elevadores.
          </BoxInfo>
          <BoxInfo style={{height: "18rem"}} links={["https://oyster-app-waicl.ondigitalocean.app/", "", "", "", "", "https://github.com/Victhor-Alexis/Projeto_Struct_FrontEnd.git", "https://github.com/EmanuelFirmino/Projeto_Struct_Backend"]} linksDisplay={["block", "none", "none", "none", "none", "block", "block"]} title="Sistema completo de gestão de um restaurante, com controle de estoque" right={false} left={false}>
            Projeto final  desenvolvido em grupo do programa de trainee da empresa júnior de engenharia da computação Struct - Soluções Web
          </BoxInfo>
          {/*<BoxInfo links={["https://waelevadores.com.br/", "https://waelevadores.com.br/", "https://waelevadores.com.br/"]} linksDisplay={["block", "block", "block", "none", "none", "none"]} title="Web Chat em tempo real" right={false} left={false}>
            Ferramenta desenvolvida para mostrar que possuo conhecimento sobre sockets e que consigo criar aplicações com modificações que ocorrem em tempo real para simultâneos dispositivos.
          </BoxInfo>
          <BoxInfo links={[null, "https://waelevadores.com.br/", "https://waelevadores.com.br/", "https://waelevadores.com.br/"]} linksDisplay={["none", "block", "block", "block", "none", "none"]} style={{}} title="App deste portifolio." right={false} left={false}>
            Acesse este portifólio também pelo app; projeto feito para demonstrar que possuo facilidade na adaptação de projetos web para mobile.
          </BoxInfo>
          <BoxInfo style={{}} title="App de geração e leitura de qrcodes" right={false} left={false}>
            Com a utilização de bilbiotecas do react native, através do aplicativo é possível tanto ler como gerar qrcodes e salvá-los na memória local do celular. 
          </BoxInfo>
            */
          }
          <BoxInfo style={{height: "19rem"}} links={["https://walrus-app-lu9jt.ondigitalocean.app/", "", "", "", "", "https://github.com/Victhor-Alexis/Numbers-Memory-Game", ""]} linksDisplay={["block", "none", "none", "none", "none", "block", "none"]} title="Jogo da memória com números" right={false} left={false}>
            Aplicação que foi baseada no procedimento realizado em um estudo na Carnegie Mellon University em 1980 performado por Ericsson, Chase and Feloon, para verificar se alguém com uma memória comum, através de treino, pode desenvolver uma memória capaz de decorar grandes sequências de números em intervalos de poucos segundos.
          </BoxInfo>
          <BoxInfo style={{height: "19rem"}} links={["", "", "", "", "https://youtu.be/DP0-jfHLC9c", "", "https://youtu.be/DP0-jfHLC9c"]} linksDisplay={["none", "none", "none", "none", "block", "none", "none"]} title="App de gestão e controle de dados" right={false} left={false}>
            App e sistema completo de gestão de dados para a secretaria de ministerio eclesiástico. Aplicativo feito para ser utilizado na resolução de problema real relacionado a organização de dados.
          </BoxInfo>
          {/*<BoxInfo style={{}} title="Sistema de recomendação de músicas" right={false} left={false}>
            Trabalho final de uma disciplina na faculdade: Métodos de Programação. O projeto foi feito com TDD, programação orientada a testes, e foram utilizadas as metodologias ágeis Scrum e Kanban. A recomendação da música é feita com base no interesse de outros usuários que acessam o sistema.
          </BoxInfo>*/}
          <BoxInfo style={{height: "25rem"}} links={["", "", "", "", "https://youtu.be/YoeTkql1C98", "", "https://github.com/Victhor-Alexis/Trabalho_final_ED.git"]} linksDisplay={["none", "none", "none", "none", "block", "none", "block"]} title="Sistema de gestão de turmas e alunos da universidade" right={false} left={false}>
            O projeto não tem interface e foi feito em linguagem C. Contudo, para a construção deste sistema, foram usadas estruturas de dados, pilhas, filas e listas duplamente encadeadas, construídas sem a utilização de bibliotecas que trazem as estruturas prontas, de forma que eu tive que usar ponteiros, ponteiros de ponteiros, alocação dinâmica, structs, ou seja, conceitos mais avançados em programação que me tornaram apto para aprender demais outros conceitos relacionados ao desenvolvimento de software com mais facilidade.
          </BoxInfo>
        </BoxesWrapper>
        <div className="circle">
          <GreatCircle style={{marginTop: "8rem"}} width={350} color={"#6CD1DF"}/>
        </div>
      </ContainerTop>

      <ContainerBottom>
        <GreatCircle style={{}} width={210} color={"#43A0BD"}/>
        <GreatCircle style={{}} width={285} color={"#62B1CA"}/>
      </ContainerBottom>
    </>
  )
}

export default ProjectsPage