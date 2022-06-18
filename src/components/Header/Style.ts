import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  width: 100vw;
  height: 30vh;

`
export const ButtonGroup = styled.div<{direction?: string}>`
  display flex;
  flex-direction: ${(props)=>props.direction ?? 'row'} 
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 80vw;
`
